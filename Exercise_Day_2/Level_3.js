 ////    Level 3  ////


//Q1: 'Love is the best thing in this world. Some found their 
//love and some are still looking for their love.' Count the number of word 'love' in this sentence.
let sentences='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentences.match(/love/gi))//[ 'Love', 'love', 'love' ]
console.log(sentences.match(/love/gi).length)//3

//Q2: Use match() to count the number of all 
    //because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let c='You cannot end a sentence with because because because is a conjunction'
console.log(c.match(/because/gi)) //[ 'because', 'because', 'because' ]
console.log(c.match(/because/gi).length) //3

 //Q4: 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary=12*5000;
let bonus= 10000;
let online =12*15000;
let anuualincome= salary+bonus+online;
console.log(anuualincome) //250000
console.log(salary+ bonus +online )  //250000
     //OR
let anuualsalary = 12*5000 +10000 +12*15000
console.log(anuualsalary) //250000


