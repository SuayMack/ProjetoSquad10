//liga os planos html com o js 
const plano1 = document.getElementById("plano1");
const plano2 = document.getElementById("plano2");
const plano3 = document.getElementById("plano3");
//armazena os novos textos 
const textoDepois1 = "Oferece aulas de inglês básico para alunos que estão iniciando no aprendizado do idioma. Esse plano inclui aulas online, materiais de estudo e exercícios de fixação.";
const textoDepois2 = "Oferece aulas de inglês e espanhol em um plano combinado, permitindo que os alunos aprendam esses dois idiomas simultaneamente. O plano pode inclui aulas individuais para cada idioma, além de oportunidades de prática de conversação tanto em inglês quanto em espanhol.";
const textoDepois3 = "Um plano voltado para profissionais que desejam aprimorar seu inglês específico para o ambiente de negócios. O plano pode incluir aulas individuais com professores especializados em inglês para negócios, oportunidades de prática de apresentações e discussões sobre casos de negócios.";
const original1=document.getElementById("card1");
//armazena o conteúdo do card antes da mudança 
const textoAntes1= plano1.innerHTML;
const textoAntes2= plano2.innerHTML;
const textoAntes3= plano3.innerHTML;


//plano, descricao=depois, conteudo=antes
function executarMudanca(plano,textoDepois,textoAntes){
  //evento para aparecer o novo texto quando o mouse entrar
  plano.addEventListener("mouseenter",function(){
    plano.innerHTML=`<span style='font-size:14px'>${textoDepois}</span>`;
  })
  //evento para aparecer o velho texto quando o mouse sair
  plano.addEventListener("mouseleave",function(){
    plano.innerHTML=textoAntes;
  })
}

//chamando os objetos e especificando onde vai cada um 
executarMudanca(plano1,textoDepois1,textoAntes1);
executarMudanca(plano2,textoDepois2,textoAntes2);
executarMudanca(plano3,textoDepois3,textoAntes3);

