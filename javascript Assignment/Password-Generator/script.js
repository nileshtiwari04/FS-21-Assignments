const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordTextarea = document.getElementById('password');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=';


window.addEventListener('load', function() {
    var message = document.getElementById('message');
    message.classList.add('show');
    setTimeout(function() {
        message.classList.remove('show');
    }, 2500);
});



function generatePassword() {
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    let chars = '';
    if (includeUppercase) chars += uppercaseLetters;
    if (includeLowercase) chars += lowercaseLetters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordTextarea.value = password;
}

function copyPassword() {
    passwordTextarea.select();
    document.execCommand('copy');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);