// call stack
// step b step 
function a() { b(); }
function b() { console.log("hi"); }
a();

//=========================================================================
// task queue macrotasks

// Task Queue (macrotasks)
// setTimeout
// setInterval
// DOM events (click, scroll…)
// I/O callbacks

// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);


//=========================================================================
// microtasks  بتنـفذ قبل أي تاسك

// Promise.then
// async/await (الجزء اللي بعد await)
// queueMicrotask

// console.log(1);
// Promise.resolve().then(() => console.log(2));
// // console.log(3);

//=========================================================================
// example to show the difference between macrotask and microtask

// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// console.log(4);

//=========================================================================
setTimeout(() => console.log("task"), 0);

Promise.resolve().then(() => {
  console.log("micro 1");
});

Promise.resolve().then(() => {
  console.log("micro 2");
});
