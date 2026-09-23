const loadScript = async(src)=> {
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + "Done success")
        }
        document.head.append(script)
    })
}
// problem 1
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js")
a.then((value) => {
    console.log(value);
})

// problem 2
const main2 = async() => {
    console.log(new Date(). getMilliseconds())
    let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js")
    console.log(a);
    console.log(new Date().getMilliseconds)
}
main2()