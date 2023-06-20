var h1= document.querySelector('.text');
var body = document.querySelector('body');
var button = document.querySelector('.btn');
var btn = document.querySelector('.submit');
var input1 = document.querySelector('.inp1');
var input2 = document.querySelector('.inp2');

button.addEventListener('click', function(){

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        button.innerHTML = 'Switch to dark mode';
        h1.innerHTML='This is light mode screen';
    }
    else{
        body.classList.add('dark');
        button.innerHTML = 'Switch to light mode';
        h1.innerHTML='This is dark mode screen';
    }
    
});
btn.addEventListener('click', function(){
    var a=input1.value;
    var b = input2.value;
    var c = parseInt(a)+parseInt(b);
    console.log(c);
});