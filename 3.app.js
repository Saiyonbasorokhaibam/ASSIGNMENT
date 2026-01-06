//C Mini tasks (write functions)
//1 sum(a,b)
let q = 5;
let r = 7;
function sum() {
  return q + r;
}
console.log(sum());                                            // output 12

//2 areaOfCircle(r) (use Math.PI, round to 2 decimals)
function AreaOfCircle(r) {
  return Number((Math.PI * r * r).toFixed(2));
}
let radius = 5;
let area = AreaOfCircle(radius);
console.log("Area of Circle:", area);                           //output Area of circle : 78.54


//3 toUpperCaseFirst(str) -> "hello" -> "Hello"
function greeting(letters){
    return letters[0].toUpperCase() + letters.slice(1).toLowerCase();
}
console.log(greeting("hello"));                                     //Output Hello

//4 lastDigit(n)
function lastDigit(n) {
  return Math.abs(n) % 10;
}
let output = lastDigit(1236798);
console.log(output);                                                    //output 8


//5 isEven(n)
 function isEven(n) {
  return n % 2 === 0;
}
let nnumber = 12;
console.log(isEven(nnumber));                                                     //output true

//6 compare(a,b) -> return "a>b" | "a<b" | "equal"
function compare(a,b){
    if (a>b){
        console.log("b is greater than a");
    }else if (a < b){
        console.log("a is less than b");
        
    } else {
        console.log("a is equal to b");
    }
}

console.log(compare(9,6));                                              //output  b is greater than a