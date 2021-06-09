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

let number = 34;

if(number%2===0){
    console.log("This is an even number")
}
else{
    console.log("This is an odd number");
}

//another method to find the number is even or odd
result = number%2===0 ? "Even" : "Odd"
console.log(result)

// print the number in reverse as individual number

let number1 = 2435677;

while(number1>0){
    console.log(number1%10)
    number1 = parseInt(number1/10)
}



//switch conditiion
let day = "holiday"

switch(day){
    case'monday':
        console.log("7am")
        break

    case'tuesday':
    case'wednesday':
    case'thursday':
        console.log("4am")
        break

    case'friday':
         console.log("9am")
         break

    case'saturday':
    case'sunday':
        console.log("8am")
        break

    default:
        console.log("Time for break")

}
console.log("bye...")


//template literal
let num5 = 45
let num6 = 5
let sum

sum = num5 + num6

console.log(`The sum of ${num5} and ${num6} is ${sum}`)


// for loop

for(i=1;i<=5;i++){
   console.log('Hello',i)
   for (j=1;j<=5;j++){
       console.log('Hi',j)
   }
}

//object in js
let student = {
    name: 'kadir',
    Id: 07,
    subject:{
        maths:98,
        english:92,
        social: 94
    }
}

console.log(student)

// see the specified properties
console.log(student.subject)
console.log(student.subject.maths)
console.log(student.name)

// find the length of teh properties
console.log(student.subject.maths.length)
console.log(student.name.length)
console.log(student.name1?.length)

// delete the properties
delete student.Id
console.log(student)

//for loop in object
let input = "name"
let student1 = {
    name: 'kadir',
    Id: 07,
    subject:{
        maths:98,
        english:92,
        social: 94
    }
}

//print the value for alreay alerted key in a variable
console.log(student1[input])

//print the key in object
for(let key in student1)
{
    console.log(key);
}

//print the key with value in object
for(let key in student1)
{
    console.log(key, student1[key]);
}




