// includes(): checks if a specific element or substring is present in an array or a string.
//if present then retrun true and if not present then retrun false
let str="30 Days of javascript"
let result = str.includes("of");
console.log(result)  //true
console.log(str.includes("days")) //false
console.log(str.includes("Days")); //true

//includes(): Using two parameters , 1 shows the index value

let str1= ["javascript", "HTML", "CSS"]
let value = str1.includes("HTML" ,1)
console.log(value) //true

let value1 = str1.includes("css")
console.log(value1) //false