function getData(dataId, getNextData){
    setTimeout(() =>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
// This is call back hell it is nested callback stacked below one another forming a pyramid
getData(1, () =>{
    getData(2, () =>{
        getData(3, () => {
            getData(4, () => {

        });

        });
    });

});