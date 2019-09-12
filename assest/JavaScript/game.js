var userBalance = 0;
var cpuNumber = 0;
var wins = 0;
var losses = 0;

var crystalClicked = [];



//made a function called gem, named function name gemNum... Then I made the userBalance += which makes it add the value of the right to the left.

function gem(gemNum){
    console.log(gemNum + 'you clicked a crystal ');
    
    userBalance += crystalClicked[gemNum];
    newScreen();
    if(userBalance === cpuNumber){
        // they won do something
        console.log("winner");
        wins++;
        newGame();
        
        }else if(userBalance > cpuNumber){
           //They lost 
           console.log("losser");
        losses++;
        newGame();
}
}
// Made a new game function. resets the important numbers.
function newGame(){
    cpuNumber = Math.floor(Math.random()* 100 + 20);
    
    userBalance = 0;
    
    crystalClicked[1] = Math.floor(Math.random()*12)+1;
    crystalClicked[2] = Math.floor(Math.random()*12)+1;
    crystalClicked[3] = Math.floor(Math.random()*12)+1;
    crystalClicked[4] = Math.floor(Math.random()*12)+1;

    console.log(crystalClicked[1]);
    console.log(crystalClicked[2]);
    console.log(crystalClicked[3]);
    console.log(crystalClicked[4]);
    // newScreen();



}


// I set the cpu number to the display.
function newScreen(){
    $("#cpuNumber").text("Goal: " + cpuNumber);
    console.log(cpuNumber);
    $("#userBalance").text(userBalance);
    console.log("user balance = " + userBalance);
}

newGame();



var bleep = new Audio();
bleep.src = "assest/sounds/bttnsound.mp3";