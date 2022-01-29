const autoPreenchimento = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
    
}

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep); /**TESTE PARA VERIFICAR SE CÓDIGO É 
NÚMERO E SE ELE POSSUI ALGUM CARACTERE DIFERENTE */


const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

    if(cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')) {
          document.getElementById('endereco').value = 'CEP inválido'
        } else {
        autoPreenchimento(endereco);
        console.log(endereco.logradouro)
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto'
        document.getElementById('bairro').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('estado').value = ''
        
    }


  // fetch(url).then(responde => responde.json()).then(console.log) muita informação agrupada, pode causar confusão..
};
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

