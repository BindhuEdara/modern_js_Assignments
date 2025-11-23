//1st Question output
// output is x is not defined . Because let is a block scope , even though it is declare inside the block, out side the block x doesn't exists.

const profile = {
  user: {
    details: {
      email: "test@mail.com",
    },
  },
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);
//undefined
//undefined

const student = {
  name: "Ravi",
  grade: "A",
};

console.log(student?.address?.street);
