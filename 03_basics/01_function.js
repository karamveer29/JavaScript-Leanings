function sayName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}sayName()

function addTwoNUmber(num1, num2){
    return num1+num2
}
const res = addTwoNUmber(3,4)
console.log("Result:"+res);


// function loginUserMessage(userName){
//     if(userName == undefined){
//         console.log("Please enter a username:");
//         return
//     }
//     return `${userName} just logged in`
// }
// console.log(loginUserMessage("Karan"))
// console.log(loginUserMessage())
// function calculateChartPrice(...num1){
//     return num1
    
// }
// console.log(calculateChartPrice(100,200,300))
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username:"Sam",
    price:499
})
const myNewArray = [100,200,300,400]
function returnSecondArray(getArray){
    return getArray[2]
}
console.log(returnSecondArray(myNewArray));
// console.log(returnSecondArray([200,400,600,800]));



