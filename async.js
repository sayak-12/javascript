var word = document.querySelector('.word');
var container  = document.querySelector('.wordcontainer');
var searchbar = document.querySelector('.searchbar');
var search = document.querySelector('.search');
var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

window.addEventListener("load", async ()=>{
    var updatedurl = url + word.textContent;
    var strobj = await fetch(updatedurl);
    var meaning = await strobj.json();
    console.log(meaning);
    document.querySelector('.pos').innerHTML=meaning[0].meanings[0].partOfSpeech;
    document.querySelector('.meaning').innerHTML=meaning[0].meanings[0].definitions[0].definition;
})