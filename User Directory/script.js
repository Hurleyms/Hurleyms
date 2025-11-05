// Intialize an empty array to hold user data
let users = [];
// Get a reference to the user list element
const userList = document.getElementById("userList");
// fetch the data from API endpoint with fetch()
fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    // store the fetched data in the user array
    users = data;
    // function to display the user data
    renderUsers(users);
});
// define a function that will display the user data
function renderUsers(list){
// convert the array into html <li> element using map()
userList.innerHTML = list.map(user =>`
    <li>
    <strong>${user.name}</strong><br>
    <small>${user.email}</small>
    </li>
    `).join('');
}

// filter functionality
