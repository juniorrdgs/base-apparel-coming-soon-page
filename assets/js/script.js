let regex = /^([A-z0-9._-]{2,})(@[A-z0-9]{2,})(.[A-z0-9]{2,})(.[A-z0-9]{2,})?$/g;

let input = document.querySelector('#email');
let sendBtn = document.querySelector('.arrow');
let error = document.querySelector('.error');
let message = document.querySelector('.fake');

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value == '' || !regex.test(input.value)) {
        error.style.visibility = 'visible';
        message.style.visibility = 'visible';
        setTimeout(() => {
            error.style.visibility = 'hidden';
            message.style.visibility = 'hidden';
        }, 10000);
    } else {
        alert('Subscribed on the list');
    }
})