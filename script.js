function selecionarPrato(classe){
    const botaoselect = document.querySelector('.pratosPrincipais .selecionado');
    const iconeselec = document.querySelector('.pratosPrincipais .selecionado .icon');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
        iconeselec.classList.add('esconde');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado')
    const icone = document.querySelector(classe + " .icon");
    icone.classList.remove('esconde');
}

function selecionarBebida(classe){
    const botaoselect = document.querySelector('.bebidas .selecionado');
    const iconeselec = document.querySelector('.bebidas .selecionado .icon');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
        iconeselec.classList.add('esconde');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado')
    const icone = document.querySelector(classe + " .icon");
    icone.classList.remove('esconde');
}

function selecionarSobremesa(classe){
    const botaoselect = document.querySelector('.sobremesas .selecionado');
    const iconeselec = document.querySelector('.sobremesas .selecionado .icon');

    if (botaoselect!==null){
        botaoselect.classList.remove('selecionado');
        iconeselec.classList.add('esconde');
    }

    const botao = document.querySelector(classe);
    botao.classList.add('selecionado');
    const icone = document.querySelector(classe + " .icon");
    icone.classList.remove('esconde');
}

function teste() {
    const botaoselect1 = document.querySelector('.bebidas .selecionado');
    const botaoselect2 = document.querySelector('.sobremesas .selecionado');
    const botaoselect = document.querySelector('.pratosPrincipais .selecionado');
    const botao = document.querySelector('.terminar');
    const botao2 = document.querySelector('.terminar2');

    if (botaoselect!==null && botaoselect1!==null && botaoselect2!==null){
        botao.classList.add('botaoSome');
        botao2.classList.remove('botaoSome');
    }
    
}

function finalizar() {
    let pratoEscolhido = document.querySelector('.pratosPrincipais .selecionado h3');
    let prato = pratoEscolhido.innerHTML;
    let bebidaEscolhida = document.querySelector('.bebidas .selecionado h3');
    let bebida = bebidaEscolhida.innerHTML;
    let sobremesaEscolhida = document.querySelector('.sobremesas .selecionado h3');
    let sobremesa = sobremesaEscolhida.innerHTML;
    
    let pratoPreco=document.querySelector('.pratosPrincipais .selecionado .precoCheck p');
    let pprato = String(pratoPreco.innerHTML);
    pprato=pprato.replace('R$', '');
    pprato=pprato.replace(',','.');
    pprato=Number(pprato);
    let bebidaPreco=document.querySelector('.bebidas .selecionado .precoCheck p');
    let pbebida = String(bebidaPreco.innerHTML);
    pbebida=pbebida.replace('R$', '');
    pbebida=pbebida.replace(',','.');
    pbebida=Number(pbebida);
    let sobremesaPreco=document.querySelector('.sobremesas .selecionado .precoCheck p');
    let psobremesa = String(sobremesaPreco.innerHTML);
    psobremesa=psobremesa.replace('R$', '');
    psobremesa=psobremesa.replace(',','.')
    psobremesa=Number(psobremesa)
    
    let total = pprato+pbebida+psobremesa;

    const nome = prompt('Digite seu nome:');
    const endereco = prompt ('Endereço de entrega:')
    
    
    let pedido = `Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total.toFixed(2)}

Nome: ${nome}
Endereço: ${endereco}`

    let encodedpedido = encodeURIComponent(pedido)
    window.open(`https://wa.me/5522981818323?text=${encodedpedido}`)
}