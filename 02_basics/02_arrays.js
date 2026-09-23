const marvel_heros = ("thos","ironman", "CpatinAmerica")
const dc_heros=["superman", "batman", "spiderman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3[4,5,6],7[6,7[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Gurnam"))
console.log(Array.from("Gurnam"))
console.log(Array.from({name: "Gurnam"}))

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3));




