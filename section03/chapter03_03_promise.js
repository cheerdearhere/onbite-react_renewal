console.log("promise");

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const num = 10;

        if(typeof num === "number")
            resolve(num+10);
        else
            reject("숫자가 아님");
    },2000);
});

promise1
    .then((value)=>{// resolve 사용
        console.log(value);
    })
    .catch(err=>{// reject 사용
        console.log(err);
    });

function addTen(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number")
                resolve(num + 10);
            else
                reject(`숫자가 아닙니다: ${num}`);
        }, 2000);
    });
}
addTen(0)
    .then(result=> {
        console.log(`result: ${result}`);
        return addTen(result);
    })
    .then(result=>{
        console.log(`result: ${result}`);
        return addTen(result);
    })
    .then(result=> {
        console.log(`result: ${result}`);
    })
    .catch(err=>console.log(err));