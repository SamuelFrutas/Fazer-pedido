import { auth } from '../firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
const form=document.getElementById('login'),erro=document.getElementById('erro');
onAuthStateChanged(auth,user=>{if(user) location.href='index.html'});
form.addEventListener('submit',async e=>{e.preventDefault();erro.style.display='none';try{await signInWithEmailAndPassword(auth,email.value.trim(),senha.value);location.href='index.html'}catch(err){erro.textContent=['auth/invalid-credential','auth/user-not-found','auth/wrong-password'].includes(err.code)?'E-mail ou senha incorretos.':'Não foi possível entrar.';erro.style.display='block'}});
