document.getElementById('searchBox').addEventListener('keydown', function(e) {
    // Check if the key pressed was 'Enter'
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        alert('You searched for: ' + this.value);
    }
});

/*const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('toggle');
});*/
