var display = document.querySelector('.displayarea');
var numbers = document.querySelectorAll('.number');
var ops = document.querySelectorAll('.ops');

numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        var num = number.textContent;
        display.textContent += num;
    })
})

ops.forEach((op)=>{
    op.addEventListener('click',()=>{
        if (!(op.textContent === "=" || op.textContent==="AC")) {
            var num = op.textContent;
            display.textContent += num;
        }
        else if (op.textContent ==="="){
            if (display.textContent === "") {
                alert("Please enter some value");
            }
            else{
                var calc = display.textContent;
                calculatevalue(calc);
            }
        }
        else{
            display.textContent = "";
        }
    })
})

function calculatevalue(calc){
    try {
        var result = eval(calc);
        display.textContent = result;
    } catch (error) {
        console.log("Please enter a valid input: "+error);
    }
    
}