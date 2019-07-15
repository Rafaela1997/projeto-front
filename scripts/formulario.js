const enviar = document.getElementById("Cadastrar")
console.log("cadastro")
enviar.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("click");

    const nome = document.getElementById("nome").value
    console.log(nome)
    const telefone = document.getElementById("telefone").value
    console.log(telefone)
    const email = document.getElementById("email").value
    console.log(email)
    const endereco = document.getElementById("endereco").value
    console.log(endereco)
    const bairro = document.getElementById("bairro").value
    console.log(bairro) 
    const cidade = document.getElementById("cidade").value
    console.log(cidade)
    const estado = document.getElementById("estado").value
    console.log(estado)
    const faculdade = document.getElementById("faculdade").value
    console.log(faculdade)
    const numero = document.getElementById("numero").value
    console.log(numero)
    const cep = document.getElementById("cep").value
    console.log(cep)
    const contato = document.getElementById("contato").value
    console.log(contato)
    const cpf = document.getElementById("cpf").value
    console.log(cpf)
    const dtnasc = document.getElementById("dtnasc").value
    console.log(dtnasc)


    fetch('http://localhost:5000/residencia', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'email': email,
            'endereco': endereco,
            'cpf': cpf,
            'dtnasc': dtnasc,
            'contato':contato,
            'cep': cep,
            'numero':numero,
            'bairro': bairro,
            'cidade':estado,
            'estado':estado,
            'faculdade':faculdade
        }),
    })
    .then(response => console.log("foi!"));
})