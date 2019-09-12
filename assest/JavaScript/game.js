var cpuNumber = Math.floor(Math.random()* 200 + 1);

$("#cpuNumber").text("Goal: " + cpuNumber);

console.log(cpuNumber);


$(".crystals").on("click", function () {
var crystals = Math.floor(Math.random() * (12 - 1 + 1) + 1);

console.log(crystals);
/