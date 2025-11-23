let n1 = 5;
let n2 = 7;
const sum = `${n1 + n2}`;
console.log(sum);

console.log("--------------");

const message = `This is line one.
This is line two.
This is line Three.`;
console.log(message);

console.log("--------------");

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName + " " + lastName}`;
console.log(fullName);

console.log("--------------");

const square = (n) => n * n;
console.log(square(10));

console.log("--------------");

// Because arrow functions do NOT have their own this.

// Instead, an arrow function inherits this from
// its surrounding (lexical) scope, not from the object where it is defined.

// In most cases—not inside a class or another function
// this refers to the global object, or is undefined in strict mode.

console.log("--------------");

const obj = {
  value: 50,
  test() {
    console.log(this.value);
  },
};
obj.test();

console.log("--------------");

//Question 3

const product = { name: "Pen", price: 10 };
const shallowCopy = { ...product };
console.log(shallowCopy);

console.log("--------------");

const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b };
console.log(c);

console.log("--------------");

function maxValue(...nums) {
  return Math.max(...nums);
}
console.log(maxValue(1, 2, 3, 4, 5, 6, 7, 8));

//Question 4 destrecturing and optional chaining

const arr = [10, 20, 30];
const [one, two, three] = arr;
console.log(one);
console.log(two);

console.log("--------------");

const laptop = { brand: "Dell", ram: "8GB" };
const { brand, ram } = laptop;
console.log(brand);

console.log("--------------");

const info = {};
console.log(info?.user);
console.log(info?.user?.details);
console.log(info?.user?.details?.email);

console.log("--------------");

//Question 5

for (var i = 0; i < 3; i++) {}
console.log(i); //3

console.log("--------------");

// for (let j = 0; j < 3; j++) {}
// console.log(j); // undefined

console.log("--------------");

// const is used in JavaScript to prevent reassignment,
// means you cannot assign a new value to that variable name.

//Question 6

let kmph = 65;
const speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

console.log("----------------");

let age = 30;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

console.log("----------------");

let number = 0;
const status = number > 0 ? "Positive" : number == 0 ? "Zero" : "Negetive";
console.log(status);

//Question 7

const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5];
console.log(num2);

console.log("------------------");

let d = ["x", "y"];
let e = ["z"];
let f = [...d, ...e];
console.log(f);

console.log("------------------");

function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C"));

//Question 8

const user = { id: 101, stat: "active" };
const { id, stat } = user;
console.log(id);
console.log(stat);

console.log("---------------");

const id1 = 101;
const role = "admin";

const user1 = {
  id1,
  role,
};

console.log(user1);

console.log("---------------");

const name = "Alice";
const age1 = 25;

const user2 = {
  name,
  age1,

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age1} years old.`;
  },
};

console.log(user2);
console.log(user2.greet());

//Question 9

//A.
const todayDate = new Date().toDateString();
console.log(`Today's date is : ${todayDate}`);
//B.
let myName = "Bindhu";
let score = 80;
let print = `Hello ${myName} , your score is ${score}/100`;
console.log(print);

//Question 10
//A
const sum1 = (a, b) => a + b;
console.log(sum1(7, 8));
//B
const isAdultAge = (n) => {
  if (n >= 18) {
    return true;
  } else {
    return false;
  }
};
console.log(isAdultAge(40));

//C
const double = (n) => n * 2;
console.log(double(4));

//Question 11
//A
const arr1 = [1, 2, 3];
const clone = [...arr1];

console.log(clone);
//B
const arr2 = [1, 2, 3];

const newArr = [100, ...arr2];

console.log(newArr);
//C
const obj1 = { name: "Bindu", age: 20 };
const obj2 = { age: 25, city: "Ongole" };

const merged = { ...obj1, ...obj2 };

console.log(merged);

//Question 11
const userDetails = {
  name: "Alex",
  address: {
    city: "Bangalore",
  },
};
//A
console.log(userDetails?.address?.city);
//B
console.log(userDetails?.job?.title);
//C
const data = {
  user: {
    name: "Alice",
  },
};

console.log(data.user.profile?.age);
