class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);;
        
    }
}
class Teacher extends User{
    constructor(username, email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const tea = new Teacher("tea", "tea@gmial.com", "1234")
tea.logMe()
const rosetea = new User("rosetea")
rosetea.logMe()
console.log(tea instanceof User);
