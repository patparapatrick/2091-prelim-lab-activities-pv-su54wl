const calculate = require('./calculation.js');

console.log('10+2 = ', calculate.add(10, 2));
console.log('10-2 = ', calculate.subtract(10, 2));
console.log('10*2 = ', calculate.multiply(10, 2));
console.log('10/2 = ', calculate.divide(10, 2));

const rate = 300;
const hours = 4;
const days = 6;
const grossIncome = rate * hours * days;
const tax = calculate.multiply(grossIncome, 0.1);
const sss = 1200;
const pagibig = 300;
const pH = 400;
const deduct = tax + sss + pagibig + pH;
const netSalary = calculate.subtract(grossIncome, deduct);

console.log('Rate per hour: ',rate);
console.log('Hours worked: ',hours);
console.log('Days per week: ',days);
console.log('Gross Income: ',grossIncome);
console.log();
console.log('Tax: ',tax);
console.log('SSS: ',rate);
console.log('Pag-ibig fund: ',pagibig);
console.log('PhilHealth: ',pH);
console.log('Total deduction: ',deduct);
console.log('The net salary is', netSalary);
