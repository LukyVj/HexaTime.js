/*!
  HexaTime.js 
  - version : 1.1 
  - Author : @LukyVj <lucas.bonomi@gmail.com>
  ============================================
  2014-2015 
*/


$(function(){
  function hexatime_colorer(){

    setInterval(function(){

      var d = new Date(); 
      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();
      var t =  '#'+ h + m + s;
      
      $('.scene').css('background', t).
      html('<span class="mention">'+ h+':'+m+':'+s+ '</span>')
    }, 1000);
  }

  function deploy(){
    hexatime_colorer();
  }
  deploy();
})
