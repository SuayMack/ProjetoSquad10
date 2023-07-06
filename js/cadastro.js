onst cep = document.getElementById('cep')
const formEndereco = document.getElementById('formEndereco')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const endereco = document.getElementById('endereco')
const numero = document.getElementById('numero')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const btnEnviar = document.getElementById('btnEnviar')

cep.addEventListener("keyup", (e) => {
  const cepValor = e.target.value
  if(cepValor.length === 8){ 
    receberEndereco(cepValor)
  }else {
    console.log('Digite um cep válido')
  }
})

const receberEndereco = async(cep) => {
  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`

  const resposta = await fetch(apiUrl)

  const data = await resposta.json()
  console.log(data)

  if(data.erro === "true"){
    alert('Cep inválido')
  }

  endereco.value = data.logradouro
  estado.value = data.uf
  cidade.value = data.localidade
// }

// function validarCampos() {
//   if (!validaCep(cep.value)) {
//     console.log('Digite um CEP válido');
//     return false;
//   }

//   if (!validaEmail(email.value)) {
//     console.log('Digite um email válido');
//     return false;
//   }

//   if (!validaSenha(senha.value)) {
//     console.log('Digite uma senha válida');
//     return false;
//   }

//   if (!validaCampoPreenchido(endereco.value)) {
//     console.log('Digite um endereço válido');
//     return false;
//   }

//   if (!validaCampoPreenchido(numero.value)) {
//     console.log('Digite um número válido');
//     return false;
//   }

//   if (!validaCampoPreenchido(cidade.value)) {
//     console.log('Digite uma cidade válida');
//     return false;
//   }

//   if (!validaCampoPreenchido(estado.value)) {
//     console.log('Digite um estado válido');
//     return false;
//   }

//   return true; // Todos os campos são válidos
// }

// formEndereco.addEventListener('submit', (e) => {
//   e.preventDefault();

//   if (validarCampos()) {
//     formEndereco.submit();
//   }
// });

// function validaCep(cep) {
//   return cep.length === 8;
// }

// function validaEmail(email) {
//   // Implemente a validação do email de acordo com os critérios desejados
//   // Retorne true se for válido, caso contrário, retorne false
// }

// function validaSenha(senha) {
//   // Implemente a validação da senha de acordo com os critérios desejados
//   // Retorne true se for válida, caso contrário, retorne false
// }

// function validaCampoPreenchido(campo) {
//   return campo.trim() !== '';
// }

