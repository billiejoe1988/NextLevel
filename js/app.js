//hacer visible-invisible el carrito para accesibilidad
document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("carrito");
    const mostrarCarritoButton = document.getElementById("mostrar-carrito");

    mostrarCarritoButton.addEventListener("click", () => {
        carrito.classList.remove("translate-x-full");
    });
});

//hacer visible-invisible el carrito si pasas por la zona derecha
document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("carrito");
    const zonaApertura = window.innerWidth * 0.95; //el 0.95 es por el 95% de la pantalla

    document.addEventListener("mousemove", (e) => {
        if (e.clientX > zonaApertura) {
            carrito.classList.remove("translate-x-full");

    }
        // Evento para ocultar el carrito cuando el cursor sale del aside
        carrito.addEventListener("mouseleave", () => {
            carrito.classList.add("translate-x-full");
        });
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
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.categoria = categoria;
    }
}
//creando articulos de estreno
const zeldaTotk = new Articulo(101, "Zelda Tears the kingdom", "60000", "10", "Estrenos");
baseDatos.push(zeldaTotk);
const marioKart8W4 = new Articulo(102, "Mario Kart 8 DLC Wave 4", "20000", "10", "Estrenos");
baseDatos.push(marioKart8W4);
const pokemonScarletAreaZero = new Articulo(103, "Pokemon Scarlet DLC Area zero", "35000", "10", "Estrenos");
baseDatos.push(pokemonScarletAreaZero);
const amiiboLinkyGanon = new Articulo(104, "Amiibo Link y Ganon", "30000", "10", "Estrenos");
baseDatos.push(amiiboLinkyGanon);
//creando articulos de ofertas
const gbaColorYellow = new Articulo(201, "Game Boy Color Amarillo", "35000", "1", "Ofertas");
baseDatos.push(gbaColorYellow);
const marioKart8 = new Articulo(202, "Mario Kart 8", "20000", "10", "Ofertas");
baseDatos.push(marioKart8);
const vampireSurvivor = new Articulo(203, "Vampire Survivor", "5000", "10", "Ofertas");
baseDatos.push(vampireSurvivor);
const marioMaker2= new Articulo(204, "Mario Maker 2", "40000", "10", "Ofertas");
baseDatos.push(marioMaker2);
//creando articulos en retro
const n64Gris = new Articulo(301, "Nintendo 64 con joystick gris", "80000", "1", "Retro");
baseDatos.push(n64Gris);
const nesSinJoystick = new Articulo(302, "Nintendo Usada", "90000", "1", "Retro");
baseDatos.push(nesSinJoystick);
const joystickGCNaranja = new Articulo(303, "Joystick GameCube Naraja", "15000", "10", "Retro");
baseDatos.push(joystickGCNaranja);
const gbaVioleta= new Articulo(304, "Game boy advance violeta", "40000", "10", "Retro");
baseDatos.push(gbaVioleta);
//creando articulos en preventas 
const marioWonder = new Articulo(401, "Super Mario Wonder", "70000", "99", "Preventas");
baseDatos.push(marioWonder);
const marioRPG = new Articulo(402, "Super Mario RPG", "70000", "99", "Preventas");
baseDatos.push(marioRPG);
const picmin4 = new Articulo(403, "Picmin 4", "70000", "99", "Preventas");
baseDatos.push(picmin4);
const fc24= new Articulo(404, "FS 24", "60000", "99", "Preventas");
baseDatos.push(fc24);

//declarar constantes
const inputBuscar = document.querySelector("#buscador");
const divResultados = document.querySelector("#resultados");

