// load posty maloneys posts
window.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <h3>By: ${post.username}</h3>
            <p>${post.content}</p>
            <h4>Posted on: ${post.datetime}</h4>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
