console.log("async, await");
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name: "홍길동",
                id: "charminghong"
            });
        },3000);
    });
}

async function printUserData(){
    // getData().then(result=>{
    //     console.log(`이름: ${result.name}, ID: ${result.id}`)
    // }).catch(console.log);
    const userData = await getData();
    console.log(`이름: ${userData.name}, ID: ${userData.id}`);
}

printUserData();