
// Coercion Drills

// console.log("5" + 2);        // "52" 
// console.log("5" - 2);        // 3 
// console.log("10" / "2");     // 5
// console.log("5" * "2");      // 10
// console.log(true + false);   // 1 + 0 = 1
// console.log("5" + true);     // "5true" string concatenation
// console.log("5" - true);     // 5 - 1 =4=
// console.log(Number("Ziad")); // NaN 
// console.log(Boolean(""));    // false 
// console.log(Boolean(" "));   // true space
// console.log(5 == "5");       // true
// console.log(5 === "5");      // false type
// console.log(null == undefined);  // true 0 = 0 value
// console.log(null === undefined); // false  type
// console.log(NaN == NaN);         // false  


//  var  let  const
// old
// var firstName = "Ziad";
// var age = 25;
// var men = true;

// var message = "Hello " + firstName + ", you are " + age + " years old.";
// console.log(message);

// new
// const name = "Ziad"; 
// let years = 25;     
// let studying = true; 
// name = "ahmed"error  Assignment to constant variable.


// const x = `i am ${name}, i ${years} years old.`;
// console.log(x);

// years = 26;
// studying = false;

// console.log(`Updated age: ${years}, Still studying? ${studying}`);

//  types Coercion Cheatsheet

//  primitive dataType
// string, number, boolean, undefined, null, symbol, bigint

//  Type Coercion Rules:
// "+" → string concatenation if any operand is a string
// "-", "*", "/", ">" → convert operands to numbers
// Boolean() → converts to true/false 

//  Falsy Values: false, 0, "", null, undefined, NaN ,!true
//  Truthy Values: "0", " ", [], {}, function(){}, 1, -1, "Ziad" ,!false

//  Equality:
// ==  → value
// === → value and type
