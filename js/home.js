// Plugin Jquery Flip Clock-Style e Count Up Timer Plugin - Flip Time

$(document).ready(function() {
  $('.flipTimer').flipTimer({ 
  
  // count up or countdown
  direction: 'down', 
  
  // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
  date: 'September 20, 2023 12:00:30', 
  
  // callback works only with direction = "down"
  callback: function() { alert('times up!'); }
  
  });
});