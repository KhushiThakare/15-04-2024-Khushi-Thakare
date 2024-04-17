// Function to display users in table
function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users'));
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    
    if(users) {
      users.forEach((user, index) => {
        const row = `<tr>
                      <td>${user.fullName}</td>
                      <td>${user.email}</td>
                      <td>${user.mobileNo}</td>
                      <td>${user.username}</td>
                      <td>
                        <button onclick="editUser(${index})">Edit</button>
                        <button onclick="deleteUser(${index})">Delete</button>
                      </td>
                    </tr>`;
        tableBody.innerHTML += row;
      });
    }
  }
  
  // Edit user function
  function editUser(index) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users[index];
    
    const fullName = prompt('Enter Full Name:', user.fullName);
    const email = prompt('Enter Email:', user.email);
    const mobileNo = prompt('Enter Mobile No:', user.mobileNo);
    const username = prompt('Enter Username:', user.username);
    
    if (fullName && email && mobileNo && username) {
      user.fullName = fullName;
      user.email = email;
      user.mobileNo = mobileNo;
      user.username = username;
      
      users[index] = user;
      localStorage.setItem('users', JSON.stringify(users));
      
      displayUsers();
    }
  }
  
  // Delete user function
  function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users'));
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
  }
  
  // Display users on page load
  window.addEventListener('DOMContentLoaded', displayUsers);
  