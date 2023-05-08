<template>
    <div>
        <h1>Resultado</h1>
    </div>
    <button @click="result">Terminar</button>
    <button @click="backPage">Atras</button>
</template>

<script>
    import router from '@/router';
    export default{
        methods:{
            result(){
                router.push({ name:'home' })
            },
            backPage(){
                router.push({ name:'calcView3' })
            }
        }
    }
</script>
