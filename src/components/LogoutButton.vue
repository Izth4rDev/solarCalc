<template>
    <!-- Button trigger modal -->
<button type="button" class="btn bg-colorPaleta3 text-colorPaleta1 fw-bold" data-bs-toggle="modal" data-bs-target="#logoutModal">
Logout
</button>

<!-- Modal -->
<div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-colorPaleta3">
        <h1 class="modal-title fs-5 text-colorPaleta1" id="exampleModalLabel">¿Estas seguro que deseas cerrar sesión?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <p class="text-colorPaleta3 ">¡Vuelve Pronto!</p> 
          <p class="text-colorPaleta3 ">{{ usuarioConectado }}</p>
      </div>
      <div class="modal-footer bg-colorPaleta3">
        <button type="button" class="btn btn-secondary bg-colorPaleta1 text-colorPaleta3 fw-bold" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary bg-colorPaleta1 text-colorPaleta3 fw-bold" @click="logout" data-bs-dismiss="modal">Logout</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { auth } from "@/services/auth.service";
import { mapState, mapMutations } from "vuex";

export default {
  computed:{
    ...mapState(['usuarioConectado']),
  },
  methods: {
    ...mapMutations(['cambiarLogoutEstado']),
    async logout() {
      try {
        await auth.signOut();
        this.cambiarLogoutEstado();
        console.log('luego de cambiar estado en logout')
        this.$router.push('/'); // redirigir al usuario al login después del cierre de sesión
      } catch (error) {
        console.log(error);
      }
    },
  },
}

</script>