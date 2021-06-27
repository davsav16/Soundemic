function signupFormHandler(event) {
    event.preventDefault();

    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const genre = document.querySelector('#genre-signup').value.trim();

    if (firstName && lastName && bio && email && password && genre) {
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                bio,
                email,
                password,
                genre
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('sign-up success');
            document.location.replace('/feed');
        } else {
            alert(response.statusText);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
  
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

document.querySelector('#btnSignUp').addEventListener('submit', signupFormHandler);
document.querySelector('#btnSignIn').addEventListener('submit', loginFormHandler);