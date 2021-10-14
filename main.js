function generate_rgb(){
    return '('+ Math.floor(Math.random()*266)+ "," + Math.floor(Math.random()*266)+" ," + Math.floor(Math.random()*266) + " )"

} 

$("#reset").click(function(){
    $(".colors").css("color","rgb"+generate_rgb())
  })

$("header").css("color","rgb"+generate_rgb()) 


$("#color2").css("color","black") 