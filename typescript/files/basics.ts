/*
  ! Primitives
*/

const age: number = 66
const myName: string = 'Leo'
const male: boolean = true
const nullValue : null = null


/*
  !Complex types arrays, objects, etc
*/

const hobbies: string[] = ['bike', 'swim', 'soccer']
const person: {name: string, age: number } = {name: 'a', age: 1}
const people: {name: string, age: number }[] = [{name: 'a', age: 1}, {name: 'b', age: 2}]

/*
  !Type Inference
  * Typescript automaticamente entende o tipo de dado inserido e impede a mudança
*/

let course = 'React Course'

/*
  !Union Types
  * Permite multiplos tipos
*/

let value: number[]|string= 'Leo'
value = [1, 2, 3]

/*
  ! Type Alias
  * Permite criação de tipos
*/

type lightVehicle = {brand: string, model: string, year: number }
type cargoVehicle = {brand: string, model: string, year: number, cargo: number, unity: string }

const car: lightVehicle = {brand: 'FIAT', model: 'Uno', year: 1991}
const car2: lightVehicle = {brand: 'Ford', model: 'Ecosport', year: 2022}
const truck: cargoVehicle = {brand: 'GM', model: 'SuperTruck', year: 1991, cargo: 1500, unity: 'ton'}
const truck2: cargoVehicle = {brand: 'Volvo', model: 'Europe', year: 2021, cargo: 2500, unity: 'kg'}

const fleet: lightVehicle[]|cargoVehicle[] = [car, car2, truck, truck2]

/*
 !Functions, Types and Parameters
*/

function add(arr: number[]) {
  const result = arr.reduce((acc, index) => acc + index)
  return result
}

const result = add([5, 8])

/*
 !Generics
*/

function unshiftMyArray<myType>(array: myType[], value: myType) {
    return [value, ...array]
}

console.log(unshiftMyArray(['string',2,{name: string}], {name: 'leo'}));

