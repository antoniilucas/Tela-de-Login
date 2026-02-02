const usuarioCorreto = "Porangaba";
const senhaCorreta = "1234";

const form = document.getElementById("login-form");
const inputUsuario = document.getElementById ("usuario");
const inputSenha = document.getElementById ("senha");
const mensagem = document.getElementById ("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuarioDigitado = inputUsuario.value;
    const senhaDigitada = inputSenha.value;

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        mensagem.textContent = "✅ Login validado!";
        mensagem.style.color = "green";
    }

    else {
        mensagem.textContent = "❌ Login inválido!";
        mensagem.style.color = "red";
    }

});

console.log("JS conectado com sucesso!");
