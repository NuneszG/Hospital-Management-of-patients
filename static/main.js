"use strict";
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const Submit = document.querySelector('#submit');
Submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = Name.value;
    const emailValue = Email.value;
    const passValue = Password.value;
    if (nameValue == 'admin' && emailValue == 'admin@gmail.com' && passValue == '1731') {
        location.href = '/Home';
        return;
    }
    alert('Dados inválidos, tente novamente.');
});
