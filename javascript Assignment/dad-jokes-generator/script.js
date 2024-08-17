const btn =document.getElementById("btn")


// const apikey = "sdV1rBINR7HCBm41RtxAHg==Xl0On12CqYT2J42l";

// const options ={
//     method: "GET",
//     Headers : {
//         "X-Api-key": apikey,
//     },
// };

// const apiURL= `https://api.api-ninjas.com/v1/dadjokes?limit=1`;

// async function getJoke(){
//    const response = await fetch(apiURL, options)
//    const data = await response.json()

//    console.log(data);
   
// }
let main = document.getElementById("joke");
function updataUI(data){
   main.innerHTML = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let p2 = document.createElement("p");    
    p.innerHTML = `Setup : ${data.setup}`;
    p2.innerHTML = `Punchline : ${ data.punchline}`;
    div.appendChild(p);
    div.appendChild(p2);
    main.appendChild(div);
    console.log(main);
}

async function fetchJoke(){
    let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    let data = await response.json();
    console.log(data);
    updataUI(data);
}
fetchJoke();



btn.addEventListener("click", fetchJoke);