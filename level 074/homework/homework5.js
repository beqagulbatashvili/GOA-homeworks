document.addEventListener('DOMContentLoaded', function() {
    const numBoxesInput = document.getElementById('ყუთებისრაოდენობა');
    const createBoxesBtn = document.getElementById('ყუთებისშექმნისღილაკი');
    const boxContainer = document.getElementById('ყუთებისკონტეინერი');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if (numBoxesInput && createBoxesBtn && boxContainer) {
        createBoxesBtn.addEventListener('click', function () {
            boxContainer.innerHTML = '';
            const numBoxes = parseInt(numBoxesInput.value);

            for (let i = 0; i < numBoxes; i++) {
                const newBox = document.createElement('div');
                newBox.classList.add('box');
                newBox.style.backgroundColor = getRandomColor();
                newBox.textContent = i + 1;
                boxContainer.appendChild(newBox);
            }
        });
    }
});