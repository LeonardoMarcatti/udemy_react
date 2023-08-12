function add2(a: number, b: number): number {
  return a + b;
}

const result2: number = add2(2, 5);

const string = result2.toString()
const body: any = document.querySelector('body')
const h1 = document.createElement('h1')

h1.append(string)
body.append(h1)
console.log(typeof result2);