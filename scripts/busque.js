const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);
fetch('https://localhost:5000/', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
.then(response => console.log("achei!"));
})


    console.log(data)
    console.log(data[0].title)

    if(request.status >= 200 && request.status < 400){
        console.log("SUCESSO!!!")
        data.forEach(residencia => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
          
            const h1 = document.createElement('h1');
            h1.textContent = residencia.nome;

            const h2 = document.createElement('h2');
            h2.textContent = residencia.email;

            const h3 = document.createElement('h3');
            h3.textContent = residencia.contato;

            const h4 = document.createElement('h4');
            h4.textContent = residencia.endereco;

            const h5 = document.createElement('h5');
            h5.textContent = residencia.numero;
        
          
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(h5);
            card.appendChild(h2);
          });
    }else{
        console.log("erro :c")
    }
}
request.send()
