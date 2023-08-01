//SetTimeout and setInterval


var heading = document.querySelector('h1'); 
// setTimeout(()=>{
//     alert("Timeout reached!");
//     heading.innerText = "The setTimeout has run successfully";
// }, 3000)

// var i = 0;
// setInterval(()=>{
//     heading.innerHTML += "<br>SetInterval runs, "+i;
//     i++;
// }, 2000);
var url = "https://randomuser.me/api/?results=100";
//resolve or reject
async function apicall(url){
    var result = await fetch(url);
    var data = await result.json();
    console.log(data);
}
apicall(url);
