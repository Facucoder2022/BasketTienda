let productosBasket = [{
    id: 1,
    nombre: "Los Angeles Lakers - Musculosa",
    valor: 1800,
    cantidad: 99,
    imagen: 'img/lakersmusculosa.png'
},
{
    id:2,
    nombre:"Golden State Warriors - Short",
    valor: 1200,
    cantidad: 99,
    imagen: 'img/warriorsshort.png'
},
{
    id:3,
    nombre:"Los Angeles Clippers - Remera",
    valor: 1500,
    cantidad: 99,
    imagen: 'img/camisetaclippers.png'
},
{
    id:4,
    nombre:"Nike Kyrie Flytrap 3",
    valor: 2900,
    cantidad: 99,
    imagen: 'img/championes.png'
},
{
    id:5,
    nombre:"Chicago Bulls - Buzo",
    valor: 2400,
    cantidad: 99,
    imagen: 'img/buzochicago.png'
}
];

let carritoBasket = [];


class Carrito{
    
    constructor(id,nombre,valor,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }
}


addEventListener("load", mostrarTodosBasket());





function mostrarTodosBasket () {

    /*
    <div class="col">
        <div class="card col-md-4" style="width: 15rem;">
            <img src="img/lakersmusculosa.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Los Angeles Lakers - Musculosa</h5>
            <p class="card-text">$1900</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
    */

    let stringBasket = '';
    let listaTienda = productosBasket;
    let divCarga = document.getElementById("cargaDinamicaEquipos");

    listaTienda.forEach(x => {
        stringBasket += '<div class="col"> <div class="card col-md-4" style="width: 15rem;">'
        //Cargo img
        stringBasket +=  `<img src="${x.imagen}" class="card-img-top" alt="img-${x.nombre}"> <div class="card-body">` 
        //cargo nombre
        stringBasket +=  `<h5 class="card-title">${x.nombre}</h5>`
        //cargo precio
        stringBasket += `<p class="card-text">Valor: ${x.valor}</p>`
        //Boton compra 
        stringBasket +=  `<a href="#" class="btn btn-primary" onclick="comprar(${x.id})" >Comprar</a>  </div></div></div>`
        
    });
    

    divCarga.innerHTML = stringBasket;


    /*array.forEach(producto)  {
        stringBasket +=
        <div class="card" style="width: 18rem;">
           <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <span class="card-text">Stock: ${producto.cantidad}</span>
                  <p class="card-text">Valor: ${producto.valor}</p>
    <             a href="#" onclick='agregarCarrito(${producto.id})' class="btn btn-primary">Añadir al carro</a>
              </div>
        </div>
    });*/
  
}

function comprar(idProducto){ 
    console.log("toy", idProducto);
    agregarCarrito(idProducto);
    document.getElementById("fondoCarro").style.display="block";
    document.getElementById("carrito").style.display="block";
};

let agregarCarrito = (id) => {
    if (!id){
        window.alert ('id no definida');
        console.log('id no definida');
        return
    }

    const producto = productosBasket.find((el) => el.id === id);

    if(producto){
        
        const productoExiste = carritoBasket.find((el) => el.id === id);

        if(productoExiste){
            console.log(productoExiste);
            productoExiste.cantidad = productoExiste.cantidad + 1;
        }else{
            let basketCarrito = new Carrito(producto.id,producto.nombre,producto.valor,1);
            carritoBasket.push(basketCarrito);
        }
    }
    console.log(carritoBasket);
};

function cerrarModal(){
    document.getElementById("fondoCarro").style.display="none";
    document.getElementById("carrito").style.display="none";
}

/*Resumen compra*/

let divCarga = document.getElementById("carrito");

let mostrarCarrito = () => {
    let acumluador = '';
    

    carritoBasket.forEach((el) => {
        acumluador +=
        `<tr> <div class="modal-body">`
        `<td>${iterador}</td>`
        `<td>${el.id}</td>`
        `<td>${el.nombre}</td>`
        `<td>${el.cantidad}</td>`
        `<td>${el.valor}</td>`
        `<td>${el.valor*el.cantidad}</td>`
        `<td>Eliminar(id)|masTarde(id)</td>
        </tr>`

    });

    contenedorCarrito.innerHTML = acumluador;
}


//     let stringBasket = '';
//     for(const conteoBasket of productosBasket){
//         stringBasket += `Basket nombre:${conteoBasket.nombre}\n
//         Basket valor:${conteoBasket.nombre}\n
//         Basket cantidad:${conteoBasket.nombre}\n
//         Basket imagen:${conteoBasket.nombre}\n
//         Basket id:${conteoBasket.nombre}\n`
//     }
    
//     console.log(stringBasket);
// }

// let total = () => {
//     let acumluador = 0;

//     for(const BasketTotal of productosBasket){
//         acumluador += BasketTotal.valor*BasketTotal.cantidad;
//     }

//     console.log(`el total de los productos es ${acumluador.toString()}`);
// }

