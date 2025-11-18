const square = (n) => n * n;
const cube = (n) => n * n * n;
const matrics = (n) => ({
  square: square(n),
  cube: cube(n),
});
console.log(matrics(5));
