const usuarioCorreto = "a@gmail.com";
const senhaCorreta = "12345678";

const form = document.getElementById("login-form");
const inputUsuario = document.getElementById("usuario");
const inputSenha = document.getElementById("senha");

function validarEmail(valor) {
    return valor.includes("@") && valor.includes(".");
}

function validarSenha(valor) {
    return valor.length >= 8;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valido = true;

    if (!validarEmail(inputUsuario.value)) {
        inputUsuario.parentElement.classList.add("invalid");
        valido = false;
    } else {
        inputUsuario.parentElement.classList.remove("invalid");
    }

    if (!validarSenha(inputSenha.value)) {
        inputSenha.parentElement.classList.add("invalid");
        valido = false;
    } else {
        inputSenha.parentElement.classList.remove("invalid");
    }

    if (!valido) return;

    if (
        inputUsuario.value === usuarioCorreto &&
        inputSenha.value === senhaCorreta
    ) {
        mostrarToast("toast-entrada");
        // alert("Login validado ✅");
    } else {
        mostrarToast("toast");
    }
});


// Palavras Dinamicas

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


function mostrarToast(id) {
    const toast = document.getElementById(id);
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


// function mostrarErro() {
//     const toast = document.getElementById("toast");
//     toast.classList.add("show");

//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 3000);
// }

// function mostrarEntrada() {
//     const toast = document.getElementById("toast-entrada");
//     toast.classList.add("show");

//     setTimeout(() => {
//         toast.classList.remove("show");
//     }, 3000);
// }


// Dinamismo sobre erro e invalidades

const email = document.getElementById("email");
const senha = document.getElementById("senha");

function validarEmail(valor) {
    return valor.includes("@") && valor.includes(".");
}

function validarSenha(valor) {
    return valor.length >= 8;
}

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // emaill
    if (!validarEmail(email.value)) {
        email.parentElement.classList.add("invalid");
    } else {
        email.parentElement.classList.remove("invalid");
    }

    // Senha
    if (!validarSenha(senha.value)) {
        senha.parentElement.classList.add("invalid");
    } else {
        senha.parentElement.classList.remove("invalid");
    }
});
