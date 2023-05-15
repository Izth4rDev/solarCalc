<template>        
    <main>
      <div class="d-flex justify-content-center bg-colorPaleta3 align-items-center flex-column">
        <h1 class="text-light">Nuestros servicios</h1>
        <p class="w-75 text-light fs-4">Nuestro principal objetivo es brindarte asesoría y apoyo integral en proyectos relacionados con la energía solar. Ya sea que prefieras una asesoría en línea o una interacción directa en persona, nos adaptamos a tus necesidades para ofrecerte soluciones personalizadas y efectivas.</p>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-around align-items-center my-6 text-colorPaleta3">
        <figure>
              <img src="../assets/img/servicios/servicioOnline.webp" alt="" class="rounded-circle rounded-5">
              <figcaption>
                  <ul>
                      <li>
                          <h3>Aseoria Online</h3>
                      </li>
                      <li>Disponible 7 dias a las semana</li>
                      <li>Flexibidad Horaria</li>
                      <li>Seguimiento constante</li>
                  </ul>
              </figcaption>
        </figure>
        <figure>
            <img src="../assets/img/servicios/servicio1.webp" alt="" class="rounded-circle rounded-5">
            <figcaption>
                <ul>
                    <li>
                        <h3>Aseoria Presencial</h3>
                    </li>
                    <li>Personalizadas</li>
                    <li>Proyectamos junto a tu familia/comunidad</li>
                    <li>Profesionales certificados</li>
                </ul>
            </figcaption>
        </figure>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-center align-items-start mt-5 mb-6">
            <section class="m-2 bg-colorPaleta2 p-2 rounded flex-1 service_section">
                <img src="" alt="">
                <h1 class="text-colorPaleta1">Servicio Online</h1>
                <h2 class="text-light">¿De que trata?</h2>
                <article class="border border-secondary-subtle rounded p-3 text-light fixed-height d-flex flex-column justify-content-center">
                    <p class="text-center">Nuestra asesoría remota en proyectos de energía solar te brinda todo el conocimiento y la experiencia
                                    <br>necesaria para llevar a cabo una implementación exitosa de esta tecnología limpia y sostenible. <br>Ofrecemos
                                     servicios personalizados que incluyen:</p>
                    <ul class="list-group list-group-flush rounded">
                        <li class="list-group-item text-colorPaleta3 fw-bold">evaluación de viabilidad</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">diseño</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">selección de equipos</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">asesoramiento en trámites legales</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">supervisión de instalación</li>
                    </ul>
                </article>
                <div class="d-flex justify-content-center text-light fs-4 gap-4 mt-2">
                    <span>Valor {{ showCurrencyOnline }} USD</span>
                    <span>Valor {{ valorServicioOnline }} UF</span>
                </div>
                <agendar-comp
                    :user="userStorage"
                    :service="msg1"
                    :is-online="true"
                    :is-presencial="false"
                ></agendar-comp>
            </section>
            <section class="m-2 bg-colorPaleta3 p-2 rounded align-self-stretch">
                <img src="" alt="">
                <h1 class="text-colorPaleta1">Servicio Presencial</h1>
                <h2 class="text-light">¿De que trata?</h2>
                <article class="border border-secondary-subtle rounded p-3 text-light fixed-height  d-flex flex-column justify-content-center">
                    <p class="text-center">
                        Nuestra asesoría presencial en proyectos de energía solar ofrece un enfoque personalizado y directo.<br>
                        Evaluamos tu proyecto, diseñamos el sistema, brindamos asesoramiento en: </p>
                    <ul class="list-group list-group-flush rounded">
                        <li class="list-group-item text-colorPaleta3 fw-bold">evaluación de viabilidad</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">diseño</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">selección de equipos</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">asesoramiento en trámites legales</li>
                        <li class="list-group-item text-colorPaleta3 fw-bold">supervisión de instalación</li>
                    </ul> 
                </article>
                <div class="d-flex justify-content-center text-light fs-4 gap-4 mt-2">
                    <span>Valor {{ showCurrencyPresencial }} USD</span>
                    <span>Valor {{ valorServicioPresencial }} UF</span>
                </div>
                <agendar-comp
                    :user="userStorage"
                    :service="msg2"
                    :is-online="false"
                    :is-presencial="true"
                ></agendar-comp>
            </section>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import agendarComp from '../components/AgendarComp.vue';


export default{
    components: {
        agendarComp
  },
  data(){
    return{
        msg1:'Servicio Online',
        msg2:'Servicio Presencial',
        valorServicioOnline: 12,
        valorServicioPresencial: 25,
    }
  },
  computed:{
    ...mapState(['userStorage']),
    ...mapState(['usd']),
    ...mapState(['uf']),
    showCurrencyPresencial(){
        let valor = this.valorServicioPresencial * this.uf
        valor = valor / this.usd;
        valor = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
        return valor
    },
    showCurrencyOnline(){
        let valor = this.valorServicioOnline * this.uf
        valor = valor/this.usd;
        valor = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
        return valor
    }
  },
  methods:{
    ...mapActions(['valorCurrency']),
    
  },
  mounted(){
    this.valorCurrency();
  }
}
</script>

<style>
.fixed-height{
  
  height: 350px; /* Puedes ajustar esta altura según tus necesidades */

}
figcaption ul{
        list-style-type: none;
        padding:0
}

@media (max-width: 1488px) {
  .fixed-height {
    height: 400px; 
  }
}

@media (max-width: 831px) {
  .fixed-height {
    height: 450px; 
  }
}


</style>