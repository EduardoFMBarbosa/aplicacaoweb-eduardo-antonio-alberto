Link: https://aplica-635a0.web.app/

# aplicacaoweb-eduardo-antonio-alberto
Passos: 1- Clicar em criar conta;
        2- Cadastrar um ''Nome Completo'', ''Usuario(login)'', ''E-mail'' e ''Senha'';
        3- Agora logue com seu ''Usuario'' e ''Senha'';
        4- Aparecerá uma lista com os ''Usuários Cadastrados'' no banco de dados;
OBS: 1- Enviarei uma print do banco de dados com um exemplo do dados cadastrais;
     2- E outra print mostrando como os arquivos estão organizados no Visual Studio Code.

**Feito por: [Eduardo, Alberto e Antonio]**

# Projeto – Sistema de Login com Firebase

## ✅ Objetivo
Criar um sistema funcional de login, recuperação de senha e uso de API com banco de dados Firebase Firestore.

## 🧪 Tecnologias usadas
- HTML, CSS, JavaScript  
- Firebase Hosting  
- Firebase Firestore  
- API JSONPlaceholder  

## 🔥 Firebase
O Firebase foi utilizado para:
- Hospedar a aplicação  
- Armazenar usuários no Firestore  

### Estrutura da coleção:
```
usuarios
 └── documento_automático
        ├── nome: string
        └── email: string
```

## 🧩 Funcionalidades
- Login com validação  
- Recuperação de senha  
- Cadastro de usuário (salva no Firestore)  
- Listagem de usuários via API externa  

## 📡 API Pública
```
https://jsonplaceholder.typicode.com/users
```

## 📘 Como rodar
1. Abra o arquivo index.html  
2. O script.js contém toda a lógica  
3. O arquivo firebase.js contém a configuração do Firebase  
4. Rode com live server ou faça deploy no Firebase Hosting  

## 📦 Deploy
A aplicação pode ser publicada usando:
```
firebase deploy
```

