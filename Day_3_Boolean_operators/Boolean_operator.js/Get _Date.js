const getdate=new Date()
console.log(getdate)  //2024-01-24T09:13:02.913Z

const n1= new Date()
console.log(n1.getFullYear())

const n2= new Date()
console.log(n2.getTime())

const c=new Date()
console.log(c.getMonth()+1)

const z=new Date()
console.log(z.getDate())

const h=new Date()
console.log(h.getDay())

let g=new Date()
console.log(g.getHours())

const f=new Date()
console.log(f.getMinutes())

const num=new Date()

console.log(num.getDate())
console.log(num.getMonth()+1);
console.log(num.getFullYear());
console.log(num.getHours());
console.log(num.getMinutes())
console.log(num.getSeconds());
console.log(num.getMilliseconds());


const s=new Date()
const date=s.getDate()
const month=s.getMonth()+1
const year=s.getFullYear()
const hours=s.getHours()
const minutes=s.getMinutes()
const milli=s.getSeconds()+1

console.log(`${date}-${month}-${year}, ${hours}:${minutes}:${milli}`)// 24-1-2024, 17:22:23


