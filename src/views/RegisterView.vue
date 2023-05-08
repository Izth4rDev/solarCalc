<template>
    <section id="login_main_container">
        <div id="content_container">
            <div class="msg_container">
                <img id="logo_img" src="../assets/img/logoEmergeSolar.png" alt="">
                <h2 id="form_login_sec_tittle">Vuelvete eficiente</h2>
            </div>
            <form id="form_container" @submit.prevent="registerUser">
                <h1>Registro de usuario</h1>
                <div class="form_login_InputContainer">
                    <label class="form_login_label" for="">Correo Electronico</label>
                    <input v-model="registerForm.email" :class="[stylingMail,'form_login_input']" @blur="cambiaEstilo('mail')" type="email" name="" id="">
                </div>
                <div class="form_login_InputContainer">
                    <label  class="form_login_label" for="">Password</label>
                    <input v-model="registerForm.password" :class="[stylingPass, 'form_login_input']" type="password" @blur="cambiaEstilo('pass')" name="" id="">
                </div>
                <div v-if="stateMsg">
                    <p class="colorMsgError">{{ msg }}</p>
                </div>
                <div id="form_login_buttonsContainer">
                    <button class="form_login_button">Registrarse</button>
                    <button class="form_login_button" @click="goToLogin">Volver</button>
                </div>
            </form> 
        </div>
    </section>
    <div id="footer_container">
    <footer-view></footer-view>
    </div>
</template>

<script>
import { auth } from "@/services/auth.service";
//import { mapMutations, mapState } from "vuex";
import footerView from '../components/FooterComp.vue';
import router from '@/router';

export default {
    components:{
        footerView
    },
data() {
  return {
    registerForm: {
      email: "",
      password: ""
    },
    msg: '',
    stateMsg:false,
    //inicializa como un string vacio luego en la funcion lo paso a boolean
    cambiaShadowMail: '',
    cambiaShadowPass: '' 
  };
},
computed:{
  stylingMail(){
    return{
      //clase error del css
      error: this.cambiaShadowMail === true  ,
      success: this.cambiaShadowMail === false
    }
  },
  stylingPass(){
    return{
      error: this.cambiaShadowPass === true  ,
      success: this.cambiaShadowPass === false
    }
  },
  stylingMsg(){
    return{
      msgDanger: this.error === true,
      msgSuccess: this.error === false
    }
  }
},
methods: {
  registerUser() {
    if(this.registerForm.email ==='' || this.registerForm.password === ''){
        this.msg = 'Todos los campos son necesarios'
        this.stateMsg = true
    }else{
      auth
      .createUserWithEmailAndPassword(
        this.registerForm.email,
        this.registerForm.password
      )
      .then(() => {
        console.log("Usuario registrado correctamente");
        this.error = false;
        this.msg = 'Usuario registrado correctamente';
        this.$store.state.estado === false;
        router.push('/');
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer algo más
      })
      .catch((error) => {
        //seteamos estilos y mensajes con error
        this.manage = true;
        this.cambiaShadowMail = true;
        this.cambiaShadowPass = true;
        this.msg = 'ha ocurrido un problema'
        console.log("Error al registrar usuario", error);
        // Aquí puedes mostrar un mensaje de error al usuario
      });
    }
  },
  goToLogin(){
    router.push('/');
  },
  cambiaEstilo(input){

    if(input==='mail'){

      if(this.registerForm.email === ''){
      this.cambiaShadowMail = true;
      }else{
      this.cambiaShadowMail = false
      }

    }else if(input==='pass'){

      if(this.registerForm.password === ''){
      this.cambiaShadowPass = true;
      }else{
      this.cambiaShadowPass = false;
      }

    }
  },
  goBack(){
    //cambio el estado para que no muestre el mensaje de logout 
    router.push('/');
  }
}
};
</script>

<style scoped>

#login_main_container{
    background-image: url('../assets/img/SolarCalcEmergeSolar.webp');
    background-size: cover;
    background-position: center;
    height: 80vh;
    width: 100%;
    position: absolute;
    margin-top: 2rem;
}
#logo_img{
    height: 150px;
    width: 150px;
}
#content_container{
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    height: 100%;
    top: 0%;
    /*left: 50%;*/
}
 #form_container{
    display:flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    width:30%;
    /* height:45%; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transform: translate(80%, -10%);
}
#form_container h1{
    color:#127CB3;
    font-size: 2rem;
    font-family: 'Lato';
}
#form_login_main_tittle{
    font-size: 3rem;
    color:  #127CB3;
    font-family: 'Lato';
    font-weight: bold;
}
#form_login_main_tittle_letter{
    color:#FFC300;
    -webkit-text-stroke: 1px  #127CB3;
    font-size: 4rem;
}
#form_login_sec_tittle{
    font-size: 1.5rem;
    font-family: 'Lato';
    font-weight: bold;
    color:#0DADFF;
}
.form_login_label{
    font-family: 'Lato';
    font-size: 1.2rem;
    margin-right:1rem;
    color:#127CB3;
}
.form_login_InputContainer{
    margin-top:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form_login_input{
    padding:0.8rem;
    border-radius: 5px;
    border:1px solid #007bff;
    font-size: 1rem;
}
.form_login_input:focus{
    outline: none;
    box-shadow: 0 0 5px #007bff;
}
#form_login_buttonsContainer{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.form_login_label{
    width:10rem;
}
.form_login_button{
    margin: 0 1rem;
    font-family: 'Lato';
    border-radius: 15px;
    background-color:  #127CB3;
    color: #fff;
    transition: background-color 0.3s ease-in-out;
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-style: none;
    cursor: pointer;
}
.colorMsgError{
    color:rgb(168, 39, 39)
}
#footer_container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
/*Estilos de los inputs en evento blur*/ 
.error {   
    box-shadow: inset 0 0 10px rgba(224, 39, 39, 0.5);
}
.success{
    box-shadow: inset 0 0 10px rgba(105, 247, 105, 0.5);
}
/*Estilos de y breakpoints*/
@media (max-width: 1708px) {
    #login_main_container{
        margin-top: 0rem;
    }
    #form_container{
        width:45%;
        /* height:50%;  */
        transform: translate(30%, -10%);
    }
    .form_login_button{
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
} 
@media (max-width: 870px) {
    .form_login_InputContainer{
        flex-direction: column;
    }
    #content_container{
        flex-direction: column;
    }
    .msg_container{
        display: none;
    }
    #form_container{
        width:50%;
        /*height:55%;*/
        transform: translate(0%, -20%);
    }
    .form_login_button{
        font-size: 1rem;
        padding: 0.5rem 1rem;
    }
} 

@media (max-width: 700px) {
    .form_login_InputContainer{
        flex-direction: column;
    }

    #form_container{

        width:90%;
        /*height:60%;*/
        transform: translate(0%, -20%);
    }
} 

</style>

