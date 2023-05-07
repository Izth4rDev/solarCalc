import { createStore } from 'vuex'

export default createStore({
  state: {
    usuarioConectado: '',
    usuarioEstado: false,
    logoutEstado: false
  },
  getters: {
  },
  mutations: {
    getUsuarioConectado(state,payload){
      state.usuarioConectado = payload
      console.log( state.usuarioConectado);
    },
    limpiarUsuarioConectado(state){
      state.usuarioConectado = '';
    },
    cambiarLogoutEstado(state){
      console.log('primer estado'+state.logoutEstado)
      state.logoutEstado = !state.logoutEstado;
      console.log('segundo estado'+state.logoutEstado)
    }
  },
  actions: {
  },
  modules: {
  }
})
