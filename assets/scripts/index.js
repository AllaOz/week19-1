document.addEventListener('DOMContentLoaded', function() {
  const btnSubmit = document.getElementById('submit');
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    const title = posttitle.value;
    const body = postbody.value;
    createPost(title, body);
    posttitle.value = '';
    postbody.value = '';
  });
function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(post => {
      const postContainer = document.getElementById('show__posts');
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2 class = "heading">${post.title}</h2>
        <p class = "paragraph">${post.body}</p>
      `;
      postContainer.appendChild(postElement);
    })
    .catch(error => console.log(error));
  }
});
  
  