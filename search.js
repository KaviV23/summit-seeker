document.getElementById('searchBox').addEventListener('keydown', function(e) {
    // Check if the key pressed was 'Enter'
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        alert('You searched for: ' + this.value);
    }
});
