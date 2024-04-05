// submission is weakness
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

        // store locallys
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        // got to post malones concert
        window.location.href = 'blog.html';
    } else {
        alert('Please complete the form');
    }
});
