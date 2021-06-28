async function loginFormHandler(event) {
    event.preventDefault();
  
    console.log('login btn pressed');

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log('login success');
        document.location.replace('/feed');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#formSignIn').addEventListener('submit', loginFormHandler);