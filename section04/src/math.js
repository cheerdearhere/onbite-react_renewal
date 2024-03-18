function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
const httpStatus = {
    OK: 200,
}


// Common JS
// module.exports = {
//     add,
//     sub,
//     httpStatus,
// }

// ES Module
export {
    add,
    sub,
    httpStatus,
}