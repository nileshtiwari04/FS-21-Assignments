// index.js

document.getElementById('btn').addEventListener('click', function() {
    const birthday = document.getElementById('birthday').value;
    if (birthday) {
        const age = calculateAge(new Date(birthday));
        document.getElementById('result').textContent = `Your age is ${age} years old`;
    } else {
        document.getElementById('result').textContent = 'Please enter your date of birth';
    }
});

function calculateAge(birthday) {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}
