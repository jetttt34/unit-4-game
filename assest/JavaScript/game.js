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
        alert("You Win! ")
        console.log("winner");
        wins++;
        newScreen();
        newGame();

        
        }else if(userBalance > cpuNumber){
           //They lost 
           alert("You Suck! ")
           console.log("losser");
        losses++;
        newScreen();
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
    $("#recordW").text("Wins " + wins);
    $("#recordL").text("Losses "+ losses);

}

newGame();



var bleep = new Audio();
bleep.src = "assest/sounds/bttnsound.mp3";