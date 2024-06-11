export async function getIngredientes() {
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const response = await fetch(url)
    const data = await response.json()
    return data.ingrediente
}

export async function postIngrediente(ingrediente) {
    const url = 'http://localhost:8080/v1/lanchonete/ingrediente'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingrediente)
    }
    const response = await fetch(url, options)
    return response.ok
}
export async function deleteIngrediente(id){
    const url = `http://localhost:8080/v1/lanchonete/ingrediente/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}