/*--------------- Blog Slider ---------------*/
var swiper = new Swiper(".blog-slider", { 

    spaceBetween: 20, <!--  espacio entre los slides en píxeles -->
    loop: true, <!-- el slider debe repetirse indefinidamente  -->
    autoplay: { <!--hace que el slider avance automáticamente -->
        display: 2500, <!-- tiempo de espera entre el cambio de slides en milisegundos -->
        disableOnInteraction: false, <!-- el autoplay no se detendrá si el usuario interactúa con el slider (por ejemplo, si hace clic o arrastra) -->
    },
    
    pagination: { <!--  opción para mostrar controles de navegación -->
        el: ".swiper-pagination2", <!-- CSS donde se debe mostrar-->
        clickable:true, <!-- el usuario puede hacer clic en un punto de la paginación para navegar directamente a ese slide -->
    },

    breakpoints: { <!--  reglas de respuesta a diferentes tamaños de pantalla -->
        0: {
            slidesPerView: 1, <!-- Cuando el ancho de la ventana es de 0 píxeles o más (es decir, en dispositivos pequeños como móviles), se mostrará solo 1 slide a la vez. -->
        },

        768: {
            slidesPerView: 2, <!-- : Cuando la ventana tiene al menos 768 píxeles de ancho (típico en tablets), se mostrarán 2 slides a la vez. -->
        },

        1024: {
            slidesPerView: 3, <!-- Cuando el ancho de la ventana es de 1024 píxeles o más (pantallas de escritorio o dispositivos más grandes), se mostrarán 3 slides a la vez. -->
        },
    },

});