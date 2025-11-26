import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ELEMENTOS DAS TELAS
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotForm = document.getElementById("forgot-form");
const userListView = document.getElementById("user-list-view");

const loginMessage = document.getElementById("login-message");
const registerMessage = document.getElementById("register-message");
const forgotMessage = document.getElementById("forgot-message");

const usersContainer = document.getElementById("users-container");


// ============ LOGIN ============
async function handleLogin() {
  const user = document.getElementById("login-username").value.trim();
  const pass = document.getElementById("login-password").value.trim();

  loginMessage.textContent = "";

  if (!user || !pass) {
    loginMessage.textContent = "Preencha todos os campos!";
    return;
  }

  if (user === "admin" && pass === "123456") {
    await loadUsers();
    openScreen(userListView);
  } else {
    loginMessage.textContent = "Usuário ou senha inválidos!";
  }
}


// ============ CADASTRO ============
async function registerUser() {
  const nome = document.getElementById("reg-nome").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const senha = document.getElementById("reg-senha").value.trim();

  registerMessage.textContent = "";

  if (!nome || !email || !senha) {
    registerMessage.textContent = "Preencha todos os campos!";
    return;
  }

  try {
    await addDoc(collection(db, "usuarios"), {
      nome,
      email,
      senha
    });

    registerMessage.style.color = "green";
    registerMessage.textContent = "Conta criada com sucesso!";

    setTimeout(() => backToLogin(), 1500);

  } catch (err) {
    registerMessage.textContent = "Erro ao cadastrar!";
    console.error(err);
  }
}


// ============ LISTA DE USUÁRIOS ============
async function loadUsers() {
  usersContainer.innerHTML = "<li>Carregando...</li>";

  const querySnapshot = await getDocs(collection(db, "usuarios"));

  usersContainer.innerHTML = "";

  querySnapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.nome} — ${data.email}`;
    usersContainer.appendChild(li);
  });
}


// ============ RECUPERAR SENHA ============
function sendRecovery() {
  const email = document.getElementById("recover-email").value.trim();

  if (!email) {
    forgotMessage.textContent = "Informe um e-mail válido!";
    return;
  }

  forgotMessage.style.color = "green";
  forgotMessage.textContent = "Link de recuperação enviado!";
}


// ============ TROCA DE TELAS ============
function openScreen(screen) {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  forgotForm.style.display = "none";
  userListView.style.display = "none";

  screen.style.display = "block";
}

function openRegister() { openScreen(registerForm); }
function openForgot() { openScreen(forgotForm); }
function backToLogin() { openScreen(loginForm); }

function handleLogout() {
  backToLogin();
}


// Expor funções ao escopo global
window.handleLogin = handleLogin;
window.openRegister = openRegister;
window.openForgot = openForgot;
window.backToLogin = backToLogin;
window.registerUser = registerUser;
window.handleLogout = handleLogout;
window.sendRecovery = sendRecovery;
