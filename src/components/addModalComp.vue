<template>
  <button type="button" class="btn btn-primary mt-3 bg-colorPaleta1 text-colorPaleta3 fw-bold" data-bs-toggle="modal" data-bs-target="#addModal"> 
       <span> Agregar &#x2795;</span>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-colorPaleta2 text-light">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-colorPaleta3">
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
                      <label for="tipo" class="form-label">Tipo</label>
                      <select id="tipo" class="form-select input_select_item" v-model="tipo">
                        <option value="0" selected>Selecione opcion</option>
                        <option value="Servicio Presencial">Servicio Presencial</option>
                        <option value="Servicio Online">Servicio Online</option>
                    </select>
                  </div>
                  <div class="mt-3">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" v-model="user" name="email" class="form-control" id="email">
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
              <div class="modal-footer bg-colorPaleta2">
                  <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal" @click="newAgendar">Agregar</button>
              </div> 
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return{
        user: '',
        nombre:'',
        direccion:'',
        telefono:'',
        fecha:'',
        hora: '',
        newId: '0000',
        tipo:'',
        regionSelecionada:0
        }
    },
    computed:{
        //...mapState(['agenda']),
        ...mapState(['regionesDeChile']),
    },
    methods:{
        ...mapActions(['insertar']),
        ...mapActions(['extraer']),
        newAgendar(){
            this.newId = this.newId = Date.now().toString();
        
            const data = {
                id:this.newId,
                direccion: this.direccion,
                fecha:this.fecha,
                hora:this.hora,
                nombre: this.nombre,
                telefono: this.telefono,
                user:this.user,
                tipo:this.tipo,
                region: this.regionSelecionada.nombre
            }
            this.insertar(data);
            this.extraer();

        }
    }
}
</script>