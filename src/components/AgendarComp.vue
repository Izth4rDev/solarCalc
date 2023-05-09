<template>
    <!-- El atributo :data-bs-target="modalId" genera conflictos hay que hacer referencia con al modal con :href="'#' + modalId"-->
    <!-- para que este se genere de manera dinamica y pueda mostrar elementos diferentes dependiendo de los props que se le envien-->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :href="'#' + modalId"> 
    {{ service }}
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Agendar {{service}}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{user}}
          <div v-if="isOnline">
            Este es el servicio online
          </div>
          <div v-else-if="isPresencial">
            Este es el servicio presencial
          </div>
          <div>
            <label for="" class="form-label">Nombre completo</label>
            <input type="text" name="" id="" class="form-control">
          </div>
          <div>
            <label for="telefono" class="form-label">Telefono</label>
            <input type="tel" name="telefono" class="form-control" id="telefono">
          </div>
          <div>
            <label for="email" class="form-label">Correo</label>
            <input type="email" v-model="userMail" name="email" class="form-control" id="email" disabled>
          </div>
          <div>
            <label for="" class="form-label">Escoje una fecha</label>
            <input type="date" class="form-control" id="example-date-input">
          </div>

          <div>
            <label for="" class="form-label">Seleccione una hora</label>
            <input type="time" class="form-control" name="hora" id="hora">
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Agendar</button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  props: ['user', 'service', 'isOnline', 'isPresencial'],
  data(){
    return{
        userMail: this.user,
    }
  },
  computed: {
    modalId() {
        //me permite diferenciar las instancias de Vue para mostrar datos diferenciados segun los datos enviados por los prop
      const instance = getCurrentInstance()
      return `agendar-modal-${instance.uid}`
    },
    /*idIncremental(){
        return 
    }*/
  }
}
</script>

<style>
</style>