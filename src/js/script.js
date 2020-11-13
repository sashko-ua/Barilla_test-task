'use strict'

const btn = document.querySelector('.main__btn'),
    error = [...document.querySelectorAll('.error')],
    radio = [...document.querySelectorAll('input[type="radio"]')],
    radioLabel = [...document.querySelectorAll('.form__radio-label')],
    radioErr = document.querySelector('.form__radio-error'),
    firstname = document.querySelector('input[name=firstname]'),
    firstnameErr = document.querySelector('.firstname__error'),
    lastname = document.querySelector('input[name=lastname]'),
    lastnameErr = document.querySelector('.lastname__error'),
    email = document.querySelector('input[name=email]'),
    emailErr = document.querySelector('.email__error'),
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    dayOfBirth = document.querySelector('select[name=dayofbirth]'),
    monthOfBirth = document.querySelector('select[name=monthofbirth]'),
    yearOfBirth = document.querySelector('select[name=yearofbirth]'),
    dateErr = document.querySelector('.date__error'),
    selects = [...document.querySelectorAll('select')];

btn.addEventListener('click', (e) => {
    e.preventDefault();

    radioValidate()
    firstnameValidate();
    lactnameValidate();
    emailValidate();

    dayValidate();
    monthValidate();
    yearValidate();
});

clearErrStyleRadio();

function clearErrStyleRadio() {
    radioLabel.forEach(e => {
        e.addEventListener('click', () => {
            radioLabel.forEach(elem => {
                elem.classList.remove('error-border');
                radioErr.innerHTML = '';
            })
        });
    })
}

function radioValidate() {
    if ((radio[0].checked == false) && (radio[1].checked == false)) {
        radioErr.innerHTML = 'completa correttamente il campo: sesso';
        radioLabel.forEach(e => {
            e.classList.add('error-border');
        })
    }
}


firstname.addEventListener('blur', () => {
    firstnameValidate();
});

firstname.addEventListener('input', () => {
    firstname.classList.remove('error-border-bottom');
    firstnameErr.innerHTML = '';
});

firstname.addEventListener('click', () => {
    firstnameErr.innerHTML = '';
})

function firstnameValidate() {
    if (firstname.value == '') {
        firstnameErr.innerHTML = 'completa correttamente il campo: nome';
        firstname.classList.add('error-border-bottom');
    }
}

lastname.addEventListener('blur', () => {
    lactnameValidate();
})

lastname.addEventListener('input', () => {
    lastname.classList.remove('error-border-bottom');
});

lastname.addEventListener('click', () => {
    lastnameErr.innerHTML = '';
})

function lactnameValidate() {
    if (lastname.value == '') {
        lastnameErr.innerHTML = 'completa correttamente il campo: cognome';
        lastname.classList.add('error-border-bottom');
    }
}

email.addEventListener('blur', () => {
    emailValidate();
})

email.addEventListener('click', () => {
    emailErr.innerHTML = '';
})

email.addEventListener('input', () => {
    email.classList.remove('error-border-bottom');
    emailValidate();
    emailErr.innerHTML = '';
});

function emailValidate() {
    if (email.value == '' || !regex.test(email.value)) {
        emailErr.innerHTML = 'completa correttamente il campo: email';
        email.classList.add('error-border-bottom');
    }
};

dayOfBirth.addEventListener('change', () => {
    dayValidate();
});

monthOfBirth.addEventListener('change', () => {
    monthValidate();
});

yearOfBirth.addEventListener('change', () => {
    yearValidate();
});

selects.forEach(element => {
    element.addEventListener('change', () => {
        if (dayOfBirth.classList.contains('dateErr') || monthOfBirth.classList.contains('dateErr') || yearOfBirth.classList.contains('dateErr')) {
            dateErr.innerHTML = 'I minori di 18 anni non possono partecipare!';
        } else {
            dateErr.innerHTML = '';
        }
    });
});

function dayValidate() {
    if (dayOfBirth.selectedIndex == 0) {
        dayOfBirth.classList.add('dateErr');
    } else {
        dayOfBirth.classList.remove('dateErr');
    }
};

function monthValidate() {
    if (monthOfBirth.selectedIndex == 0) {
        monthOfBirth.classList.add('dateErr');
    } else {
        monthOfBirth.classList.remove('dateErr');
    }
};

function yearValidate() {
    if (yearOfBirth.selectedIndex == 0) {
        yearOfBirth.classList.add('dateErr');
    } else {
        yearOfBirth.classList.remove('dateErr');
    }
}