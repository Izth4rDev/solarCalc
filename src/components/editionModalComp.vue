<template>
      <button type="button" class="btn mt-3 fw-bold" data-bs-toggle="modal" data-bs-target="#editModal" @click="emitEventoLlenarModal"> 
        <span>&#x270E;</span>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-colorPaleta2 text-light">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-colorPaleta3">
              <form class="mt-3">
                <div class="mt-3">
                      <label for="id" class="form-label">Id</label>
                      <input type="text" name="id" id="id" v-model="agendaEditar.id" class="form-control" disabled>
                  </div>
                  <div class="mt-3">
                      <label for="nombre" class="form-label">Nombre completo</label>
                      <input type="text" name="nombre" id="nombre" v-model="agendaEditar.nombre" class="form-control">
                  </div>
                  <div class="mt-3">
                      <label for="direccion" class="form-label">Dirección</label>
                      <input type="text" name="direccion" id="direccion" v-model="agendaEditar.direccion" class="form-control">
                  </div>
                  <div class="mt-3">
                    <label for="region" class="form-label">Region</label>
                    <select id="region" class="form-select input_select_item" v-model="agendaEditar.region">
                        <option value="0" selected>Selecione opcion</option>
                        <option v-for="region in regionesDeChile" :key="region">{{ region.nombre }}</option>
                    </select>
                  </div>
                  <div class="mt-3">
                      <label for="telefono" class="form-label">Telefono</label>
                      <input type="tel" name="telefono" class="form-control" v-model="agendaEditar.telefono" id="telefono">
                  </div>
                  <div class="mt-3">
                      <label for="tipo" class="form-label">Tipo</label>
                      <select id="tipo" class="form-select input_select_item" v-model="agendaEditar.tipo">
                        <option value="0" selected>Selecione opcion</option>
                        <option value="Servicio Presencial">Servicio Presencial</option>
                        <option value="Servicio Online">Servicio Online</option>
                    </select>
                  </div>
                  <div class="mt-3">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" v-model="agendaEditar.user" name="email" class="form-control" id="email" disabled>
                  </div>
                  <div class="mt-3">
                      <label for="fecha" class="form-label">Escoje una fecha</label>
                      <input type="date" class="form-control" id="fecha" v-model="agendaEditar.fecha">
                  </div>
                  <div class="mt-3">
                      <label for="" class="form-label">Seleccione una hora</label>
                      <input type="time" class="form-control" name="hora" id="hora" v-model="agendaEditar.hora">
                  </div>
              </form>
            </div>
              <div class="modal-footer bg-colorPaleta2">
                  <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal" @click="actualizarAgenda">Editar</button>
              </div> 
        </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

export default{
    emits: ['llenarModalForm'],
    computed:{
      ...mapState(['agendaEditar']),
      ...mapState(['regionesDeChile'])
    },
    methods:{
      ...mapActions(['insertar']),
      ...mapActions(['extraer']),
      emitEventoLlenarModal(){
        //Emite evento para poder llenar el form con la data de mi tabla (setea una variable en el store)
          this.$emit('llenarModalForm');
      
      },
      actualizarAgenda(){

        const data = {
          id:this.agendaEditar.id,
          direccion: this.agendaEditar.direccion,
          fecha:this.agendaEditar.fecha,
          hora:this.agendaEditar.hora,
          nombre: this.agendaEditar.nombre,
          telefono: this.agendaEditar.telefono,
          user:this.agendaEditar.user,
          region: this.agendaEditar.region,
          tipo:this.agendaEditar.tipo,
        }
        this.insertar(data);
        this.extraer();

      },
      mostrarAgenda(){
        console.log(this.agendaEditar.nombre);
      }
    }
}
</script>