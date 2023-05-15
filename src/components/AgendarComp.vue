<template>
    <!-- El atributo :data-bs-target="modalId" genera conflictos hay que hacer referencia con al modal con :href="'#' + modalId"-->
    <!-- para que este se genere de manera dinamica y pueda mostrar elementos diferentes dependiendo de los props que se le envien-->
    <button type="button" class="btn btn-primary mt-3 bg-colorPaleta1 text-colorPaleta3 fw-bold" data-bs-toggle="modal" :href="'#' + modalId"> 
    {{ service }}
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-colorPaleta2 text-light">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Agendar {{service}}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-colorPaleta3">
              <span class="fs-5">Usuario: {{user}}</span>
              <div v-if="isOnline">
                  Este es el servicio online
              </div>
              <div v-else-if="isPresencial">
                  Este es el servicio presencial
              </div>
              <form class="mt-3">
                  <div class="mt-3">
                      <label for="nombre" class="form-label">Nombre completo</label>
                      <input type="text" name="nombre" id="nombre" v-model="nombre" class="form-control">
                  </div>
                  <div class="mt-3">
                      <label for="direccion" class="form-label">Dirección</label>
                      <input type="text" name="direccion" id="direccion" v-model="direccion" class="form-control">
                  </div>
                  <div class="mt-3">
                    <label for="region" class="form-label">Region</label>
                    <select id="region" class="form-select input_select_item" v-model="regionSelecionada">
                        <option value="0" selected>Selecione opcion</option>
                        <option v-for="region in regionesDeChile" :key="region" :value="region">{{ region.nombre }}</option>
                    </select>
                  </div>
                  <div class="mt-3">
                      <label for="telefono" class="form-label">Telefono</label>
                      <input type="tel" name="telefono" class="form-control" v-model="telefono" id="telefono">
                  </div>
                  <div class="mt-3">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" v-model="userMail" name="email" class="form-control" id="email" disabled>
                  </div>
                  <div class="mt-3">
                      <label for="fecha" class="form-label">Escoje una fecha</label>
                      <input type="date" class="form-control" id="fecha" v-model="fecha">
                  </div>
                  <div class="mt-3">
                      <label for="" class="form-label">Seleccione una hora</label>
                      <input type="time" class="form-control" name="hora" id="hora" v-model="hora">
                  </div>
              </form>
            </div>
            <div v-if="stateMsg">
                <span class="text-danger">{{ error }}</span>
            </div>
            <div class="modal-footer bg-colorPaleta2">
                <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" @click="newAgendar">Agendar</button>
            </div> 
        </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { mapState, mapActions } from 'vuex';

export default {
  //Props desde componente padre
  props: ['user', 'service', 'isOnline', 'isPresencial'],
  data(){
    return{
      userMail: this.user,
      nombre:'',
      direccion:'',
      telefono:'',
      fecha:'',
      hora: '',
      newId: '0000',
      tipo: this.service,
      regionSelecionada:0,
      stateMsg:false,
      error: ''
    }
  },
  computed: {
    ...mapState(['agenda']),
    ...mapState(['regionesDeChile']),
    modalId() {
        //me permite diferenciar las instancias de Vue para mostrar datos diferenciados segun los datos enviados por los prop
      const instance = getCurrentInstance()
      return `agendar-modal-${instance.uid}`
    }
  },
  methods:{
    ...mapActions(['insertar']),
    newAgendar(){
       //genera id "unico"
       this.newId = Date.now().toString();
       
      const data = {
        id:this.newId,
        direccion: this.direccion,
        fecha:this.fecha,
        hora:this.hora,
        nombre: this.nombre,
        telefono: this.telefono,
        user:this.userMail,
        tipo:this.tipo,
        region: this.regionSelecionada.nombre
      }

      //validacion sencilla del formulario
      if(this.nombre === '' || this.direccion ==='' || this.telefono ==='' || this.fecha ==='' || this.hora === '' ||this.regionSelecionada == 0){
        this.stateMsg = true;
        this.error =  'Todos los campos son obligatorios';
        return;
      }

      this.stateMsg = false;
      this.resetForm();
      this.insertar(data)
     
    },
    resetForm() {
      // Restablecer los datos del formulario a sus valores iniciales
      this.nombre = '';
      this.direccion = '';
      this.regionSelecionada = '0';
      this.telefono = '';
      this.fecha = '';
      this.hora = '';
    }
  }
}
</script>