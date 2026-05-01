function runForLoop(){
    let text = "Counting from 1 to 5 using for loop:"

    for(let i=1;i<=5;i++)
    {
        text += i + " "; // text = text + i + " ";
    }
    document.getElementById("output").innerHTML = text;
}

// text = "Counting from 1 to 5 using for loop: 1 2 3 4 5"

function runWhileLoop(){
let text = "Counting from 1 to 5 using while loop:";
let i=1;
while(i<=5){
    text += i + " ";
    i++;
}
document.getElementById("output").innerHTML = text;
}

function runDoWhileLoop(){
    let text = "Counting using do-while loop:";
    let i=1;
    do{
        text += i + " ";
        i++;
    }while (i<=5);
// text = "counting using do-while loop: 1 2 3 4 5";
document.getElementById("output").innerHTML = text;
}

function runIfElse(){
    let text = "checking even or odd numbers:<br>";

    for(let i=1;i<=5 ;i++){

        if(i %2 === 0){

            text += i + " is even<br>";

        } else {
            text += i + " is odd<br>";
        }
    }
document.getElementById("output").innerHTML = text;

let text1 = "checking next values for even and odd (10 to 15):<br>";

for(let i=10;i<=15 ;i++){

        if(i %2 === 0){

            text1 += i + " is even<br>";

        } else {
            text1 += i + " is odd<br>";
        }
    }
document.getElementById("output").innerHTML = text1;
}

function runSwitch(){
    let grade = "B";
    let message = "";

    switch(grade){
        case "A":
            message = "Excellent";
            break;
        case "B":
            message = "Good Job!";
            break;
        case "C":
            message = "Well Done";
            break;
        case "D":
            message = "Life is Hard";
            break;
        default:
            message = "No recongnized grade";
    }
document.getElementById("output").innerHTML = "Switch statement: " + message;
}