const Name: HTMLInputElement = document.querySelector('#name')!;
const Email: HTMLInputElement = document.querySelector('#email')!;
const Password: HTMLInputElement = document.querySelector('#password')!;
const Submit: HTMLInputElement = document.querySelector('#submit')!;


Submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('aaaa');
});