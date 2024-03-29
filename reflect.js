// Reflect
// CS concept
// Reflection is to examine, introspect, or modify your program at run-time

// console.log(typeof(data));

/*
Reflect and Proxy go hand in hand.
Reflect is NOT instanciated or invoked
Reflect is a standalone global object, that has methods
that are 1:1 with the proxy handlers
*/

// if Proxies provide traps to change objects
// Relfect provides introspection to get data about the objects
// console.log(Math.round(1.2321));
// console.log(Reflect.get());

// Reflect.get
// Reflect.get() takes 2 args:
// 1. target
// 2. property

/*
const x = {
    a: 1,
    b: 2
}
*/

/*
console.log(Reflect.get(x, 'a'));
// console.log(1['a']);
// console.log(Reflect.get(1, 'a'));

const arr = ["Joe", "Jim", "John"];
console.log(Reflect.get(arr, 1));
*/

/*
const monster1 = {
    secret: 'easily scared',
    eyeCount: 4
}

const handler1 = {
    get: function (target, prop, receiver) {
        if (prop === 'secret') {
            return `${target.secret.substr(0,4)} ... shhh!`
        }
        return Reflect.get(...arguments);
    }
}

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// expected output: 4

console.log(proxy1.secret);
// expected output: "easi ... shhh!"
*/

// ========reflect.has========
// work hasOwnProperty and "in"

/*
const hgttg = {
    meaningOfLife: 42
}

console.log(hgttg.hasOwnProperty('meaningOfLife'));
//console.log(hgttg.hasOwnProperty('meaningOdfdffLife'));
console.log('meaningOfLife' in hgttg);
//console.log('meaddningOfLife' in hgttg);
console.log(Reflect.has(hgttg, 'meaningOfLife'));

 */

// ========reflect.apply========
/*
function sum(...array) {
    return array.reduce((number, total) => {
        return number + total;
    })
}

sum.apply = function () {
    throw new Error("I broke the apply, just for fun!!!");
}
*/
//console.log(sum([1,2,3,]));
// console.log(sum.apply(null, [1,2,3]));
//console.log(Function.apply.call(sum, null, [1,2,3]))
// console.log(Reflect.apply(sum, null, [1, 2, 3]));

//========Reflect.defineProperty========
// Object.defineProperty = allows you to define metaData about a prop.
/*

let bandit = {}
const diffLevel = 2;

if (diffLevel <= 2) {
    Object.defineProperty(bandit, 'attack', {
        value: 15,
        writable: false
    })
    Reflect.defineProperty(bandit, 'run', {
    //Object.defineProperty(bandit, 'run', {
        value: () => { console.log("Bandit has fled!")},
        writable: false
    })
} else {
    Object.defineProperty(bandit, 'attack', {
        value: 25,
        writable: false
    })
}

console.log(bandit.attack);
bandit.run();

// Reflect.defineProperty REPLACES Object.defineProperty

//========Reflect.getOwnPropertyDescriptor========
console.log(Object.getOwnPropertyDescriptor(bandit, 'attack'))
console.log(Reflect.getOwnPropertyDescriptor(bandit, 'attack'))

// - Reflect.deleteProperty replaces Object.deleteProperty
// - Reflect.getPrototypeOf
// - Reflect.setPrototypeOf
// - Reflect.isExtensible

*/