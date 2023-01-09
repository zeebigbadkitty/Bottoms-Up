const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const user_id = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (user_id && password) {
      console.log(user_id)
      console.log(password)
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user_id, password }),
        headers: { 'Content-Type': 'application/json' },
      });
     
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  