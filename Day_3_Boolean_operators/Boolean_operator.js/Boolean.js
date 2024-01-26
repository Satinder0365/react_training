// Boolean : A boolean data type represents one of the two values:true or false. Boolean value is either true or false.

let a=2 ,b=3
console.log(a>b)//false
console.log(a<b)//true

/*Truthy value
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true */

//Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string
console.log('Boolean (0)' +Boolean(0))//false
console.log('Boolean (10)' +Boolean(10))//true
console.log('Boolean (-1)' +Boolean(-1))//true
console.log('Boolean (is) ' +Boolean(1<2))//true

console.log('Boolean(null)'+ Boolean (null))//false
console.log('Boolean()'+ Boolean(''))//false

//Null value
let first=null
console.log(first) //null

//Undefined
let Second
console.log(Second) //undefined