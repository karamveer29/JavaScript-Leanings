// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Task succeessful");

//     }else{
//         reject("Task failed");
//     }
// });
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

function fetchData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Data fetched");
        }, 2000);
    });
}
fetchData()
     .then(data=>{
        console.log(data);
        return "Processing data";
     })
    .then(msg =>{
        console.log(data);
     })
     .catch(err=>{
        console.log(err);
     });