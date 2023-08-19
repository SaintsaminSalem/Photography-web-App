/* Your JavaScript code goes here */
function toggleFullScreen() {
    var overlay = document.querySelector('.fullscreen-overlay');
    if (overlay.style.display === '') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}
