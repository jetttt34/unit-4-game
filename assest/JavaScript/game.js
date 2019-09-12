var cpuNumber = Math.floor(Math.random()* 100 + 20);

$("#cpuNumber").text("Goal: " + cpuNumber);

console.log(cpuNumber);


// $(".crystals ").on("click", function () {
// var crystalClicked = Math.floor(Math.random() * (12 - 1 + 1) + 1);

// console.log(crystals);


// boxForScore = crystalNumber + boxForScore;
// console.log(boxForScore);

// $("boxForScore").text(boxForScore);


var crystalClicked = []; 
crystalClicked[1] = Math.floor(Math.random()*12)+1;
crystalClicked[2] = Math.floor(Math.random()*12)+1;
crystalClicked[3] = Math.floor(Math.random()*12)+1;
crystalClicked[4] = Math.floor(Math.random()*12)+1;

console.log(crystalClicked[1]);
console.log(crystalClicked[2]);
console.log(crystalClicked[3]);
console.log(crystalClicked[4]);

function gem(gemNum){
    console.log(gemNum + 'you clicked a crystal ');
}


var bleep = new Audio();
bleep.src = "assest/sounds/bttnsound.mp3";