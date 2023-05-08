<template>
    <div>
        <h1>hoja 2</h1>
        <article>
            <h2>Calculando el consumo energetico Anual <br> y potencia solar fotovoltaica</h2>
            <p>A continuacion debe ingresar el consumo anual en Kwh (kilowatt hora) de cada miembro de su agrupacion</p>
            <p>si es solo su familia indique el consumo anual de su hogar</p>
            <p>¿como saber su consumo anual?</p><modal-boleta></modal-boleta>
        </article>
        <div v-for="n in this.nroFamilias" :key="n" class="d-flex justify-content-center align-items-center">
            <label :for="'input-' + n" class="form-label me-2">Familia {{ n }}</label>
            <input type="text" class="form-control w-25" :id="'input-' + n" v-model="familias[n-1]" placeholder="Kwh anual">
        </div>

        <p>Indica tu región</p>
        <div class="mb-3 d-flex justify-content-center align-items-center">
            <select id="disabledSelect" class="form-select  w-25" v-model="regionSelecionada" @change="setFactorPlanta">
                <option>Selecione una region</option>
                <option v-for="region in regionesDeChile" :key="region" :value="region">{{ region.nombre }}</option>
            </select>
        </div>
        <button @click="backPage">atras</button>
        <button @click="nextPage">siguiente</button>  
    </div>
</template>

<script>
import router from '@/router';
import { mapState, mapActions, mapMutations } from 'vuex';
import modalBoleta from '../components/modalBoleta.vue';

export default{
    components:{
        modalBoleta
    },
    data() {
            return {
            familias: Array.from({ length: this.nroFamilias }, () => ''), //crea un array llamado familias de largo this.nroFamilias y vacio
            consumoAnual:0,
            factorPlanta: null,
            regionSelecionada:null ,
            factorPlantaSeleccionado:null
        };
    },
    computed:{
        ...mapState(['nroFamilias']),
        ...mapState(['regionesDeChile']),
    },
    methods:{
        ...mapActions(['obtenerRegion']),
        ...mapMutations(['setPsf']),
        setFactorPlanta(){
            console.log(parseFloat(this.regionSelecionada.factorPlanta));
            this.factorPlantaSeleccionado = parseFloat(this.regionSelecionada.factorPlanta);
        },
        nextPage(){
            this.familias.forEach((element)=>{
                this.consumoAnual= this.consumoAnual + parseFloat(element)
            })
            this.calcularPSF();
            router.push({ name:'calcView3' })
        },
        backPage(){
            router.push({ name:'calcView1' })
        },
        calcularPSF(){
            console.log(`${this.consumoAnual}/(${this.factorPlantaSeleccionado} *365 *24)`);
            //Calculo potencia solar fotovoltaica (psv)
            const psf = this.consumoAnual/(this.factorPlantaSeleccionado*365*24);
            console.log(psf)
            //seteo de state global de psv
            this.setPsf(psf);
        }
    },
    created(){
        //Obtenemos las regiones del Json a traves del store
        this.obtenerRegion();
    }
}
</script>