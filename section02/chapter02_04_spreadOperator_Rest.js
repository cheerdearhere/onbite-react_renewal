console.log("spread operator, rest parameter");

let arr1 = [1,2,3];
let arr2 = [7, 8, 9];
let arr3 = [0, ...arr1, 4, 5, 6, ...arr2];
console.log(arr3);

let obj1 = {a:1,b:2};
let obj2={
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2);
// 연산 위치에 따라 덮어씌우기도 됨
let obj3 = {
    a: 123,
    b: 456,
    ...obj1
};
console.log(obj3);
// 함수에 적용
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...arr1));

//rest parameters
function fncA(...rest){
    console.log(rest);
}
fncA(1,2,3,4);

//따로 이름을 지정해서 받는 경우 앞에 표시
let arr4 = [1,2,3,4,5,6,7];
function fncB(one, two, three, ...rest){
    console.log({one,two,three,rest});
}
fncB(...arr4);
