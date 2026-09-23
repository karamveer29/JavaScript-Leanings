// object singleton
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sidhu"
tinderUser.isLoggedIn = false
console.log(tinderUser);
const regularUser = {
    email:"sidhu10@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Samer",
            lastname:"Sidhu"
        }
    }
}
console.log(regularUser.fullname.userfullname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {

        id: 1,
        email:"sidhu10@gmail.com"
    },
    {
        id:1,
        email:"sidhu10@gmail.com"
    },
    {
        id:1,
        email:"sidhu10@gmail.com"
    },
]
user[1].email
console.log(tinderUser);

// {} this is used for destructuring


