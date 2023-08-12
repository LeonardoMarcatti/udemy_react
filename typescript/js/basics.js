"use strict";
/*
  ! Primitives
*/
const age = 66;
const myName = 'Leo';
const male = true;
const nullValue = null;
/*
  !Complex types arrays, objects, etc
*/
const hobbies = ['bike', 'swim', 'soccer'];
const person = { name: 'a', age: 1 };
const people = [{ name: 'a', age: 1 }, { name: 'b', age: 2 }];
/*
  !Type Inference
  * Typescript automaticamente entende o tipo de dado inserido e impede a mudança
*/
let course = 'React Course';
/*
  !Union Types
  * Permite multiplos tipos
*/
let value = 'Leo';
value = [1, 2, 3];
const car = { brand: 'FIAT', model: 'Uno', year: 1991 };
const car2 = { brand: 'Ford', model: 'Ecosport', year: 2022 };
const truck = { brand: 'GM', model: 'SuperTruck', year: 1991, cargo: 1500, unity: 'ton' };
const truck2 = { brand: 'Volvo', model: 'Europe', year: 2021, cargo: 2500, unity: 'kg' };
const fleet = [car, car2, truck, truck2];
/*
 !Functions, Types and Parameters
*/
function add(arr) {
    const result = arr.reduce((acc, index) => acc + index);
    return result;
}
const result = add([5, 8]);
/*
 !Generics
*/
function unshiftMyArray(array, value) {
    return [value, ...array];
}
console.log(unshiftMyArray(['string', 2, { name: string }], { name: 'leo' }));
