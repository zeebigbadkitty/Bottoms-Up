const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_id = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const validate = document.querySelector('#validate-signup').value.trim();
  
    if (user_id && (password === validate)) {
      console.log(user_id)
      console.log(password)
      console.log(validate)
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user_id, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);