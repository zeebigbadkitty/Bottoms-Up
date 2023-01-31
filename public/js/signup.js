const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_id = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const validate = document.querySelector('#validate-signup').value.trim();
  const emailCheck = document.querySelector('#email-signup').value.trim();
  let email = '';
  let admin = false;

  // if the user has email has input, set admin to be true. programed this way due to the admin is alway on
  if(emailCheck){
    email = document.querySelector('#email-signup').value.trim();
    admin = true;
  } else {
    email = "dummy@gmail.com";
    admin = false;
  }
//check to make sure the user entered the correct password
  if (user_id && (password === validate)) {

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_id, password, admin, email }),
      headers: { 'Content-Type': 'application/json' },
    });
//if good redirect to home
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