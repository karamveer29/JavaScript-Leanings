// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 2000);
//   });
// }
// async function getData(params) {
//     let data = await fetchData();
//     console.log(data);
// }
// getData();

// Error handling with try/catch
async function fetchData(){
    return new Promise((resolve, reject) =>{
        reject("Network error");
    });
}
async function getData() {
    

    try{
        let data = await fetchData();
        console.log(data);
    }catch(error){
        console.log("Error:", error);
    }
}
getData();

// multiple Awaits
// async function processData(){
//     let data1 = await Promise.resolve("Data 1");
//     let data2 = await Promise.resolve("Data 2");
//     console.log(data1, data2);
// }
// processData();