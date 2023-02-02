$(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");

        jQuery(".hamb i").toggleClass("fa-rectangle-xmark");
        
    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-rectangle-xmark");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76
        })
    })
}

//funcion mostrar/ocultar formulario

const formulario = document.querySelector("#formulario");
const btn_desplegar = document.querySelector("#btn_desplegar");
var cont=0;

  function aparecer(){
      if(cont==0)
      {
        formulario.style.opacity="1";
        formulario.style.transition="opacity 1s"
        cont=1;
      }
      else{formulario.style.opacity="0";
        cont=0;
      }
    }

btn_desplegar.addEventListener("click",aparecer,true);




//funcion dise;o apartamentos

const mostrar = document.getElementById("ocultar");

function tipo(imagen) {
  var divtexto = document.getElementById("texto-cambio");
  divtexto.innerHTML = "<p>* Hall de acceso. <br>* Sala Comedor. <br>* Cocina Abierta. <br>* Area de Ropas. <br>* 3 Habitaciones. <br>* 2 Baños.<br> <br> Área Construida 62.32 m² <br> Área Privada 55.56 m² <br><br> Diseño Inteligente: <br>Todos los espacios iluminados y ventilados naturalmente. <br> <br>Únicos en el sector con area construida de: <h2>62.32 m²</h2></p > "
  let divimagen = document.getElementById("imagen-cambio");
  divimagen.src = imagen;
 
}


function planta(imagen) {
  var divtexto = document.getElementById("texto-cambio");
  divtexto.innerHTML = "<h3>Planta Arquitectónica <br>Piso Tipo</h3><p>Cada torre tiene 16 parqueaderos cubiertos en el nivel de sótano, con una excelente iluminación y ventilación. Son estacionamientos en paralelo (sin ningún tipo de servidumbre), con dimensiones de 2.35 mts por 5 mts, con acceso directo desde el ascensor y la escalera, permitiendo comodidad y funcionalidad. <br><br>Únicos en el sector con area <br>construida de: </p><h2>62.32 m²</h2>"
  let divimagen = document.getElementById("imagen-cambio");
  divimagen.src = imagen;


}

function zona(imagen) {
  var divtexto = document.getElementById("texto-cambio");
  divtexto.innerHTML = " <h3>Planta arquitectónica <br> zonificación etapas</h3><p>Nuestro Proyecto ha sido diseñado y desarrollado, teniendocomo punto de partida la comodidad y funcionalidad de cada uno de sus espacios, adicinalmente tiene amplias zonas verdes con senderos peatonales para el disfrute en familia. <br><br>Área Total 10794 m² <br><br>Únicos en el sector con <br>ascensor hasta el sótano.<br>Solo 4 apartamentos<br>por piso.</p>"
  let divimagen = document.getElementById("imagen-cambio");
  divimagen.src = imagen;

}

 var etapa_1 = document.getElementById('etapa1');
var etapa_2 = document.getElementById("etapa3");
 var etapa_3 = document.getElementById("etapa4");
 var etapa_4 = document.getElementById("etapa5");
 document.getElementsByClassName

function bloque1(){
  etapa_1.style.display = "block"; 
  etapa_2.style.display = 'none';
  etapa_3.style.display = 'none';
  etapa_4.style.display = 'none';

}


function bloque2(){
  etapa_1.style.display = 'none'; 
  etapa_2.style.display = 'block';
  etapa_3.style.display = 'none';
  etapa_4.style.display = 'none';

}


function bloque3(){
  etapa_1.style.display = 'none'; 
  etapa_2.style.display = 'none';
  etapa_3.style.display = 'block';
  etapa_4.style.display = 'none';
  
  
}


function bloque4(){
  etapa_1.style.display = 'none'; 
  etapa_2.style.display = 'none';
  etapa_3.style.display = 'none';
  etapa_4.style.display = 'block';
}




var unidad1= document.getElementById("unidadetapa1");
var unidad3= document.getElementById("unidadetapa3");
var unidad4= document.getElementById("unidadetapa4");
var unidad5= document.getElementById("unidadetapa5");

function izquierda(){
  unidad1.style.transform = 'translate(0, 0)';
  unidad3.style.transform = 'translate(0, 0)';
  unidad4.style.transform = 'translate(0, 0)';
  unidad5.style.transform = 'translate(0, 0)';
 
}

function derecha(){
  unidad1.style.transform = 'translate(-465px, 0)';
  unidad3.style.transform = 'translate(-465px, 0)';
  unidad4.style.transform = 'translate(-465px, 0)';
  unidad5.style.transform = 'translate(-465px, 0)';
  
}