document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('სახელისშეყვანა');
    const addNameBtn = document.getElementById('სახელისდამატებისღილაკი');
    const nameList = document.getElementById('სახელებისსია');

    if (nameInput && addNameBtn && nameList) {
        addNameBtn.addEventListener('click', function () {
            const name = nameInput.value.trim();
            if (name !== '') {
                const newListItem = document.createElement('li');
                newListItem.textContent = name;
                nameList.appendChild(newListItem);
                nameInput.value = '';
                nameInput.focus();
            }
        });

        nameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addNameBtn.click();
            }
        });
    }
});