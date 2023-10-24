
document.getElementById("btn-estudiante").addEventListener("click",estudiante)
document.getElementById("btn-docente").addEventListener("click",docente)
window.addEventListener("resize",anchoPagina);



// Variables
var contenedor_login = document.querySelector(".loginest-doc");
var formulario_login_est = document.querySelector(".formulario_login-est");
var formulario_login_doc = document.querySelector(".formulario_login-doc");
var fondo_login_est = document.querySelector(".fondo_login-est");
var fondo_login_doc = document.querySelector(".fondo_login-doc");


function anchoPagina() {
    if(window.innerWidth > 850) {
        fondo_login_est.style.display = "block";
        fondo_login_doc.style.display = "block";
    }else{
        fondo_login_doc.style.display = "block";
        fondo_login_doc.style.opacity = "1";
        fondo_login_est.style.display = "none";
        formulario_login_est.style.display = "block";
        formulario_login_doc.style.display = "none";
        contenedor_login.style.left = "0px";
    }
}

anchoPagina();

function estudiante (){
    if(window.innerWidth > 850) {
        formulario_login_doc.style.display = "none";
        contenedor_login.style.left = "410px";
        formulario_login_est.style.display = "block";
        fondo_login_doc.style.opacity = "0";
        fondo_login_est.style.opacity = "1";
    }else {
        formulario_login_doc.style.display = "block";
        contenedor_login.style.left = "0px";
        formulario_login_est.style.display = "none";
        fondo_login_doc.style.display = "none";
        fondo_login_est.style.display = "block";
        fondo_login_est.style.opacity = "1";
    }
}

function docente (){
    if(window.innerWidth > 850){
        formulario_login_doc.style.display = "block";
        contenedor_login.style.left = "10px";
        formulario_login_est.style.display = "none";
        fondo_login_doc.style.opacity = "1";
        fondo_login_est.style.opacity = "0";
    }else {
        formulario_login_doc.style.display = "none";
        contenedor_login.style.left = "0px";
        formulario_login_est.style.display = "block";
        fondo_login_doc.style.display = "block";
        fondo_login_est.style.display = "none";
    }
}