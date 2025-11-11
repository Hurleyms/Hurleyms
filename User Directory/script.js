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
};

// filter functionality

// add a click event listener to the filter button
// this will run when the filter button is clicked

document.getElementById("filterBtn").addEventListener("click" , () => {

    const keyword = document.getElementById("filterInput").value.toLowerCase();

    // Use .filter() to create a new array of users that matches the search keyword.

    const filtered = users.filter(u => u.name.toLowerCase().includes(keyword));

    renderUsers(filtered);

});

// sort functionality a-z
// when clicked we want to display the user in ascending
document.getElementById("sortAsc").addEventListener("click", () => {
    const sorted = [...users].sort((a,b) => a.name.localeCompare(b.name));

    renderUsers(sorted);
});