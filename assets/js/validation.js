const submitBtn = document.getElementById('submit');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const gender = document.getElementsByClassName('radio')[0].getElementsByClassName('input');


firstName.addEventListener("keyup", (e) => {
    const field = "first-name";
    const value = e.target.value;
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
})

lastName.addEventListener("keyup", (e) => {
    const field = "last-name"
    const value = e.target.value;
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
})
email.addEventListener("keyup", (e) => {
    const field = "email";
    const value = e.target.value;
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
})
phone.addEventListener("keyup", (e) => {
    const field = "phone"
    const value = e.target.value;
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
})
password.addEventListener("keyup", (e) => {
    const field = "password";
    const value = e.target.value;
    const regex = /^(\w*?\s*?\D*?\d*?)$/;
    const confirm = document.getElementById('confirm').value;
    let err = "";
    let sccss = false;


    if (value === '') {
        err = "Password name can't be empty";
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
})
confirm.addEventListener("keyup", (e) => {
    const field = "confirm";
    const value = e.target.value;
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
})


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


submitBtn.addEventListener('click', (e) => {

    const inputField = document.getElementsByClassName('input-field');

    let error = false;
    let success = false;

    for (let input in inputField) {

        if (inputField[input].classList.contains("error")) {
            error = true;
            checkSubmit(error, success)
        } else if (inputField[input].classList.contains("success")) {
            success = true;
        } else {
            success = true;
        }
    }

    if (error > 0) {
        console.log("success")
    }


    e.preventDefault();
})

