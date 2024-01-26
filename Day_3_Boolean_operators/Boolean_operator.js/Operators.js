//Arithmetic operators
//+ , - , * , / , % , **

let n= 5 , n2= 10;
console.log(n+n2)//15
console.log(n2-n)//5
console.log(n*n2)//50
console.log(n2/n)//2
console.log(n2%n)//0
console.log(n**n2 +"\n")//9765625

//Assinment Operators
let a=4
let b=2
console.log(a=b)//2
console.log(a+=b)//4
console.log(a-=b)//2
console.log(a*=b)//4
console.log(a**=b)//16
console.log(a/=b);//8
console.log(a%=b  +"\n");//0

//Bitwise AND ,OR, NOR
let x=101
let y=5
console.log(x&=y) //4
console.log(x|y)  //101
console.log(x^y  +"\n")  //96


//Comparision Operators 
//== ,===, !=, >, <, <=, >=
console.log(2==3) //false
console.log(3===3) //ture
console.log(5==='5') //false
console.log(4!=5) //true
console.log(5>2) //true
console.log(5<10) //true
console.log('apple'.length == 'orange'.length) //false
console.log('you'.length==='you'.length) //true
console.log(5<=10  +"\n")

//Logical Operators
//!(NOT): Converts operator to boolean and returns flipped value
//&&:(AND) Evaluates operands and return true only if all are true
//||(OR): Returns true even if one of the multiple operands is true

//&& :(AND)

let find= 10>5 && 5<10; //true
let find1= 10>5 && 5>10; //false
let find2= 10<5 && 5<10; //false
console.log(find, find1, find2  +"\n")

//|| (OR)
let refer=10>5 || 5<10; //true
let refer1=10>5 ||5>10; //true
let refer2=10<5 || 5>10; //false
console.log(refer, refer1, refer2  +"\n")

//! (Not)

let check= 4>=3; //ture
let check1= !(10>=5) //false
console.log(check, check1  +"\n" )

//Increment Operators
//PreIncrement (++a)
let nn= 5;
console.log(++nn) //6
console.log(++nn) //7
console.log(nn  +"\n")   //7

//Post Increment
let nn1=5; (a++)
console.log(nn1++) //5
console.log(nn1++) //6
console.log(nn1  +"\n")  //7

//Decrement Operator
//Pre decrement (--q)
let m=5
console.log(--m) //4
console.log(m)   //4
console.log(--m  +"\n") //3 

//Post Decrement  (q--)
let m1=2
console.log(m1--) //2
console.log(m1)  //1
console.log(m1--) //1
console.log(m1  +"\n")   //0

//What is precedence operator in JavaScript?
//Operator precedence in JavaScript determines the priority of operators in an operation. It determines which operators have higher precedence 
//than others, and thus tells us the order to perform a given mathematical expression.

let p=5;
let c=10;
let f=5;
console.log(c/p*f) //10
console.log((c/f)+p*c)//52


//Ternary Operator
let number=50
console.log(number > 40 ? "Satinsfactory" : "unsatisfactory")

let marks=100
console.log((marks<50) ? "Unsatisfactory" : (marks <70)? "Satisfied" : "Exellent")

let mark=45
let result= (mark>46) ? "Nice": (mark>30)? 'Bad' : 'Not Bad';
console.log(result)
