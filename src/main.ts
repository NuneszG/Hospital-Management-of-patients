const Name: HTMLInputElement = document.querySelector('#name')!;
const Email: HTMLInputElement = document.querySelector('#email')!;
const Password: HTMLInputElement = document.querySelector('#password')!;
const Submit: HTMLInputElement = document.querySelector('#submit')!;



Submit.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue: String = Name.value;
    const emailValue: String = Email.value;
    const passValue: String = Password.value;

    if(nameValue == 'admin' && emailValue == 'admin@gmail.com' && passValue == '1731') {
   
        location.href = '/Home';

        return
    }

    alert('Dados inválidos, tente novamente.')
});