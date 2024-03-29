// Proxy and Reflect
// Proxy = middleman.
// Proxies allow you to cut off almost any part of any part of the process of object change
// -- create middleware!
// we do this with traps!

/*
handler.getPrototypeOf()
handler.setPrototypeOf()
handler.isExtensible()
handler.preventExtensions()
handler.getOwnPropertyDescriptor()
handler.defineProperty()
handler.has()
handler.get()
handler.set()
handler.deleteProperty()
handler.ownKeys()
handler.apply()
handler.construct()
*/

// 1. Exclusive control over accessive and setting objects
// 2. validation
// 3. logic/middleware

//Proxy is a constructor
// 1. object to proxy
// 2. object serving as the handler
/*

let handler = {
    //has a property, each trap you want to set.
    // get will run anytime anyone accesses this object
    //takes 2 args:
    //1. Target object (the object acted on)
    //2. Property that was accessed
    get: (target, propName) => {
/!*
        console.log(target);
        console.log(propName);
*!/
        return target[propName];
    },
    // set traps takes 3 args:
    // 1. target object
    // 2. property that was set
    // 3. new value
    set: (target, propName, newValue) => {
        console.log(target);
        console.log(propName);
        console.log(newValue);

        if (propName === "age" && typeof(newValue) !== "number") {
            throw new TypeError("Age must be a valid number");
        }
        target[propName] = newValue;
    },
    has: (target, propName) => {
        console.log("Checking if has...");
        return true;
    }
}

let newObj = new Proxy({}, handler);
newObj.name = "Bruno";
newObj.job = "Software Engineer";
newObj.age = 36;
console.log("Name: ", newObj.name);
console.log("Job:", newObj.job);
console.log("Age:", newObj.age);

if ("name" in newObj) {
    console.log("I found it!");
}
*/

// Make a proxy out of a constructor/class object
/*
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    printInfo() {
        console.log(this.make, this.model)
    }
}

let handler = {
    get: (target, propName) => {
        console.log(`Someone is trying to get ${propName} pro`)
    }
}

let aCar = new Car(`nissan`, `maxima`);
let carProxy = new Proxy(aCar, handler);
console.log(carProxy.make);
*/

// apply trap
function sum(x, y) {
    return x + y;
}
const handler = {
    // apply trap takes 3 args:
    // 1. target
    // 2. tahe this
    // 3. argumentList for this call
    apply: (target, thisArgs, argsList) => {
        console.log("Someone called a function");
        return target(argsList[0], argsList[1]);
    }
}
const sumProxy = new Proxy(sum, handler);

console.log(sum(2, 9));
console.log(sumProxy(2, 9));
