window.onload = init;

//------------------------------------------------------------ XML ---------------------------------------------------------------------

/*
function init(){

  //let imagenes =["imagen/Imagen_0.jpg","imagen/Imagen_5.jpg", "imagen/Imagen_11.jpg","imagen/Imagen_12.jpg","imagen/Imagen_13.jpg"];
  let pepe=0;
  let imagen = document.getElementsByClassName("contenedor");
  let descripcion = document.getElementsByClassName("desc");
  let titulo = document.getElementsByClassName("titulo");

  if (window.XMLHttpRequest)
  {
	  // Objeto para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
  }else{
	  // Objeto para IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 
    // Abrimos el archivo
    xmlhttp.open("GET","Galeria.xml",false);
    xmlhttp.send();
  
    // Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor
    xmlDoc=xmlhttp.responseXML;
   
    // Obtenemos todos los nodos denominados foro del archivo xml
    var imagenes=xmlDoc.getElementsByTagName("imagen");
 
    tit=imagenes[pepe].getElementsByTagName("titulo")[0].childNodes[0].nodeValue
    desc=imagenes[pepe].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue
    url=imagenes[pepe].getElementsByTagName("url")[0].childNodes[0].nodeValue

    imagen[0].setAttribute("src", url);
    descripcion[0].setAttribute("src",desc);
    titulo[0].setAttribute("src",tit);
    
    let button = document.querySelector('#button');
    button.addEventListener('mouseup', (e) => {
     let log = document.querySelector('#log');
     switch (e.button) {
    case 0:
        if(pepe < imagenes.length-1 && pepe >=0){
          pepe=pepe+1;
          tit=imagenes[pepe].getElementsByTagName("titulo")[0].childNodes[0].nodeValue
          desc=imagenes[pepe].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue
          url=imagenes[pepe].getElementsByTagName("url")[0].childNodes[0].nodeValue

          imagen[0].setAttribute("src", url);
          descripcion[0].setAttribute("src",desc);
          titulo[0].setAttribute("src",tit);
          }
        break;
      case 2:
          
          if(pepe>0 && pepe < imagenes.length ){
          pepe=pepe-1;
          tit=imagenes[pepe].getElementsByTagName("titulo")[0].childNodes[0].nodeValue
          desc=imagenes[pepe].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue
          url=imagenes[pepe].getElementsByTagName("url")[0].childNodes[0].nodeValue

          imagen[0].setAttribute("src", url);
          descripcion[0].setAttribute("src",desc);
          titulo[0].setAttribute("src",tit);
          }
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
      }
      });

      console.log("buenas");
} 
*/

//------------------------------------------------------------ JSON ---------------------------------------------------------------------

function init(){

  //let imagenes =["imagen/Imagen_0.jpg","imagen/Imagen_5.jpg", "imagen/Imagen_11.jpg","imagen/Imagen_12.jpg","imagen/Imagen_13.jpg"];
  let pepe=0;
  let imagen = document.getElementsByClassName("contenedor");
  let descripcion = document.getElementsByClassName("desc");
  let titulo = document.getElementsByClassName("titulo");

  if (window.XMLHttpRequest)
  {
	  // Objeto para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
  }else{
	  // Objeto para IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 
    // Abrimos el archivo
    xmlhttp.open("GET","Galeria.json",true);
    xmlhttp.send();
console.log("hola");
    xmlhttp.onload = function(){
      const jsonDoc = JSON.parse(xmlhttp.responseText);
      const imagenes = jsonDoc.galeria.imagen;
      tit=imagenes[pepe].titulo;
      desc=imagenes[pepe].descripcion;
      url=imagenes[pepe].url;

      imagen[0].setAttribute("src", url);
      document.getElementsByClassName('desc')[0].innerHTML = desc; 
      document.getElementsByClassName('titulo')[0].innerHTML = tit; 
      //document.getElementsByClassName('titulo')[0].innerHTML = JSON.stringify(jsonDoc); 
      let button = document.querySelector('#button');
      button.addEventListener('mouseup', (e) => {
       let log = document.querySelector('#log');
       switch (e.button) {
      case 0:
          if(pepe < imagenes.length-1 && pepe >=0){
            pepe=pepe+1;
            tit=imagenes[pepe].titulo;
            desc=imagenes[pepe].descripcion;
            url=imagenes[pepe].url;
  
            imagen[0].setAttribute("src", url);
            document.getElementsByClassName('desc')[0].innerHTML = desc; 
            document.getElementsByClassName('titulo')[0].innerHTML = tit; 
            }
          break;
        case 2:
            
            if(pepe>0 && pepe < imagenes.length ){
            pepe=pepe-1;
            //tit=imagenes[pepe].
            //desc=imagenes[pepe].
            url=imagenes[pepe].url;

            imagen[0].setAttribute("src", url);
            descripcion[0].setAttribute("src",desc);
            titulo[0].setAttribute("src",tit);
            }
          break;
        default:
          log.textContent = `Unknown button code: ${e.button}`;
        }
        });
      
    }

    
} 
    
    




