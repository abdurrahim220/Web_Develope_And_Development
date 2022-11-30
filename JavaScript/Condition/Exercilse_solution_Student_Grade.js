var number = prompt("What is your number! : ");

number = parseInt(number);

var grade;

if(number <= 100 && number >= 80){
    grade = "A+" ;
}
else if(number <= 79 && number >= 70){
    grade = "A" ;
}
else if(number <= 69 && number >= 60){
    grade = "A-" ;
}
else if(number <= 59 && number >= 50){
    grade = "B" ;
}
else if(number <= 49 && number >= 40){
    grade = "C" ;
}
else if(number <= 39 && number >= 33){
    grade = "D" ;
}
else if(number <= 32 && number >= 0){
    grade = "F" ;
}
else{
    grade = "Invalid Input!!" ;
}

console.log("Your Grade : " + grade);