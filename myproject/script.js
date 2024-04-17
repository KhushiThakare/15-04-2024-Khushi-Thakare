document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const username = document.getElementById('username').value;
    
    const user = {
      fullName: fullName,
      email: email,
      mobileNo: mobileNo,
      username: username
    };
    
    let users = [];
    if(localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    this.reset();
  });
  