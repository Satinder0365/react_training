/*Q16: Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
let dateof =new Date()
let year =dateof.getFullYear()
let month =dateof.getMonth()+1
if(month<10){
    month=`0${month}`
}
let date=dateof.getDate()
if(date<10){
    date=`0${date}`
}
let hour=dateof.getHours()
if(hour<10){
    hour=`0${hour}`
}
let mintuess=dateof.getMinutes()
if(mintuess<10){
    mintuess=`0${mintuess}`
}
console.log(`${year}-${month}-${date} ${hour}:${mintuess}`)

//Output : 2024-01-25 17:39

