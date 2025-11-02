document.write("Abc")

let student = [
    {name: "Matt", grade: 91},
    {name: "Lilith", grade: 91},
    {name: "John", grade: 30},
    {name: "Sara", grade: 50},
    {name: "Emma", grade: 20},
    {name: "Olivia", grade: 75}
];

console.log(student.length)

let output = "<ul>";

for(let i = 0; i < student.length; i++){
    if(student[i].grade >= 50){
        status = "Passed";
    } else {
        status = "Failed";
    }

output += "<li>" + student[i].name + " - Grade: " + student[i].grade + " - " + status + "</li>";

console.log("Student:", student[i].name);
console.log("grade", student[i].grade);
console.log("status", status);
}

output += "</ul>";

document.getElementById("studentList").innerHTML = output;