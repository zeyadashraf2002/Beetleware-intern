"use strict";

//====================================================================================
// function vs arrow function

// Function Declaration
// ليها this خاص، وكمان بيتم رفعها (Hoisting)
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(1500, 600));

// Arrow Function
// ملهاش this خاص ومفيش Hoisting
const calcSum = (x, y) => x + y;

console.log(calcSum(12, 15));


//====================================================================================
// Lexical Scope

let globalValue = 10;

function showValue() {
    console.log(globalValue); 
}

showValue();


//====================================================================================
// closures
// function بتحتفظ بالمتغيرات اللي اتولدت معاها حتى بعد انتهاء outer

function parentFn() {
    let counter = 0;

    function childFn() {
        counter++;
        console.log("Current:", counter);
    }

    return childFn;
}

const step = parentFn();
step(); 
step();


//====================================================================================
// counter() 

function buildCounter(initial = 0) {
    let current = initial;

    return {
        up() {
            return ++current;
        },
        down() {
            return --current;
        },
        restart() {
            current = initial;
            return current;
        }
    };
}

const myCounter = buildCounter(5);
console.log(myCounter.up());
console.log(myCounter.up());
console.log(myCounter.restart());


//====================================================================================
// once() — Run one time

function runOnce(callback) {
    let executed = false;

    return function (...params) {
        if (!executed) {
            executed = true;
            return callback(...params);
        }
    };
}

function greet() {
    console.log("Hello from once!");
}

const greetOnce = runOnce(greet);

greetOnce(); 
greetOnce(); 


//====================================================================================
// memoize() store in cache 


function cacheFunction(fn) {
    const memory = {};

    return function (...values) {
        const identifier = JSON.stringify(values);

        if (identifier in memory) {
            return memory[identifier];
        }

        const output = fn(...values);
        memory[identifier] = output;
        return output;
    };
}

function heavyAdd(a, b) {
    console.log("Processing...");
    return a + b;
}

const optimizedAdd = cacheFunction(heavyAdd);

console.log(optimizedAdd(3, 4)); 
console.log(optimizedAdd(3, 4)); 
