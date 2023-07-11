const login = document.getElementById('login')
const password = document.getElementById('password')
const singIn = document.getElementById('singIn')

singIn.addEventListener('click', event => {
  event.preventDefault();
  validarEmail()
  //validarSenha()
  if(password.value.length >= 5){
    window.location.href = "../html/home.html";
  }else{
    alert("Senha deve ter 5 ou mais caracteres.")
  }  
  
})

function validarEmail() {
  //Obtém o valor digitado no campo de entrada de email e remove espaços em branco extras ao redor do valor usando o método trim(). O valor do campo de entrada é armazenado na variável email.
  const email = login.value.trim();
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