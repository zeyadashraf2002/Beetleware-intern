// 1. this Binding (implicit/explicit/new)
// function Declaration

// Function Declaration - عند استدعاء دالة داخل كائن، this بتكون هي الكائن نفسه
function greetUser() {
    console.log("Hello, " + this.name);
}

const user = { name: "Ali" };

// استدعاء الدالة وتحديد this بشكل ضمني على الكائن user
greetUser.call(user);  // Hello, Ali


// Arrow Function

const calcSum = (x, y) => x + y;

console.log(calcSum(12, 15));  // 27



// Constructor Pattern

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);

console.log(person1.name);  // John
console.log(person1.age);   // 30

// Prototype Chain

const animal = {
    eat() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);
dog.bark = function() {
    console.log("Barking...");
};

dog.eat();   // Eating
dog.bark();  // Barking


// dog ما عندهش eat لوحده، لكن لأنه ورثها من animal من خلال prototype chain
// ، قدر يستخدمها بدون ما تكون موجودة جوا الكائن dog.

// Constructor Pattern

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.drive = function() {
        console.log("Driving a " + this.make + " " + this.model);
    };
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive();  // Driving a Toyota Corolla

// Method Borrowing with call

const person = {
    name: "Ali",
    greet() {
        console.log("Hello, " + this.name);
    }
};

const dog = { name: "Rex" };

// استعارنا دالة greet من الكائن person و استخدمناها مع الكائن dog
person.greet.call(dog);  // Hello, Rex




