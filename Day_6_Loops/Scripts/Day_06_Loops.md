# Loops
Loops are control structures in programming that allow you to repeat a certain block of code multiple times. They are used to iterate over a sequence of statements or to execute a block of code repeatedly as long as a specified condition is true. Loops help in making code more efficient and concise by reducing redundancy.
For Loop
```javascript
for(let i=0; i<5 ;i++)
console.log(i)
```
```javascript
let countries = ['Finland' ,'India' ,'Uk', 'Canada','Ukrain']
let newArr =[]
for(let i=0 ;i<countries.length; i++){
    console.log(i)
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)  //[ 'FINLAND', 'INDIA', 'UK', 'CANADA', 'UKRAIN' ]

let arr= [5,5,5,5,5]
let sum= 0
for(let i=0 ;i<arr.length ;i++){
    sum += arr[i]
}
console.log(sum)//25
```

# for of loop
The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

for (const element of arr) {
  // code goes here
}
```javascript
let arr= [2,3,4,5]
for(let value of arr){
    console.log(value*2) //4 6 8 10
}
```
```Javascript
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
let newarr= []
for(let value of countries){
    newarr.push(value.toUpperCase())
}
console.log(newarr)  //[ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND' ]
```
