<template>        
    <main>
        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center my-3">
            <article class="m-2 bg-colorPaleta2 p-2 rounded">
                <img src="" alt="">
                <h1 class="text-colorPaleta1">Servicio Online</h1>
                <h2 class="text-light">¿De que trata?</h2>
                <div class="border border-secondary-subtle rounded p-3">
                    <p class="text-center">Nuestra asesoría remota en proyectos de energía solar te brinda todo el conocimiento y la experiencia
                                    <br>necesaria para llevar a cabo una implementación exitosa de esta tecnología limpia y sostenible. <br>Ofrecemos
                                     servicios personalizados que incluyen:</p>
                    <ul class="list-group list-group-flush rounded">
                        <li class="list-group-item">evaluación de viabilidad</li>
                        <li class="list-group-item">diseño</li>
                        <li class="list-group-item">selección de equipos</li>
                        <li class="list-group-item">asesoramiento en trámites legales</li>
                        <li class="list-group-item">supervisión de instalación</li>
                    </ul>
                </div>
                <agendar-comp
                    :user="userStorage"
                    :service="msg1"
                    :is-online="true"
                    :is-presencial="false"
                ></agendar-comp>
            </article>
            <article article class="m-2 bg-colorPaleta3 p-2 rounded">
                <img src="" alt="">
                <h1 class="text-colorPaleta1">Servicio Presencial</h1>
                <h2 class="text-light">¿De que trata?</h2>
                <div class="border border-secondary-subtle rounded p-3">
                    <p class="text-center">Nuestra asesoría remota en proyectos de energía solar te brinda todo el conocimiento y la experiencia
                                    <br>necesaria para llevar a cabo una implementación exitosa de esta tecnología limpia y sostenible. <br>Ofrecemos
                                     servicios personalizados que incluyen:</p>
                    <ul class="list-group list-group-flush rounded">
                        <li class="list-group-item">evaluación de viabilidad</li>
                        <li class="list-group-item">diseño</li>
                        <li class="list-group-item">selección de equipos</li>
                        <li class="list-group-item">asesoramiento en trámites legales</li>
                        <li class="list-group-item">supervisión de instalación</li>
                    </ul>
                </div>
                <agendar-comp
                    :user="userStorage"
                    :service="msg2"
                    :is-online="false"
                    :is-presencial="true"
                ></agendar-comp>
            </article>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import agendarComp from '../components/AgendarComp.vue';


export default{
    components: {
        agendarComp
  },
  data(){
    return{
        msg1:'Servicio Online',
        msg2:'Servicio Presencial'
    }
  },
  computed:{
    ...mapState(['userStorage']),
  },
  methods:{
    
  }
  
}
</script>

<style>     
</style>