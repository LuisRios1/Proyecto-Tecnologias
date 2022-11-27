
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

import { db, firebaseConfig, app }  from "./baseW.js";

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
var tbody = document.getElementById("contenido");



function AddItemToTable(nombre,cedula,referencia,areferencia,donativo,correo){
    let trow = document.createElement("tr");

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('img');
    let td9 = document.createElement('div');
    let td10 = document.createElement('button');
    let td11 = document.createElement('td');

    var nn = ++stdNo;
    td1.innerHTML = nn;
    td2.innerHTML = nombre;
    td3.innerHTML = cedula;
    td4.innerHTML = referencia;
    td5.innerHTML = areferencia;
    td6.innerHTML = donativo;
    td8.src = correo;

    td10.classList.add('formulario__btn');
    td10.ariaLabel = "Boton de enviar";
    td10.innerText = "Eliminar";
    td10.type = "submit";
    td10.id = "eliminar";



    td9.appendChild(td10);
    
    td11.appendChild(td9);
    td7.appendChild(td8);

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td11);


    tbody.appendChild(trow);
}

// Inserccion de elementos a tabla -------------------------------------------------------

function Añadiratabla(ElDonador){
    stdNo = 0;
    tbody.innerHTML="";
    ElDonador.forEach(element =>{
        AddItemToTable(element.Nombre,element.Cedula,element.Correo,element.Donativo,element.Referencia,element.Areferencia);
        //console.log(stdNo);
    });

}

// Lllamado de elementos----------------------------------------------------------

const IDref = ref(db);
var idd = [];

function llamadatos(){
    get(child(IDref, "Base/Usuarios")).then((snapshot) =>{
        

        var donador = [];
        
        var Donadores = document.getElementById("donadores");
        


        snapshot.forEach(childSnapshot => {
            donador.push(childSnapshot.val())

            idd.push(childSnapshot.key);
            console.log(idd);
            Donadores.innerText = " " + donador.length;
        
            
        });
        
        Añadiratabla(donador);
    })
}

window.onload = llamadatos;

function eliminaar(n){
    //ref(IDref, "Base/Usuarios" + idd[n-1]).remove();
    var a = idd[n-1];
    return a;
}



