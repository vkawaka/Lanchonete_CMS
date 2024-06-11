'use strict'
import { postIngrediente } from "./model/ing.js";

// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const tabela_nutricional = document.getElementById('tabela_nutricional')
const quantidade = document.getElementById('quantidade')
const foto = document.getElementById('foto')
const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', async()=>{

    const nomeInput = nome.value
    const tabela_nutricionalInput = tabela_nutricional.value
    const quantidadeInput = quantidade.value
    const fotoInput = foto.value
    const insert ={
        nome: nomeInput,
        tabela_nutricional: tabela_nutricionalInput,
        quantidade: quantidadeInput,
        foto: fotoInput
    }

    let validate = await postIngrediente(insert)
    if (validate) {
        location.href = '../telaHome/ingredientes.html'
    } else {
        alert('Não foi possível a inserção do novo ingrediente. Por favor, tente novamente. Se o problema insistir, contate o desenvolvedor do seu sistema!')
    }
})