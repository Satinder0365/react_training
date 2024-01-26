                        //// Level ////

/*Q1: Declare firstName, lastName, country, city, age, isMarried,
year variable and assign value to it and use the typeof operator to check different data types.*/

let firstName='Satinder' , lastName='Singh',country='India', city='Mohali', age=22, isMarried= false, year=2024
console.log(typeof(firstName)) //string
console.log(typeof(lastName)) //string
console.log(typeof(country)) //string
console.log(typeof(city))  //string
console.log(typeof(age))  //number
console.log(typeof(isMarried))  //boolean
console.log(typeof(year)) //number


//Q2: Check if type of '10' is equal to 10
console.log(typeof('10')==10) //false

//Q3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')==10) //false
console.log(parseInt('9.8')===10)//false

/*Q4: Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/

let a= 'New'
let a1=30
let a2=5>2
console.log(Boolean(a))//true
console.log(Boolean(a1))//true
console.log(Boolean(a2))//true

let b
let b1=''
let b2=null
console.log(Boolean(b))//false
console.log(Boolean(b1))//false
console.log(Boolean(b2))//false

//Q5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)//ture
console.log(4 >= 3)//true
console.log(4 < 3)//false
console.log(4 <= 3) //false
console.log(4 == 4)//true
console.log(4 === 4)//true
console.log(4 != 4)//false
console.log(4 !== 4)//false
console.log(4 != '4')//false
console.log(4 == '4')//true
console.log(4 === '4')//false

//Find the length of python and jargon and make a falsy comparison statement.
let p='python'
console.log(p.length-1)//5 
let j='jargon'
console.log(j.length-1) //5
console.log(p.length == j.length)  //true
console.log(p.length != j.length) //false

//Q6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'  +"\n"))//ture

//There is no 'on' in both dragon and python
let x='pyhton'
let y='jargon'
console.log(x.includes('on')) //true
console.log(y.includes('on')) //true
console.log(!(x.includes) == (y.includes)) //false

/*Q7:Use the Date object to do the following activities:
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const ny=new Date()
console.log(ny.getFullYear()) //2024
console.log(ny.getMonth()+1) //1
console.log(ny.getDate()) //24
console.log(ny.getDay())  //3
console.log(ny.getHours()) //17
console.log(ny.getMinutes())  //55
console.log(ny.getTime()/1000)  //1706099111213

