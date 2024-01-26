                    ////Level 2 ////

//Q1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//Output:
//The quote There is no exercise better for the heart than reaching down and lifting 
//people up. by John Holmes teaches us to help one another.
//Q2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//Output:Love is not patronizing and charity isn't about pity, it is about love. Charity and love
// are the same -- with charity you give love, so don't just give money but reach out your hand instead.

//Q3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let n='10'
console.log(typeof('10') ===10)//fasle
let n1=Number(n)
console.log(n1)  //10
console.log(typeof(n1))//number

//Q4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8)===10)//false
console.log(Math.round(9.8)===10)//ture
console.log(Math.ceil(9.8)===10)//ture

//Q5: Check if 'on' is found in both python and jargon
 let str ="python" ,str2="jargon"
 console.log(str.includes('on'))//true 
 console.log(str2.includes('on'))//true
 console.log(str.includes('on')) && str2.includes('on')//true

//Q6: I hope this course is not full of jargon. Check if jargon is in the sentence.
let st="I hope this course in not full of jargon"
console.log(st.includes('jargon')) //true

//Q7: Generate a random number between 0 and 100 inclusively.
console.log(Math.random()*100) //38.568209092308315
console.log(Math.floor(Math.random()*101))//99

//Q8: Generate a random number between 50 and 100 inclusively.
//formula form range 50 to 100 and x to y (Math.random()* (max-min)+min
console.log(Math.random()*(100 - 50)+50) //58.43237406437936

//Q9: Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*256))//245

//Q10: Use console.log() and escape characters to print the following pattern.
//1 1 1 1 1
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
//output:
// 1	1	1	1	1
// 2    1	2	4	8
// 3	1	3	9	27
// 4	1	4	16	64
// 5	1	5	25	125

//Q11: Use substr to slice out the phrase because because because from the following 
//sentence:'You cannot end a sentence with because because because is a conjunction'
let str1='You cannot end a sentence with because because because is a conjunction'
let result1=str1.substr(31, 23) //because because because
console.log(result1)


//Q12: Access the 'JavaScript' string characters using a random number.
let s='Javascript'
console.log(s.charAt(Math.random()*s.length))//c

                