async function logout() {
  console.log('logout btn pressed')

  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
  
  if (response.ok) {
    console.log('logged out');
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
  
document.querySelector('#btnLogout').addEventListener('click', logout);