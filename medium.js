//Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, 
//then it should alert the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
//get user input 1-12 
let input = parseInt(prompt("Enter a number between 1-12:"));
function inputMonth(num){
if(num == 1 ) {
    alert ("January");
 } else if(num == 2) {
    alert  ("February"); 
} else if(num == 3) {
    alert  ("March"); 
} else if(num == 4) {
    alert  ("April"); 
} else if(num == 5) {
    alert  ("May"); 
} else if(num == 6) {
    alert  ("June"); 
} else if(num == 7) {
    alert  ("July"); 
} else if(num == 8) {
    alert  ("August"); 
} else if(num == 9) {
    alert  ("September"); 
} else if(num == 10) {
    alert  ("October"); 
} else if(num == 11) {
    alert  ("November"); 
} else if(num == 12) {
    alert  ("December"); 
} else{
    alert ("You enter an invalid number");
}
}
console.log(inputMonth(input));
// create loop to match num with months
