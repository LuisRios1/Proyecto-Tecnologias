  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase, ref, child, push , set, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getStorage, ref as refe, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
  import { sg, db, app }  from"./base.js";


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-ZÀ-ÿ\s]{4,50}$/, // Letras, numeros, guion y guion_bajo
	mensaje: /^.{1,600}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{4,10}$/ // 4 a 10 numeros.
}

const campos = {
	usuario: false,
	mensaje: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
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


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value == inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.usuario && campos.mensaje  && campos.correo && campos.telefono && campos.password){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

		

		setTimeout(() => {
		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	//window.open("imagen/Certificado De Donacion.pdf","_blank");
		}, 2000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});


	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

//------------------------//

var carga = document.getElementById("password2");
if(carga){
    carga.addEventListener("change", subirbase, false);
}

var dURL;

function subirbase(){
    var file = carga.files[0];

    var uploadTask = uploadBytesResumable(refe(sg, "Imagenes/"  + file.name), file);

    uploadTask.on('state_changed',
    (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
    },
    (error) => {
        
    },
    () =>{
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           // console.log('File available at', downloadURL);
		   dURL = downloadURL;
		   console.log(dURL);
		   return dURL;
          });
        }
        
    );
}


//-----------------//

const IDref = ref(db);

const DonID = push(child(IDref, "Base/Usuarios/ID")).key;

boton.addEventListener('click',(e) => {
	var Usuario = document.getElementById("usuario").value;
	var CC = document.getElementById("mensaje").value;
	var Correo = document.getElementById("correo").value;
	var Donativo = document.getElementById("telefono").value;
	var Refe = document.getElementById("password").value;
	var Arefe = document.getElementById("password2").innerHTML = dURL;

	set(ref(db, "Base/Usuarios/ID" + DonID),{
		Nombre: Usuario,
		Cedula: CC,
		Correo: Correo,
		Donativo: Donativo,
		Referencia: Refe,
		Areferencia: Arefe,
	});
	alert('saved');
});