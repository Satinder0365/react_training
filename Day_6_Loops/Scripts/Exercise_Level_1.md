Q1: Iterate 0 to 10 using for loop, do the same using while and do while loop
```javascript
//Using for loop
for(let i=0 ;i<=10; i++){
    console.log(i)
}
//Using while loop
let i=0
while(i<=10){
    console.log(i)
    i++
}
//Using Do while loop
let k=0
do{
    console.log(k)
    k++
}
while(k<=10)
```
Q2: Iterate 10 to 0 using for loop, do the same using while and do while loop
```javascript
//Using for loop
for(let i=10 ;i>=0; i--){
    console.log(i)
}
//Using While loop
let j=10;
while(j>=0){
    console.log(j)
    j--
}
//Using do while loop
let k=10;
do{
    console.log(k)
    k--
}
while(k>=0)
```
Q3: Iterate 0 to n using for loop
```javascript
let n=5;
for(let i =0 ;i<=n; i++){
    console.log(i)
}
```
Q4: Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
```javascript
for (let i=1;i<=7;i++){
    let a=''
    for(let j=1; j<=i; j++){
        a += '#'
    }
    console.log(a)
}

           //OR//
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}
```
Q5: 
``` javascript

for(let i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i * i }`)
}
```
Q6: 
```javascript
for(let i=0; i<=10; i++){
    console.log(`${i}\t${i**2}\t${i**3}`)
}
```
Q7: Use for loop to iterate from 0 to 100 and print only even numbers
```javascript
for(let i=0; i<=100;i++){
    if(i%2 ==0){
        console.log(i)
    }
}
```
Q8: Use for loop to iterate from 0 to 100 and print only odd numbers
```javascript
for (let i = 0; i <= 100; i ++) {
    if(i%2 !==0)
    console.log(i);
}
```
Q9 Use for loop to iterate from 0 to 100 and print only prime numbers
```javascript
let n=100
for( let i=2; i<=n; i++){
    let flag =0;
    for(let j=2;j<i ;j++){
        if(i%j ==0){
            flag =1
            break;
        } 
    }
    if(flag ==0 && i>1){
        console.log(i)
    }
}
```
Q10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
```javascript
let sum=0
for (let i=0 ;i<=100;i++){
     sum += i
}
console.log("The sum of all numbers from 0 to 100 is " +sum)   //The sum of all numbers from 0 to 100 is 5050
```
Q11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
```javascript
let evensum=0;
let oddsum=0
for(let i=0; i<=100 ;i++){
    if(i%2 ==0 ){
        evensum +=i
    }else {
        oddsum +=i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evensum}. And the sum of all odds from 0 to 100 is ${oddsum}.`)
```
Q12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
```javascript
let evensum =0
let oddsum=0
for(let i=0; i<=100;i++){
    if(i%2==0){
        evensum  = evensum +i
    }
    else{
        oddsum =oddsum +i
    }
}
let array = [evensum, oddsum]
console.log(array)  //[ 2550, 2500 ]
```
Q13 :Develop a small script which generate array of 5 random numbers
```javascript
let arr =Array.from({length : 5}, () =>Math.floor(Math.random()*100 )+1)
console.log(arr)
```
Q14:Develop a small script which generate array of 5 random numbers and the numbers must be unique
```javascript
let uniquerandomarray =[]

while(uniquerandomarray.length <=5){
    let uniquerandomnumber = Math.floor(Math.random()*100)+1
    if(!uniquerandomarray.includes(uniquerandomnumber)){
        uniquerandomarray.push(uniquerandomnumber)
    }

}
console.log(uniquerandomarray)  //[ 45, 55, 28, 82, 18, 54 ]
```
Q15: Develop a small script which generate a six characters random id:
```javascript
let id ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let randomid= ''
for(let i=0;i<=5;i++){
    let genraterandomid =Math.floor(Math.random()*id.length)
    randomid += id.charAt(genraterandomid)
}
console.log(randomid)  //fD9b08
```
# Level 2 
Q1: Develop a small script which generate any number of characters random id:
```javascript
let n=parseInt(prompt('Enter any number to genrate random number: '))
let id ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let randomid= ''
for(let i=0;i<=n;i++){
    let genraterandomid =Math.floor(Math.random()*id.length)
    randomid += id.charAt(genraterandomid)
}
console.log(randomid)  //fD9b08
```
Q2: Write a script which generates a random hexadecimal number.
```javascript
const hexarandomnum= (Math.random()*0xFFFFFF <<0).toString(16).slice(-6);
console.log(`#'${hexarandomnum}'`)  //#'2055f3'
```
Q3: Write a script which generates a random rgb color number.
```javascript
let rrandom = Math.floor(Math.random()*256);
let grandom= Math.floor(Math.random()*256);
let brandom =Math.floor(Math.random()*256);
console.log(`rgb(${rrandom},${grandom},${brandom})`) //rgb(64,93,195)
```
Q4: Using the above countries array, create the following new array.
```javascript
let counteries= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarrray =[]
for(let i=0; i<counteries.length;i++){
  newarrray[newarrray.length]= counteries[i].toLowerCase()
}
console.log(newarrray)
``` 

Q5: Using the above countries array, create an array for countries length'.
```javascript
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countrieslengh = [];
for(let i=0; i<countries.length;i++){
    let lenght =0;
    for(let j=0; j<countries[i].length;j++){
        lenght++;
    }
    countrieslengh.push(lenght)
}
console.log(countrieslengh)  //[ 7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
```

Q6: Use the countries array to create the following array of arrays:
```javascript
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarray =[]
for (let i=0; i<countries.length;i++){
    let countary= countries[i];
    let conthree = countary.substring(0, 3).toUpperCase()
    let leng = countary.length
    let code = [countary, conthree, leng]
    newarray.push(code)
}
//newarray.push(code)
console.log(newarray)
``` 
Q7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
```javascript
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarray= []
for(let i=0; i<countries.length; i++){
    let countary =countries[i].toLowerCase()
  if (countary.includes('land')){
newarray.push(countries[i])
  }
}
if(newarray.length >0){
    console.log(newarray)
}
else{
    console.log('countries wihtour array')
}
```

Q8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
```javascript
let newarray= []
for(let i=0; i<countries.length; i++){
    let countary =countries[i].toLowerCase()
  if (countary.endsWith('ia')){
newarray.push(countries[i])
  }
}
if(newarray.length >0){
    console.log(newarray)
}
else{
    console.log('countries wihtour array')
}
```

Q9: Using the above countries array, find the country containing the biggest number of characters.
```javascript
let len =0
let maxlenght =''
for(let i=0; i<countries.length;i++){
  let countary= countries[i]
  if(countary.length >len){
    len = countary.length
    maxlenght =countary
  }
}
console.log(maxlenght)
```
Q10: Using the above countries array, find the country containing only 5 characters.
```javascript
let newarray =[]
for(let i =0; i<countries.length;i++){
  let country =countries[i]
  if(country.length === 5){
newarray.push(country)
  }
}
console.log(newarray) //[ 'JAPAN', 'KENYA' ]
```
11: Find the longest word in the webTechs array
```javascript
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", ];
let long= ''
let len= 0;
for(let i=0; i<webTechs.length;i++){
  let word = webTechs[i]
  if(word.length >len){
    len =word.length;
    long = word
  }
}
console.log(long)  //JavaScript
```
Q12: Use the webTechs array to create the following array of arrays:
```javascript
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB", ];
let newarray =[]
for(let i=0; i<webTechs.length;i++){
  let word = webTechs[i]
  let wordlength = word.length
  let array = [word, wordlength]
  newarray.push(array)
}
console.log(newarray) //[  [ 'HTML', 4 ],  [ 'CSS', 3 ],  [ 'JavaScript', 10 ],  [ 'React', 5 ],  [ 'Node', 4 ],  [ 'MongoDB', 7 ]]
```
13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.
```javascript
let mernstack = ["MongoDB", "Expressjs", "Reactjs", "Nodejs"]
let mern =''
for (let i=0; i<mernstack.length;i++){
  mern += mernstack[i][0]
}
console.log(mern)  //MERN
```
Q14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
```javascript
let webTechs= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(let i=0; i<=webTechs.length; i++){
  console.log(webTechs[i])
}
//Using for loop
for(let word of webTechs){
    console.log(word)
}
```
Q15:This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
```javascript
let fruits =['banana', 'orange', 'mango', 'lemon']
revrsearray =[]
for(let i= fruits.length-1; i>=0 ;i--){
  revrsearray.push(fruits[i])
}
console.log(revrsearray)  //[ 'lemon', 'mango', 'orange', 'banana' ]
```
Print all the elements of array as shown below.
```javascript
const fullStack = [ ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
```
# Level 3
Q1: Copy countries array(Avoid mutation)
```javascript
let copyarray =[]
for(let i=0; i<counteries.length;i++){
copyarray[copyarray.length]= counteries[i]
}
console.log(counteries)
console.log(copyarray)
```
Q2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
```javascript
let copynewarray=[]
for (let i=0;i<countreies.length;i++){
  copynewarray[i] = countreies[i]
  copynewarray.sort()
}
console.log(copynewarray)
```
Q3: Sort the webTechs array and mernStack array.
```javascript
const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React','Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let newwebTechs = webTechs.sort()
let newmernStack =mernStack.sort()
console.log(newwebTechs)
console.log(newmernStack)
```
Q4: Extract all the countries contain the word 'land' from the countries array and print it as array
```javascript
let countries =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newarray =[]
for(let i=0; i<countries.length;i++){
  if( countries[i].includes('LAND')){
   newarray[newarray.length]= countries[i]
  }
}
console.log(newarray)
```
Q5: Find the country containing the hightest number of characters in the countries array
```javascript

```