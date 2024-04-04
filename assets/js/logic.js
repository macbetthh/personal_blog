// nighttiimmee dayyytimmeee
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// show the post malones
window.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>By: ${post.username}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});

// back back back it up
const backButton = document.getElementById('go-back');

backButton.addEventListener('click', function() {
    window.history.back();
});
