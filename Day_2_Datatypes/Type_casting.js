//Typecasting in JavaScript is the conversion of one data type into another data type, for example, 
//a number to a string. Typecasting is often also known as type conversion.

//Implicit and Explicit type casting?
//Explicit type conversion in programming is done manually by the programmer, while 
//implicit conversion is handled automatically by the compiler.

//Int to String,  use toString() , String()
let n=3
let text=n.toString()
console.log(text) //3
console.log(typeof(text)) //string

let n2=4
let text2=String(n2)
console.log(text2) //
console.log(typeof(text2)) //string

//String to Int  using parseInt() ,Number(), plus sign(+)
let str='102'
let num= parseInt(str)
console.log(num) //102
console.log(typeof(num)) //number

let str1='23'
let num1=Number(str1)
console.log(num1) //23
console.log(typeof(num1)) //number

let str2='34'
let num3= +str2
console.log(num3) //34

//String to Float , using parseFloat(), Number(), Plus sugn(+)

let numm='3.34';
let fl=parseFloat(numm)
console.log(fl) //3.34
console.log(typeof(fl)) //number

let numm2='44.3'
let flo=Number(numm2)
console.log(flo) //44.3

let numm3='45.67'
let floo= +numm3
console.log(floo) //45/67

// Float to Int
let a=34.5;
let b=parseInt(a)
console.log(b) //34
console.log(typeof(b)) //Number



