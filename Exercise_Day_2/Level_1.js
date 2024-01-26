                                ////Level 1/////

//Q1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge ='30 Days of JavaScript'

//Q2: Print the string on the browser console using console.log()
console.log(challenge)//30 Days of JavaScript

//Q3: Print the length of the string on the browser console using console.log()
let len='30 Days Of JavaScript'
console.log(len.length) //21

//Q4:Change all the string characters to lowercase letters using toLowerCase() method
let challenge1 ='30 Days of JavaScript'
let str=challenge1.toLowerCase()
console.log(str)  //30 days of javascript

//Q5: Change all the string characters to capital letters using toUpperCase() method
let challenge2 ='30 Days of JavaScript'
let str2=challenge2.toUpperCase()
console.log(str2)  //30 DAYS OF JAVASCRIPT

//Q6: Cut (slice) out the first word of the string using substr() or substring() method
let challenge3 ='30 Days of JavaScript'
console.log(challenge3.substr(2)) //Days of JavaScript
console.log(challenge3.substring(2)) //Days of JavaScript

//Q7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let word='30 Days of JavaScript'
console.log(word.slice(3)) //Days of JavaScript
console.log(word.slice(3,21)) //Days of JavaScript

//Q8: Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')) //true

//Q9: Split the string into an array using split() method
let n=challenge.split('')  //[ '3', '0', ' ', 'D', 'a',   'y', 's', ' ', 'o', 'f',   ' ', 'J', 'a', 'v', 'a',   'S', 'c', 'r', 'i', 'p',   't'  ]
console.log(n)

//Q10: Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(','))


//Q11:'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let n1='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(n1.split(',')) //[    'Facebook',   ' Google',   ' Microsoft',   ' Apple',   ' IBM',   ' Oracle',   ' Amazon' ]

//Q12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript" , "Python")) //30 Days of Python

//Q13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)) //S

//Q14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')) //51

//Q15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')) //4

//Q16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')) //14

//Q17: Use indexOf to find the position of the first occurrence of the word because in the following 
        //sentence:'You cannot end a sentence with because because because is a conjunction'

let first='You cannot end a sentence with because because because is a conjunction'
console.log(first.indexOf('because'))  //31

//Q18: Use lastIndexOf to find the position of the last occurrence of the word because in the following 
       //sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(first.lastIndexOf('because')) //47

//Q19: Use search to find the position of the first occurrence of the word because in the following 
        //sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(first.search('because')) //31

//Q20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let s='   30 days of javascript A  '
console.log(s.trim())

//Q21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30')) //ture

//Q22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript')) //true

//Q23: Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(s.match(/a/gi)) //[ 'a', 'a', 'a' ]

//Q24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let a='30 days of '
let a1='javascript'
console.log(a.concat(a1)) //30 days of javascript

//Q25: Use repeat() method to print 30 Days Of JavaScript 2 times
let v='30 Days Of JavaScript '
console.log(v.repeat(2)) //30 Days Of JavaScript 30 Days Of JavaScript 


