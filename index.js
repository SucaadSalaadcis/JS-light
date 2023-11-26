/* let num = 1 

while(num <=20){
  console.log(num)
  num +=2
} */


/* for(let num = 1; num <= 5; num++){
    console.log(num);
} */


/* for(let num = 100; num>=1; num--){
    console.log(num)
} */

/* 
let name = prompt()
for(let num = 1; num <=15;num++){
    console.log(name);
    console.log(name);
    document.write(name,"<br/>"); 
} */



/* let num = 1 
do {
    console.log(num)
    num ++

}while(num <=5) */


/* let name = prompt();
let age = prompt();

let num = 1 
do {
    document.write(`Hello ${name} you are ${age} years old`,"<br/>")
    num ++

}while(num <=5)
 */

/*  let num = 5;
do {
    console.log(num);
    num += 5

}while(num <= 40)  */

/* function sayHi () {
    console.log("my name is Susu");
    document.write("my name is Susu");
}
sayHi(); */

/* function addition () {
  console.log(10+2);
}
addition(); */

// function myName (name,age) {
//   console.log(`Hello ${name} you are ${age}`);
// }
// myName("Abdi",20);
// myName("Ali",40);
// myName("Muna",50);


/* function biggestNum (n1,n2,n3) {
  
    if(n1>n2 && n1>n3){
        console.log(n1)
    }else if (n2>n1 && n2>n3){
        console.log(n2)
    }else if (n3>n1 && n3>n2){
        console.log(n3)
    }
     
  }
 biggestNum(30,400,1000); */

 // Date 11/22/23

 // so celi something with out console

/*  function sayHi () {
    let name = "suu";
    return name;
 }

console.log(sayHi()); */



/* 
function addition () {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2
    return sum
}

console.log(addition());


 */
/* 
function mutiply (num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

console.log(mutiply(2,5,5));

// Fat arrow 
const addition = () => {
    console.log("suad");
}
addition();

 */

/* const name_age = (name,age) => {

    return `Hello ${name} you are ${age} years old`
}
console.log(name_age("Ali",30)); */



/* let myFriends = ["Ali","abdi","anas","geedi"];

let num = 0 ;
while (num < myFriends.length){
    console.log(myFriends[num]);
    num ++
} */

// obj you can think like person 
// properties : key : value

let person = {
    name: "suad",
    favFood: "piza"
}

// console.log(person.name);
// console.log(person["name"]);

/* let myFriends = ["Ali","abdi","anas","geedi"];
let removeLast = myFriends.unshift("suu");
console.log(myFriends);

 */

// let fruits = ["Cd","Apple","Mango","Banana"];
// fruits.sort()
// console.log(fruits);

// fruits.reverse();
// console.log(fruits);
// let iskudar = fruits.join(",");
// fruits.push("Lemon");
// console.log(iskudar);
// console.log(fruits);
// fruits.pop()
// // console.log(fruits);
// fruits.shift()
// console.log(fruits);

// fruits.unshift("Ali");

// fruits.splice(1,2);


// it removes and also adds element
// fruits.splice(0,0,"Ali")

// console.log(fruits);


// let fruits = ["Cd","Apple","Mango","Banana"];


// fruits.forEach(function (item) {
//   console.log(item);
// })


/* let ages = [14, 15, 16, 18, 19,20];

ages.map(function (age) {
   console.log(age);
})
 */


/* const element = document.getElementById("title");
console.log(element);

const text = document.getElementsByTagName("p")[0];
console.log(text);

const universal = document.querySelector("#title")

console.log(universal);

const elemen = document.querySelector("#title");

elemen.innerHTML = "it is written by JavaScript"
console.log(elemen);

elemen.style.color = "red";

elemen.backgroundColor = "blue" 

const button = document.getElementById("btn");
button.style.backgroundColor = "purple";
console.log(button);
 */

/* const title = document.querySelector("#title")
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");

button.addEventListener("click", function () {
    title.style.color = "red";
})

button2.addEventListener("click",)

function resetColor () {
    title.style.color = "black";
}
 */



/* const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click",ChangeBodyColor);

function ChangeBodyColor () {
    body.style.backgroundColor = "red";
}

 */

let btnOn = document.querySelector(".btnOn");
let btnOff = document.querySelector(".btnOff");

const lightbox = document.querySelector(".light-box");

btnOn.addEventListener("click", function () {
  lightbox.style.backgroundColor = "yellow";
  btnOn.style.color = "red";
  btnOff.style.color = "black"
})

btnOff.addEventListener("click", function () {
    lightbox.style.backgroundColor = "transparent";
    btnOff.style.color = "red"
    btnOn.style.color = "black";
  })
  

