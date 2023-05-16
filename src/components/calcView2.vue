<template>
    <div class="container-fluid d-flex justify-content-center align-items-center py-4">
        <slot-calc>
                <template v-slot:header>
                    <div>
                        <h2>Calculando el consumo energetico Anual <br> y potencia solar fotovoltaica</h2>
                    </div>
                </template>
            <article class=" d-flex flex-column align-items-center justify-content-center mt-4 text-colorPaleta3">
                <p>A continuacion debe ingresar el consumo anual en Kwh (kilowatt hora) de cada miembro de su agrupacion</p>
                <p>si es solo su familia indique el consumo anual de su hogar</p>
                <div class="d-flex flex-column flex-md-row align-items-center my-3">
                    <p class="m-1">¿como saber su consumo anual?</p>
                    <modal-boleta></modal-boleta>
                </div>
            </article>
            <div class="border border-secondary-subtle rounded w-70 w-md-50 p-3 my-4">
                <div v-for="n in transformNroUrl" :key="n" class="d-flex justify-content-center align-items-center my-1">
                    <label :for="'input-' + n" class="form-label me-2 text-colorPaleta3">Familia {{ n }}</label>
                    <input type="text" class="form-control input_text_item" :id="'input-' + n" v-model="familias[n-1]" placeholder="Kwh anual">
                </div>
                <div class="my-3 d-flex flex-column justify-content-center align-items-center">
                    <p class="m-0 text-colorPaleta3">Indica tu región</p>
                    <select id="disabledSelect" class="form-select input_select_item" v-model="regionSelecionada" @change="setFactorPlanta">
                        <option value="0" selected>Selecione opcion</option>
                        <option v-for="region in regionesDeChile" :key="region" :value="region">{{ region.nombre }}</option>
                    </select>
                </div>
            </div>
            <div v-if="stateMsg">
                <span class="text-danger">{{ error }}</span>
            </div>
            <template v-slot:footer>
                    <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="backPage">Atras</button>
                    <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="nextPage">Siguiente</button> 
            </template>
          </slot-calc>
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
        familias:[], //crea un array llamado familias de largo this.nroFamilias y vacio
        consumoAnual:0,
        factorPlanta: null,
        regionSelecionada:0 ,
        factorPlantaSeleccionado:null,
        stateMsg: false,
        error: '',
        };
    },
    computed:{
        ...mapState(['regionesDeChile']),
        //tranformar a numero el parametro por URL
        transformNroUrl(){
            return parseInt(this.$route.params.nro)
        }
    },
    methods:{
        ...mapMutations(['setConsumoAnual']),
        ...mapActions(['obtenerRegion']),
        ...mapMutations(['setPsf']),
        setFactorPlanta(){
            const {factorPlanta} = this.regionSelecionada; //destructuring requerido por la rubrica
            this.factorPlantaSeleccionado = parseFloat(factorPlanta);
        },
        nextPage(){
            //Validacion de campos// 
            //array method que retorna true si todos los elementos dentro cumplen la condicion
            const inputsValidos = this.familias.every((element) => {
                return element.trim() !== ''
            });
            //si los inputs estan vacios retorna error
            if (!inputsValidos || this.regionSelecionada == 0) {
                this.stateMsg = true;
                this.error =  'Todos los campos son obligatorios';
                return;

            }

            this.stateMsg = false;
            //calculo: suma de los consumos
            this.familias.forEach((element)=>{
                this.consumoAnual= this.consumoAnual + parseFloat(element);
            });

            this.setConsumoAnual(this.consumoAnual);
            //metodo calculo de nro de paneles
            this.calcularPSF();

            router.push({ name:'calcView3' });
        },
        backPage(){
            router.push({ name:'calcView1' });
        },
        calcularPSF(){
            console.log(`${this.consumoAnual}/(${this.factorPlantaSeleccionado} *365 *24)`);
            //Calculo potencia solar fotovoltaica (psv)
            const psf = this.consumoAnual/(this.factorPlantaSeleccionado*365*12);
            console.log(psf);
            //seteo de state global de psv
            this.setPsf(psf);
        }
    },
    created(){
        //Obtenemos las regiones del Json a traves del store
        this.obtenerRegion();
        // Inicializamos familias con la longitud esperada y elementos vacíos
        this.familias = Array.from({ length: this.nroFamilias }, () => ''); 
        console.log(this.nroFamilias);
    },
    mounted(){
        console.log(this.familias.length);
    }
}
</script>

<style scoped>
.input_text_item{
    width:40%;
}
.input_select_item{
    width:50%;
}
@media (max-width: 700px) {
    .input_text_item{
        width:60%;
    }
    .input_select_item{
        width:80%;
    }
}
</style>