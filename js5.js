// for, while, forEach, Do While Loops | Web Development
let i;
for (i = 0 ; i<4 ; ++i){
console.log(i);
}
let friend = new Array("Owais","Amin","Shehroz","Daniyal")
// for (let index = 0; index < friend.length; index++) {
//      console.log(friend[index]);   
// }
// friend.forEach(function f(element){

//     console.log("Hello friend "+element+"TO modern java script")
// })
// for (const element of friend) {
//     console.log("Hello friend, "+element+" welcome to modern java script again")
//}

let myEmployee = {
    name : "Owais",
    Salary : 200000,
    Job : "a Computer Engineer"
}
// Use this loops to iterate over object.
for (const key in myEmployee) {
console.log(`The ${key} of employee is ${myEmployee[key]}`);
}