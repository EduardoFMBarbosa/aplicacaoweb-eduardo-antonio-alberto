// Importar Firebase modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuração copiada do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD0RY4TNFLxKPXwGT-Cv04C4RI7rX1rG8Y",
  authDomain: "aplica-635a0.firebaseapp.com",
  projectId: "aplica-635a0",
  storageBucket: "aplica-635a0.firebasestorage.app",
  messagingSenderId: "390289147430",
  appId: "1:390289147430:web:3e05676eda274fe1cc08e7"
};

// Iniciar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
