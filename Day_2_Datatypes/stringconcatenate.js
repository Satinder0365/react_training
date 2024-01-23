let firstname ="Satinder";
let lastname = 'Singh';
let State ="Himachal Pradesh";
let city= "Kangra"
console.log(firstname + lastname + State + city)  //SatinderSinghHimachal PradeshKangra

console.log(firstname+ ' I am from ' + State + ' and ' +city) //Satinder I am from Himachal Pradesh and Kangra

// String Letrals 
//emplate literals (template strings) allow you to use 
//strings or embedded expressions in the form of a string. They are enclosed in backticks ``

let details =`I am ${firstname} from state ${State}`
console.log(details) //I am Satinder from state Himachal Pradesh

let personinfo= `The city is ${city} state ${State}`
console.log(personinfo)  //The city is Kangra state Himachal Pradesh