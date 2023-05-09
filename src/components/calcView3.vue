<template>
     <div class="container-fluid d-flex justify-content-center align-items-center py-4">
        <slot-calc>
            <template v-slot:header>
                    <h2>Determinando el espacio necesario</h2>
            </template>
            <article class="text-colorPaleta3">
                <p>A continuacion debe indicar si instalará los paneles solares <br> en techo inclinado o a nivel del suelo</p>
            </article>
            <div class="d-flex flex-column flex-md-row justify-content-center">
                <div class="border border-secondary-subtle rounded w-70 w-md-50 p-3 my-4 mx-1">
                    <img src="../assets/img/techoInclinado.webp" alt="" class="img-fluid m-1 m-md-5  tipoPanel">
                    <div class="form-check d-flex flex-column align-items-center justify-content-center p-0">
                        <label class="form-check-label" for="panelTecho">
                            <p class="text-colorPaleta3">Panel techo inclinado</p>
                        </label>
                        <input class="form-check-input" type="radio" name="panel" id="panelTecho" :value="6" v-model="selectedoption">
                    </div>
                </div>
                <div class="border border-secondary-subtle rounded w-70 w-md-50 p-3 my-4 mx-1">
                    <img src="../assets/img/panelPiso.webp" alt="" class="img-fluid m-1 m-md-5 tipoPanel">
                    <div class="form-check d-flex flex-column align-items-center justify-content-center p-0">
                        <label class="form-check-label" for="panelPiso">
                            <p class="text-colorPaleta3">Panel de piso</p>
                        </label>
                        <input class="form-check-input" type="radio" name="panel" id="panelPiso" :value="8" v-model="selectedoption" checked>
                    </div>
                </div>
            </div>
            <template v-slot:footer>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="backPage">Atras</button>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="result">Siguiente</button>  
            </template>
        </slot-calc>
    </div>
</template>

<script>
    import router from '@/router';
    import { mapMutations, mapState } from 'vuex';
    export default{
        data(){
            return{
                selectedoption: 8 //valor m2(metros cuadrados) dependiendo de panel seleccionado obtenido desde el value de los radio button
            }
        },
        computed:{
            ...mapState(['potenciaSolar'])
        },
        methods:{
            ...mapMutations(['setEspacioPanel']),
            ...mapMutations(['setPrecio']),
            result(){
                //llamado a funcion para calcular espacio necesario
                this.calcularEspacio();
                //llamado a funcion para calcular el precio aproximado
                this.calcularCostoAproximado();
                router.push({ name:'calcViewResult' })
            },
            backPage(){
                router.push({ name:'calcView2' })
            },
            calcularEspacio(){
                const resultado = this.potenciaSolar * this.selectedoption;
                this.setEspacioPanel(resultado);
            },
            calcularCostoAproximado(){
               //Objeto que almacenará el resultado del calculo de precio aproximado 
                const precio = {
                    costoMinimo: 0,
                    costoMedio:0
                }
                //rango de precios en funcion de la potencia solar
                switch(true){
                    case this.potenciaSolar >= 1 && this.potenciaSolar < 5:precio.costoMinimo = 1030000 * this.potenciaSolar;
                                                                           precio.costoMedio = 1690000 * this.potenciaSolar;
                                                                           break;
                    case this.potenciaSolar >= 5 && this.potenciaSolar < 10:precio.costoMinimo = 1020000 * this.potenciaSolar;
                                                                            precio.costoMedio = 1480000 * this.potenciaSolar;
                                                                            break;
                    case this.potenciaSolar >= 10 && this.potenciaSolar < 30:precio.costoMinimo = 1010000 * this.potenciaSolar;
                                                                             precio.costoMedio = 1320000 * this.potenciaSolar;
                                                                             break;
                    case this.potenciaSolar >= 30 && this.potenciaSolar < 100:precio.costoMinimo = 920000 * this.potenciaSolar;
                                                                              precio.costoMedio = 1190000 * this.potenciaSolar;
                                                                              break;
                    case this.potenciaSolar >= 100 && this.potenciaSolar < 300:precio.costoMinimo = 780000 * this.potenciaSolar;
                                                                              precio.costoMedio = 1030000 * this.potenciaSolar;
                                                                              break;
                    default: console.log('algo paso' + this.potenciaSolar);
                    break;
                }
                //envio de objeto al store
                this.setPrecio(precio);
            }
        }
    }
</script>

<style scoped>
.tipoPanel{
    width: 200px;
    height: 200px;
}

@media (max-width: 700px){
    .tipoPanel{
        width: 150px;
        height: 150px;
    }
}
</style>