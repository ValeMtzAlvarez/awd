$(document).ready(function(){

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){ <!-- Si el filtro es "all" (mostrar todas las imágenes) -->
            $(".gallery .image").show(400); <!--  // Muestra todas las imágenes con una animación de 400ms -->
        }
        else{ <!-- Si el filtro no es "all" -->
            $(".gallery .image").not("."+filter).hide(200); <!-- // Oculta todas las imágenes que no tengan la clase del filtro (animación de 200ms) -->
            $(".gallery .image").filter("."+filter).show(400); <!-- // Oculta todas las imágenes que no tengan la clase del filtro (animación de 400ms) -->
        }
    })

  
    $(".gallery").magnificPopup({  <!-- Los enlaces dentro de .gallery son los que abren el popup -->
        
        delegate: "a",
        type: "image", <!-- el contenido que abre es una imagen -->
        removalDelay: 500,  <!-- // Elimina el contenido del popup con un retraso de 500ms para la animación de salida -->
        gallery:{
            enabled: true
        },

        callbacks: {
            beforeOpen: function() {
              
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'); <!--  Agrega una clase de animación a la figura de la imagen -->
               this.st.mainClass = this.st.el.attr('data-effect'); <!-- Toma el valor del atributo 'data-effect' del enlace para agregar un efecto de animación -->
            }
          },
          closeOnContentClick: true,
          midClick: true 

    })


});