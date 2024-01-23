//Math object is used to perform mathematical operations on numbers.
//All the properties of Math are static and unlike other objects, it does not have a constructor.
//We use Math only on Number data type and not on BigInt

//round the nearest value
console.log(Math.round(2.4));//2
console.log(Math.round(2.6));//3

//ceil round the value up side
console.log(Math.ceil(4.3)); //5

//Floor round the value down side
console.log(Math.floor(3.6)); //3

console.log(Math.PI); //3.14
//Find square root
console.log(Math.sqrt(4)); //2

//Cubic Square root
console.log(Math.cbrt(125)); //5

//Absolute value
console.log(Math.abs(456)); //456

//Minimum Value
console.log(Math.min(2,5,7,34)); //2

//Maximum Value
console.log(Math.max(34,67,234,677)); //677

//Generate random value from 0 to 0.99999
console.log(Math.random()); //0.8214760021461833

//Generate random value from 0 to 100
console.log(Math.random()*100); //48.75126418133844

//returns the value of x to the power of y
console.log(Math.pow(2,3)); //8

// returns the integer part
console.log(Math.trunc(4.7)) //4

//Log method
console.log(Math.log(1));

//Trignometry
//returns the sin(a value between -1 and 1) of the angle x
console.log(Math.sin(1))//0.8414709848078965
console.log(Math.cos(10)) //-0.8390715290764524
//Math.sygn rturns 1 or -1
console.log(Math.sign(4))//1
console.log(Math.sign(-3))//-1