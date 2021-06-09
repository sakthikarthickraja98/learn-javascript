//print hello
console.log("hello")

//add numbers and print it
console.log(2+2)

//use let to initialize variable 
let num = 5+5
console.log(num)

//initialize the variable for first time only, if we try it for next step also then it will show an error
num = 5+5
console.log(num)

console.log(num + 5)

//use let to assign variable for string
let user = 'skr'
console.log(user)

//constant(const) is used to make that value in the constant. If we use const then we can't change the value
let r = 5
const pi = 3.14
let area

r = 6
area = pi * r * r
console.log(area)

//assign variable for float and find the type of data using typeof
let num1 = 7.8
console.log(typeof num1)

//using n in the end of the see the full length of number
let num2 = 1984298984896949889n
console.log(num2)

//we can add the above type of number to that same type
console.log(num2 + 2n)



//++num is pre increment
//num++ is post increment
let num3 = 4

let x = ++num3
console.log(x)

let y = x+1
console.log(y)
console.log(num3)

//using if else find the greater number
let a = 20;
let b = 30;
let c = 40;

if(a>b && a>c){
  console.log("a is the greater number")
}
else if(b>a && b>c){
  console.log("b is the greater number")
}
else{
  console.log("c is the greater number")
}


//print the number is even or odd

let number = 33;

if(number%2===0){
    console.log("This is an even number")
}
else{
    console.log("This is an odd number");
}


// print the number in reverse as individual number

let number1 = 2435677;

while(number1>0){
    console.log(number1%10)
    number1 = parseInt(number1/10)
}






