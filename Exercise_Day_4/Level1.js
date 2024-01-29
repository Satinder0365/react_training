const prompt=require('prompt-sync')()
                                    // Level1 //
//Q1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let user=prompt('Enter your age: ') //17
if (user>18){
    console.log('You are old enough to drive.')
}
else{
    console.log(`You are left with ${18-user} year to drive.`)  //You are left with 1 year to drive.
}

//Q2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the 
//result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge =prompt('Enter you myAge: ')  //55
let yourAge =prompt("Enter your age: ")  //30
if ( myAge> yourAge){
    console.log(`You are ${myAge-yourAge} years older than you`)  //You are 25 years older than you
}
else{
    console.log(`I am ${yourAge-myAge} years old less than you`)
}

//Q3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a=prompt('Enter the value of a: ')  //5
let b=prompt("Enter the value of b: ")  //3
a>b ? console.log('a is greater than b') : console.log('b is greater than a')  //a is greater than b
                                    //OR//
 let a1=prompt('Enter the value of a: ')  //5
 let b1=prompt("Enter the value of b: ")   //3
 if(a1 > b1 ){
    console.log('a is greater than b')  //a is greater than b
 }
 else{
    console.log('b is greater than a')
 }
//Q4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num=prompt('Enter the number: ')
if(num%2==0){
  console.log(`${num} is even number`)
}
else{
    console.log(`${num} is odd number`)
}
          //OR//
let num1 =prompt('Enter the number: ')
num1%2==0 ? console.log('Number is even') : console.log("Number is odd")

