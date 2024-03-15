console.log("Iterator");
//배열 순회
let arr=[1,2,3];
    //배열 idx
for(let i = 0; i < arr.length; i++){
    console.log(i+". "+arr[i]);
}

for(let item of arr){
    console.log(item);
}

// 객체 순회
let person = {
    name: "hong",
    age: 27,
    hobby: "drink",
};

let personKeys = Object.keys(person);
for(let key of personKeys){
    let value = person[key];
    console.log(key, value);
}

let personValues = Object.values(person);
for(let value of personValues){
    console.log(value);
}

for(let key in person){
    const value = person[key];
    console.log(`${key}: ${value}`);
}