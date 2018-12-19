var botaoSelector = document.querySelector('.js-botao-chaveador');

botaoSelector.onclick = function(){
	var menu  = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');	
}

