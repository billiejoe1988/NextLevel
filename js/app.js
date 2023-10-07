//hacer visible-invisible el carrito para accesibilidad
window.addEventListener("load", function () {
    const carrito = document.getElementById("carrito");
    const mostrarCarritoButton = document.getElementById("mostrar-carrito");
    const minimizarCarritoButton = document.getElementsByClassName("minimizar-carrito")[0];

    mostrarCarritoButton.addEventListener("click", () => {
        carrito.classList.remove("translate-x-full");
    });

    minimizarCarritoButton.addEventListener("click", () => {
        carrito.classList.add("translate-x-full");
    });
});

//hacer visible-invisible el carrito si pasas por la zona derecha
window.addEventListener("load", function () {
    const carrito = document.getElementById("carrito");
    const zonaApertura = window.innerWidth * 0.98; //el 0.98 es por el 98% de la pantalla para que sea de la derecha

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

//hacer bisible-invisible terminos y condiciones
window.addEventListener("load", function () { 
  const terminos = document.getElementById("terminos");
  const mostrarTerminos = document.getElementById("btn-terminos");
  const ocultarTerminos = document.getElementById("btn-ocultar-terminos");

      mostrarTerminos.addEventListener("click", () => {
      terminos.classList.remove("hidden");
    });

      ocultarTerminos.addEventListener("click", () => {
        terminos.classList.add("hidden");
      });
  });

//hacer visible-invisible el login para accesibilidad
window.addEventListener("load", function () {
    const btnLogin = document.getElementById("btn-login");
    const btnLogin2 = document.getElementById("btn-login2");
    const loginAlert = document.getElementById("login");
  
    if (btnLogin && loginAlert) {
      btnLogin.addEventListener("click", function () {
        loginAlert.classList.remove("hidden");
      });
  
      const minimizarLogin = document.querySelector(".minimizar-login");
      minimizarLogin.addEventListener("click", function () {
        loginAlert.classList.add("hidden");
      });
    }
  
    if (btnLogin2 && loginAlert) {
      btnLogin2.addEventListener("click", function () {
        loginAlert.classList.remove("hidden");
      });
    }
  });

// Evento para ocultar el login cuando el cursor sale del aside
window.addEventListener("load", function () {
    const login = document.querySelector("#login");

    login.addEventListener("mouseleave", () => {
    login.classList.add("hidden");
    });
});

window.addEventListener("load", function () {
  const crearCuenta = document.getElementById("crearCuenta");
  const mostrarCrearCuentaButton = document.getElementById("mostrarCrearCuenta");
  const ocultarCrearCuentaButton = document.getElementById("ocultarCrearCuenta");

  mostrarCrearCuentaButton.addEventListener("click", () => {
    crearCuenta.classList.remove("hidden");
  });

  ocultarCrearCuentaButton.addEventListener("click", () => {
    crearCuenta.classList.add("hidden");
  });
});

// Evento para ocultar alert de crear cuenta cuando el cursor sale del aside
window.addEventListener("load", function () {
  const crearCuenta = document.querySelector("#crearCuenta");

  crearCuenta.addEventListener("mouseleave", () => {
  crearCuenta.classList.add("hidden");
  });
});

//slider cambire de imagenes solo cada 3000 milisegundos
window.addEventListener("load", function() {
    const sliderContainers = document.querySelectorAll(".slider-container");

    // Función crea array, identifica y muestra la siguiente imagen
    function showNextImage(sliderContainer) {
        const images = Array.from(sliderContainer.querySelectorAll(".slider img"));
        let currentIndex = images.findIndex(img => img.classList.contains("active"));
        currentIndex = currentIndex === -1 ? 0 : currentIndex;
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Agregar intervalo para cambiar automáticamente las imágenes
    sliderContainers.forEach(function(sliderContainer) {
        setInterval(() => {
            showNextImage(sliderContainer);
        }, 3000);
    });
});

//declara slider cards y botones
const sliderCards = document.querySelector('.slider-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

//iniciamos en index 0
let slideCardsIndex = 0;

//cambiar imagen hacia atras
prevBtn.addEventListener('click', () => {
  slideCardsIndex = Math.max(slideCardsIndex - 1, 0);
  updateSliderPosition();
});

//cambiar imagen hacia adelante
nextBtn.addEventListener('click', () => {
  slideCardsIndex = Math.min(slideCardsIndex + 1, sliderCards.children.length - 1);
  updateSliderPosition();
});

// funcion para cambiar de posicion las imgenes del slider
function updateSliderPosition() {
  const cardWidth = sliderCards.children[0].offsetWidth;
  const offset = -slideCardsIndex * cardWidth;
  sliderCards.style.transform = `translateX(${offset}px)`;
}

//creo el array q despues pushea al crear la cuenta
const users = []
//formacion de objeto formulario 
class Usuario {
    constructor (nombre, mail, contrasena) {
        this.nombre = nombre;
        this.mail = mail;
        this.contrasena = contrasena;
    }
}
//funcion para agregar nombre, apellido y contrasena desde form
function agregarUsuario (){
  let nombre = document.getElementById("form-nombre").value;
  let mail = document.getElementById("mail-form").value;
  let contrasena = document.getElementById("contrasena-form").value;

  let usuario= new Usuario(nombre, mail, contrasena);
  users.push(usuario);

  // Convertir array de usuarios a JSON y guardar en local
  localStorage.setItem("usuarios", JSON.stringify(users));

  alert(`Bienvenido ${usuario.nombre} su usuario ah sido creado con exito, ingrese desde el Log In!`);

  mostrarUsuarios()
}

//funcion boton crear-cuenta
const botonCrear = document.querySelector('#btn-crearCuenta');
botonCrear.addEventListener('click', agregarUsuario);

// Función para mostrar usuarios de localStorage
function mostrarUsuarios() {

  // Obtener la cadena JSON de localStorage y convertirla de nuevo a un array de objetos
  const usuariosJSON = localStorage.getItem("usuarios");
  const usuarios = JSON.parse(usuariosJSON);

  if (usuarios) {
    let usuariosTexto = "Usuarios:\n";
    for (let i = 0; i < usuarios.length; i++) {
      usuariosTexto += `Nombre: ${usuarios[i].nombre}, Mail: ${usuarios[i].mail}\n`;
    }
    alert(usuariosTexto);
  } else {
    alert("No hay usuarios registrados en localStorage.");
  }
}

//funcion login 
function logIn() {
  const usuariosJSON = localStorage.getItem("usuarios");
  const usuarios = JSON.parse(usuariosJSON);

  const mail = document.getElementById("login-mail").value;
  const contrasena = document.getElementById("login-contrasena").value;

  const usuarioEncontrado = usuarios.find((usuario) => usuario.mail === mail);

// si coincicen ambos, da la bienvenida con el nombre de usuario ingresado, sino mensaje de error
  if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena) {
    alert(`Bienvenido ${usuarioEncontrado.nombre}`);
  } else {
    alert("Error. Ingresar Nuevamente los datos.");
  }
}

//boton login
const botonLogear = document.querySelector('.login-ingresar');
botonLogear.addEventListener('click', logIn);

// carrito y arrays de elementos.
class Producto {
  constructor(id, nombre, precio, stock, categoria, imagen, tipo, texto) {
    this.id = id;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.stock = parseInt(stock);
    this.categoria = categoria;
    this.imagen = imagen;
    this.tipo = tipo;
    this.texto = texto;
  }
}

class BaseDeDatos {
  constructor() {
    this.productos = [];
      //creando articulos de estreno
      this.agregarRegistro(101, "Zelda Tears the kingdom", 60000, 10, "Estrenos", "zelda_tears.png", "Juego", "Increible aventura de Link en el nuevo juego, nominado a Game of the Year");
      this.agregarRegistro(102, "Mario Kart 8 DLC Wave 4", 20000, 10, "Estrenos", "Banner-Mario-Kart-Deluxe-8-W4.jpg", "Juego", "Adquiere la cuarta wave de circuitos y personajes en Mario Kart 8");
      this.agregarRegistro(103, "Pokemon Scarlet DLC Area zero", 35000, 10, "Estrenos", "PokemonScarletViolet-Banner.jpg", "Juego", "Vive las aventuras en el nuevo DLC de la franquicia exitosa de Nintendo");
      this.agregarRegistro(104, "Amiibo Link y Ganon", 30000, 10, "Estrenos", "amiibos-zelda-ganondorf.webp", "Juego", "Llegaron los nuevos Amiibos, la princesa Zelda y El gran villano Ganon, con los skins vistos en Zelda: Tears of the kingdom");
      
      //creando articulos de ofertas
      this.agregarRegistro(201, "Game Boy Color Amarillo", 35000, 1, "Ofertas", "gb_color.jpg", "Consola", "Perfecto estado, Game boy color amarilla, viene con juego de regalo!.");
      this.agregarRegistro(202, "Mario Kart 8", 20000, 10, "Ofertas", "mario_kart.jpg", "Juego", "Adquiere Mario Kart 8 este maravilloso juego multijugador divertido para jugar con amigos o familia");
      this.agregarRegistro(203, "Vampire Survivor", 5000, 10, "Ofertas", "vampire_survivors.jpg", "Juego", "Uno de los mejores juegos de este último tiempo, ¡en precio de locos!");
      this.agregarRegistro(204, "Mario Maker 2", 40000, 10, "Ofertas", "switch_mario_maker.jpg", "Juego", "No te puedes perder esta oportunidad, Mario Maker 2, ¡Increíble online de Nintendo Switch, con esta rebaja!");
      
      //creando articulos en retro
      this.agregarRegistro(301, "Nintendo 64 con joystick gris", 80000, 1, "Retro", "n64.jpg", "Consola", "Mítica consola de Nintendo, en perfecto estado, color tradicional.");
      this.agregarRegistro(302, "Nintendo Usada", 90000, 1, "Retro", "nes.webp", "Consola", "Consola NES, traída desde Japón, sin desperfectos, con caja y cables originales");
      this.agregarRegistro(303, "Joystick GameCube Naranja", 15000, 10, "Retro", "joystick_naranja_gamecube.png", "Accesorio", "Joystick Naranja de GameCube en perfecto estado, sin detalles");
      this.agregarRegistro(304, "Game Boy Advance Violeta", 40000, 10, "Retro", "gb_advance.jpg", "Consola", "Consola, con detalles estéticos en la pintura, trae la tapa trasera, y con juego");
      
      //creando articulos en preventas 
      this.agregarRegistro(401, "Super Mario Wonder", 70000, 99, "Preventas", "mario_wonder.jpg", "Juego", "Prepárate para las aventuras de Mario con su hermano en este fabuloso mundo");
      this.agregarRegistro(402, "Super Mario RPG", 70000, 99, "Preventas", "mario_rpg.jpg", "Juego", "Reaviva este hermoso juego traído a la última consola de Nintendo!");
      this.agregarRegistro(403, "Picmin 4", 70000, 99, "Preventas", "picmin4.jpg", "Juego", "Vive las aventuras de esta fabulosa franquicia exitosa de Nintendo en esta 4ta entrega.");
      this.agregarRegistro(404, "FS 24", 60000, 99, "Preventas", "fc_24.jpg", "Juego", "Ha llegado Nintendo Switch la nueva entrega de este mítico juego de fútbol.");
      }
      // metodo profe que agregar objetos y almacena array catalogo
      agregarRegistro(id, nombre, precio, stock, categoria, imagen, tipo, texto) {
        const producto = new Producto(id, nombre, precio, stock, categoria, imagen, tipo, texto);
        this.productos.push(producto);
      }
      //devuelve todo el catalogo de productos
      traerRegistro(){
        return this.productos;
      }
      // devuelve producto por el ID
      registroPorId(id){
        return this.productos.find((producto)=> producto.id === id);
      }
      // devolver producto por nombre
      registroPorNombre(palabra){
        return this.productos.filter((producto) => 
        producto.nombre.toLowerCase().includes(palabra.toLowerCase())
        );
      }
      //devolver array con productos por tipo
      registroPorTipo(tipo){
        return this.productos.filter((producto)=> producto.tipo === tipo);
      }
      // devolver array con producto por categoria
      registroPorCategoria(categoria) {
        return this.productos.filter((producto) => producto.categoria === categoria);
      }
              // Función para cargar el carrito desde localStorage    
    }
  class Carrito{
    constructor (){
      //cargar storage
      const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
      //reiniciar
      this.carrito = carritoStorage || [];
      this.total =0;
      this.cantidadProductos =0;
      //llamamos listar intanciar carrito y actualizar con storage, si hay.
      this.listar();
    }
     
    // Método para vaciar el carrito
    vaciar() {
      //todo lo q implica este metodo reiniciar 
    this.carrito = [];
    this.total = 0;
    this.cantidadProductos = 0;
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    }

    // Método para saber si esta en el carrito el producto
    estaEnCarrito({ id }) {
      return this.carrito.find((producto) => producto.id === id);
    }

    agregar(producto){
      const productoEnCarrito = this.estaEnCarrito(producto);
      //sino esta push agregamos o sumamos cantidad
      if (!productoEnCarrito) {
        this.carrito.push({ ...producto, cantidad: 1 });
      } else {
        productoEnCarrito.cantidad++;
      }
      //guardamos en storage y mostramos en html
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      this.listar();
    }

    //metodo quitar el ultimo elemento por id
    quitar(id) {
      // Obento el índice de un producto según el ID, porque el
      // método splice requiere el índice
      const indice = this.carrito.findIndex((producto) => producto.id === id);
      // Si la cantidad es mayor a 1, le resto la cantidad en 1
      if (this.carrito[indice].cantidad > 1) {
        this.carrito[indice].cantidad--;
      } else {
        // Y sino, borramos del carrito el producto a quitar
        this.carrito.splice(indice, 1);
      }
      alert(`Se elimino el producto de su carrito!!!`);
      // Actualizo el storage
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      // Muestro los productos en el HTML
      this.listar();
    }
 
    //prodcutos al HTML
    listar (){
      //reiniciamos variables
      this.total=0;
      this.cantidadProductos=0;
      divCarrito.innerHTML="";

    //recorrer producto elegido y draw en el html
    for (const producto of this.carrito) {
      divCarrito.innerHTML += `
      <div class="productoCarrito border-2 border-rose-500 bg-rose-200 p-5 flex justify-between flex-col sm:flex-row">
        <h3 class="text-sm text-blue-900 py-3 font-bold">${producto.nombre}</h3>
        <h4 class="text-sm lg:text-base text-blue-900 py-3 font-bold">$${producto.precio}</h4>
        <br>
        <p class="text-sm lg:text-base text-blue-900 py-3 font-bold">${producto.cantidad}</p>
        <button class="btnQuitar delete-articulo borrarArticulo" data-id="${producto.id}">
        <span>Eliminar</span>
        <svg width="34" height="18" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
        </svg>
        </button>
      </div>
      `;
    //actualizar totales
    this.total += producto.precio * producto.cantidad;
    this.cantidadProductos += producto.cantidad;
   }   
   //agregarles evento a todos los botones, pero al no saber cantidad, primero hay q recorrer con for fachero
   const botonesQuitar = document.querySelectorAll(".btnQuitar");
   // Después los recorro uno por uno y les asigno el evento a cada uno
   for (const boton of botonesQuitar) {
     boton.addEventListener("click", (event) => {
       event.preventDefault();
       // Obtengo el id por el dataset (está asignado en this.listar())
       const idProducto = Number(boton.dataset.id);
       // Llamo al método quitar pasándole el ID del producto
       this.quitar(idProducto);
     });
   }
   // Actualizo los contadores del HTML
   spanCantidadProductos.innerText = this.cantidadProductos;
   spanTotalCarrito.innerText = this.total;
  }   
}

// Creación de instancias
const bd = new BaseDeDatos();

 // Elementos HTML
 const spanCantidadProductos = document.querySelector("#cantidadProductos");
 const spanTotalCarrito = document.querySelector("#totalCarrito");
 const divProductosPorFiltro = document.querySelector("#productos");
 const divCarrito = document.querySelector("#listaProductos");
 const sliderEstrenos = document.querySelector("#sliderEstrenos");
 const sliderSale = document.querySelector("#sliderSale");
 const sliderRetro = document.querySelector("#sliderRetro");
 const sliderPreventas =document.querySelector("#sliderPreventas");
 const divResultados = document.querySelector("#resultadosBusqueda");
 const inputBuscar = document.querySelector("#inputBuscar");

// Instaciamos la clase Carrito
const carrito = new Carrito();

// Llamar a la función listar de la instancia carrito
carrito.listar();

 // Mostramos el catalogo de db, al cargar la pagina
cargarProductos(bd.traerRegistro());

//funcion para mostrar productos del catalogo o buscador o por clases, dando dos parametros, q productos y donde
//function cargarProductos(productos, donde) {
  function cargarProductos(productos){
  //clean contenedor
  //donde.innerHTML = "";
  divProductosPorFiltro.innerHTML ="";
  // Filtrar productos por categoría
  for (const producto of productos) {
  //donde.innerHTML += `
  divProductosPorFiltro.innerHTML +=`
      <div class="card  m-10 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
        <img src="./image/${producto.imagen}" alt="zelda_Totk">
        <div class="card__content">
          <p class="card__title text-blue-950">${producto.nombre}</p>
          <p class="card__description text-blue-400">${producto.texto} <br> <br><span class="font-bold text-blue-950">Precio: $${producto.precio}</span></p>
          <button class="btnAgregar bg-rose-500 border-2 border-rose-200 m-5 p-2 rounded-xl text-white shadow-xl hover:bg-rose-900" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>
    `;
  }
}
  // Lista dinámica con todos los botones que haya en nuestro catálogo
  const botonesAgregar = document.querySelectorAll(".btnAgregar");  

  //recoremos botones del producto y le agregamos evento a cada uno
  for (const boton of botonesAgregar){
    boton.addEventListener('click', (event) => {
    //evitar comportamiento defauuult en HTML
    event.preventDefault();
    //guardar dataset Id del boton
    const idProducto = Number(boton.dataset.id);
    const producto = bd.registroPorId(idProducto);
    //cargar al carrito
    alert(`Se agregó ${producto.nombre} con un valor de $ ${producto.precio} al carrito.`);
    carrito.agregar(producto);
    });
  }
// Buscador
inputBuscar.addEventListener("input", () => {
  const palabra = inputBuscar.value.toLowerCase();
  const productos = bd.registroPorNombre(palabra); // Cambia esto

  divResultados.innerHTML = "";
  if (palabra === "") {
    // Ocultar el div si el input está vacío
    divResultados.style.display = "none";
  } else {
    // Mostrar el div cuando hay resultados
    divResultados.style.display = "block";

    if (productos.length === 0) {
      // Mostrar si no se encontraron resultados
      divResultados.innerHTML = "<p>No se encontraron resultados para la búsqueda.</p>";
    } else {
      // Recorrer los elementos y agregarlos al div
      for (const producto of productos) {
        const divProducto = document.createElement("div");
        divProducto.className = "card", "p-5";

        // Utiliza los datos del producto actual para crear el contenido
        divProducto.innerHTML = `
          <img src="./image/${producto.imagen}" alt="${producto.nombre}">
          <div class="card__content">
            <p class="card__title text-blue-950">${producto.nombre}</p>
            <p class="card__description text-blue-400">${producto.texto} <br> <br><span class="font-bold text-blue-950">Precio: $${producto.precio}</span></p>
            <button class="btnAgregar bg-rose-500 border-2 border-rose-200 m-5 p-2 rounded-xl text-white shadow-xl hover:bg-rose-900" data-id="${producto.id}">Agregar al carrito</button>
          </div>
        `;

        // Agrega el producto al contenedor
        divResultados.appendChild(divProducto);
      }
    }
  }
    // Lista dinámica con todos los botones que haya en nuestro catálogo
    const botonesAgregar = document.querySelectorAll(".btnAgregar");  

  for (const boton of botonesAgregar){
    boton.addEventListener('click', () => {
    //guardar dataset Id del boton
    const idProducto = Number(boton.dataset.id);
    const producto = bd.registroPorId(idProducto);
    //cargar al carrito
    alert(`Se agregó ${producto.nombre} con un valor de $ ${producto.precio} al carrito.`);
    carrito.agregar(producto);
    });
};


function comprar() {
  //verificar si esta vacio o lleno el carrito para dar distintos mensajes midiendo su longitud
      if (carrito.carrito.length === 0) {
          alert("El carrito se encuentra vacio, porfavor verifique agregar los articulos antes de confirmar la compra");
      } else{
          //dar un alert diciendo que pasa al area de pago
          alert("Su compra ha sido realizada con exito, seleccione medio de pago y metodo de envio, gracias por su compra en NEXT LEVEL!");
      }
}
function vaciar() {
   // Llama al método vaciar de carrito
  carrito.vaciar();

  // Vaciar el contenedor de elementos de la lista del carrito
  const divCarrito = document.getElementById("listaProductos");
  divCarrito.innerHTML = "";
  //alert y reiniciar
  alert("Su carrito ha sido borrado!");
  listar();
}

const botonVaciar = document.querySelector('.vaciar-carrito');
botonVaciar.addEventListener('click', vaciar);
  
//boton comprar en carrito con  funcionalidad
const botonComprar = document.querySelector('.comprar-carrito');
botonComprar.addEventListener('click', comprar);

//  mostrar productos del tipo  juegos
const btnMostrarJuegos = document.querySelector("#btnMostrarJuegos");
btnMostrarJuegos.addEventListener("click", () => {

  const productosJuegos = bd.registroPorTipo("Juego"); 
  const divProductosPorFiltro = document.querySelector("#productos");   

  cargarProductos(productosJuegos, divProductosPorFiltro);
});

//  mostrar productos del tipo accesorios
const btnMostrarAccesorios = document.querySelector("#btnMostrarAccesorios");
btnMostrarAccesorios.addEventListener("click", () => {

  const productosAccesorios= bd.registroPorTipo("Accesorio");
  const divProductosPorFiltro = document.querySelector("#productos");
  
  cargarProductos(productosAccesorios, divProductosPorFiltro);
});

// mostrar productos deel tipo consolas 
const btnMostrarConsolas = document.querySelector("#btnMostrarConsolas");
btnMostrarConsolas.addEventListener("click", () => {

  const productosConsolas= bd.registroPorTipo("Consola");
  const divProductosPorFiltro = document.querySelector("#productos");

  cargarProductos(productosConsolas, divProductosPorFiltro);
  });

})
 


