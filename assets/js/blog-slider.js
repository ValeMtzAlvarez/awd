/*--------------- Blog Slider ---------------*/
var swiper = new Swiper(".blog-slider", { 

    spaceBetween: 20, <!--  espacio entre los slides en p�xeles -->
    loop: true, <!-- el slider debe repetirse indefinidamente  -->
    autoplay: { <!--hace que el slider avance autom�ticamente -->
        display: 2500, <!-- tiempo de espera entre el cambio de slides en milisegundos -->
        disableOnInteraction: false, <!-- el autoplay no se detendr� si el usuario interact�a con el slider (por ejemplo, si hace clic o arrastra) -->
    },
    
    pagination: { <!--  opci�n para mostrar controles de navegaci�n -->
        el: ".swiper-pagination2", <!-- CSS donde se debe mostrar-->
        clickable:true, <!-- el usuario puede hacer clic en un punto de la paginaci�n para navegar directamente a ese slide -->
    },

    breakpoints: { <!--  reglas de respuesta a diferentes tama�os de pantalla -->
        0: {
            slidesPerView: 1, <!-- Cuando el ancho de la ventana es de 0 p�xeles o m�s (es decir, en dispositivos peque�os como m�viles), se mostrar� solo 1 slide a la vez. -->
        },

        768: {
            slidesPerView: 2, <!-- : Cuando la ventana tiene al menos 768 p�xeles de ancho (t�pico en tablets), se mostrar�n 2 slides a la vez. -->
        },

        1024: {
            slidesPerView: 3, <!-- Cuando el ancho de la ventana es de 1024 p�xeles o m�s (pantallas de escritorio o dispositivos m�s grandes), se mostrar�n 3 slides a la vez. -->
        },
    },

});