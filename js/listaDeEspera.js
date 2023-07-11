const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const valSenhaInput = document.getElementById('valSenha');
const rgInput = document.getElementById('rg');
const cepInput = document.getElementById('cep');
const enderecoInput = document.getElementById('endereco');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');

function validarNome() {
  const nomeCompleto = nomeInput.value.trim();

  if (nomeCompleto.indexOf(' ') === -1) {
    alert('Digite o nome completo com espaço e sobrenome!');
    return false;
  }

  return true;
}

function validarEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Digite um email válido!');
    return false;
  }

  return true;
}

nomeInput.addEventListener('blur', validarNome);
emailInput.addEventListener('blur', validarEmail);

cepInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

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
  }
});
