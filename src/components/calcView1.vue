<template>
    <div>
      <h1>Bienvenido a la calculadora Solar</h1>
        <article>
            <h2>Comencemos</h2>
            <p>Al levantar un proyecto de energia solar, es posible hacerlo en modalidad de propiedad conjunta(cooperativa)</p>
            <p>Para realizar el calculo, el primer paso es conocer cuantas familias participaran en el proyecto</p>
            <div class="d-flex justify-content-center align-items-center">
                <label for="exampleFormControlInput1" class="form-label me-2">Nro de Familias</label>
                <input v-model="familyNumber" type="number" class="form-control w-25" id="exampleFormControlInput1" min="1">
            </div>
            <p>Si solo sera su familia presione el boton siguiente</p>
        </article>
        <button @click="goHome">Home</button>
        <button @click="nextPage">siguiente</button>
    </div>
  </template>
  
  <script>
  import router from '@/router';
import { mapMutations } from 'vuex';
  export default {
    name: 'calcView1',
    data(){
        return{
            familyNumber: 1
        }
    },
    methods:{
        ...mapMutations(['setNroFamilias']),
        nextPage(){
            router.push({ name:'calcView2' });
            this.setNroFamilias(this.familyNumber);
        },
        goHome(){
            router.push({ name:'home' })
        }
    }
  };
  </script>