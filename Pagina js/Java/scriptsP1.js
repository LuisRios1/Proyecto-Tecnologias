window.onload = init;

function init(){
    console.log("buenas tardes")
    let imagen = document.getElementsByClassName("contenedor");
    let imagenes =["imagen/Imagen_0.jpg","imagen/Imagen_5.jpg", "imagen/Imagen_11.jpg","imagen/Imagen_12.jpg","imagen/Imagen_13.jpg"];
    let pepe=0;
    imagen[0].setAttribute("src",imagenes[pepe]);
    //log.textContent = 'click der. para imagen anterior y click izq. para siguiente imagen';


    let button = document.querySelector('#button');
    button.addEventListener('mouseup', (e) => {
     let log = document.querySelector('#log');
     switch (e.button) {
    case 0:

        if(pepe<4 && pepe >=0){
        pepe=pepe+1;
        imagen[0].setAttribute("src",imagenes[pepe]);
        }
      break;
    case 2:
        
        if(pepe>0 && pepe<5 ){
        pepe=pepe-1;
        imagen[0].setAttribute("src",imagenes[pepe]);
        }
      break;
    default:
      log.textContent = `Unknown button code: ${e.button}`;
    }
    });
    
    

    
    console.log("buenas");
}