function sum(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculate(2,2, sum));

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);