fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


fetch('https://goa-api.vercel.app/animals')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
