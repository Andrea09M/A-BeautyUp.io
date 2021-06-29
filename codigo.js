
const btnCambio = document.querySelector("#labial-dark");
let x = 0;

btnCambio.addEventListener("click", function(){
    document.body.classList.toggle("light");
    if(x == 0){
        btnCambio.children[0].src = "../img/labial-dark.pmg";
        x = 1;
    }else{
        btnCambio.children[0].src = "../img/labial-light.png";
        x = 0;
    }
});

const agregarBoton = document.querySelectorAll('.boton-agg');
const targetasCompra = document.querySelector('#targetaCompra');
const EliminarTotalProductos = document.querySelector('#eliminarPro');
const dispCompra = document.getElementById('contenido');
const numProductos = document.querySelector("#productos-total");
numProductos.textContent = compraFinal();

agregarBoton.forEach(agregarBtn => {
    agregarBtn.addEventListener('click', agregarTargeta);
});
targetasCompra.addEventListener('click', eliminarProductosTargeta);
EliminarTotalProductos.addEventListener("click", EliminarPest);

function agregarTargeta(event){
    const boton = event.target;
    const targeta = boton.closest('.card');
    
    const nombreProducto = targeta.querySelector('#producto').textContent;
    const precioProducto = targeta.querySelector('#precio').textContent;
    const imagenProducto = targeta.querySelector('.miniatura').src;

   agregarDetalleCompra(nombreProducto, precioProducto, imagenProducto);
}

function agregarDetalleCompra(nombreProducto, precioProducto, imagenProducto){
    const compratargAgg = document.createElement('div');
    numProductos.textContent = compraFinal();
    const compraCompleta = `<div class="container p-0 mb-3 col-12">
            <ul class="list-group" id="contProductos">
                <li class="list-group-item d-flex justify-content-between align-items-center active">
                    <div class="todo d-flex align-items-center justify-content-center articulos col-11">
                        <h4 class="col-3 text-center">
                            <img src=${imagenProducto} class="min align-items-center"> 
                        </h4>
                        <h4 class="text-center mb-0 col-6">${nombreProducto}</h4>
                        <h4 class="text-center mb-0 col-3">${precioProducto}</h4>
                    </div>
                    <div id="" class="col-1 d-flex align-items-center justify-content-center">
                        <img  class="equis" src="img/eliminar.png" alt="">
                    </div>
                </li>
            </ul>
        </div>`;
    compratargAgg.innerHTML = compraCompleta;
    targetasCompra.append(compratargAgg);

    compratargAgg.querySelector('.equis').addEventListener('click', eliminarProductosTargeta);

    numProductos.textContent = compraFinal();

        dispCompra.classList.add("d-none");
        dispCompra.classList.remove("d-flex");
    
}

function eliminarProductosTargeta(event){
    if(event.target.classList.contains("equis")){    
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        numProductos.textContent = compraFinal();
        console.log();

        
    }

    if(compraFinal() == 0){
        dispCompra.classList.add("d-flex");
        dispCompra.classList.remove("d-none");
    }
}

function EliminarPest(event){
    const productosCarrito = Array.from(targetasCompra.children);
    console.log(productosCarrito);

    let arrayCompleted = productosCarrito;

    arrayCompleted.forEach(function(element, i){
        arrayCompleted[i].remove();
    });

    numProductos.textContent = compraFinal();

    dispCompra.classList.add("d-flex");
    dispCompra.classList.remove("d-none");
}

function compraFinal(){

    const compraTotal = Array.from(targetasCompra.children);
    console.log(compraTotal);

    let totalProductos = compraTotal;

    return totalProductos.length;

}