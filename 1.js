//1
const name = 'Noman';
let age = '24';
//2
const products = { name: 'pen', price: 5, color: 'blue' };

const selfIntro = `Hello, I am ${name}. I am ${age} years old. I have a ${products.color} color ${products.name}`;
//console.log(selfIntro);

//3.1(arrow function)
const divisionFunc = (x) => x / 5;
const firstDiv = divisionFunc(25);
//console.log(firstDiv);


//3.2
const calculationFunc = (x, y) => {
    const firstCalc = x + 2;
    const secondCalc = y + 2;
    const total = firstCalc * secondCalc;
    return total;
}
const result = calculationFunc(5, 6);
//console.log(result);

//3.3
const calcFunc = (x, y, z) => x * y * z;
const firstPart = calcFunc(2, 3, 4);
//console.log(firstPart);
//3.4
const productCalc = (x, z) => {
    const part1 = x + 2;
    const part2 = z + 2;
    const results = part1 * part2;
    return results;
}
const totalAmount = productCalc(2, 7);
//console.log(totalAmount);

//5 
const prices = [12, 5, 7, 5, 9, 23, 56, 78, 90, 99];
const productPrice = prices.map(price => price * 5);
//console.log(productPrice);

//6 (odd numbers finding)
const ages = [5, 12, 6, 8, 98, 14, 56, 78, , 3, 1, 9, 77, 35, 68, 7,99,92,25,56,27,33];
const personsAge = ages.filter(age => age % 2 != 0);
console.log(personsAge);

