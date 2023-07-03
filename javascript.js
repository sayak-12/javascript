// var a=5;
// var b="10";
// console.log(parseInt(a)+(b));

// arrays and objects
// var marketlist = ["a","b","c"];
// console.log(marketlist[1]);
// marketlist.forEach((element)=>{
//     console.log("This is the marketlist element "+element);
// })

// var details = {
//   student1: ["mike", "20","Kolkata"],
//   student2: ["jane", "20","Kolkata"],
//   student3: ["john", "20","Kolkata"],
// };
// console.log(details.student2[0]);
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix);
// "day" != "Day"
// "day" === "day"
// "day" == "Day"
//nested if-else statements/ladder
// var time = "night";
// var loc = "home";

// if (time == "night") {
//     console.log("Hi");
//     if (loc != "home") {
//         console.log("return to home");
//     }
//     else{
//         console.log("go to bed");
//     }
// }
// console.log("Hello");
// for, while, foreach, do-while
// var i=0;
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= (6-i) ; j++) {
//         console.log("#");
//     }
//     console.log("\n");
    
// }
// while (i<5) {
//     console.log("Good morning");
//     i++;
// }
// functions
// var a=5; 
// var b=2;
// function checkprime(x){
//     if (x==0) {
//         console.log(" 0 cannot be decided as prime or not prime ");
//     }
//     else if (x==1) {
//         console.log(" 1 cannot be decided as prime or not prime ");
//     }
//     else{
//         for (var i = 2; i <= Math.floor(x/2); i++) {
//             if (x % i == 0) {
//                 console.log( x + " is not prime number ");
//                 return "is not prime number";
//             }
//         }
//         console.log( x + " is a prime number ");
//         return "is a prime number";
//     }
// }
// var returnstr = checkprime(22);
// console.log(checkprime(19));

// var a = parseInt(prompt("Enter a number: ")) ;

// var b = parseInt(prompt("Enter another number: ")) ;
// var randNum= Math.floor(Math.random() * (b - a) ) + a;
// console.log(randNum);



// document object model manipulation = DOM manipulation
// var sqr = document.querySelectorAll(".sqr");
// console.log(sqr);
// var bd = document.querySelector("body");
// var button = document.querySelector(".btn");
// for(let index = 0; index < 10; index++) {
//     var element = document.createElement("div");
//     element.className = "sqr"+index;
//     element.textContent = "This is a square of index " + (index+1);
//     bd.appendChild(element);
// }
// var sqrwithid  = document.getElementById("sqr");
// sqrwithid.innerText  = "This is a changed square.";
// sqrwithid.innerHTML = "<h1>this is a square.</h1>";
// button.addEventListener("click", () => {
//     sqrwithid.classList.toggle("active");
// })