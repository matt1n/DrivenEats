function selecionarPrato(classe){
    const botaoselect = document.querySelector('.pratos-principais .selecionado');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado')
}

function selecionarBebida(classe){
    const botaoselect = document.querySelector('.bebidas .selecionado');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado')
}

function selecionarSobremesa(classe){
    const botaoselect = document.querySelector('.sobremesas .selecionado');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado')
}