// B Fix the Code 
//1 convert string "100" to number and add 20 -> output 120
let string = "100";
let number = Number(string);
console.log(number);
//output 100

let num = 20;
console.log(number+num);                                        //output 120


//2  swap two variables without temp variables
let a = 4;
let b = 7;
[a,b] = [b,a]; 
console.log(a,b);                                               //output 7,4

//3  write a function isTruthy(value) returning true/false using JS truthy rules
function isTruthy(value) {
  return Boolean(value);
}
console.log(isTruthy(""));                                         // false
console.log(isTruthy("hi"));                                       // true


//4 Take input age and print "adult" if >=18 else "minor"
let age = 19;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}                                                                   //output Adult