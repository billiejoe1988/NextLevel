//hacer visible-invisible el carrito

document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("carrito");
    const mostrarCarritoButton = document.getElementById("mostrar-carrito");
    const ocultarCarritoButton = document.getElementById("ocultar-carrito");

    mostrarCarritoButton.addEventListener("click", () => {
        carrito.classList.remove("translate-x-full");
    });

    ocultarCarritoButton.addEventListener("click", () => {
        carrito.classList.add("translate-x-full");
    });
});

// hacer visible-invisible el nav

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const mostrarOcultarMenuButton = document.getElementById("mostrar-ocultar-menu");

    mostrarOcultarMenuButton.addEventListener("click", () => {
        nav.classList.toggle("hidden");
    });
});


//funcionalidad botones de todos los sliders

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainers = document.querySelectorAll(".slider-container");
    
    //selecciona los slidercontainer y con foreach itera cada elemento con esta clase.
    sliderContainers.forEach(function(sliderContainer) {

        //dentro de cada contenedor busca las src y se almacenan en array image.
        const images = Array.from(sliderContainer.querySelectorAll(".slider img")).map(img => img.getAttribute("src"));
        let currentIndex = 0;
        const imgElement = sliderContainer.querySelector(".slider img");
        const prevButton = sliderContainer.querySelector("#prev-button");
        const nextButton = sliderContainer.querySelector("#next-button");

        // muestra imagen en slider, si el indice es menor que 0 se muestra la ultima, si es mayor o igual muestra la primera.
        function showImage(index) {
            if (index < 0) {
                index = images.length - 1;
            } else if (index >= images.length) {
                index = 0;
            }
            imgElement.src = images[index];
            currentIndex = index;
        }

        prevButton.addEventListener("click", function() {
            showImage(currentIndex - 1);
        });

        nextButton.addEventListener("click", function() {
            showImage(currentIndex + 1);
        });

        // para mopstrar la primera imagen 
        showImage(currentIndex);
    });
});

// carrito y arrays de elementos.

const baseDatos = [];
const carrito = [];

class Articulo{
    constructor(id, nombre, precio, stock, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }
}
//creando articulos de estreno
const zeldaTotk = new Articulo(101, "Zelda Tears the kingdom", 60000, 10, "Estrenos");
baseDatos.push(zeldaTotk);
const marioKart8W4 = new Articulo(102, "Mario Kart 8 DLC Wave 4", 20000, 10, "Estrenos");
baseDatos.push(marioKart8W4);
const pokemonScarletAreaZero = new Articulo(103, "Pokemon Scarlet DLC Area zero", 35000, 10, "Estrenos");
baseDatos.push(pokemonScarletAreaZero);
const amiiboLinkyGanon = new Articulo(104, "Amiibo Link y Ganon", 30000, 10, "Estrenos");
baseDatos.push(amiiboLinkyGanon);
//creando articulos de ofertas
const gbaColorYellow = new Articulo(201, "Game Boy Color Amarillo", 35000, 1, "Ofertas");
baseDatos.push(gbaColorYellow);
const marioKart8 = new Articulo(202, "Mario Kart 8", 20000, 10, "Ofertas");
baseDatos.push(marioKart8);
const vampireSurvivor = new Articulo(203, "Vampire Survivor", 5000, 10, "Ofertas");
baseDatos.push(vampireSurvivor);
const marioMaker2= new Articulo(204, "Mario Maker 2", 40000, 10, "Ofertas");
baseDatos.push(marioMaker2);
//creando articulos en retro
const n64Gris = new Articulo(301, "Nintendo 64 con joystick gris", 80000, 1, "Retro");
baseDatos.push(n64Gris);
const nesSinJoystick = new Articulo(302, "Nintendo Usada", 90000, 1, "Retro");
baseDatos.push(nesSinJoystick);
const joystickGCNaranja = new Articulo(303, "Joystick GameCube Naraja", 15000, 10, "Retro");
baseDatos.push(joystickGCNaranja);
const gbaVioleta= new Articulo(304, "Game boy advance violeta", 40000, 10, "Retro");
baseDatos.push(gbaVioleta);
//creando articulos en preventas 
const marioWonder = new Articulo(401, "Super Mario Wonder", 70000, 99, "Preventas");
baseDatos.push(marioWonder);
const marioRPG = new Articulo(402, "Super Mario RPG", 70000, 99, "Preventas");
baseDatos.push(marioRPG);
const picmin4 = new Articulo(403, "Picmin 4", 70000, 99, "Preventas");
baseDatos.push(picmin4);
const fc24= new Articulo(404, "FS 24", 60000, 99, "Preventas");
baseDatos.push(fc24);
//ya esta todo subido al array para base de datos

