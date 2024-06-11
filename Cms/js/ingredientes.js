'use strict';
import { getIngredientes, deleteIngrediente } from "./model/ing.js";

function criarCardIngrediente(info) {
    const container = document.getElementById('container')

    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]', 'flex', 'gap-[250px]', 'pt-[25px]', 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');

    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_ingrediente;

    const nomeIngrediente = document.createElement('p');
    nomeIngrediente.textContent = info.nome;
    nomeIngrediente.classList.add('text-black', 'text-2xl');

    const quantidadeIngrediente = document.createElement('p');
    quantidadeIngrediente.textContent = info.quantidade;
    quantidadeIngrediente.classList.add('text-black', 'text-2xl')

    const tabelaNutricional = document.createElement('img');
    tabelaNutricional.textContent = info.quantidade;
    tabelaNutricional.classList.add('text-black', 'text-2xl')
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');

    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx', 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');

    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');

    icones.append(iconeEditar, iconeDeletar);
    card1.append(id, nomeIngrediente, quantidadeIngrediente, tabelaNutricional, icones);
    container.append(card1);
}

async function teste() {
    const listaIngredientes = await getIngredientes();
    console.log(listaIngredientes);
    listaIngredientes.forEach(ingrediente => {
        criarCardIngrediente(ingrediente);
    });
}
teste()