//console.log("hello from js")
//Variables in js
/*var a=10;
var$aaaaa =56
let b=20;
const c=30;
console.log("a = "+a)
console.log("b = "+b)
console.log("c = "+c)
console.log(var$aaaaa)
//datatypes in js
let x=80;
console.log(x +" - "+typeof x)
 x="nandini"
console.log(x +" - "+typeof x)
 x=45.89
console.log(x+" - "+typeof x)
 x=false
console.log(x+" - "+typeof x)

//operators in java
d=10;
e=5;
f="5";
//arithmetic
console.log(d+e)
console.log(d-e)
console.log(d*e)
console.log(d/e)
console.log(d%e)

//comparasion
console.log(d>e)
console.log(d<e)
console.log(d>=e)
console.log(d<=e)
console.log(d==e)
console.log(e==f)
console.log(e===f)

//logical
console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)
//ternary operator
 console.log(a>b ? true : false)


 //Conditional statements
 let num=15;
 if(num%2==0){
    console.log(num+" number is even")
 }
 else{
    console.log(num+" number is odd")
 }*/
/*let marks=57;
if(marks>90){
    console.log("Excellent")
}
else if(marks>=80 && marks<=80){
    console.log("Very good")
}
else if(marks>=70 && marks<=79){
    console.log("Good")
}
else if(marks>=50 && marks<=69){
    console.log("Average")
}
else{
    console.log("Re-attempt")
}

let choice=9;
switch(choice){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("Check again")

}*/

//for loop
/*let number=15
for(let i=1;i<=10;i++){
    console.log(number *i)
}

//while loop
let j=1;
while(j<=10){
    console.log(number *j)
    j++
}

//do while loop
let k=1
do{
    console.log(number *k)
    k++

}while(k<=10)*/

//functions
/*function add(){
    let a=10;
    let b=20;
    let c=a+b;
    console.log(c)
}
add()*/

//type2
/*function add(a,b){
    let c=a+b;
    console.log(c)
}
add(10,20)*/

//type3
/*function add(a,b){
    let c=a+b;
    return c;

}
result=add(10,20)
console.log(result)*/

//type4
/*function mul(){
    let a=10;
    let b=5;
    let c=a*b;
    return c;
}
result=mul()
console.log(result)*/

//Array
/*numArray=[10,20,30,40,50]
console.log(numArray[2])
numArray[2]=99
console.log(numArray[2])
console.log(numArray[4])
//traversing 
for(let i=0;i<numArray.length;i++){
    console.log(numArray[i])
}
arr=[1,2,3,4,5]
console.log(arr.length)
arr.push(100)
console.log("before pop")
for(let j=0;j<arr.length;j++){
    console.log(arr[j])
}
console.log("After pop")
arr.pop()
for(let j=0;j<arr.length;j++){
    console.log(arr[j])
}
console.log(arr.slice(1,3))

ar=[4,5,9,3,2,true,"Nandy"]
ar.sort()
//ar.reverse()
for(let k=0;k<ar.length;k++){
    console.log(ar[k])
}*/
//oop in java
class Student{
    constructor(roll,name,branch){
        this.roll=roll
        this.name=name
        this.branch=branch
    }
     study(){
        console.log("study js")
    }
    party(){
        console.log("Biriyani party")
    }
    intro(){
       console.log("roll = "+this.roll)
       console.log("name = "+this.name)
       console.log("branch = "+this.branch)
    }
    
}
st=new Student(1,"Nandini","CSE")
st.study()
st.party()
st.intro()
//console.log(st)

//inheritance
class Artist{
    art(){
        console.log("perform and respect art")
    }
    earn(){
        console.log("Earn respect")
    }

}
class Painter extends Artist{
   paint(){
    console.log("Painting")
    }
    earn(){
        console.log("earn respect and money")
    }
}
p=new Painter()
p.paint()
p.art()
p.earn()








