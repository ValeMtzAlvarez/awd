$(document).ready(function(){

    $(".button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter = $(this).attr("data-filter");
    
        if (filter == "all"){ <!-- Si el filtro es "all" (mostrar todas las im�genes) -->
            $(".gallery .image").show(400); <!--  // Muestra todas las im�genes con una animaci�n de 400ms -->
        }
        else{ <!-- Si el filtro no es "all" -->
            $(".gallery .image").not("."+filter).hide(200); <!-- // Oculta todas las im�genes que no tengan la clase del filtro (animaci�n de 200ms) -->
            $(".gallery .image").filter("."+filter).show(400); <!-- // Oculta todas las im�genes que no tengan la clase del filtro (animaci�n de 400ms) -->
        }
    })

  
    $(".gallery").magnificPopup({  <!-- Los enlaces dentro de .gallery son los que abren el popup -->
        
        delegate: "a",
        type: "image", <!-- el contenido que abre es una imagen -->
        removalDelay: 500,  <!-- // Elimina el contenido del popup con un retraso de 500ms para la animaci�n de salida -->
        gallery:{
            enabled: true
        },

        callbacks: {
            beforeOpen: function() {
              
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim'); <!--  Agrega una clase de animaci�n a la figura de la imagen -->
               this.st.mainClass = this.st.el.attr('data-effect'); <!-- Toma el valor del atributo 'data-effect' del enlace para agregar un efecto de animaci�n -->
            }
          },
          closeOnContentClick: true,
          midClick: true 

    })


});