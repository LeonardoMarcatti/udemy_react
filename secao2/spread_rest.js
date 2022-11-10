const array = [1, 2, 3];
const newArray = [array, 4];
const newerArray = [...array, 4];

console.log(newArray, newerArray);

const filter = (...args) => args.filter(el => el%2 === 0);

console.log(filter(1,2,3,4,5));

const obj = {nome: 'leo'}
const newObj = {...obj, sex: 'male'}
console.log(newObj);