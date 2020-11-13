'use strict'

const btn = document.querySelector('.main__btn'),
    error = [...document.querySelectorAll('.error')];

btn.addEventListener('click', (e) => {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    const radio = [...document.querySelectorAll('input[type="radio"]')],
        radioLabel = [...document.querySelectorAll('.form__radio-label')],
        radioErr = document.querySelector('.form__radio-error'),
        errorClear = [...document.querySelectorAll('.error')],
        firstname = document.querySelector('input[name=firstname]'),
        firstnameErr = document.querySelector('.firstname__error'),
        lastname = document.querySelector('input[name=lastname]'),
        lastnameErr = document.querySelector('.lastname__error'),
        email = document.querySelector('input[name=email]'),
        emailErr = document.querySelector('.email__error'),
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        dayofbirth = document.querySelector('select[name=dayofbirth]'),
        monthofbirth = document.querySelector('select[name=monthofbirth]'),
        yearofbirth = document.querySelector('select[name=yearofbirth]'),
        dateErr = document.querySelector('.date__error');

    radioLabel.forEach(e => {
        e.addEventListener('click', () => {
            radioLabel.forEach(elem => {
                elem.classList.remove('error-border');
                radioErr.innerHTML = '';
            })
        });
    })

    if ((radio[0].checked == false) && (radio[1].checked == false)) {
        radioErr.innerHTML = 'completa correttamente il campo: sesso';
        radioLabel.forEach(e => {
            e.classList.add('error-border');
        })
    }


    firstname.addEventListener('input', () => {
        firstname.classList.remove('error-border-bottom');
        firstnameErr.innerHTML = '';
    });

    firstname.addEventListener('click', () => {
        firstnameErr.innerHTML = '';
    })

    if (firstname.value == '') {
        firstnameErr.innerHTML = 'completa correttamente il campo: nome';
        firstname.classList.add('error-border-bottom');
    }


    lastname.addEventListener('input', () => {
        lastname.classList.remove('error-border-bottom');
    });

    lastname.addEventListener('click', () => {
        lastnameErr.innerHTML = '';
    })

    if (lastname.value == '') {
        lastnameErr.innerHTML = 'completa correttamente il campo: cognome';
        lastname.classList.add('error-border-bottom');
    }


    email.addEventListener('click', () => {
        emailErr.innerHTML = '';
    })

    email.addEventListener('input', () => {
        email.classList.remove('error-border-bottom');
        emailFalidate();
        emailErr.innerHTML = '';
    });

    emailFalidate();

    function emailFalidate() {
        if (email.value == '' || !regex.test(email.value)) {
            emailErr.innerHTML = 'completa correttamente il campo: email';
            email.classList.add('error-border-bottom');
        }
    }

    if (dayofbirth.value == '' || monthofbirth.value == '' || yearofbirth.value == '') {
        dateErr.innerHTML = 'I minori di 18 anni non possono partecipare!'
    }

    return true;
}