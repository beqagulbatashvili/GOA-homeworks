document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('ჩემიაბზაცი');
    const button = document.getElementById('ტექსტისშეცვლისღილაკი');

    if (paragraph && button) {
        button.addEventListener('click', function () {
            paragraph.textContent = "ეს არის ახალი ტექსტი!";
        });
    }
});