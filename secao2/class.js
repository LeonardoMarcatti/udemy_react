class Human {
  constructor(gender = 'male'){
    this.gender = gender;
  }

  printGender = () => console.log(this.gender);
}

class Person extends Human{
  constructor(name, gender){
    super(gender);
    this.name = name
  }

  printName = () => console.log(`${this.name} is a ${this.gender}`);
}

const person1 = new Person('Leo');
person1.printName();

const person2 = new Person('Ana', 'female');
person2.printName();