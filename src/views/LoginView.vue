<template>
    <div id="form_container">
        <form id="form_login">
        <div class="form_login_InputContainer">
            <label class="form_login_label" for="">Correo Electronico</label>
            <input class="form_login_input" type="email" name="" id="">
        </div>
        <div class="form_login_InputContainer">
            <label class="form_login_label" for="">Password</label>
            <input class="form_login_input" type="password" name="" id="">
        </div>
         <button class="form_login_button">Login</button>
         <button class="form_login_button">Registrar</button>
       </form>  
    </div>
</template>

<script>
</script>

<style scoped>
 #form_container{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
#form_login{
    padding:4rem;
    width: 80%;
    border:1px solid red;
}
.form_login_InputContainer{
    margin-top:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid black;
}
.form_login_input{

}   
.form_login_label{
    width:8rem;
}
.form_login_button{
    margin: 0 1rem;
}

@media (max-width: 540px) {
    .form_login_InputContainer{
        flex-direction: column;
    }
} 

</style>