//definir funcion
function buscar() {
    //objetener lo buscado en minuscula
    const ABuscar = inputBuscar.value.toLowerCase();

    // Filtrar elementos de baseDatos si el campo no está vacío
    const resu = baseDatos.filter((el) => el.nombre.toLowerCase().includes(ABuscar));

    // Limpiar el contenido anterior del div despues inner
    divResultados.innerHTML = "";

    if (ABuscar === "") {
        // Ocultar el div si el input está vacío
        divResultados.style.display = "none";
    } else {
        // Mostrar el div cuando hay resultados
        divResultados.style.display = "block";

        if (resu.length === 0) {
            // Mostrar si no se encontraron resultados
            divResultados.innerHTML = "<p>No se encontraron resultados para la búsqueda.</p>";
            // Recorrer los elementos y agregarlos a la lista de resultados
        } else {
            // Recorrer los elementos y agregarlos al div previamente creado ul para lista, y crea parrafo.
            for (const producto of resu) {
                const p = document.createElement("p");
                p.textContent = `${producto.nombre}, Precio: $ ${producto.precio}`;
                divResultados.append(p);
            }
        }
    }
}
// Escuchar el evento "input" en el campo de búsqueda y llamar a la función buscar
inputBuscar.addEventListener("input", buscar);

inputBuscar.addEventListener("input", function () {
    if (inputBuscar.value === "") {
        buscar(); // Llamar a buscar cuando el campo está vacío
    }
});

// Botón de buscador funcionalidad (si todavía lo necesitas)
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
    total();
    
    // Mostrar un mensaje de éxito o actualización del carrito
      alert("Se agregó " + articulo.nombre +" con un valor de "+ "$" + articulo.precio +" al carrito.");
    } else {
      alert("El artículo "+ articulo.nombre +" no está disponible en stock.");
    }
  });
});

//total carrito
function total (){
    //inicializandolo
    let totalCarrito = 0
    //recorriendo y sumando
    carrito.forEach(element => {
        totalCarrito += element.precio
    });
   //obtener elemento donde mostrar total paso 1:
   const totalCarritoElement = document.getElementById("total-carrito");
   //actualiza dato total y que lo muestre en el HTML id total carrito.
   totalCarritoElement.textContent = `El total del carrito es: $${totalCarrito}`;

}

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
        <div class="border-2 border-orange-500 bg-orange-200 p-5 flex justify-between flex-col sm:flex-row">
            <h3 class="text-sm text-black py-3 font-bold">${articulo.nombre}</h3>
            <h4 class="text-sm lg:text-base text-black py-3 font-bold">$${articulo.precio}</h4>
            <span class="delete-articulo text-red-500 font-bold cursor-pointer hover:text-white"> X </span>
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
    // giardar elemento eliminar para devolverle 1 de stock
    const articuloEliminado = carrito[indice];
    articuloEliminado.stock++;
    // eliminar articulo del carrito con el indice.
    carrito.splice(indice, 1);

    //eliminado con splice y ahora mostrar carrito actualizado // actualizo tambien total para q de el valor correcto
    total ();
    mostrarCarrito();
}
//vaciar carrito
  function vaciar () {
    // auumentando el sstock de los articulos eliminados
    for (const articuloEliminado of carrito) {
        articuloEliminado.stock ++
    }
    //vaciar array de carrito con splice, pasando por toda la longitud del array y borrandolo.
    carrito.splice(0, carrito.length);
    //vaciar contenedor de elementos de la lista del carrito. dandole valor de vacio al arrray
    const carritoContainer = document.getElementById("lista-productos");
    carritoContainer.innerHTML = ""; 
     //para reiniciar el total carrito y en alert q fue borrado el contenido de su carrito
    total ();
    alert("Su carrito ah sido borrado");
  }   

  //boton de vaciar carrito con  funcionalidad
const botonVaciar = document.querySelector('.vaciar-carrito');
botonVaciar.addEventListener('click', vaciar);

function comprar() {
    //dar un alert diciendo que pasa al area de pago
    alert("Su compra ha sido realizada con exito, seleccione medio de pago y metodo de envio, gracias por su compra en NEXT LEVEL!");
}

//boton comprar en arrito con  funcionalidad
  const botonComprar = document.querySelector('.comprar-carrito');
  botonComprar.addEventListener('click', comprar);

