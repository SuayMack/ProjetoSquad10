// Mapeamento dos elementos do formulário em um objeto chamado "cadastro"
const cadastro = {
  nomeInput: document.getElementById('nome'),           // Campo de entrada do nome
  emailInput: document.getElementById('email'),         // Campo de entrada do email
  senhaInput: document.getElementById('senha'),         // Campo de entrada da senha
  valSenhaInput: document.getElementById('confSenha'),  // Campo de entrada de validação de senha
  rgInput: document.getElementById('rg'),               // Campo de entrada do RG
  cepInput: document.getElementById('cep'),             // Campo de entrada do CEP
  enderecoInput: document.getElementById('endereco'),   // Campo de entrada do endereço
  numeroInput: document.getElementById('numero'),       // Campo de entrada do número
  bairroInput: document.getElementById('bairro'),       // Campo de entrada do bairro
  cidadeInput: document.getElementById('cidade'),       // Campo de entrada da cidade
  estadoInput: document.getElementById('estado'),       // Campo de entrada do estado
  btnEnviar: document.getElementById('btnEnviar'),      // Botão de envio do formulário
  radioInput: document.getElementsByName('planos'),    // Opções de rádio para planos
};

function validarNome() {
  const nomeCompleto = cadastro.nomeInput.value.trim();
  if (nomeCompleto.indexOf(' ') === -1) {
    alert('Digite o nome completo com espaço e sobrenome!');
  }
  return true;
}

function validarNome(value) {
    const nomeCompleto = value.trim();
    if (nomeCompleto.indexOf(' ') === -1) {
      alert('Digite o nome completo com espaço e sobrenome!');
    }
    return true;
  }

function validarEmail() {
  //Obtém o valor digitado no campo de entrada de email e remove espaços em branco extras ao redor do valor usando o método trim(). O valor do campo de entrada é armazenado na variável email.
  const email = cadastro.emailInput.value.trim();
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

cadastro.nomeInput.addEventListener("focusout", (e) => {
  if(!validarNome(cadastro.nomeInput.value)){
    e.preventDefault()
    cadastro.nomeInput.focus()
  }
})
cadastro.emailInput.addEventListener("change", (e) => {
  validarEmail()
})

cadastro.senhaInput.addEventListener('change', event => {
  if (cadastro.senhaInput.value.length < 5) {
    alert("Senha deve ter 5 ou mais caracteres.")
  }
})
const validaSenha = cadastro.valSenhaInput.addEventListener('change', (e) => {
  let senha = cadastro.senhaInput.value
  let confSenha = cadastro.valSenhaInput.value
  if (senha === confSenha) {
    return true

  } else {
    alert("As senhas devem ser iguais.")
  }
})

cadastro.cepInput.addEventListener("keyup", (e) => {
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
  cadastro.enderecoInput.value = data.logradouro;
  cadastro.bairroInput.value = data.bairro;
  cadastro.cidadeInput.value = data.localidade;
  cadastro.estadoInput.value = data.uf;
}

document.getElementById("formEndereco").addEventListener("submit", function (event) {
  event.preventDefault(); // Impedir a submissão padrão do formulário

  // Variável para acompanhar se todos os campos obrigatórios estão preenchidos
  let allFieldsValid = true;

  for (let field in cadastro) {
    if (cadastro[field].required && cadastro[field].value.trim() === "") {
      allFieldsValid = false; // Pelo menos um campo obrigatório não está preenchido
      break; // Não é necessário verificar os outros campos
    }
  }

  if (!allFieldsValid) {
    alert("Todos os campos obrigatórios devem ser preenchidos.");
  } else {
    // Redirecionar somente se todos os campos obrigatórios estiverem preenchidos
    if(validaSenha){
      formEndereco.reset();
      window.location.href = "../html/home.html";
    }else {
      alert("Preencha os campos Senha e Confirmação de senha corretamente.")
    }
    
  }
});


