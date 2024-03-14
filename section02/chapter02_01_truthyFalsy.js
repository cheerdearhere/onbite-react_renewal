console.log("truthy false 활용 예제");

const printName =(person)=>{
    if(person){
        console.log(person.name);//person.name is undefined
    }
    else{
        console.log("person의 값이 없음");
        return;
    }
};

let person = {
    name:"hong"
};
let nullName = {};

printName(person);
printName(nullName);
printName(null);