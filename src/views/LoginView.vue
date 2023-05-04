<template>
    <header-view></header-view>
    <section id="login_main_container">
        <div id="content_container">
            <div class="msg_container">
                <h1 id="form_login_main_tittle"><span id="form_login_main_tittle_letter">E</span>merge Solar</h1>
                <h2 id="form_login_sec_tittle">Vuelvete eficiente</h2>
            </div>
            <form id="form_container" @submit.prevent="login">
                <div class="form_login_InputContainer">
                    <label class="form_login_label" for="">Correo Electronico</label>
                    <input v-model="loginForm.email" class="form_login_input" type="email" name="" id="">
                </div>
                <div class="form_login_InputContainer">
                    <label  class="form_login_label" for="">Password</label>
                    <input v-model="loginForm.password" class="form_login_input" type="password" name="" id="">
                </div>
                <div v-if="stateMsg">
                    <p class="colorMsgError">{{ msg }}</p>
                </div>
                <div id="form_login_buttonsContainer">
                    <button class="form_login_button">Login</button>
                    <button class="form_login_button">Registrar</button>
                </div>
            </form> 
        </div>
    </section>
</template>

<script>
import { auth } from "@/services/auth.service";
import { mapMutations, mapState } from "vuex";
import headerView from '../components/HeaderComp.vue'

export default{
    components:{
        headerView
    },
    data(){
        return{
            loginForm: {
                email: '',
                password:''
            },
            msg:'',
            stateMsg:false
        }
    },
    computed:{
        ...mapState(['usuarioConectado']),
    },
    methods:{
        ...mapMutations(['getUsuarioConectado']),
        login(){
            if(this.loginForm.email === '' || this.loginForm.password === ''){
                this.msg = 'Todos los campos son necesarios'
                this.stateMsg = true
            }else{
                auth
                .signInWithEmailAndPassword(
                    this.loginForm.email,
                    this.loginForm.password
                )
                .then((fbUser)=> {
                    console.log('usuario logeado exitosamente')
                    console.log('Respuesta ',fbUser);
                    this.getUsuarioConectado(this.loginForm.email);
                    this.msg = '';
                    this.stateMsg = false;
                    //router.push('/');
                })
                .catch((err) => {
                    //seteamos estilos y mensajes con error
                    //this.manage = true;
                    //this.cambiaShadowMail = true;
                    //this.cambiaShadowPass = true;
                    //this.error = 'Usuario o contraseña invalidos'
                    console.log(err);
                });
            }
        }
    }
}
</script>

<style scoped>

#login_main_container{
    background-image: url('../assets/img/SolarCalcEmergeSolar.webp');
    background-size: cover;
    background-position: center;
    height: 80vh;
    width: 100%;
    position: absolute;
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
#form_login_main_tittle{
    font-size: 3rem;
    color: #007bff;
    font-family: 'Lato';
    font-weight: bold;
}
#form_login_main_tittle_letter{
    color:#FFC300;
    -webkit-text-stroke: 1px #007bff;
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
    background-color: #007bff;
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

/*Estilos de y breakpoints*/
@media (max-width: 1708px) {
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
        transform: translate(0%, 0%);
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
        transform: translate(0%, 0%);
    }
} 

</style>