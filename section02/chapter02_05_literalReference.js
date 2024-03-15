console.log("원시타입과 참조타입");
let l1 = 10;
let l2 = l1;
l2 = 20;
console.log({l1,l2});

let o1 = {name:"홍길동"};
let o2 = o1;
o2.name = "강감찬";
let o3 = {...o1};
o3.name = "이순신";
console.log({o1,o2,o3});