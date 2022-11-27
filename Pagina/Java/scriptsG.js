import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { db }  from"./base.js";



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


var stdNo = 0;
var tbody = document.getElementById("Galeria");

function AddItemToTable(Nombre, Imagen, Descripcion){
    let trow = document.createElement('div');

    let td1 = document.createElement('img');
    let td2 = document.createElement('div');
    let td3 = document.createElement('div');
    let td4 = document.createElement('p');

    trow.classList.add('box_g');
    td2.classList.add('overlay','overlay--blur');
    td3.classList.add('img_title');
    td4.classList.add('img_desc');

    td1.src = Imagen;
    td3.innerHTML = Nombre;
    td4.innerHTML = Descripcion;



    td2.appendChild(td3);
    td2.appendChild(td4);

    trow.appendChild(td1);
    trow.appendChild(td2);

    tbody.appendChild(trow);
}

// Inserccion de elementos a tabla -------------------------------------------------------

function Añadiratabla(LaGaleria){
    stdNo = 0;
    tbody.innerHTML="";
    LaGaleria.forEach(element =>{
        AddItemToTable(element.Nombre,element.Imagen,element.Descripcion);
    });

}

// Lllamado de elementos----------------------------------------------------------

const IDref = ref(db);

function llamadatos(){
    get(child(IDref, "Base/Galeria")).then((snapshot) =>{

        var Galeria = [];
       // var Donadores = document.getElementById("donadores");



        snapshot.forEach(childSnapshot => {
            Galeria.push(childSnapshot.val())
        
        
            console.log(Galeria[0].Imagen);
        });

        Añadiratabla(Galeria);
    
    })
}


window.onload = llamadatos;



