function SetUsername(username){
    this.username=username
    console.log("called");
    
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
const post = new createUser("post", "intagram@int.com", "123456")
console.log(post);
