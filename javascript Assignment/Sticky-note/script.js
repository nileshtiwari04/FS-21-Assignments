let btn = document.getElementById("button");
let text = document.getElementById("text_area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let message = document.getElementById("message");


function addNotes() {
    if (text.value === "") {
        alert("please enter some text");
        return;
    }
    message.style.display = "none";
    // message.innerText = ""


    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    // console.log(div, p, cross_btn);

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    // console.log(div);
    text.value = "";

    notes_container.appendChild(div);
    cross_btn.addEventListener("click", function () {
        // div.style.display ="none"
        notes_container.removeChild(div);
        if (notes_container.children.length === 0) {
            message.style.display = "block"
        }
    });
}
btn.addEventListener("click", addNotes);
