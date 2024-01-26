                ////Level 2////
const prompt =require('prompt-sync')()         

//Q1: Write a script that prompt the user to enter 
//base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
const height=prompt("Enter the height: ")  //10
const base=prompt("Enter the base: ") //20
const area= (base*height)/2
console.log("Area oa a triangle : " +area) //100
console.log(typeof(area))  //number 

/*Q2: Write a script that prompt the user to enter side a, side b,
and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).

The returned value of any input area is by default a string. That's by parseFloat is used. */

let a=parseFloat(prompt("Enter a: ")) //2
let b=parseFloat(prompt("Enter b: ")) //4
let c=parseFloat(prompt("Enter c: "))//5
let perimeter=a+b+c
console.log("Perimeter of triangle: " +perimeter) //11

//Q3: Get length and width using prompt and calculate an area of rectangle (area = length x width and 
//the perimeter of rectangle (perimeter = 2 x (length + width))
let length=parseFloat(prompt("Enter the length: "))  //5
let width=parseFloat(prompt("Enter the height: "))  //4
let areaa=length * width
console.log("Area of Triangle: " +areaa)   //20
let perimeterr= 2 * length + width
console.log("Perimeter OF triangle: "+ perimeterr)  //18

//Q4: Get radius using prompt and calculate the area of a 
//circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius=prompt("Enter the r: ") //24
let pi=prompt("Enter the pi: ")     //3.14
let circlearea= pi * parseFloat(radius) **2
console.log("Area of circle: "+ circlearea) //1808.64
let circumference= 2*pi*parseFloat(radius)
console.log("circumference of circle "+ circumference) //150.72

//Q5: Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x=1
let y=2
let z=-2

let a1= x/x
let b1= y/x
let c1= z/x
let x_intercept= -c1 /b1
console.log(x_intercept) //1
let y_intercept= c1/a1
console.log(y_intercept)  //-2

let slope1= (y_intercept-0)  / (0-x_intercept)
console.log(slope1)  //2


//Q6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1=2, y1=2, x2=6, y2=10;
let slope= (10-2) / (6-2)
console.log(slope) //2

//Q7: Compare the slope of above two questions.
let equal= slope==slope1
console.log("Above two slopes are equal: "+ equal) //Above two slope are equal: true

//Q9: Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours =prompt("Enter Hours: ")  //40
let rateperhours=prompt("Enter rate per hours: ")  //28
let pay= parseFloat(hours)*parseFloat(rateperhours)
console.log("Pat of the person: "+pay)  //1120

//Q10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let name=prompt("ENter your name: ")
name.length > 7 ? console.log('Your name is long')
                : console.log('Your name is short')
               
               //OR//

let name1=prompt("Enter your name: ") //Satinder 
if(name1.length>7){
    console.log("Your name is long")  //Your name is long
}
else{
    console.log('Your name is short')
}

//Q11: Compare your first name length and your family name length and you should get this output.
let firstName= prompt("Enter your first name: ")  //Satinder
let familyName= prompt("Enter your last name: ")  //Singh
 
 if(firstName.length>familyName.length){
 console.log(`your firstName, ${firstName} is longer than you family name ${familyName}`)
 }    //your firstName, Satinder is longer than you family name Singh
 else{
    console.log(`your firstName, ${firstName} is shorter than you family name ${familyName}`)
 }

//Q12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myage= prompt("Enter my age: ")  //50
let yourage=prompt("Enter your age: ")  //45
if(myage>yourage){
    console.log(`I am ${myage-yourage} year old greater than you`)
}      // I am 5 year old greater than you
else{
    console.log(`I am ${yourage-myage} year old less than you`)
}

/*Q13: Using prompt get the year the user was born and if the user is 18 or above 
allow the user to drive if not tell the user to wait a certain amount of years.*/

let years =prompt("Enter you year: ")
let agee = new Date().getFullYear() -years
if(agee>18){
    console.log(`you are ${agee } allowed to drive`)

}
else{
    console.log(`you are ${agee} you will allowed drive to after ${18-agee}`)
}

/*Q14: Write a script that prompt the user to enter number of years.
Calculate the number of seconds a person can live. Assume some one lives just hundred years*/
let age= prompt("Enter you age: ")  //80
let year=100-age  
let remainingseconds=year* 365 * 24 * 60 *60
console.log(remainingseconds)  //630720000

/*Q15: Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm*/
let yearr = new Date().getFullYear()
let month = new Date().getMonth()+1
let date= new Date().getDate()
let hourss=new Date().getHours()
let min=new Date().getMinutes()
console.log(`${yearr}-${month}-${date} ${hourss}:${min}`) //2024-1-25 17:14
console.log(`${date}-${month}-${year} ${hourss}:${min}`)  //25-1-2024 17:16
console.log(`${date}/${month}/${year} ${hourss}:${min}`)  //25/1/2024 17:16