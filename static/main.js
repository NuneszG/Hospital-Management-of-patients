"use strict";
const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Password = document.querySelector('#password');
const Submit = document.querySelector('#submit');
const Both = document.querySelector('div');
const ButtonLocation = document.querySelector('#ButtonLocation');
Submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = Name.value;
    const emailValue = Email.value;
    const passValue = Password.value;
    if (nameValue == 'admin' && emailValue == 'admin@gmail.com' && passValue == '1731') {
        Both.innerHTML = 'Logado com sucesso!';
        setTimeout(() => {
            Both.innerHTML = '';
        }, 1500);
        setTimeout(() => {
            location.href = '/Home';
        }, 1700);
        return;
    }
    Both.innerHTML = 'Dados invalidos, tente novamente.';
    setTimeout(() => {
        Both.innerHTML = '';
    }, 1700);
});
