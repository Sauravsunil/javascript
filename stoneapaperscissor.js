let computer = Math.floor(Math.random()*3);

let read = require('readline-sync');
while(true){
    var user = read.question("enter the input[0:scissor | 1 : paper | 2 : stone ] : ");
console.log("user input : " + user);
console.log("computer input : " + computer);

if(user == computer ){
    console.log("scores level");
}
else if(user == 1  &&  computer == 0){
    console.log("computer wins");
}
else if(user == 0  &&  computer == 1){
    console.log("user wins");
}
else if(user == 1  &&  computer == 2){
    console.log("user wins");
}
else if(user == 2  &&  computer == 1){
    console.log("computer wins");
}
else if(user == 2  &&  computer == 0){
    console.log("user wins");
}
else if(user == 0 &&  computer == 2){
    console.log("computer wins");
}


}
