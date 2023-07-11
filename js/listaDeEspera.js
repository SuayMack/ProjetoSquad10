const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const valSenhaInput = document.getElementById('confSenha');
const rgInput = document.getElementById('rg');
const cepInput = document.getElementById('cep');
const enderecoInput = document.getElementById('endereco');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');
const btnEnviar = document.getElementById('btnEnviar');

function validarNome() {
  const nomeCompleto = nomeInput.value.trim();

  if (nomeCompleto.indexOf(' ') === -1) {
    alert('Digite o nome completo com espaço e sobrenome!');
    return false;
  }
  return true;
}

function validarEmail() {
  //Obtém o valor digitado no campo de entrada de email e remove espaços em branco extras ao redor do valor usando o método trim(). O valor do campo de entrada é armazenado na variável email.
  const email = emailInput.value.trim();
  //A função cria uma expressão regular chamada emailRegex. Expressões regulares são padrões de correspondência de texto usados para verificar se uma string atende a determinados critérios. Nesse caso, a expressão regular ^[^\s@]+@[^\s@]+\.[^\s@]+$ é usada.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //A função usa o método test() da expressão regular emailRegex para verificar se o valor do email corresponde ao padrão definido. A função test() retorna true se a string corresponder ao padrão e false caso contrário.
  if (!emailRegex.test(email)) {
    //Se o valor do email não corresponder ao padrão definido pela expressão regular, isso significa que o email é inválido. Nesse caso, a função exibe um alerta informando ao usuário que ele deve digitar um email válido usando alert('Digite um email válido!'). Em seguida, a função retorna false, indicando que a validação falhou.
    alert('Digite um email válido!');
    return false;
  }
  //Se o valor do email corresponder ao padrão definido pela expressão regular, isso significa que o email é válido. Nesse caso, a função retorna true, indicando que a validação foi bem-sucedida.
  return true;
}

// btnEnviar.addEventListener("click", (e) =>{
//   for(element)
//   e.preventDefault()
//   window.location.href = "../html/home.html";
// })

nomeInput.addEventListener("change", (e) => {
  validarNome()

})
emailInput.addEventListener("change", (e) => {
  validarEmail()
})

function validarRG() {
  const rg = rgInput.value.trim();

  if (rg.length !== 8) {
    alert('O RG deve ter exatamente 8 caracteres!');
    return false;
  }

  return true;
}

rgInput.addEventListener('blur', validarRG);

senhaInput.addEventListener('change', event => {
  if (senhaInput.value.length < 5) {

    alert("Senha deve ter 5 ou mais caracteres.")
  }

})
valSenhaInput.addEventListener('change', (e) => {
  let senha = senhaInput.value
  let confSenha = valSenhaInput.value
  if (senha === confSenha) {
    return true

  } else {
    alert("As senhas devem ser iguais.")
  }

})

cepInput.addEventListener("keyup", (e) => {
  const cepValor = e.target.value
  if (cepValor.length === 8) {
    receberEndereco(cepValor)
  } else {
    console.log('Digite um cep válido')
  }
})

const receberEndereco = async (cep) => {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json`;

  const resposta = await fetch(apiUrl)

  const data = await resposta.json()
  console.log(data)

  if (data.erro === "true") {
    alert('Cep inválido')
  }

  enderecoInput.value = data.logradouro;
  bairroInput.value = data.bairro;
  cidadeInput.value = data.localidade;
  estadoInput.value = data.uf;
}
