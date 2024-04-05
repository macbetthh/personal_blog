// submission functions 
const blogForm = document.getElementById('blog-form');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username && title && content) {
        const post = {
            username: username,
            title: title,
            content: content,
            datetime: new Date().toLocaleString()
        };

        // store local
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        // go to post malones concert  -- go to the posts page (blog.html) and see all stored locally
        window.location.href = 'blog.html';
    } else {
        alert('Please complete the form');
    }
});
