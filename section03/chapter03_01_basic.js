console.log("동기/비동기");
//동기
console.log(1);
//3초 뒤에 콜백을 실행
setTimeout(()=>{
    console.log(2);
},3000);
console.log(3);