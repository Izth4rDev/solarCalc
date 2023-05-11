<template>
    <header-view></header-view>
    <h2 class="title text-colorPaleta3 fw-bold">Administrador de Agenda</h2>
    <div class="my-3">
        <addModal></addModal>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead class="bg-colorPaleta3 text-colorPaleta1 fw-bold">
            <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Region</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Telefono</th>
                <th scope="col">Tipo</th>
                <th scope="col">Usuario</th>
                <th class="bg-coloPaleta1">Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in agenda" :key="data.id">
                <th scope="row">{{ data.id }}</th>
                <td>{{ data.nombre}}</td>
                <td>{{ data.direccion }}</td>
                <td>{{ data.region }}</td>
                <td>{{ data.fecha }}</td>
                <td>{{ data.hora}}</td>
                <td>{{ data.telefono }}</td>
                <td>{{ data.tipo }}</td>
                <td>{{ data.user }}</td>
                <td><edit-modal @llenarModalForm="setEditAgenda(data)"></edit-modal><del-modal @deleteAgenda="setDelAgenda(data)">Eliminar</del-modal></td>
            </tr>
            </tbody>
        </table>
    </div>
 <footer-view></footer-view>
  </template>

  <script>
    import { mapActions, mapMutations, mapState } from "vuex";
    import headerView from '../components/HeaderComp.vue';
    import footerView from '../components/FooterComp.vue';
    import  editModal from '../components/editionModalComp.vue';
    import addModal from '../components/addModalComp.vue';
    import delModal from '../components/delModalComp.vue';
    export default {
        components:{
            headerView,
            footerView,
            editModal,
            addModal,
            delModal
        },
        computed:{
            ...mapState(['agenda']),
            
        },
        methods:{
            ...mapMutations(['setEditAgenda']),
            ...mapActions(['obtenerRegion']),
            ...mapMutations(['setDelAgenda'])
        },
        mounted(){
            this.obtenerRegion();
        }
    }
</script>