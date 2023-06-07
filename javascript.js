var nm= false;
var array = [
    1,
    2,
    3,
    4,
    "hi"
];
var a= prompt("Enter a number: ");
console.log(a);
if (a==12) {
    console.log("The value is 12");
}
else if(a%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}
let index=0;
for (index = 0; index < 5; index++) {
    console.log(index);
    
}
array.forEach(function dgdg(el) {
    console.log(el);
})

var stud1 = {
    name: "sayak",
    title: "raha",
    stream: "cse"
}
var stud2 = {
    name:"saikat",
    title: "das",
    stream: "cse"
}
var stud3 = {
    name:"Ashish",
    title: "Das",
    stream: "cse"
}
var stud4 = {
    name:"Rohan" ,
    title: "Nandi",
    stream: "cse"
}
var s = [stud1, stud2, stud3, stud4]
console.log( s);