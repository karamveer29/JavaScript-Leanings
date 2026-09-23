const userEmail = []
if(userEmail){
    console.log("Got user Email");
    
}else{
    console.log("Don't have user Email");
    
}
// falsy value
// false, 0, -0, BigInt 0n, "", null,userdefined, NaN

// truthy values 
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("Object is Empty");
    
}
// Nullish coalesing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Teniary operator 
// condition ? true : false

const iceCube = 100
iceCube <= 80 ? console.log("less than 80") : console.log("more than 80");

