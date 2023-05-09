<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Consumo anual
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content w-80">
            <div class="modal-header bg-colorPaleta3 text-colorPaleta1">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Conozca su boleta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
             <img src="../assets/img/boletaEditada2.png" alt="" class="img-fluid">
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-colorPaleta3 text-colorPaleta1" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
</template>