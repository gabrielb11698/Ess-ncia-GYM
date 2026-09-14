// Mostrar/ocultar senha
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

// Validação simples no envio
var form = document.querySelector('.form-login');
form.addEventListener('submit', function(e){
	e.preventDefault();
	var valido = true;

	var email = document.getElementById('email');
	var campoEmail = email.closest('.campo');
	var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!regexEmail.test(email.value)){
		campoEmail.classList.add('invalido');
		valido = false;
	} else {
		campoEmail.classList.remove('invalido');
	}

	var senha = document.getElementById('senha');
	var campoSenha = senha.closest('.campo');
	if(senha.value.length === 0){
		campoSenha.classList.add('invalido');
		valido = false;
	} else {
		campoSenha.classList.remove('invalido');
	}

	if(valido){
		// Aqui entraria a chamada real de autenticação (fetch para seu backend)
		alert('Login validado! Conecte esta função ao seu backend.');
	}
});
