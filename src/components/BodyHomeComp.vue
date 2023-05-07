<template>
    <main class="container-fluid mx-0 px-0">
        <section class=" d-flex align-items-center justify-content-around bg-colorPaleta3 py-5 mb-5">
            <div>
                <h1 class="text-colorPaleta1">Te ayudamos a contruir tu proyecto solar</h1>
                <h2 class="text-light"> Haz que el sol trabaje para ti y tu comunidad con <span class="text-colorPaleta1" id="banner_parradoExaltado">nuestra asesoría</span> en proyectos solares</h2>
            </div>
            <img class="rounded d-none d-md-block" src="../assets/img/energiaSolar.png" alt="">
        </section>
        <section class="my-7">
                <article class="container">
                    <h1 class="my-5 text-colorPaleta3">Soluciones para hacer tu vida mas eficiente</h1>
                    <div class="row text-colorPaleta3 justify-content-center">
                        <figure class="col-12 col-sm-6 col-md-3">
                            <img src="../assets/img/icons/ahorroDinero.webp" alt="">
                            <figcaption>
                                <p>Invierte ahora y ahorra dinero<br>en tu boleta</p>
                            </figcaption>
                            </figure>
                        <figure class="col-12 col-sm-6 col-md-3">
                            <img src="../assets/img/icons/medioAmbiente.webp" alt="">
                            <figcaption>
                                <p>Cuida el medio ambiente<br>y deja un legado para las <br>generaciones futuras</p>
                            </figcaption>
                        </figure>
                        <figure class="col-12 col-sm-6 col-md-3">
                            <img src="../assets/img/icons/calcular.webp" alt="">
                            <figcaption>
                                <p>Calcula tu presupueto aproximado<br>para tu proyecto con la calculadora <br>interactiva</p>
                            </figcaption>
                        </figure>
                    </div>
                </article>
        </section>
        <section class="my-5">
            <div id="banner_calcula" class="text-colorPaleta3">
                <h1 class="pt-5"> <span class="text-colorPaleta1 ">B</span>rindale un valor añadido a tu hogar/habitacion</h1>
                <div class="d-flex flex-column flex-md-row align-items-center justify-content-around py-5">
                    <button type="button" class="btn btn-colorPaleta1 text-colorPaleta3 fw-bold py-3 px-5 order-2 order-md-1">Calcular</button>
                    <div class="order-1 order-md-2">
                        <p class="fs-4 fw-bold  text-colorPaleta3 my-0">Genera tu propia energía limpia y renovable,<br><span class="text-colorPaleta2">reduce tus costos de energía y contribuye a la lucha contra el cambio climático.</span></p>
                        <p class="fs-3 fw-bold  text-colorPaleta3 my-0">!<span class="fs-2 text-colorPaleta1">Calcula</span> el valor aproximado de tu proximo proyecto <span class="fs-2 text-colorPaleta1">fotovoltaico</span>!</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
    h1{
        font-size:2rem;
        font-family: 'Lato';
        font-weight: bold;
    }
    h2{ 
        font-size: 1.5rem;
        font-family: 'Lato';
    }
    .item_parrafo{
        -webkit-text-stroke: 1px  #127CB3
    }
    #banner_parradoExaltado{

        font-family: 'Lato';
        font-weight: bold;
    }
   #banner_calcula{
        background-image: url('../assets/img/bannerCalc.png');
        background-size: cover;
        background-position: center;
    }
</style>