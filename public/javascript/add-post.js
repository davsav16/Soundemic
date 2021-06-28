async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const artist = document.querySelector('#post-artist').value;
    const genre = document.querySelector('#post-genre').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        artist, 
        title,
        genre
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/feed');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#formPost').addEventListener('submit', newFormHandler);