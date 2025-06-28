document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF6'];
    let colorIndex = 0;
    const changeColorBtn = document.getElementById('ფერებისშეცვლისღილაკი');

    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', function () {
            document.body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        });
    }
});