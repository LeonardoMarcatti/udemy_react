let number1 = 1;
const number2 = number1; // Copia o elemento e guarda na memória
number1 = 0;
console.log(number2);

const person = { name: 'Leo' };
const person2 = person; // Copia o apontador para o elemento na memória
const person3 = {...person}; // Cria um objeto novo e não uma cópia do apontador
person.name = 'John';
console.log(person2);
console.log(person3);
