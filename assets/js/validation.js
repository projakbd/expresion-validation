//Calling Ui Element
const submitBtn = document.getElementById('submit');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const gender = document.getElementsByClassName('radio')[0].getElementsByClassName('input');


//Adding Event Listener
firstName.addEventListener("keyup", (e) => {
    const field = "first-name";
    const value = e.target.value;
    inputAction(field, value);
})
lastName.addEventListener("keyup", (e) => {
    const field = "last-name"
    const value = e.target.value;
    inputAction(field, value);
})
email.addEventListener("keyup", (e) => {
    const field = "email";
    const value = e.target.value;
    inputAction(field, value);
})
phone.addEventListener("keyup", (e) => {
    const field = "phone"
    const value = e.target.value;
    inputAction(field, value);
})
password.addEventListener("keyup", (e) => {
    const field = "password";
    const value = e.target.value;
    inputAction(field, value);
})
confirm.addEventListener("keyup", (e) => {
    const field = "confirm";
    const value = e.target.value;
    inputAction(field, value);
})

submitBtn.addEventListener('click', (e) => {

    const inputField = document.getElementsByClassName('input-field');

    for (let i = 0; i < inputField.length; i++) {
        const field = inputField[i].querySelector('.input').getAttribute('id')
        const value = inputField[i].querySelector('.input').value;
        inputAction(field, value);
    }
    {
        const errMsg = document.getElementsByClassName('input-field')
        let err = 0;

        for (let i = 0; i < errMsg.length; i++) {
            if (errMsg[i].classList.contains('error')) {
                err += 1;
            }
        }
        if (err > 0) {
            e.preventDefault;
        } else {
            alert('success')
        }
    }
    e.preventDefault()

})


//Define Function

const inputCheck = (field, err, sccss) => {

    if (err.length > 0) {
        const inputField = document.getElementById(field).parentElement;
        inputField.classList = `input-field ${field} error`
        inputField.getElementsByClassName('err-msg')[0].innerText = err;

    } else if (sccss === true) {
        const inputField = document.getElementById(field).parentElement;
        inputField.classList = `input-field ${field} success`

    } else {
        const inputField = document.getElementById(field).parentElement;
        inputField.classList = `input-field ${field}`
    }

}

const inputAction = (field, value) => {
    switch (field) {
        case 'first-name':
            {
                const regex = /^([a-zA-Z])([a-zA-Z.]*)(\s*)([a-zA-Z]*)(\s*)$/;
                let err = "";
                let sccss = false;

                if (regex.test(value) === true) {
                    sccss = true
                } else if (value === '') {
                    err = "First name can't be empty";
                } else if (/^\s*$/.test(value) === true) {
                    err = "First name cann't be only white space!"
                } else if (/(\d)/g.test(value) === true) {
                    err = "First name can't be contain a number!(ex:Mr. John)";
                } else if (regex.test(value) === false) {
                    err = "Invalid Fast Name!(ex: Mr. John)";
                }

                inputCheck(field, err, sccss);
            }
            break;

        case 'last-name':
            {
                const regex = /^([a-zA-Z])*(\s*)$/;
                let err = "";
                let sccss = false;


                if (value === '') {
                    sccss = false;
                } else if (/^\s*$/.test(value) === true) {
                    err = "Last name cann't be only white space!"
                } else if (regex.test(value) === true) {
                    sccss = true;
                } else if (/(\d)/g.test(value) === true) {
                    err = "Last name can't be contain a number!(ex: Smith)";
                } else if (regex.test(value) === false) {
                    err = "Invalid last Name!(ex: Smith)";
                }


                inputCheck(field, err, sccss);
            }
            break;

        case 'email':
            {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
                let err = "";
                let sccss = false;


                if (value == '') {
                    err = "Email can't be empty";
                } else if (/(\s)/g.test(value) === true) {
                    err = "Email field can't contain any white space!(ex:john_123@email.com)"
                } else if (regex.test(value) === false) {
                    err = "Invalid email!(ex:john_123@email.com)";
                } else if (/\D/g.test(value === true)) {
                    if (regex.test(value) === true) {
                        err = "";
                    } else {
                        err = "Email field can't contain special charecter except '-._@'(ex:john_123@email.com)"
                    }
                }

                if (regex.test(value) === true) {
                    sccss = true;
                }

                inputCheck(field, err, sccss);
            }
            break;

        case 'phone':
            {
                const regex = /^(\+?)[\d]*$/;
                let err = "";
                let sccss = false;


                if (value === '') {
                    sccss = false;
                } else if (/(\s)/g.test(value) === true) {
                    err = "Pone number con't contain any white space"
                } else if (value.length > 15) {
                    err = "Phone number can't be more than 15 disit";
                } else if (regex.test(value) === true) {
                    sccss = true;
                } else if (/(\w)/g.test(value) === true) {
                    err = "Phone number can't contain a letter!(ex: +8801511111111)";
                } else if (/(\D*)/g.test(value) === true) {
                    err = "Phone number can't contain a special character!(ex: +8801511111111)";
                } else if (regex.test(value) === false) {
                    err = "Invalid number!(ex: +8801511111111)";
                }


                inputCheck(field, err, sccss);
            }
            break;

        case 'password':
            {
                const regex = /^(\w*?\s*?\D*?\d*?)$/;
                const confirm = document.getElementById('confirm').value;
                let err = "";
                let sccss = false;


                if (value === '') {
                    err = "Password can't be empty";
                } else if (value.length < 4) {
                    err = "Password can't be less then 4!"
                } else if (/^\d*$/.test(value) === true) {
                    err = "Weak password! Use letter, number and special character to make a strong password!"
                } else if (/^[a-zA-Z_]*$/.test(value) === true) {
                    err = "Weak password! Use letter, number and special character to make a strong password!"
                } else if (regex.test(value) === true) {
                    sccss = true;
                }

                if (confirm.length > 0) {
                    const confirmField = "confirm"
                    let confirmSccss = false;
                    let confirmErr = "";
                    if (confirm === value) {
                        confirmSccss = true;
                    } else {
                        confirmErr = "Password don't match!"
                    }
                    inputCheck(confirmField, confirmErr, confirmSccss)
                }

                inputCheck(field, err, sccss);
            }
            break;
        case 'confirm':
            {
                const passwordValue = document.getElementById('password').value;
                let err = "";
                let sccss = false;

                if (value === '') {
                    err = "Confirm password can't be empty";
                } else if (value === passwordValue) {
                    sccss = true;
                } else {
                    err = "Password don't match!"
                }


                inputCheck(field, err, sccss);
            }
            break;

        default:
            {
                console.log('Success');
            }
    }

}