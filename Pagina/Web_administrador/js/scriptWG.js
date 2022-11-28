import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, child, push, get, onValue, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { firebaseConfig, app, db }  from"./baseW.js";

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras, numeros, guion y guion_bajo
	mensaje: /^.{1,600}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^.{1,600}$/, // Letras y espacios, pueden llevar acentos.

}

const campos = {
	usuario: false,
	mensaje: false,
	correo: false,

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');

		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.mensaje  && campos.correo){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

		

		setTimeout(() => {
		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	//window.open("imagen/Certificado De Donacion.pdf","_blank");
		}, 2);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});


	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

const IDref = ref(db);

const DonID = push(child(IDref, "Base/Galeria/ID")).key;

boton.addEventListener('click',(e) => {
	var Nombre = document.getElementById("usuario").value;
	var Descripcion = document.getElementById("mensaje").value;
	var URL = document.getElementById("correo").value;


	set(ref(db, "Base/Galeria/ID" + DonID),{
		Nombre: Nombre,
		Imagen: URL,
		Descripcion: Descripcion
	});

	alert('saved');
});
