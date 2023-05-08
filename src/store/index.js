//import { parseQuery } from 'vue-router';
import { createStore } from 'vuex'
//import axios from 'axios';

export default createStore({
  state: {
    usuarioConectado: '',
    usuarioEstado: false,
    logoutEstado: false,
    nroFamilias: 0,
    regionesDeChile:[],
    potenciaSolar:0,
    espacioPaneles: 0
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
      state.logoutEstado = !state.logoutEstado;
    },
    setNroFamilias(state, payload){
      state.nroFamilias = payload
      console.log(state.nroFamilias);
    },
     //resultado del calculo de potencia solar fotovoltaica
    setPsf(state, payload){
      state.potenciaSolar = payload;
      console.log(state.potenciaSolar)
    },
    //resultado del calculo de espacio necesario para instalacion de paneles solares
    setEspacioPanel(state, payload){
      state.espacioPaneles = payload;
      console.log(state.espacioPaneles);
    },
    actualizaRegiones(state, resultado ){
      state.regionesDeChile = resultado;
    }

  },
  actions: {
    async obtenerRegion({commit}){
      try {
        const response = await fetch('../../regiones.json');

        if(!response.ok){
          throw new Error("No se pudo obtener el archivo de datos");
        }
        const resultado = await response.json();
        commit('actualizaRegiones', resultado);

      }catch(error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
