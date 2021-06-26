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
        }).then((response) => {console.log(response)})
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);