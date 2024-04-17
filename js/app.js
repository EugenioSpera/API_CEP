document.querySelector('#cep').addEventListener('blur', async (event) => {

    event.preventDefault();
    /* Capturando o value do input e atribuindo a variável */
    let input = document.querySelector('#cep').value;

    if (input !== '') {

       

        /* fetch - Ira ler algo */
        let results = await fetch(`https://viacep.com.br/ws/${(input)}/json/?q=&lang=pt_br&units=metric&appid=a77c9d4e81b530d84340ff0acf8cf252`);

        let json = await results.json();

        if (json.erro === true) { 
            alert('CEP INVÁLIDO')
        }

        if (results.status === 200) {
            showInfo({

                cep: json.cep,
                uf: json.uf,
                cidade: json.localidade,
                logradouro: json.logradouro,
                numero: json.numero,
                bairro: json.bairro
            });
        }
        else {
                        
            showWarning('CEP não encontrado')
            
        }
    }
})

function showInfo(json) {
    

    document.querySelector('#cep').value = `${json.cep}`;

    document.querySelector('#uf').value = `${json.uf}`;

    document.querySelector('#cidade').value = `${json.cidade}`;

    document.querySelector('#logradouro').value = `${json.logradouro}`;

    document.querySelector('#numero').value = `${json.numero}`;

    document.querySelector('#bairro').value = `${json.bairro}`;
}

function showWarning(msg) {

    document.querySelector('.').innerHTML = msg;
    
}

