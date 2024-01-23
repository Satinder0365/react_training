//Non Primitive Datatypes  //Non-Primitive data types are created by the programmer
//Array
//Object

let arr=[2,5,7]
console.log(arr) //[ 2, 5, 7 ]
arr[1]=4
console.log(arr) //[ 2, 4, 7 ]
console.log(typeof(arr)) //object

let arr2 =new Array("Satinder", "Singh")
console.log(arr2) //[ 'Satinder', 'Singh' ]
console.log(typeof(arr2)) //object

//Oject
let obj =new Object(
    user="Satinder"
)
console.log(obj) //[String: 'Satinder']

//Using new object method
let mybike = new Object();
   mybike.color="Red",
    mybike['age']= 10
console.log(mybike)  //{ color: 'Red', age: 10 }

let person={
    firstname: "Manish",
    age :24,
    work: "student"
}
console.log(person)//{ firstname: 'Manish', age: 24, work: 'student' }