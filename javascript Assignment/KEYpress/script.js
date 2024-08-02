let keyy = document.getElementById("key");
let code = document.getElementById("code");

let c = document.getElementsByClassName("c");


document.addEventListener("keydown",function(e){
    let key = e.key;
    let keyCode = e.keyCode;
    console.log(key);
    console.log(keyCode);

    keyy.innerHTML = `You Have Clicked : ${key}`;
    code.innerHTML = `Code Code of ${key} is ${keyCode} `;
})