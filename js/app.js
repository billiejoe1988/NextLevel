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

// hacer visible-invisible el nav
window.addEventListener("load", function () {
    const nav = document.querySelector("nav");
    const mostrarOcultarMenuButton = document.getElementById("mostrar-ocultar-menu");

    mostrarOcultarMenuButton.addEventListener("click", () => {
        nav.classList.toggle("hidden");
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
        <div class="border-2 border-rose-500 bg-rose-200 p-5 flex justify-between flex-col sm:flex-row">
            <h3 class="text-sm text-blue-900 py-3 font-bold">${articulo.nombre}</h3>
            <h4 class="text-sm lg:text-base text-blue-900 py-3 font-bold">$${articulo.precio}</h4>
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
    //verificar si esta vacio o lleno el carrito para dar distintos mensajes midiendo su longitud
        if (carrito.length === 0) {
            alert("El carrito se encuentra vacio, porfavor verifique agregar los articulos antes de confirmar la compra");
        } else{
            //dar un alert diciendo que pasa al area de pago
            alert("Su compra ha sido realizada con exito, seleccione medio de pago y metodo de envio, gracias por su compra en NEXT LEVEL!");
        }
}

//boton comprar en arrito con  funcionalidad
  const botonComprar = document.querySelector('.comprar-carrito');
  botonComprar.addEventListener('click', comprar);

//ingreso inputs formularios a array

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
  
    if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena) {
      alert(`Bienvenido ${usuarioEncontrado.nombre}`);
    } else {
      alert("Error. Ingresar Nuevamente los datos.");
    }
  }
  //boton login
  const botonLogear = document.querySelector('.login-ingresar');
botonLogear.addEventListener('click', logIn);
