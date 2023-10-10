# Proyecto para Coderhoyse curso JavaScript, NEXT LEVEL! ... E-shop de Tienda de Consolas y Juegos de Nintendo

Este proyecto es una tienda en línea que ofrece consolas y juegos de Nintendo, tanto nuevos como retro. El desarrollo se ha realizado utilizando HTML, Tailwind CSS, y se ha agregado un toque de CSS personalizado, JavaScript Vainilla.

## Entra desde cualquier dispositivo.
- acceder al sitio desde una computadora, tablet y celular para tener la misma experiencia de navegacion, solo que en pc, al moverte por el lado derecho, se abre solo el aside de carrito, mas alla de que hay un boton por accesibilidad.
  
### Catálogo
- Puedes agregar artículos de cualquier parte, sea del div de resultado de busqueda, como en los sliders por categoria o debajo en filtrado por tipo.
- El carrito incluye total parcial, total de articulos, posibilidad de eliminar el articulo de manera  individual o vaciar el mismo.

### Usuarios con local Storage
-Puedes registrarte y crear tu cuenta, se almacenan en local storage al igual que el contenido del carrito

### Búsqueda
- Utilice un array de base de datos para el buscador en todas las páginas (dataBase). Se utiliza el input de la pagina, dando resultados parciales debajo con el articulo, mas su precio, distingue mayusculas y minusculas. Recomendamos utilizar palabras como "Mario", "Zelda" o "Joystick".

### Funcionalidades Implementadas con JS

- Sliders tanto de imagenes de presentacion como de cards de manera automatica o de botones de sliders para una experiencia de navegación dinámica.
- Accion de busqueda desde su imput, de manera parcial ando resultados y draw a tiempo real.
- Desplazamiento del carrito y navegación.
- Acciones en los íconos de carrito (billete), login y sign in.
- Botones para agregar artículos al carrito desde toda la app web.
- Funcionalidad completa del carrito, incluyendo comprar, vaciar y ocultar el carrito.
- Agregar artículos al carrito en tiempo real después de hacer clic en "Agregar al carrito"
- Botón "X" para eliminar artículos individualmente del carrito.
- Función para calcular el total del carrito utilizando un bucle forEach y la cantidad de articulos individual y el total.
- Actualización en tiempo real del valor total en el HTML al agregar, quitar o vaciar el carrito.
- Devolver stock cuando quitamos un articulo, desde vaciar carrito o quitando indivicualmente por indice.
- Busqueda en tiempo real, a los resultados parciales por debajo de lo ingresado por su input sobre nuestra base de datos, con nombre y precio de articulo. 
- En desktop, al mover le mouse por el 2% del margen derecho de la web se desliza el carrito haciendose visible, al sacar el mouse del carrito, se oculta automaticamente.  En el caso de dispositivo movil, se hacer un toque en este 5% para q se abra el aside o abrirlo desde el boton del nav.
- Login funcional, con sus respectivos alertas de bienvenida o error al importar datos.
- Filtrado de articulos por tipo en tiempo real con la posibilida de comprar desde alli.
- Almacenamiento de datos de creacion de cuenta y contenido carrito en local storage.
- Base de datos dinamica y cargado en tiempo real de articulos, en cada seccion, con filtros.
- Agregado de class lists y funciones de botones con eventos en tiempo real una vez dibujados.
- Acccion slider movimiento automatico y divs de cards tambien en cateogrias.
- Dibujado en divs el resultado de busqueda, adaptando un div solo para eso, modificandole su tamano de manera individual.
- Utilizacion de libreria en estetica de Alerts.
- Asincronismo.
- Ajax y fetch.
- Funcion desplegable con terminos y condiciones en el main para hacer un primer intento de SAP.
- Todas las funciones de ingreso de deciciones, tiene su verificacion, tanto login sin contenido, como sign in o querer comprar con el carrito vacio.

#Autor
- **Mauricio Arbelaiz**

librerias:
https://animate.style/
https://sweetalert2.github.io/
https://apvarun.github.io/toastify-js/

¡Gracias por visitar nuestro proyecto!
