"use strict";

// ======================================================
// ELEMENTOS DO FORMULÁRIO
// ======================================================

const form = document.querySelector(".form-cadastro");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmarSenha = document.querySelector("#confirmarSenha");


// ======================================================
// MOSTRAR / OCULTAR SENHA
// ======================================================

const botoesOlho = document.querySelectorAll(".botao-olho");

botoesOlho.forEach((botao) => {

    botao.addEventListener("click", () => {

        const campoSenha = botao
            .closest(".campo-senha")
            .querySelector("input");

        if (campoSenha.type === "password") {

            campoSenha.type = "text";

            botao.textContent = "Ocultar";
            botao.setAttribute(
                "aria-label",
                "Ocultar senha"
            );

        } else {

            campoSenha.type = "password";

            botao.textContent = "Mostrar";
            botao.setAttribute(
                "aria-label",
                "Mostrar senha"
            );
        }

    });

});


// ======================================================
// REMOVER ERRO AO DIGITAR
// ======================================================

const campos = [
    nome,
    email,
    senha,
    confirmarSenha
];

campos.forEach((campo) => {

    campo.addEventListener("input", () => {

        const container = campo.closest(".campo");

        container.classList.remove("alert-validate");

    });

});


// ======================================================
// ENVIO DO FORMULÁRIO
// ======================================================

form.addEventListener("submit", (event) => {

    // Impede o navegador de recarregar a página
    event.preventDefault();


    let formularioValido = true;


    // ==================================================
    // VALIDAR NOME
    // ==================================================

    if (nome.value.trim().length < 3) {

        mostrarErro(nome);

        formularioValido = false;

    }


    // ==================================================
    // VALIDAR EMAIL
    // ==================================================

    if (!validarEmail(email.value.trim())) {

        mostrarErro(email);

        formularioValido = false;

    }


    // ==================================================
    // VALIDAR SENHA
    // ==================================================

    if (senha.value.length < 6) {

        mostrarErro(senha);

        formularioValido = false;

    }


    // ==================================================
    // VALIDAR CONFIRMAÇÃO DA SENHA
    // ==================================================

    if (
        confirmarSenha.value.length === 0 ||
        confirmarSenha.value !== senha.value
    ) {

        mostrarErro(confirmarSenha);

        formularioValido = false;

    }


    // ==================================================
    // SE TUDO ESTIVER CORRETO
    // ==================================================

    if (formularioValido) {

        const usuario = {

            nome: nome.value.trim(),

            email: email.value.trim(),

            senha: senha.value

        };


        // Salva o usuário no navegador
        localStorage.setItem(
            "usuarioEssenciaGym",
            JSON.stringify(usuario)
        );


        alert("Conta criada com sucesso!");


        // Limpa o formulário
        form.reset();


        // Redireciona para a tela de login
        window.location.href = "login.html";

    }

});


function validarEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

function mostrarErro(input) {

    const campo = input.closest(".campo");

    campo.classList.add("alert-validate");

}