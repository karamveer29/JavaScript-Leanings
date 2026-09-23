let result = "";
let days = Number(prompt("Enter No of Days"));

if (!isNaN(days)) {

    switch (days % 7) {
        case 0:
            result = " Sunday ";
            break;
        case 1:
            result = " Monday ";
            break;
        case 2:
            result = " Tuesday ";
            break;
        case 3:
            result = " Wednesday ";
            break;
        case 4:
            result = " Thursday ";
            break;
        case 5:
            result = " Friday ";
            break;
        case 6:
            result = " Saturday ";
    }

    document.getElementById("show").innerHTML = `
        <h1>On ${days} Day It is ${result}</h1>
        <h4>📌 Note :- This Code automatically Generated from calendar of March 2023</h4>
        <p>On the basis of above code you can find 
        what day will be on nth day</p>
    `;

} else {
    document.getElementById("show").innerHTML =
        `<h2>❌ Only Number Input is Accepted</h2>`;
}
