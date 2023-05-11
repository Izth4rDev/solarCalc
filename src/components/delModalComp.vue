<template>
 <button @click="emitDelete" type="button" class="btn btn-icon" data-bs-toggle="modal" data-bs-target="#delete">
    <span>&#x1F5D1;</span>
	</button>

<!-- Modal -->
<div class="modal fade" id="delete" tabindex="-1" aria-labelledby="delete" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-colorPaleta2 text-light">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Elimimar Agenda</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-colorPaleta3 my-4">
            <h2 class="fw-bold">Esta seguro/a de eliminar este servicio de asesoria?</h2>
            <div class="my-4">
              <h5>Agenda de: {{ agendaBorrar.nombre }}</h5>
              <h5> para la Fecha {{ agendaBorrar.fecha }}</h5>
            </div>
        </div>
        <div class="modal-footer  bg-colorPaleta2 text-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="borrar">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

    export default{
        emits: ['deleteAgenda'],
        computed:{
            ...mapState(['agendaBorrar'])
        },
        methods:{
            ...mapActions(['borrarAgenda']),
            ...mapActions(['extraer']),
            emitDelete(){
                this.$emit('deleteAgenda');
            },
            borrar(){
                this.borrarAgenda(this.agendaBorrar.id);
                this.extraer();
            }
        }
    }
</script>