//funcion buscar para el boton de moneda en el header
function buscar() {
    const keyword = prompt("Qué producto desea buscar?");
    // Me va a retornar un array con todos los elementos que contengan
    const arrayResultados = baseDatos.filter((el) =>
      el.nombre.includes(keyword)
    );

    if (arrayResultados.length === 0) {
        alert("No se encontraron resultados para la búsqueda.");
    } else {
        // crea array con los resultados del include y los muestra con el alert
        const resu = arrayResultados.map((producto) => {
            return `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
        });
        // genera string con elementos y /n para separar
        alert("Resultados:\n \n" + resu.join("\n"));
    }
}

//boton de buscador funcionalidad
const botonBuscador = document.querySelector('.boton-buscador');
botonBuscador.addEventListener('click', buscar);

//boton de agregar al carrito funcionalidad
//darle click a todos los botones "btn-agregar"
const botonAgregar = document.querySelectorAll('.btn-agregar');
botonAgregar.forEach((boton) =>{
  boton.addEventListener('click', () =>{
      
    // traer el id. con el data-id del boton
    const articuloId = boton.getAttribute('data-id');
    
    // Buscar el artículo en la data base por id
    const articulo = baseDatos.find((el) => el.id === parseInt(articuloId));
    
    //verificar si esta disponible
    if (articulo.stock > 0) {

      // restar stock del articulo y agregar articulo al carrito
      articulo.stock--;
      carrito.push(articulo);

    mostrarCarrito ();
    
      // Mostrar un mensaje de éxito o actualización del carrito
      alert("Se agregó " + articulo.nombre +" con un valor de "+ articulo.precio +" al carrito.");
    } else {
      alert("El artículo "+ articulo.nombre +" no está disponible en stock.");
    }
  });
});

//mostrar en HTML los articulos del carrito
const mostrarCarrito = () => {
    const carritoContainer = document.getElementById("lista-productos");

    //fix : vaciar contenedor antes de volver a agregar otro elemento
    carritoContainer.innerHTML = ""; 

    //recorrer el array de carrito y buscar objetos para mostrar
    carrito.forEach((articulo, indice) => {
        const containerArticulo = document.createElement("div");
        containerArticulo.classList.add("articulo-carrito");
    // seleccionar que voy a agregar al carrito por cada compra.
        containerArticulo.innerHTML = `
            <div class=" border-2 border-orange-500 bg-orange-200  p-5 flex justify-between">
                <h3 class =" text-black py-3">${articulo.nombre}</h3>
                <h4 class=" text-black py-3">$.${articulo.precio}</h4>
                <span class="delete-articulo text-black font-bold cursor-pointer"> X </span>
            </div>
        `;
        const eliminar = containerArticulo.querySelector(".delete-articulo");

        // agregar evento al click para eliminar
        eliminar.addEventListener("click", () => {
            eliminarArticulo(indice);
        }); 
       // Agregar el elemento un div con id "carrito"
       carritoContainer.appendChild(containerArticulo);
    });
}
  //eliminar producto
const eliminarArticulo = (indice) =>{
    carrito.splice(indice, 1);

    //eliminado con splice y ahora mostrar carrito actualizado
    mostrarCarrito();
}
  //sumar tatal


//vaciar carrito
  function vaciar () {
    //vaciar array de carrito con splice, pasando por toda la longitud del array y borrandolo.
    carrito.splice(0, carrito.length);
    //vaciar contenedor de elementos de la lista del carrito. dandole valor de vacio al arrray
    const carritoContainer = document.getElementById("lista-productos");
    carritoContainer.innerHTML = ""; 

    alert("Su carrito ah sido borrado"+carrito);
  }   

  //boton de vaciar carrito con  funcionalidad
const botonVaciar = document.querySelector('.vaciar-carrito');
botonVaciar.addEventListener('click', vaciar);

function comprar() {
    //dar un alert diciendo que pasa al area de pago
    alert("Su compra ah sido realizada con exito, seleccione medio de pago y metodo de envio, gracias por su compra en NEXT LEVEL!");
}

//boton comprar en arrito con  funcionalidad
  const botonComprar = document.querySelector('.comprar-carrito');
  botonComprar.addEventListener('click', comprar);

