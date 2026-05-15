function calculateAge() {
const birthDate = new Date(document.getElementById('birthDate').value);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const monthDiff = today.getMonth() - birthDate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
age--;
}

document.getElementById('ageResult').innerText = `Your age is ${age} years.`;
}

function calculateBMI() {
const weight = parseFloat(document.getElementById('weight').value);
const height = parseFloat(document.getElementById('height').value) / 100;

const bmi = weight / (height * height);

document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)}`;
}

function calculateLoan() {
const amount = parseFloat(document.getElementById('loanAmount').value);
const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
const years = parseFloat(document.getElementById('loanYears').value) * 12;

const payment = (amount * rate) / (1 - Math.pow(1 + rate, -years));

document.getElementById('loanResult').innerText = `Monthly Payment: ${payment.toFixed(2)}`;
}
