function generate_rgb(){
    return '('+ Math.floor(Math.random()*266)+ "," + Math.floor(Math.random()*266)+" ," + Math.floor(Math.random()*266) + " )"

} 



$("#title").css("color",generate_rgb())