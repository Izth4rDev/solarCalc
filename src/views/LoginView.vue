<template>
    <section id="login_main_container">
        <div id="content_container">
            <div class="msg_container">
                <h1>Emerge Solar</h1>
                <h2>Vuelvete eficiente</h2>
            </div>
            <form id="form_container" @submit.prevent="verWidth">
                <div class="form_login_InputContainer">
                    <label class="form_login_label" for="">Correo Electronico</label>
                    <input class="form_login_input" type="email" name="" id="">
                </div>
                <div class="form_login_InputContainer">
                    <label class="form_login_label" for="">Password</label>
                    <input class="form_login_input" type="password" name="" id="">
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

export default{
    data(){
        return{

        }
    },
    methods:{
        verWidth(){
            console.log(window.innerWidth);
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
    height:45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transform: translate(80%, -10%);
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
    border:1px solid #127CB3;
    font-size: 1rem;
}
.form_login_input:focus{
    outline: none;
    box-shadow: 0 0 5px #007bff;
}
#form_login_buttonsContainer{
    margin-top: 3rem;
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
}

/*Estilos de y breakpoints*/
@media (max-width: 1708px) {
    #form_container{
        width:45%;
        height:45%; 
        transform: translate(30%, -10%);
    }
    .form_login_button{
        font-size: 1rem;
        padding: 0.5rem 1rem;

    }
} 

@media (max-width: 820px) {
    .form_login_InputContainer{
        flex-direction: column;
    }
    #content_container{
        flex-direction: column;
    }

    #form_container{
        width:50%;
        height:50%;
        transform: translate(-50%, -50%);
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

        width:60%;
        height:60%;
        transform: translate(25%, 25%);
    }
} 

</style>