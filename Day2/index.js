// Control Flow
//يعني ازاي الكود بتاعك يختار اي سطر ينفذه بناء علي condition

// if \ else if \ else
// let age = 24
// if(age >= 18){
//     console.log("can create liceance");
// }else if(16){
// console.log("can create ID");
// }else{
//     console.log("not allowed created any thing");
// }

// =======================================================================================

// switch case                  شبه if/else بس قيم محدد

let role = "admin"

switch (role) {
    case "admin":
        console.log("open admin dashboard");
        break;
    case "cleint":
        console.log("open ecommerce to show products");
        break;
    default:
        console.log("create account");
    }
// case == if   break to stopped conditions
// ========================================================================================

// Loops

// for loop
for (let i = 0; i < 5; i++) {
   console.log("Iteration : " ,i);
}
// for لما عارف عدد التكرارات.
// ========================================================================================

// while loop
let i = 1;
while (i <= 3) {
  console.log("While:", i);
  i++;
}
// while لما الشرط يتغير داخل الحلقة.
// ========================================================================================

// do while loop
let j = 1;
do {
  console.log("Do while:", j);
  j++;
} while (j <= 3);
// do while بيتنفذ مرة واحدة على الأقل حتى لو الشرط false.
// ========================================================================================

// Arrays

let arr = [10,20 ,30,40, 60]
// index start from 0  length start from 1   index = length -1
console.log(arr[1]); //20
console.log(arr); //(5) [10, 20, 30, 40, 60]
// push pop from end     shift unShift  start     slice splice sort 
//map
// تنشئ مصفوفة جديدة بعد تعديل القيمه
let mapp =arr.map(x => x*2)
console.log(mapp); //(5) [20, 40, 60, 80, 120]


//filter
// ترجع القيم اللي تحقق شرط معين

let filter =arr.filter(x => x>50)
console.log(filter); //[60]


// reduce
// تجمع القيم كلها في نتيجة واحدة

let reduce = arr.reduce((a,b)=>a+b)  
console.log(reduce); //160


//forEach
//تمر على كل عنصر من غير ما ترجع قيمه


let test = arr.forEach(x => console.log(x))  

console.log(test);

// ========================================================================================

//Objects

//  keys  Values

// let person = {
//   name: "Ziad",
//   age: 25,
//   job: "Developer"
// };

// console.log(person.name); // Ziad
// console.log(person["job"]); // Developer


// person.age = 26;         // updated
// person.city = "Cairo";   // add
// delete person.job;       // remove


// Destructuring
//بتفك object أو array:
let user = { name: "Ziad", age: 25, city: "Cairo" };

let { name, age } = user;
console.log(name, age); // Ziad 25


// Spread Operator
// merge Arrays object

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let merged = [...arr1, ...arr2];
console.log(merged); // [1,2,3,4,5]

let obj1 = { name: "Ziad", age: 25 };
let obj2 = { city: "Cairo" };

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // {name:"Ziad", age:25, city:"Cairo"}

// ===============================================================================================================