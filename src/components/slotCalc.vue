<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <slot></slot>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
    div{
        font-family: 'Lato';
        padding:1rem 2rem 2rem 2rem;
        border: 1px solid white;
        border-radius: 15px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
    header{
        background-color: #0DADFF;
        color:#FFC300;
        border-radius: 15px;
    }
    footer{
        display: flex;
        justify-content: space-around;
        background-color:  rgb(13, 173, 255);
        border-radius: 15px;
        margin-top:2rem;
        padding:0.5rem 0;
    }
    
@media (max-width: 700px) {
    header{

        font-size: 1rem
    }
    div{
        width:90%;
    }
}
</style>