// let agregarMas = "";
// let respuesta = false;
// let cantidadBasketAgregar = '';
// do{
//     cantidadBasketAgregar = parseInt(prompt('Indique cantidad de Basket agregar'));
//     while(cantidadBasketAgregar === 0 || isNaN(cantidadBasketAgregar) || cantidadBasketAgregar < 0){
//         window.alert("Cantidad minima es 1");
//         cantidadBasketAgregar = parseInt(prompt('Indique cantidad de Basket agregar'));
//     }

//     for (let i = 0; i < cantidadBasketAgregar; i++){
//         agregarBasketArray();
//     }
//     mostrarTodosBasket();

//     agregarMas =prompt("Desea agregar mas Basket, si o no").toLowerCase().trim();
//     while (agregarMas === ''){
//         window.alert('Debe ingresar su respuesta');
//         agregarMas = prompt("Desea agregar mas Basket, si o no").toLowerCase();
//     }
// }while(agregarMas !== 'no' );
// total();//

/*
let contenedorHTML = document.getElementById('contenedorIndex');
let filtroHTML = document.getElementById('filtroIndex');
let productosHTML = document.getElementById('productosIndex');
let publicidadHTML = document.getElementById('publicidadIndex');
let inputSearch = document.getElementById('input-search');
let contenedorCarrito = document.getElementById('contenedorCarrito');

class Basket{
    constructor(id,nombre,valor,cantidad,imagen, fecha){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.fecha = fecha || new Date().toLocaleDateString();
    }
}
class Carrito{
    constructor(id,nombre,valor,cantidad){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

let productosBasket = [];

let id = '';
let nombre = "";
let valor = "";
let cantidad = "";
let imagen = "";
let fecha = "";

let capitalizar = (texto) => {
    let textoChart = texto.charAt(0).toUpperCase();
    let textoSlice = texto.slice(1);
    let textoConcatenacion = textoChart+textoSlice;
    return textoConcatenacion;
}

// let agregarBasketArray = (capitalizar) => {
//     let cantidadBasket = productosBasket.length;
//     id = cantidadBasket+1;

//     nombre = capitalizar (prompt("Ingresa el equipo de Basket").toLowerCase().trim());
//     valor = Math.round(parseFloat(prompt("Ingrese el valor de la remera")));
//     cantidad = parseInt(prompt("Ingrese la cantidad de remeras"));
//     imagen = prompt("Indicar talle de la remera");
//     fecha = new Date().toLocaleDateString();

//     let productosBasketAgregar = new Basket(id,nombre,valor,cantidad,imagen,fecha);
//     productosBasket.push(productosBasketAgregar);
// };

// let eliminarBasketArray = () => {
//     let nombreBasket = capitalizar(prompt("Indica el nombre del Basket")).toLowerCase().trim();
//     let basketSome = productosBasket.some((arreglo) => arreglo.nombre === nombreBasket);

//     if (!basketSome){
//         window.alert("Basket no encontrado");
//     }else{
//         let basketMap = productosBasket.map((array) => array.nombre);
//         let basketIndex = basketMap.indexOf(nombreBasket);
//         productosBasket.splice(basketIndex,1);
//     }
// };

// let modificarBasketArray = () => {
//     let nombreBasket = capitalizar(prompt("Indica el nombre del Basket").toLowerCase().trim());
//     let basketBoolean = productosBasket.some((el) => el.nombre === nombreBasket);

//     if(!basketBoolean){
//         window.alert("No se encuentra el Basket");
//     }else{
//         let basketMap = productosBasket.map((array) => array.nombre);
//         let basketIndex = basketMap.indexOf (nombreBasket);

//         productosBasket[basketIndex]["nombre"] = capitalizar(prompt("Ingresa el nombre del Basket").toLowerCase().trim());
//         productosBasket[basketIndex]["valor"] = Math.round(parseFloat(prompt("Ingresa el valor del Basket")));
//         productosBasket[basketIndex]["cantidad"] = parseInt(prompt("Ingresa la cantidad del Basket"));
//         productosBasket[basketIndex]["imagen"] = prompt("Indicar talle del Basket");
//     };
// };


//mostrarTodosBasket = function (array.contenedor) {
    
//}





let busqueda = () => {

}

let eliminar = () => {

}

let modificar = () => {
    
}

let totalCarrito = () => {
    
}



let handlerEvent = (e) => {

    const filtrado = e.target.value;
    console.log(filtrado);

    const array = productosBasket.filter((producto) => producto.nombre.includes(capitalizar(filtrado.toLowerCase().trim())))

    mostrarTodosBasket(array,productosHTML);
}

inputSearch.addEventListener('input', handlerEvent);

let agregarMas = "";
let accion = "";
let cantidadBasketAgregar = "";

let operaciones = (accion) =>{
    switch (accion) {
        case '1':
            agregarBasketArray(capitalizar);
        break;
        case '2':
            mostrarTodosBasket();
        break;
        case '0':
            //Nada
        break;
    
        default:
            window.alert("Dato incorrecto");
        break;
    }
}

*/

