const usuarioCorreto = "tonylindo@gmail.com";
const senhaCorreta = "12345678";

const form = document.getElementById("login-form");
const inputUsuario = document.getElementById("usuario");
const inputSenha = document.getElementById("senha");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuarioDigitado = inputUsuario.value;
    const senhaDigitada = inputSenha.value;

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login validado ✅");
    } else {
        mostrarErro();
    }
});


// palavras dinamicas

const palavras = ["rápida", "simples", "segura", "lucrativa", "eficiente"];
let index = 0;
const span = document.getElementById("palavra-dinamica");

setInterval(() => {
    span.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % palavras.length;
        span.textContent = palavras[index];
        span.style.opacity = 1;
    }, 300);

}, 2000);


// Toast de erro

function mostrarErro() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}