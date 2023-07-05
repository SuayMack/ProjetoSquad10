/*  Código disponível em 
https://www.w3schools.com/howto/howto_js_countdown.asp

** com pequenas alterações

*/

// Set the date we're counting down to
let temporizador = new Date("Sep 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let agora = new Date().getTime();
    
  // Find the tempo between now and the count down date
  let tempo = temporizador - agora;
    
  // Time calculations for days, hours, minutes and seconds
  let dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
  let horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((tempo % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="temporizador"
  document.getElementById("dias").innerHTML = dias
  document.getElementById("horas").innerHTML = horas
  document.getElementById("minutos").innerHTML = minutos
  document.getElementById("segundos").innerHTML = segundos

  // If the count down is over, write some text 
  if (tempo < 0) {
    clearInterval(x);
    document.getElementById("temporizador").innerHTML = "EXPIRED";
  }
}, 1000);