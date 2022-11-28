var cont = 0; //contador para tamaño
var tono = 0;
var ID = [];
var color = document.querySelector('html');
ID=$("*").map(function(){
    if(this.id){
        return "#"+this.id;
    }
}).get();
console.log(ID);

function negative(){

    if (tono == 0){
    color.style.setProperty('filter','invert(1)');
    tono++;
    }
    else if(tono  ==1 )
    {
    color.style.setProperty('filter','invert(0)');
    tono--;
    }
}

function cont_tam(tipo){
    if(cont >= 3)
    {
        //console.log("Contador mayor");
        if(tipo === "menos"){
        cambiotamaño('Disminuir');
        cont--;
        }
    }
    else if(cont <= -2)
    {
        if(tipo === "mas"){
            cambiotamaño('Aumentar');
            cont++;
    
        }
    }
    else if(tipo === "mas"){
        cambiotamaño('Aumentar');
        cont++;
    
    }
    else if(tipo === "menos"){
    
        cambiotamaño('Disminuir');
        cont--;
    
    }
    console.log(cont);
    }
    
function cambiotamaño(type){

        //IDS 
        /*let ids = ["#navegador","#container_top","#boton_ayuda","#mision","#evento_title","#texto_evento","#titulo_evento1","#titulo_evento2"
        ,"#evento_donacion","#titulo_donacion","#titulo_donacion2","#footer_1","#footer_2"];
        console.log(ids);*/
    
        ID.forEach(id => {
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
    });
    }
