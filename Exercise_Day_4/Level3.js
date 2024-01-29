const prompt=require('prompt-sync')()

//Q1: Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//Using include()

let month1=prompt('Enter a month: ')
let months1 =month1.toLowerCase()

let months31days= ['january', 'march', 'may', 'july', 'august', 'october', 'december']
let months30days= ['april', 'june', 'september', 'november']
if(months31days.includes(months1)){
    console.log(`${month1} has 31 days`)
}
else if(months30days.includes(month1)){
    console.log(`${month1} has 30 days`)
}
else if (months1 === 'febraury'){
    console.log(`${month1} has 28 days`)
}
else {
    console.log('Not a month')
 }


//Using Switch Statement
let m1=prompt('Enter month: ')
let mm= m1.toLowerCase()
switch(mm){
    case 'january' :
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
    console.log(`${m1} has 31 days`)    
    break;
    case 'april':
    case 'june' :
    case 'september':
    case 'november':
    console.log(`${m1} has 30 days`)
    break;
    case 'febraury':
     console.log(`${m1} has 28 days`)
     break;
     default:
        console.log('Inavalid month')                  

}

//Q2: Write a program which tells the number of days in a month, now consider leap year.
let month =prompt('Enter month: ')
let currentyear =new Date().getFullYear()
let monthdays=month.toLowerCase()

let daysfebraury=28;
let leapyear=(year)=>{
  return  ((year%4 ===0 && year% 100!==0 )|| year%400 ===0)
}

switch(monthdays){
        case 'january' :
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
        console.log(`${m} has 31 days`)    
        break;
        case 'april':
        case 'june' :
        case 'september':
        case 'november':
        console.log(`${m} has 30 days`)
        break;
        case 'febraury':
         if(leapyear(currentyear)){
            daysfebraury=29
         }
         console.log(`${month} has ${daysfebraury} days`)
         break;
         default:
            console.log('Inavalid month')                  
    
    }
//febraury has 29 days


