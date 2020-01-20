const home = document.querySelector('#Home');
const zpotify = document.querySelector('#Zpotify');
const whatzapp = document.querySelector('#Whatzapp');

home.addEventListener('click',funcionHome);
zpotify.addEventListener('click',funcionZpotify);
whatzapp.addEventListener('click',funcionwhatZapp);

function funcionHome() {
    console.log("Abre Home");
    document.getElementById("din").src = "../Home/index.html";    
}

function funcionwhatZapp() {
    console.log("Abre WhatzApp");
    document.getElementById("din").src = "../WhatzApp/index.html";    
}

function funcionZpotify() {
    console.log("Abre Zpotify");
   document.getElementById("din").src = "../Zpotify/index.html";   
}