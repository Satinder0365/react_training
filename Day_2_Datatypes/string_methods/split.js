//Split(): Method is used to split the given string into an array of strings
// by separating it into substrings using a specified separator provided in the argument.
//Syntax: string.split(" ")
let string1='Satinder'
console.log(string1.split('')) //[ 'S', 'a', 't', 'i', 'n', 'd','e', 'r' ]

let str11 = 'This is Split method in javascript'
let result= str11.split('')
console.log("The output of str1 is : " +result)//The output of str1 is : T,h,i,s, ,i,s, ,S,p,l,i,t, ,m,e,t,h,o,d, ,i,n, ,j,a,v,a,s,c,r,i,p,t

//Spliting up to 3 terms
let str2="It is Your Laptop"
console.log(str2.split(" " , 3))//[ 'It', 'is', 'Your' ]