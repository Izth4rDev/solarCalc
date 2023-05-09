//import { parseQuery } from 'vue-router';
import { createStore } from 'vuex'
//import axios from 'axios';

export default createStore({
  state: {
    usuarioConectado: '',
    userStorage:'',
    usuarioEstado: false,
    logoutEstado: false,
    nroFamilias: 0,
    regionesDeChile:[],
    consumoAnualcalculado: 0,
    potenciaSolar:0,
    espacioPaneles: 0,
    precioAproximado: null
  },
  getters: {
  },
  mutations: {
    getUsuarioConectado(state,payload){
      state.usuarioConectado = payload
      localStorage.setItem('usuario', JSON.stringify(state.usuarioConectado));
    },
    limpiarUsuarioConectado(state){
      state.usuarioConectado = '';
      localStorage.setItem('usuario', JSON.stringify(state.usuarioConectado));
    },
    getUsuarioStorage(state){
      state.userStorage = JSON.parse(localStorage.getItem('usuario'));
    },
    cambiarLogoutEstado(state){
      state.logoutEstado = !state.logoutEstado;
    },
    setNroFamilias(state, payload){
      state.nroFamilias = payload
      console.log(state.nroFamilias);
    },
    setConsumoAnual(state,payload){
      state.consumoAnualcalculado = payload;
    },
     //resultado del calculo de potencia solar fotovoltaica
    setPsf(state, payload){
      state.potenciaSolar = payload;
      console.log(state.potenciaSolar)
      state.potenciaSolar = Math.ceil(payload);
      console.log(state.potenciaSolar)
    },
    //resultado del calculo de espacio necesario para instalacion de paneles solares
    setEspacioPanel(state, payload){
      state.espacioPaneles = payload;
      console.log(state.espacioPaneles);
    },
    setPrecio(state, payload){
      console.log('en store' + payload);
      state.precioAproximado = payload;
      console.log('en store'+state.precioAproximado.costoMinimo);
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
