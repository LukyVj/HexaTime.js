/*!
  HexaTime.js 
  ===========
  2014 @LukyVj 
*/


$(document).ready(function(){
  // Start the function 
  function hexatime_colorer(){
    // Set an interval ( 1sec )
    setInterval(function(){
      var d = new Date(); // Get the date
      var t = d.getHours() + d.getMinutes() + d.getSeconds(); // Format the date to get a plain string ( xxxxxx )
      // Find and color the related classes
      $('.hexatime_bg_color').css('background','#' + t) // Background
      $('.hexatime_color').css('color','#' + t) // Color
      $('.hexatime_br_color').css('color','#' + t) // Border Color
    }, 1000);
  }
  
    hexatime_colorer();
  
});
