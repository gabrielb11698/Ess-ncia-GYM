// Mostrar/ocultar senha (funciona para os dois campos de senha da página)
document.querySelectorAll('.botao-olho').forEach(function(botao){
	botao.addEventListener('click', function(){
		var input = botao.previousElementSibling;
		if(input.type === 'password'){
			input.type = 'text';
			botao.textContent = 'Ocultar';
		} else {
			input.type = 'password';
			botao.textContent = 'Mostrar';
		}
	});
});

// Validação do formulário de cadastro
var form = document.querySelector('.form-cadastro');
var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e){
	e.preventDefault();
	var valido = true;

	var nome = document.getElementById('nome');
	var campoNome = nome.closest('.campo');
	if(nome.value.trim().length === 0){
		campoNome.classList.add('invalido');
		valido = false;
	} else {
		campoNome.classList.remove('invalido');
	}

	var email = document.getElementById('email');
	var campoEmail = email.closest('.campo');
	if(!regexEmail.test(email.value)){
		campoEmail.classList.add('invalido');
		valido = false;
	} else {
		campoEmail.classList.remove('invalido');
	}

	var senha = document.getElementById('senha');
	var campoSenha = senha.closest('.campo');
	if(senha.value.length < 6){
		campoSenha.classList.add('invalido');
		valido = false;
	} else {
		campoSenha.classList.remove('invalido');
	}

	var confirmarSenha = document.getElementById('confirmarSenha');
	var campoConfirmarSenha = confirmarSenha.closest('.campo');
	if(confirmarSenha.value !== senha.value || confirmarSenha.value.length === 0){
		campoConfirmarSenha.classList.add('invalido');
		valido = false;
	} else {
		campoConfirmarSenha.classList.remove('invalido');
	}

	if(valido){
		// Aqui entraria a chamada real de cadastro (fetch para seu backend)
		alert('Cadastro validado! Conecte esta função ao seu backend.');
	}
});
