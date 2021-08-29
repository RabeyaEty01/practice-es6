//7
const products = [
    { name: 'bottol', price: 10, color: 'sky-blue' },
    { name: 'laptop', price: 50000, color: 'black' },
    { name: 'phone', price: 5000, color: 'blue' },
    { name: 'table', price: 3000, color: 'red' },
    { name: 'oven', price: 5000, color: 'white' }
];
const productsPrice = products.find(product => product.price == 5000);
//console.log(productsPrice);


//8
const friends = {
    name: 'abdul', age: 24, food: 'beef', address: 'noakhali', income: 100000
}
const { name, age, food, income, address } = friends;
//console.log(name ,age);
//console.log(name ,income,address);
//console.log(name ,age,food,address,income);

//9
const office = {
    name: 'BL',
    position: 'CMR',
    salary: 15000,
    time: 10
}
const three = office.salary;
//console.log(three);

//10
const calcFunc = (x, y, z = 7) => x + y + z;
const firstCalc = calcFunc(2, 3);
//console.log(firstCalc);
