const plano1 = document.getElementById("plano1");
const descricao1 = "Plano de inglês básico: Oferece aulas de inglês básico para alunos que estão iniciando no aprendizado do idioma. Esse plano inclui aulas online, materiais de estudo e exercícios de fixação.";
const plano2 = document.getElementById("plano2");
const descricao2 = "Combo de inglês e espanhol: Oferece aulas de inglês e espanhol em um plano combinado, permitindo que os alunos aprendam esses dois idiomas simultaneamente. O plano pode inclui aulas individuais para cada idioma, além de oportunidades de prática de conversação tanto em inglês quanto em espanhol.";
const plano3 = document.getElementById("plano3");
const descricao3 = "Plano de Inglês para negócios: Um plano voltado para profissionais que desejam aprimorar seu inglês específico para o ambiente de negócios. O plano pode incluir aulas individuais com professores especializados em inglês para negócios, oportunidades de prática de apresentações e discussões sobre casos de negócios.";


setInterval(function() {
    plano1.innerText = descricao1;
    plano2.innerText = descricao2;
    plano3.innerText = descricao3;
}, 3000);


