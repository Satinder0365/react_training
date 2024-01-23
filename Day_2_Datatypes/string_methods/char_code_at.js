//charCodeAt(): It takes index and return char code (Unicode value) of the value that present in the index
//Syntax: string.charCodeAt(index);
let string= "Hello world";
console.log(string.charCodeAt(0)) //72
console.log(string.charCodeAt(6)) //119
let value=string.charCodeAt(3)
console.log(value) //108
let lastvalue=string.length-1;
console.log(string.charCodeAt(lastvalue)) //100