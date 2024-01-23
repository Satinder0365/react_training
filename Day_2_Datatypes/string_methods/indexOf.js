//indexOf():  searches this string and returns the index of the first occurrence of the specified substring. 
// Takes a substring if the subsstring is exits in string then return first index value of the substring
//if string in not exists then retrun -1.
// Syntax: string.indexOf(substring)
let string = 'My 30 Days Work in javascript';
console.log(string.indexOf('Days'))  //6
console.log(string.indexOf('y'))     //1
console.log(string.indexOf('e'))     //-1

let  str1="JavaScript";
let result = str1.indexOf('S')
let result1 = str1.indexOf('d') 
console.log("The output is : " +result) //The output is : 4
console.log("The output is : " +result1) //  The output is : -1

