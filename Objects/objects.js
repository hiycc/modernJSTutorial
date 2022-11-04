// function isEmpty(obj) {
//   for (key in obj) {
//     if(key)
//       return false;
//   }
//   return true;
// }

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false


// function sumOfSalaries(salaries) {
//   let result = 0;
//   for(key in salaries) {
//     result += salaries[key];
//   }
//   return result;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// console.log(sumOfSalaries(salaries));

function multiplyNumeric(obj) {
  for(key in obj) {
    if( typeof obj[key] === 'number') {
      obj[key] *=2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);