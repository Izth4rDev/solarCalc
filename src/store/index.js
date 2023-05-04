import { createStore } from 'vuex'

export default createStore({
  state: {
    usuarioConectado: ''
  },
  getters: {
  },
  mutations: {
    getUsuarioConectado(state,payload){
      state.usuarioConectado = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
