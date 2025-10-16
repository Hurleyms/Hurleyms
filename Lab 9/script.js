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