//import { parseQuery } from 'vue-router';
import { createStore } from 'vuex';
import { getAuth } from "firebase/auth";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import { db } from "@/services/auth.service";
import Swal from 'sweetalert2';
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
    agendaEditar:'',
    agendaBorrar:'',
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
      console.log(state.regionesDeChile);
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
    },
    setEditAgenda(state,payload){
      state.agendaEditar = payload;
    },
    setDelAgenda(state, payload){
      state.agendaBorrar = payload;
      console.log(state.agendaBorrar)
    }
  },
  actions: {
    async obtenerRegion({commit}){
      try {
        const response = await fetch('../../regiones.json');
        console.log('desde obtener gion'+response)
        if(!response.ok){
          throw new Error("No se pudo obtener el archivo de datos");
        }
        const resultado = await response.json();
        commit('actualizaRegiones', resultado);

      }catch(error){
        console.log(error);
      }
    },
    //Metodos del CRUD hacia FireStore
    async extraer({commit}) {
      const querySnapshot = await getDocs(collection(db, "agenda"));
      console.log(querySnapshot)
      commit('setAgenda', querySnapshot);
    },
    async insertar(context, payload){
      //metodo de insersion 
      await setDoc(doc(db, "agenda", payload.id), {
        direccion: payload.direccion,
        fecha:payload.fecha,
        hora:payload.hora,
        nombre: payload.nombre,
        telefono: payload.telefono,
        user:payload.user,
        region: payload.region,
        tipo:payload.tipo
      })
      .then(() => {
      //promesa ejecutada correctamente
      //mensaje de exito del registro
        Swal.fire({
        title: 'Agenda registrada',
        text: 'exitoso!',
        icon: 'success',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCancelButton: false
      }).then((result) => {
        if (result.isConfirmed) {
          //this.$store.commit('extraer');
          console.log(result);
        }
      });
      })
      .catch((error) => {
      // Ha ocurrido un error al insertar el documento
      console.error("Error al insertar el documento:", error);
      });
    },/*
    async borrarAgenda(context, payload){
      
      await deleteDoc(doc(db, "agenda", payload))
      .then(() => {
        //promesa ejecutada correctamente
        //mensaje de exito del registro
          Swal.fire({
          title: 'Curso eliminado!',
          text: 'Exitoso!',
          icon: 'success',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
          allowEscapeKey: true,
          allowEnterKey: true,
          showCancelButton: false
        }).then((result) => {
          if (result.isConfirmed) {
            //volvemos a cargar los cursos de la bd
            //this.$store.commit('extraer');
          }
        });
        })
        .catch((error) => {
        // Ha ocurrido un error al insertar el documento
        console.error("Error al insertar el documento:", error);
        });
      }*/ 
    async borrarAgenda(context, payload){
      try {
        // Obtener el token de autenticación
        const auth = getAuth();
        const user = auth.currentUser;
        const token = await user.getIdToken();
    
        // Obtener el ID del documento que deseas eliminar
        const documentoId = payload;
    
        // Construir la URL de la solicitud de eliminación
        const url = `https://firestore.googleapis.com/v1/projects/solarcalcuser/databases/(default)/documents/agenda/${documentoId}`;
    
        // Realizar la solicitud de eliminación a la API REST de Firestore
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if(response.ok){
          console.log('documento borrado');
        }else{
          console.log('ocurrio un error');
        }
            // Resto del código para manejar la respuesta de la API REST
        // ...
      } catch (error) {
        // Manejo de errores
        // ...
      }
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
