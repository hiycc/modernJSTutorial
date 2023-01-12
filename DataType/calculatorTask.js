function Calculator() {
  this.calculateMethods = {
    '+' : (num1, num2) =>{
      return +num1 + +num2;
    },
    '-': (a, b) => {
      return +num1 - +num2;
    },
  }
  this.calculate = (str) => {
    params = str.split(' ');
    return this.calculateMethods[params[1]](params[0], params[2]);
  }
  this.addMethod = (name, func) => {
    this.calculateMethods[name] = func;
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10