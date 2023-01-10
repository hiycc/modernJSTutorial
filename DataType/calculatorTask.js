function Calculator() {
  this.calculateMethods = {
    '+' : (a, b) =>{
      return +a + +b;
    },
    '-': (a, b) => {
      return +a - +b;
    },
  }
  this.calculate = (str) => {
    params = str.split(' ');
    return this.calculateMethods[params[1]](params[0], params[2]);
  }
  this.addMethod(name, func) {
    this.calculateMethods[name] = func;
  }
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10