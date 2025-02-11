// 1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. Remaining balance: $${balance - amount}`;
}

function processATMWithdrawal() {
    let balance = parseFloat(document.getElementById("balance").value);
    let amount = parseFloat(document.getElementById("amount").value);
    let pin = document.getElementById("pin").value;
    let enteredPin = document.getElementById("enteredPin").value;
    document.getElementById("atmResult").innerText = atmWithdrawal(balance, amount, pin, enteredPin);
}

// 2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let discountedAmount = orderAmount * (1 - discount);
    let shipping = discountedAmount > 50 ? 0 : 10;
    return discountedAmount + shipping;
}

function processShoppingDiscount() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    document.getElementById("shoppingResult").innerText = `Final amount: $${calculateFinalAmount(orderAmount)}`;
}

// 3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    return marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
}

function processStudentGrade() {
    let marks = parseFloat(document.getElementById("marks").value);
    let attendance = parseFloat(document.getElementById("attendance").value);
    document.getElementById("gradeResult").innerText = `Final Grade: ${calculateGrade(marks, attendance)}`;
}

