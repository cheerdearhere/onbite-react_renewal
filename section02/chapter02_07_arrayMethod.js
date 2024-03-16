console.log("배열 메서드");
let arr1 = [4,6,7];
console.log(arr1.shift());
console.log(arr1.unshift(1,2,3,4,5));
console.log(arr1);
let arr2 = arr1.slice(3,6);
console.log(arr1);
console.log(arr2);

let arr3 = [1,2,3];
arr3.forEach((i,idx,arr)=>{
    console.log({
        item: i,
        index: idx,
        thisArr: arr
    });
});
arr3.forEach(console.log);

let arr4 =[
    {name: "홍길동", hobby: "soccer"},
    {name: "김유신", hobby: "soccer"},
    {name: "이순신", hobby: "golf"},
];
let soccerTeam = arr4.filter(student=> student.hobby==="soccer");
console.log(soccerTeam);

let arr5 = [1,2,3];
let resultArr = arr5.map((i,idx,arr)=>{
    console.log(`${i}. ${arr[idx]}`);
    return i * 2;
})
console.log(resultArr);
//map 활용: 객체에서 이름만 꺼내쓰기
let studentNameList = arr4.map((student,idx)=>{
    console.log(`${idx+1}: ${student.name}`);
    return student.name;
});
console.log({studentNameList});

let arr6 = [3,5,4,2,1];
console.log(arr6);
arr6.sort((a,b)=>a-b);
console.log(arr6);
arr6.sort((a,b)=>b-a);
console.log(arr6);

let arr7 = [3,5,4,2,1];
let sortedArr = arr7.toSorted((a,b)=>a-b);
console.log({arr7,sortedArr});

let arr8 = ["he","is","computer"];
let str = arr8.join();//he,is,computer
let sepStr = arr8.join(" ");//he is computer
console.log({str,sepStr});