
// const theForm = document.querySelector('#creditCardForm');

// //validations and errors

// function displayError(msg) {
//     // display error message
//     document.querySelector('.errors').textContent = msg
// }

// function isCardNumberValid(number) {
//     // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
//     return number === '1234123412341234'

// }

// function submitHandler(event) {
//     event.preventDefault();
//     let errorMsg = '';
//     displayError('');

//     let cardNumber = document.querySelector('#creditCardNumber');
//     const cardNum = cardNumber.value.trim();

//     // Check if it's numeric and valid in one go

//     if (!/^\d{16}$/.test(cardNum)) {
//         errorMsg += 'Card number must be 16 digits\n';
//     } else if (!isCardNumberValid(cardNum)) {
//         errorMsg += 'Card number is not valid\n';
//     }

//     //check date
//     const expYear = Number(document.querySelector('#year').value);
//     const expMonth = Number(document.querySelector('#month').value);
//     const currentDate = new Date()

//     if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
//     ) {
//         errorMsg += 'Card is expired\n';
//     }

//     if (errorMsg !== '') {
//         // there was an error. stop the form and display the errors.
//         displayError(errorMsg)
//         return;
//     }
//     // Success: show a confirmation message
//     const formContainer = document.getElementById('creditCardForm');
//     formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
// }


// document.querySelector('#creditCardForm').addEventListener('submit', submitHandler)

const theForm = document.querySelector('#creditCardForm');

// Display error message
function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}


function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();

    let errorMsg = '';
    displayError(''); 

    const cardNum = document.querySelector('#creditCardNumber').value.trim();

    if (!/^\d{16}$/.test(cardNum)) {                 
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 

    const fullExpYear = 2000 + expYear;

    if (
        fullExpYear < currentYear ||
        (fullExpYear === currentYear && expMonth <= currentMonth)
    ) {
        errorMsg += 'Card is expired\n';
    }

    
    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    
    const formContainer = document.getElementById('creditCardForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}


theForm.addEventListener('submit', submitHandler);
