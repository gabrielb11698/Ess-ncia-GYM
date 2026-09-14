// Fluxo de recuperação de senha em duas etapas:
// 1) usuário informa o e-mail
// 2) mostramos a confirmação de envio

var formEtapa1 = document.getElementById('formEtapa1');
var etapaConfirmacao = document.getElementById('etapaConfirmacao');
var emailConfirmado = document.getElementById('emailConfirmado');
var botaoReenviar = document.getElementById('botaoReenviar');

var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formEtapa1.addEventListener('submit', function(e){
	e.preventDefault();

	var email = document.getElementById('email');
	var campoEmail = email.closest('.campo');

	if(!regexEmail.test(email.value)){
		campoEmail.classList.add('invalido');
		return;
	}

	campoEmail.classList.remove('invalido');

	// Aqui entraria a chamada real para o backend enviar o e-mail de recuperação
	// Exemplo:
	// fetch('/api/recuperar-senha', { method: 'POST', body: JSON.stringify({ email: email.value }) })

	emailConfirmado.textContent = email.value;
	formEtapa1.hidden = true;
	etapaConfirmacao.hidden = false;
});

botaoReenviar.addEventListener('click', function(){
	// Aqui entraria a chamada real para reenviar o e-mail
	botaoReenviar.textContent = 'E-mail reenviado!';
	botaoReenviar.disabled = true;

	setTimeout(function(){
		botaoReenviar.textContent = 'Reenviar e-mail';
		botaoReenviar.disabled = false;
	}, 4000);
});
