console.log("단락평가");

let penResources=10;

function makePenCase(request){
    if(request)
        console.log("케이스");
    return request;
}
function makePen(request){
    if(request){
        console.log("펜");
        penResources--;
    }
    return request;
}

console.log("false&&true",makePenCase(false) && makePen(true));
console.log({penResources});//10
console.log("true&&true",makePenCase(true) && makePen(true));
console.log({penResources});//9
console.log("false||true",makePenCase(false) || makePen(true));
console.log({penResources});//8
console.log("true||true",makePenCase(true) || makePen(true));
console.log({penResources});//8

// 사용예시
function printName(person){
    let name = person && person.name;
    console.log(name || "이름이 입력되지 않았습니다");
}
printName({});
printName(undefined);
printName({name:""});
printName({name:"홍길동"});