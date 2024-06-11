'use strict';
async function getCliente(){
    const url = 'http://localhost:8080/v1/lanchonete/cliente'
    const response = await fetch(url)
    const data = await response.json()
    return data.cliente
}

async function teste() {
    const listaCliente = await getCliente();
    console.log(listaCliente);
    listaCliente.forEach(cliente => {
        criarCardCliente(cliente);
    });
}
teste()
const container = document.getElementById('container');

function criarCardCliente(info) {
    const card1 = document.createElement('div');
    card1.classList.add('pl-[30px]' , 'flex', 'gap-[250px]', 'pt-[25px]'  , 'drop-shadow-lg', 'w-[910px]', 'h-[80px]', 'bg-[#A2C91F]', 'rounded-[20px]');
    
    // const card2 = document.createElement('div')
    // card2.classList.add('top-[240px]', 'drop-shadow-lg', 'w-[910px]', 'h-[85px]', 'bg-white', 'rounded-[20px]','grid', 'grid-cols-4', 'p-6');
    
    const id = document.createElement('h1');
    id.classList.add('text-black', 'text-2xl', 'font-semibold', 'ml-10');
    id.textContent = info.id_cliente;
    
    const nome = document.createElement('p');
    nome.textContent = info.nome;
    nome.classList.add('text-black', 'text-2xl');

    const email = document.createElement('p');
    email.textContent = info.email;
    email.classList.add('text-black', 'text-2xl')

    
    
    // const valor = document.createElement('p');
    // valor.textContent = 'R$' + info.valor;
    // valor.classList.add('text-black', 'text-2xl', 'ml-10');
    
    const icones = document.createElement('div');
    icones.classList.add('flex', 'gap-4', 'ml-10');
    
    const iconeEditar = document.createElement('i');
    iconeEditar.classList.add('bx' , 'bxs-edit-alt', 'text-white', 'text-2xl', 'cursor-pointer', 'transition-colors');
    
    const iconeDeletar = document.createElement('i');
    iconeDeletar.classList.add('bx', 'bxs-trash', 'text-[#FF0000]', 'text-2xl', 'cursor-pointer', 'hover:text-[#FF4500]', 'transition-colors');
    
    icones.append(iconeEditar, iconeDeletar);
    card1.append(id, nome, email, icones);
    container.appendChild(card1);
    // card2.append(card1)
    
    // iconeEditar.addEventListener('click', () => {
    //     window.location.href = './editarFilme.html?id=' + info.id;
    // });
    
    // iconeDeletar.addEventListener('click', () => {
    //     deleteFilme(info.id);
    //     window.location.reload();
    // });
}

//const add = document.getElementById('add');

// add.addEventListener('click', () => {
//     window.location.href = './cadastro.html';
// });


