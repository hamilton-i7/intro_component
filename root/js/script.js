const form = document.querySelector('.cta-form');
const trial = document.querySelector('.cta-trial');

form.addEventListener('submit', validateForm);
email.addEventListener('invalid', validateForm);
trial.addEventListener('click', autoFocus);

function autoFocus() {
    window.location.href="#firstName";
}

function validateEmail() {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = regex.test(email.value);

    return validation;
}

function validateForm(e) {
    const inputs = document.querySelectorAll('.input-box__input');
    e.preventDefault();

    inputs.forEach(function(input) {
        if(input.value === '') {
            input.classList.add('invalid-input');
            input.nextElementSibling.classList.remove('hidden');
            email.nextElementSibling.innerHTML = "<em>Email cannot be empty</em>";
            input.nextElementSibling.nextElementSibling.classList.remove('hidden'); 
            
            return false;
        }
        else if(validateEmail() === false && email.value !== '' && input.value !== '') {
            input.classList.remove('invalid-input');
            input.nextElementSibling.classList.add('hidden');
            input.nextElementSibling.nextElementSibling.classList.add('hidden');
            
            email.classList.add('invalid-input');
            email.nextElementSibling.innerHTML = "<em>Looks like this is not an email</em>";
            email.nextElementSibling.classList.remove('hidden');
            
            return false;
        }
        else if(validateEmail() === false && email.value !== '') {
            email.classList.add('invalid-input');
            email.nextElementSibling.innerHTML = "<em>Looks like this is not an email</em>";
            email.nextElementSibling.classList.remove('hidden');

            return false
        }
        else {
            input.classList.remove('invalid-input');
            input.nextElementSibling.classList.add('hidden');
            input.nextElementSibling.nextElementSibling.classList.add('hidden');

            return true;
        }
    });
}