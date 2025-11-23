const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log("-------------------");

function sum(...nums) {
  return nums.reduce((a, el) => {
    return a + el;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5));

console.log("-------------------");

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001,
  },
};

const {
  name,
  age,
  address: { city, pin },
} = user;

console.log(name);
console.log(city);
console.log(pin);
