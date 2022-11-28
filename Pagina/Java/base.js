  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    export const firebaseConfig = {
      apiKey: "AIzaSyCK22m5rz2OMkD8fp_NzXNPhPgfbVOxMp4",
      authDomain: "technologias-1880c.firebaseapp.com",
      projectId: "technologias-1880c",
      storageBucket: "technologias-1880c.appspot.com",
      messagingSenderId: "1005030369305",
      appId: "1:1005030369305:web:d70b7448035e32b770a288",
      measurementId: "G-1YTBV09HF6"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const db = getDatabase(app);
    export const sg = getStorage(app);
  

  

