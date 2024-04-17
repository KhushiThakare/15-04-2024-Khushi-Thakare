window.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users'));
    const tableBody = document.querySelector('#userTable tbody');
    
    if(users) {
      users.forEach(user => {
        const row = `<tr>
                      <td>${user.fullName}</td>
                      <td>${user.email}</td>
                      <td>${user.mobileNo}</td>
                      <td>${user.username}</td>
                    </tr>`;
        tableBody.innerHTML += row;
      });
    }
  });
  