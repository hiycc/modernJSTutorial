// let message = 'Hello!';
// let phrase = message;
// message = 'Hi!';
// console.log(phrase);

let user = {
  name: 'Tom',
};
let admin = user;
user.name = 'John';
console.log(admin.name);