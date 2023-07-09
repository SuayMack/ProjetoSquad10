// Variáveis do formulário
const nome = document.getElementById('nome');
const cepInput = document.getElementById('cep');
const enderecoInput = document.getElementById('endereco');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');

//  validção  e preenchimento automatico do campo CEP
cepInput.addEventListener('blur', async () => {
  const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

  if (cep.length === 8) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.erro) {
        console.log('CEP inválido');
      } else {
        enderecoInput.value = data.logradouro;
        bairroInput.value = data.bairro;
        cidadeInput.value = data.localidade;
        estadoInput.value = data.uf;
      }
    } catch (error) {
      console.log('Erro ao obter dados do CEP', error);
    }
  } else {
    console.log('CEP inválido');
  }
});
