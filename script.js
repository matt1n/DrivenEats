function selecionarPrato(classe){
    const botaoselect = document.querySelector('.pratosPrincipais .selecionado');

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
function teste() {
    const botaoselect1 = document.querySelector('.bebidas .selecionado');
    const botaoselect2 = document.querySelector('.sobremesas .selecionado');
    const botaoselect = document.querySelector('.pratosPrincipais .selecionado');

    if (botaoselect!==null && botaoselect1!==null && botaoselect2!==null){
        const botao = document.querySelector('.terminar');
        botao.classList.add('botaoON');
        botao.innerHTML="Fechar pedido"
        botao.classList.remove('terminar')
    }
}