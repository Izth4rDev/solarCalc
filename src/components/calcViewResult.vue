<template>
    <div class="container-fluid d-flex justify-content-center align-items-center py-4 text-colorPaleta3">
        <slot-calc>
            <template v-slot:header>
                    <h1>Resultado Cálculo</h1>
            </template>
            <div>
                <article>
                    <h2 class="fs-5 fw-bold text-colo">A continuación se presentan los resultados según los datos proporcionados</h2>
                    <p>Los resultados entregados corresponden a resultados aproximados</p>
                </article>
                <div  class="border border-colorPaleta3-subtle rounded py-3 my-3">
                    <img src="../assets/img/consumoAnual.webp" alt="">
                    <p class=" m-0 p-0">Consumo anual de su hogar/agrupación</p>
                    <p class="fs-4 text-colorPaleta3 m-0 p-0">{{ consumoAnualcalculado }} Kwh</p>
                </div>
                <div class="border border-colorPaleta3-subtle rounded py-3 my-3">
                    <img src="../assets/img/cantidadPanel.webp" alt="">
                    <p class=" m-0 p-0">Cantidad de paneles requeridos</p>
                    <p class="fs-4 text-colorPaleta3 m-0 p-0">{{ potenciaSolar }}</p>
                </div>
                <div class="border border-colorPaleta3-subtle rounded py-3 my-3">
                    <img src="../assets/img/metrosCuadrados.webp" alt="">
                    <p class=" m-0 p-0">Espacio requerido</p>
                    <p class="fs-4 text-colorPaleta3 m-0 p-0">{{ espacioPaneles }} m2</p>
                </div>
                <h2 class="fs-4">Costo aproximado del proyecto</h2>
                <table class=" table table-striped table-colorPaleta3">
                    <thead class="bg-colorPaleta3 text-colorPaleta1">
                        <th class="table-colorPaleta3">Costo Mínimo</th>
                        <th class="table-colorPaleta3">Costo Medio</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-colorPaleta3">
                                {{ costoMinimoCLP }} 
                            </td>
                            <td class="text-colorPaleta3">
                                {{ costoMedioCLP }} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 class="fs-5 fw-bold text-colo">¿Necesitas asesoria?</h2>
            <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="backPage">Agendar</button>
            <template v-slot:footer>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="backPage">Atras</button>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="endCalc">Finalizar</button>  
            </template>
        </slot-calc>
    </div>
</template>

<script>
    import router from '@/router';
import { mapState } from 'vuex';
    export default{
        data(){
            return{
                costoMedioCLP: 0,
                costoMinimoCLP: 0,
            }
        },
        computed:{
            ...mapState(['consumoAnualcalculado']),
            ...mapState(['potenciaSolar']),
            ...mapState(['espacioPaneles']),
            ...mapState(['precioAproximado'])
        },
        methods:{
            endCalc(){
                router.push({ name:'home' })
            },
            backPage(){
                router.push({ name:'calcView3' })
            },
            formatCLP(){
                const {costoMinimo, costoMedio} = this.precioAproximado;
                
                this.costoMedioCLP = costoMedio.toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                });
                
                this.costoMinimoCLP = costoMinimo.toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP'
                });
            }
        },
        mounted(){
            this.formatCLP();
        }
    }
</script>
