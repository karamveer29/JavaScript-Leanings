// let myName = "Arpit"
// let mychannel = "mail"
// console.log(myName.trueLength);
let myHeros=["hulk", "thor"]
let heroPower = {
    hulk:"Most Powerful",
    thor:"hammer",

    gethulkPower: function(){
        console.log(`hulk power is ${this.hulk}`);
        
    }
}

Object.prototype.Arpit = function(){
    console.log(`Arpit is present in all object`);
    
}
Array.prototype.heyArpit = function(){
    console.log(`Arpit say hello`);
    
}
heroPower.Arpit()
myHeros.Arpit()

// Inheritence

const User = {
    nsme:"maid",
    email:"maid@gmil.com"

}

const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = "PrinceandPrincess"
String.prototype.trueLength = function(){
    console.log(`s{this}`);
    console.log(`True length is: s{this.trim().length}`);
    
}
anotherUsername.trueLength()
"krish".trueLength()
"icecube".trueLength()


