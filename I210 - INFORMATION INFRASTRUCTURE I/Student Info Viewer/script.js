// fetch the student data from the JSON file or url
// think of it as js way of saying "go!!! bring this file/data to me"
// it returns something called "promise"
// A promise is like a box that will eventually contain the data you requested
fetch('student.json')
    .then(response => response.json())
    .then( data => {
        // data is an array of student objects
        // we have the real data from student.json stored inside the variable data
        // DATA
        // we can now go inside data.student to access the list of students.

        // find a placeholder in our html where we want to put the info
        // here we are storing the location in a variable called container
        const container = document.getElementById('student-list');

        data.students.forEach( student => {
            // for every student, we create a p tag element
            const p = document.createElement('p');


            p.textContent = `${student.name} (${student.major}) - Grade: ${student.grade}`;

            container.appendChild(p);
        })
        

    })
    .catch(error => console.error('error; ', error));