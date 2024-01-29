                   //// Level 2 ////
const prompt=require('prompt-sync')()
//Q1:Write a code which can give grades to students according to theirs scores:
// 89-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grades = parseInt(prompt("Enter you Numbers: "))  //88
if (grades >89){
    console.log('A')
    }
    else if(grades >70 ){
    console.log('B')  //B
    }
    else if(grades >60){
    console.log('C')
    }
    else if(grades> 50){
    console.log('D')
    }
    else if(grades <49)
    console.log("f")
else {
    console.log('Invalid numbers')
}

//Q2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month =prompt('Enter a month: ')
let mont=month.toLowerCase()
let arr=['september', 'october', 'november']
let arr2=['december', 'january','febraury']
let arr3=['march','april','may']
let arr4=['june', 'july', 'august']
if(arr.includes(mont) ){
    console.log(`${month} the sesson is Autum`)
} 
else if(arr2.includes(mont)){
    console.log(`${month} the sesson is Winter`)
}
else if (arr3.includes(mont)){
    console.log(`${month} the sesson is Spring`)
}
else if(arr4.includes(mont)){
    console.log(`${month} the sesson is Summer`)
}
else{
console.log('Invalid month')
}

               //OR//
let usermonth =prompt("ENter the month: ")
function mon(month){
month=month.toLowerCase()

switch(month){
    case 'october':
    case 'november':
    case 'september':
    console.log(`${usermonth} the season is Autumn.`)
    break;
    case 'december':
    case  'january':
    case 'february':
    console.log( `${usermonth} the sessson is winter.`)
    break;
    case ' march':
    case 'april':
    case 'may':
    console.log(`${usermonth} the sesson is Spring.`)
    break;
    case 'june':
    case 'july':
    case 'august': 
    console.log(`${month} the sesson is Summer.`)
    break;
    default: console.log("This is not month")
}
}
mon(usermonth)

//Q3: Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

let day=prompt("What is the day today? ")
function days(day){
    day=day.toLowerCase()
    switch(day){
        case 'monday':
        case 'tuesday':
        case 'wednesday' :
        case 'thrusday':
        case 'friday':
            console.log(`${day} is working day`)
            break;
        case 'saturday':
        case 'sunday':
            console.log(`${day} is weekend day`);
            break;
        default:
            console.log("This is not a day")                     
    }
}
days(day)


