const isEven = (n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(10));

console.log("------------");

const marks = 34;
const result = marks >= 35 ? "pass" : "fail";
console.log(result);
console.log("------------");

const greet = (name) => (name ? "Hello" : "Guest");
console.log(greet("bindu"));
console.log(greet());
