import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { firebaseConfig, app, sg }  from"./base.js";


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


