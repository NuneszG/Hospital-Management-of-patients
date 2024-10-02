const Name: HTMLInputElement = document.querySelector('#name')!;
const Email: HTMLInputElement = document.querySelector('#email')!;
const Password: HTMLInputElement = document.querySelector('#password')!;
const Submit: HTMLInputElement = document.querySelector('#submit')!;

const Both: HTMLDivElement = document.querySelector('div')!;

const ButtonLocation: HTMLInputElement = document.querySelector('#ButtonLocation')!;


Submit.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: String = Name.value;
    const emailValue: String = Email.value;
    const passValue: String = Password.value;

    if(nameValue == 'admin' && emailValue == 'admin@gmail.com' && passValue == '1731') {
   
        location.href = '/Home';

        return
    }

    Both.innerHTML = 'Dados invalidos, tente novamente.';

    setTimeout(() => {
        Both.innerHTML = '';
    }, 1700);
});