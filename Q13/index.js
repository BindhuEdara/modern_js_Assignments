const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: {
        name: "broadway",
        number: 123,
      },
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: {
        name: "Sunset Boulevard",
        number: 456,
      },
    },
  },
];

const [
  {
    name: name1,
    address: {
      city: city1,
      street: { name: street1, number: number1 },
    },
  },
  {
    name: name2,
    address: {
      city: city2,
      street: { name: street2, number: number2 },
    },
  },
] = people;

console.log(name1);
console.log(name2);
console.log(city1);
console.log(city2);
console.log(street1);
console.log(street2);
console.log(`${name1} lives in ${city1} on ${street1}`);

const result = people.map(
  ({
    name,
    address: {
      city,
      street: { name: streetName },
    },
  }) => {
    return `${name} lives in ${city} on ${streetName}`;
  }
);
console.log(result);
