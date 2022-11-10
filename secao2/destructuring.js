const [a, b] = [10, 100];
console.log(a, b);

const array = [1,2,3];
const [x,y,z] = array;
const [q, ,e] = array;
console.log(x,y,z);
console.log(q,e);

const {name, sex} = {name: 'leo', sex: 'male'}
console.log(name, sex);
const obj = {prod: 'pen', price: 0.55};
const {prod, price} = obj;
console.log(prod, price);