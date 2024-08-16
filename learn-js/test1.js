//asynchronous programming
/*console.log("one")
console.log("two")
setTimeout(hello,5000)
console.log("three")
function hello(){
    console.log("hello")
}*/

console.log("one")
console.log("two")
setTimeout(()=>{
    console.log("hello")
},5000)
console.log("three")
