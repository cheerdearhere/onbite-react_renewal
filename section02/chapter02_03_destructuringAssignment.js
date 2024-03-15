console.log("구조분해할당");

// 배열
let arr = [1,2,3,4];
let [one, two, three] = arr;//4는 따로 저장하지 않음
let [o, t, th, f] = arr;// 4개요소 다 분해 할당
let [a, b, c, d, e] = arr;//배열보다 많으면 undefined
console.log({a,b,c,d,e});
let [a1, b1, c1, d1, e1 = 6] = arr;//기본값을 지정해 null 방지
console.log({a1,b1,c1,d1,e1});

//객체
let person = {
    name: "hong gil",
    age: 27,
    hobby: "테니스",
}
let {name, age, hobby} = person;
let {//원하는 변수명으로 변환
    name: name1,
    age: age1,
} = person;
let {name:name2, age:age2, extra} = person;
console.log({name2,age2,extra});// 없는 property > undefined
let {name:name3, age:age3, extra2="ex"} = person;
console.log({name2,age2,extra2});// 초기화 가능
//함수에서 매개변수 편하게 받기
const printInformation = ({name, age, hobby})=>{
    // console.log(`이름: ${person.name}, 나이: ${person.age}, 취미: ${person.hobby}`);
    // console.log(`이름: ${name}, 나이: ${age}, 취미: ${hobby}`);
    let emptyData = "입력해주세요";
    console.log(`이름: ${name||emptyData}, 나이: ${age||emptyData}, 취미: ${hobby||emptyData}`);
}
printInformation(person);
printInformation({name:"aa"});

