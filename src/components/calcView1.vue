<template>
    <div class="container-fluid d-flex justify-content-center align-items-center pt-6">
        <slot-calc>
            <template v-slot:header>
                <div>
                    <h1>Bienvenido a la calculadora Solar</h1>
                </div>
            </template>
            <article class="mt-4 d-flex flex-column align-items-center">
                <h2 class="text-colorPaleta3 fs-3 fw-bold">¡Comencemos!</h2>
                <p class="text-colorPaleta3 ">Al levantar un proyecto de energia solar, es posible hacerlo en modalidad de propiedad conjunta(cooperativa)</p>
                <p class="text-colorPaleta3 ">Para realizar el calculo, el primer paso es conocer cuantas familias participaran en el proyecto</p>
                <div class="d-flex flex-column justify-content-center align-items-center my-4 border border-secondary-subtle rounded w-70 w-md-50 p-3">
                    <div class="d-flex justify-content-center align-items-center">
                        <label for="exampleFormControlInput1" class="form-label me-2 text-colorPaleta3">Nro de Familias</label>
                        <input v-model="familyNumber" type="number" class="form-control w-25" id="exampleFormControlInput1" min="1">
                    </div>
                    <p class="fs-7 fst-italic text-colorPaleta3">Si solo sera su familia presione el boton siguiente</p>
                </div>
                <div v-if="stateMsg">
                <span class="text-danger">{{ error }}</span>
                </div>
            </article>
            <template v-slot:footer>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="goHome">Home</button>
                <button class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold mx-2" @click="nextPage">siguiente</button>
            </template>
        </slot-calc>
    </div>
</template>
  
  <script>
  import router from '@/router';
import { mapMutations } from 'vuex';
  export default {
    name: 'calcView1',
    data(){
        return{
            familyNumber: 1,
            stateMsg: false,
            error: '',
        }
    },
    methods:{
        ...mapMutations(['setNroFamilias']),
        nextPage(){
            if(this.familyNumber <= 0 ){
                this.stateMsg = true;
                this.error = 'El valor del campo debe ser mayor a 0';
                return;
            }
            this.setNroFamilias(this.familyNumber);
            router.push(`/calcView2/${this.familyNumber}`);
        },
        goHome(){
            router.push({ name:'home' })
        }
    }
  };
  </script>