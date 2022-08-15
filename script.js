// --------------- Selecionam as opções---------------

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

// ---------------Troca os Botões---------------

function switchBotao() {
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

//---------------Abre aba de confirmação---------------

function confirmar(){
    let confirmacao = document.querySelector('.confirmacao')
    confirmacao.classList.remove('confirmacaoSome')



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




    let pratoS = document.querySelector('.pratoSelect .escolhido');
    pratoS.innerHTML = prato
    let bebidaS = document.querySelector('.bebidaSelect .escolhido');
    bebidaS.innerHTML = bebida
    let sobremesaS = document.querySelector('.sobremesaSelect .escolhido');
    sobremesaS.innerHTML = sobremesa

    let pratoP = document.querySelector('.pratoSelect .preco');
    pratoP.innerHTML = pprato.toFixed(2).replace(".",",")
    let bebidaP = document.querySelector('.bebidaSelect .preco');
    bebidaP.innerHTML = pbebida.toFixed(2).replace(".",",")
    let sobremesaP = document.querySelector('.sobremesaSelect .preco');
    sobremesaP.innerHTML = psobremesa.toFixed(2).replace(".",",")
    let totalp = document.querySelector('.total .preco')
    totalp.innerHTML = `R$ ${total.toFixed(2).replace(".",",")}`
}

//---------------Finaliza o pedido---------------

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

// ---------------Fecha a aba de confirmação---------------

function cancel () {
    let confirmacao = document.querySelector('.confirmacao')
    confirmacao.classList.add('confirmacaoSome')
}