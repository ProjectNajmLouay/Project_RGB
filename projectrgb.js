function generate_rgb() {
  return (
    "(" +
    Math.floor(Math.random() * 266) +
    "," +
    Math.floor(Math.random() * 266) +
    " ," +
    Math.floor(Math.random() * 266) +
    " )"
  );
}
var arrRGB = [];
$("#reset").click(function () {
  arrRGB = [];
});
$("#reset").click(function () {
  var guess1 = generate_rgb();
  arrRGB.push(guess1);
  $("#color1").css("color", "rgb" + guess1);
});
$("#reset").click(function () {
  var guess2 = generate_rgb();
  arrRGB.push(guess2);
  $("#color2").css("color", "rgb" + guess2);
});
$("#reset").click(function () {
  var guess3 = generate_rgb();
  arrRGB.push(guess3);
  $("#color3").css("color", "rgb" + guess3);
});
$("#reset").click(function () {
  var guess4 = generate_rgb();
  arrRGB.push(guess4);
  $("#color4").css("color", "rgb" + guess4);
});
$("#reset").click(function () {
  var guess5 = generate_rgb();
  arrRGB.push(guess5);
  $("#color5").css("color", "rgb" + guess5);
});
$("#reset").click(function () {
  var guess6 = generate_rgb();
  arrRGB.push(guess6);
  $("#color6").css("color", "rgb" + guess6);
});

$("#reset").click(function () {
  console.log(arrRGB);
});
$("#reset").click(function () {
  $("header").append(arrRGB[Math.floor(Math.random() * 6)]);
});
