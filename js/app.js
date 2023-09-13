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