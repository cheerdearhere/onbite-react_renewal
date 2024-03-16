console.log("날짜 관련");

let date1 = new Date();// default: 현재 시간
let date2 = new Date("1997-01-01");// 지정한시간
let date3 = new Date("1998. 01. 01");
let date4 = new Date("1999/01/01");

console.log({date1,date2,date3,date4});

let dateTime1 = new Date("2000/01/01/10:10:10");
console.log(dateTime1);

let timeStamp = date1.getTime();
//이것을 Date 객체로 사용하면 같은 시간을 대상으로 함
let date5 = new Date(timeStamp);
console.log({date1, timeStamp,date5});

let year = date1.getFullYear();
let month = date1.getMonth()+1;
let day = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let milliSecond = date1.getMilliseconds();
console.log({year,month,day,hour,minute,second,milliSecond});

date5.setFullYear(2000);
date5.setMonth(2);
date5.setDate(30);
date5.setHours(23);
date5.setMinutes(59);
date5.setSeconds(58);
date5.setMinutes(99);
console.log(date5);

console.log(date5.toDateString());
console.log(date5.toLocaleDateString());
