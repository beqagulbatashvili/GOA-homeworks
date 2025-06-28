document.addEventListener('DOMContentLoaded', function() {
    const movingDiv = document.getElementById('მოძრავიდივი');
    let position = 0;

    if (movingDiv) {
        setInterval(function() {
            position += 5;
            movingDiv.style.left = position + 'px';
        }, 100);
    }
});