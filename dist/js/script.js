'use strict'

const btn = document.querySelector('.main__btn'),
    error = [...document.querySelectorAll('.error')],
    radio = [...document.querySelectorAll('input[type="radio"]')],
    radioLabel = [...document.querySelectorAll('.form__radio-label')],
    radioErr = document.querySelector('.form__radio-error'),
    firstname = document.querySelector('input[name=firstname]'),
    firstnameLabel = document.querySelector('.firstname__label'),
    firstnameErr = document.querySelector('.firstname__error'),
    lastname = document.querySelector('input[name=lastname]'),
    lastnameErr = document.querySelector('.lastname__error'),
    lastnameLabel = document.querySelector('.lastname__label'),
    email = document.querySelector('input[name=email]'),
    emailLabel = document.querySelector('.email__label'),
    emailErr = document.querySelector('.email__error'),
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    dayOfBirth = document.querySelector('select[name=dayofbirth]'),
    monthOfBirth = document.querySelector('select[name=monthofbirth]'),
    yearOfBirth = document.querySelector('select[name=yearofbirth]'),
    dateErr = document.querySelector('.date__error'),
    selects = [...document.querySelectorAll('select')],
    overlay = document.querySelector('.overlay'),
    closeModal = [...document.querySelectorAll('.modal__close')],
    linksParent = document.querySelector('.footer__links'),
    regulationModal = document.querySelector('.modal__regulation'),
    privacyModal = document.querySelector('.modal__privacy'),
    contactModal = document.querySelector('.modal__contact');

closeModal.forEach(e => {
    e.addEventListener('click', () => {
        regulationModal.classList.remove('modal_active');
        privacyModal.classList.remove('modal_active');
        contactModal.classList.remove('modal_active');
        overlay.classList.remove('overlay_active');
    });
});

linksParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('reg')) {
        regulationModal.classList.add('modal_active');
    }

    if (e.target.classList.contains('priv')) {
        privacyModal.classList.add('modal_active');
    }

    if (e.target.classList.contains('cont')) {
        contactModal.classList.add('modal_active');
    }

    overlay.classList.add('overlay_active');
});

firstname.addEventListener('blur', () => {
    if (firstname.value == '') {
        firstnameLabel.classList.remove('label_active');
    } else {
        firstnameLabel.classList.add('label_active');
    }
});

lastname.addEventListener('blur', () => {
    if (lastname.value == '') {
        lastnameLabel.classList.remove('label_active');
    } else {
        lastnameLabel.classList.add('label_active');
    }
});

email.addEventListener('blur', () => {
    if (email.value == '') {
        emailLabel.classList.remove('label_active');
    } else {
        emailLabel.classList.add('label_active');
    }
});


btn.addEventListener('click', (e) => {
    e.preventDefault();

    radioValidate()
    firstnameValidate();
    lastnameValidate();
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
            });
        });
    });
}

function radioValidate() {
    if ((radio[0].checked == false) && (radio[1].checked == false)) {
        radioErr.innerHTML = 'completa correttamente il campo: sesso';
        radioLabel.forEach(e => {
            e.classList.add('error-border');
        });
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
});

function firstnameValidate() {
    if (firstname.value == '') {
        firstnameErr.innerHTML = 'completa correttamente il campo: nome';
        firstname.classList.add('error-border-bottom');
    }
}

lastname.addEventListener('blur', () => {
    lastnameValidate();
});

lastname.addEventListener('input', () => {
    lastname.classList.remove('error-border-bottom');
});

lastname.addEventListener('click', () => {
    lastnameErr.innerHTML = '';
});

function lastnameValidate() {
    if (lastname.value == '') {
        lastnameErr.innerHTML = 'completa correttamente il campo: cognome';
        lastname.classList.add('error-border-bottom');
    }
}

email.addEventListener('blur', () => {
    emailValidate();
});

email.addEventListener('click', () => {
    emailErr.innerHTML = '';
});

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
}

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
}

function monthValidate() {
    if (monthOfBirth.selectedIndex == 0) {
        monthOfBirth.classList.add('dateErr');
    } else {
        monthOfBirth.classList.remove('dateErr');
    }
}

function yearValidate() {
    if (yearOfBirth.selectedIndex == 0) {
        yearOfBirth.classList.add('dateErr');
    } else {
        yearOfBirth.classList.remove('dateErr');
    }
}