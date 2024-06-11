'use strict';
import { getIngredientes, deleteIngrediente } from "./model/ing.js";

import { getUsuario } from "./model/ing.js";
let id = localStorage.getItem('id')
let controle = await getUsuario(id)
console.log(controle);

if (controle[0].cargo == "Atendente") {
    let cont = document.getElementById('controle')

    let h = document.createElement('hr')
    h.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link = document.createElement('a')
    link.href = '../telaHome/ingredientes.html'
    link.classList.add('shadow-pop')
    link.textContent = 'Ingredientes'

    let h2 = document.createElement('hr')
    h2.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link2 = document.createElement('a')
    link2.href = '../telaHome/produtos.html'
    link2.classList.add('shadow-pop')
    link2.textContent = 'Produtos'

    cont.append(h, link, h2, link2)

}

if (controle[0].cargo == "Gerente") {
    let cont = document.getElementById('controle')

    let h = document.createElement('hr')
    h.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link = document.createElement('a')
    link.href = '../telaHome/ingredientes.html'
    link.classList.add('shadow-pop')
    link.textContent = 'Ingredientes'

    let h2 = document.createElement('hr')
    h2.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link2 = document.createElement('a')
    link2.href = '../telaHome/produtos.html'
    link2.classList.add('shadow-pop')
    link2.textContent = 'Produtos'

    let h3 = document.createElement('hr')
    h3.classList.add('border-black', 'mt-[15px]', 'w-[80px]')

    let link3 = document.createElement('a')
    link3.href = '../telaHome/produtos.html'
    link3.classList.add('shadow-pop')
    link3.textContent = 'Produtos'

    cont.append(h, link, h2, link2, h3, link3)

}

function criarCardIngrediente(info) {
    const container = document.getElementById('container')

    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]', 'flex', 'gap-[20px]', 'pt-[25px]', 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');

    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_ingrediente;

    const nomeIngrediente = document.createElement('p');
    nomeIngrediente.textContent = info.nome;
    nomeIngrediente.classList.add('text-black', 'text-2xl', 'ml-[250px]');

    const quantidadeIngrediente = document.createElement('p');
    quantidadeIngrediente.textContent = info.quantidade;
    quantidadeIngrediente.classList.add('text-black', 'text-2xl',  'ml-[180px]')

    // const tabelaNutricional = document.createElement('img');
    // tabelaNutricional.textContent = info.quantidade;
    // tabelaNutricional.classList.add('text-black', 'text-2xl')
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');

    // const iconeEditar = document.createElement('i');
    // iconeEditar.classList.add('bx', 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');

    const iconeDeletar = document.createElement('img');
    iconeDeletar.src = '../img/lixeira.png'
    iconeDeletar.classList.add('max-h-[40px]', 'min-h-[40px]', 'max-w-[40px]', 'min-w-[40px]');

    icones.append(iconeDeletar)
    card1.append(id, nomeIngrediente, quantidadeIngrediente, icones);
    container.append(card1);

    iconeDeletar.addEventListener('click', ()=> {
        deleteIngrediente(info.id_ingrediente)
        window.location.reload()
    })
}

async function teste() {
    const listaIngredientes = await getIngredientes();
    console.log(listaIngredientes);
    listaIngredientes.forEach(ingrediente => {
        criarCardIngrediente(ingrediente);
    });
}
teste()