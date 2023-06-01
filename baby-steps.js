const numbers = process.argv.slice(2);
const sum = numbers.reduce((total, num) => total + Number(num), 0);

console.log(sum);
