
'use strict'
import {postProduto} from "./main.js"

// Import das tags do HTML pelo ID
const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const foto = document.getElementById('foto')
const tabela_nutricional = document.getElementById('falecimento')
const quantidade = document.getElementById('sexo')
const descricao = document.getElementById('cadastrar')
const poster = document.getElementById('poster')

cadastrar.addEventListener('click', ()=>{

    const nomeInput = nome.value
    const biografiaInput = biografia.value
    const nascimentoInput = nascimento.value
    const falecimentoInput = falecimento.value
    const sexoInput = sexo.value
    const capaInput = poster.src
    const insert ={
        nome: nomeInput,
        biografia: biografiaInput,
        data_nascimento: nascimentoInput,
        data_falecimento: falecimentoInput,
        sexo:sexoInput,       
        foto: capaInput
        
    }

    postAtor(insert)
    window.location.href = '../html/ator.html'
    
    
})

link.addEventListener('keyup', ()=>{
    poster.src = link.value 
})
