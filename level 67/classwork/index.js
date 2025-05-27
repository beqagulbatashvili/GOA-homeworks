document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let firstName = form.elements['firstName'].value;
        let email = form.elements['email'].value;
        let password = form.elements['password'].value;


        console.log('name: ', firstName);
        console.log('emile:', email);
        console.log('password:', password);
    });
});
