console.log("콜백");

function add(a,b){
    setTimeout(()=>{
        const sum = a + b;
        console.log(sum);
    },3000);
}

add(1,2);

function addUseCallback(a,b,callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    },3000);
}
addUseCallback(1, 2, value=>console.log(value));

//콜백 지옥
const foodArr = [
    {foodName: "떡볶이", price: 10000, duration: 3000},
    {foodName: "짜장면", price: 6000, duration: 4000},
    {foodName: "마라탕", price: 12000, duration: 2000},
];
function orderFood(foodCode, callback){
    if(foodCode < 0 || foodCode >= foodArr.length){
        console.log("정상적인 접근이 아닙니다.");
    }
    setTimeout(()=>{
        const food = foodArr[foodCode];
        callback(food);
    }, 4000);
}
function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food.foodName}`;
        food.foodName = cooldownedFood;
        callback(food);
    },2000);
}
function freezeFood(food,callback){
    setTimeout(()=>{
        const frozenFood = `냉동된 ${food.foodName}`;
        food.foodName = frozenFood;
        callback(food);
    },1500);
}
orderFood(foodArr.findIndex(food=>food.foodName==="떡볶이"),selectedFood=>{
   console.log(`selected: ${selectedFood.foodName}`);
   cooldownFood(selectedFood,(cooldownedFood)=> {
       console.log(cooldownedFood.foodName);
       freezeFood(cooldownedFood,(frozenFood)=>{
           console.log(frozenFood.foodName);
       });
   });
});