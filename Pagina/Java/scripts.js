  
  jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
    menu=$('.navegation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else
        {
            menu.addClass('show');
        }
        
    });

});

document.querySelectorAll('.galeria img').forEach(Image =>{
    Image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = Image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}

//------------- GALERIA -------------------


//-------------- VISITANTES ---------------


//----------------Accesibilidad---------------

function cambiotamano(type){
    //IDS 
    let ids = ["#navegador","#container_top","#boton_ayuda","#mision","#evento_title","#texto_evento","#titulo_evento1","#titulo_evento2"
    ,"#evento_donacion","#titulo_donacion","#titulo_donacion2","#footer_1","#footer_2"];

    ids.forEach(id => {
        //obtiene elemento
    let el= document.querySelector(id)

    //obtener tamaño de letra 
    let fontSize = window.getComputedStyle(el,null).getPropertyValue("font-size");

    //convertir a float
    fontSize = parseFloat(fontSize);

    //aumentar o disminuir
    if(type === "Aumentar"){
        el.style.fontSize = (fontSize + 5) + "px";
    }else if (type === "Disminuir"){
        el.style.fontSize = (fontSize - 5) + "px";
    }
}
);
}