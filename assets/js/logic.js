// nighttiimmee dayyytimmeee
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', function() {
    console.log("toggle")
    document.body.classList.toggle('dark-mode');
});


// back back back it up
const backButton = document.getElementById('go-back');

backButton.addEventListener('click', function() {
    window.history.back();
});
