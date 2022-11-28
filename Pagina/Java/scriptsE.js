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
var tbody = document.getElementById("containereve");
var event=true;

function AddItemToTable(Nombre, Imagen, Descripcion){
    let trow = document.createElement('div');

    let td1 = document.createElement('p');
    let td2 = document.createElement('div');
    let td3 = document.createElement('div');
    let td4 = document.createElement('img');
    let td5 = document.createElement('p');
    if(event == true){
        trow.classList.add('evento');
        event=false;
    }
    else{
        trow.classList.add('evento1');
        event=true;
    }
    td1.classList.add('eventotitle');
    td2.classList.add('cosas');
    td3.classList.add('image');
    td5.classList.add('eventocont');

    td4.src = Imagen;
    td1.innerHTML = Nombre;
    td5.innerHTML = Descripcion;

    td3.appendChild(td4);

    td2.appendChild(td3);
    td2.appendChild(td5);

    trow.appendChild(td1);
    trow.appendChild(td2);

    tbody.appendChild(trow);
}

// Inserccion de elementos a tabla -------------------------------------------------------

function Añadiratabla(LaEvento){
    stdNo = 0;
    tbody.innerHTML="";
    LaEvento.forEach(element =>{
        AddItemToTable(element.Titulo,element.Imagen,element.Informacion);
    });

}

// Lllamado de elementos----------------------------------------------------------

const IDref = ref(db);

function llamadatos(){
    get(child(IDref, "Base/Eventos")).then((snapshot) =>{

        var Evento = [];
       // var Donadores = document.getElementById("donadores");


        snapshot.forEach(childSnapshot => {
            Evento.push(childSnapshot.val())
        
        
            console.log(Evento[0].Imagen);
        });

        Añadiratabla(Evento);
    
    })
}

window.onload = llamadatos;


