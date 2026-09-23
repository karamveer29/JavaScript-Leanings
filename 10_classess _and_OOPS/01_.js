const user = {
    username:"Space",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        // console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("ram",2131,true)
const userTwo = new User("sita",9044,false)
// console.log(userOne.constructor);
// console.log(userTwo);      


