//import { parseQuery } from 'vue-router';
import { createStore } from 'vuex';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/auth.service";
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
    precioAproximado: null,
    agenda:[],
    usd:'',
    uf:''
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
      state.regionesDeChile = [...resultado];
    },
    setAgenda(state, querySnapshot){
      state.agenda = [];
      querySnapshot.forEach((doc) => {
        state.agenda.push(Object.assign({}, doc.data(), { id: doc.id }));
      });
      console.log('en set agenda');
      console.log(state.agenda);
    },
    setCurrency(state,valor){
      state.usd = valor.dolar.valor;
      state.uf = valor.uf.valor;
      console.log(state.usd+' '+state.uf);
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
    },
    async extraer({commit}) {
      const querySnapshot = await getDocs(collection(db, "agenda"));
      console.log(querySnapshot)
      commit('setAgenda', querySnapshot);
    },
    //API REST valores moneda
    async valorCurrency({commit}){
      try{
        const response = await fetch('https://mindicador.cl/api');
        if(!response){
          throw new Error("No se pudo obtener los valores de las monedas");
        }
        const valor = await response.json();
        console.log(valor);
        commit('setCurrency',valor);
      }catch(error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
