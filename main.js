function generate_rgb(){
    return '('+ Math.floor(Math.random()*266)+ "," + Math.floor(Math.random()*266)+" ," + Math.floor(Math.random()*266) + " )"

} 

$("#reset").click(function(){
    $("#color1").css("color","rgb"+generate_rgb())
  })

  $("#reset").click(function(){
    $("#color2").css("color","rgb"+generate_rgb())
  })

  $("#reset").click(function(){
    $("#color3").css("color","rgb"+generate_rgb())
  })
  $("#reset").click(function(){
    $("#color4").css("color","rgb"+generate_rgb())
  })
  $("#reset").click(function(){
    $("#color5").css("color","rgb"+generate_rgb())
  })
  $("#reset").click(function(){
    $("#color6").css("color","rgb"+generate_rgb())
  })



$("header").css("color","rgb"+generate_rgb()) 


