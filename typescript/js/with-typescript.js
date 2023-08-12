"use strict";
function add2(a, b) {
    return a + b;
}
const result2 = add2(2, 5);
const string = result2.toString();
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.append(string);
body.append(h1);
console.log(typeof result2);
