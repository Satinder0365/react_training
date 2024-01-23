//match(): search a string for a match against any regular expression. if there is not match then return null.
//Syntax: string.match(substring)
let string = 'JavaScript'
console.log(string.match('Java'))
/*output: 
[ 'Java', index: 0, input: 'JavaScript', groups: undefined ]*/
let str1= 'This is my laptop , this is my laptop';
let result= (str1.match("two")) //g is used to match the whole elements in the string
console.log(result) //null

let result1= (str1.match(/This/gi)) //g is used to match the whole elements in the string and i:ignore the case sensitive letter
console.log(result1) 

let contest= " 2019 is the best year after 2018"
let regu =/\d/g
console.log(contest.match(regu))  //Output: ['2', '0', '1','9', '2', '0','1', '8']
console.log(contest.match(/\d+/g)) //output: [ '2019', '2018' ]