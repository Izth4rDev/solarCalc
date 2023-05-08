<template>
    <div>
        <h1>hoja 3</h1>
        <article>
            <h2>Determinando el espacio necesario</h2>
            <p>A continuacion debe indicar si instalará los paneles solares <br> en techo inclinado o a nivel del suelo</p>
        </article>
        <div class="d-flex  flex-column flex-md-row justify-content-center">
            <div>
                <img src="../assets/img/techoInclinado.webp" alt="" class="img-fluid m-5 tipoPanel">
                <div class="form-check d-flex flex-column align-items-center justify-content-center p-0">
                    <label class="form-check-label" for="panelTecho">
                        <p>Panel techo inclinado</p>
                    </label>
                    <input class="form-check-input" type="radio" name="panel" id="panelTecho" :value="6" v-model="selectedoption">
                </div>
            </div>
            <div>
                <img src="../assets/img/panelPiso.webp" alt="" class="img-fluid m-5 tipoPanel">
                <div class="form-check d-flex flex-column align-items-center justify-content-center p-0">
                    <label class="form-check-label" for="panelPiso">
                        <p>Panel de piso</p>
                    </label>
                    <input class="form-check-input" type="radio" name="panel" id="panelPiso" :value="8" v-model="selectedoption" checked>
                </div>
            </div>
        </div>
    </div>
    <p>{{ selectedoption }}</p>
    <button @click="backPage">Atras</button>
    <button @click="result">Terminar</button>
</template>

<script>
    import router from '@/router';
    import { mapMutations, mapState } from 'vuex';
    export default{
        data(){
            return{
                selectedoption: 8 //valor m2 dependiendo de panel seleccionado obtenido desde el value de los radio button
            }
        },
        computed:{
            ...mapState(['potenciaSolar'])
        },
        methods:{
            ...mapMutations(['setEspacioPanel']),
            result(){
                console.log(this.potenciaSolar);
                this.calcularEspacio();
                router.push({ name:'calcViewResult' })
            },
            backPage(){
                router.push({ name:'calcView2' })
            },
            calcularEspacio(){
                const resultado = this.potenciaSolar * this.selectedoption;
                this.setEspacioPanel(resultado);
            },
        }
    }
</script>

<style scoped>
.tipoPanel{
    width: 200px;
    height: 200px;
}
</style>