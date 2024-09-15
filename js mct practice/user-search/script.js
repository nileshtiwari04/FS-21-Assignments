const resultDiv = document.querySelector(".result-container");
const input = document.querySelector(".search input");
const searchBtn = document.querySelector("button");
let allData = [];

async function getDataFromAPI() {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    allData = result.users; // Store all the data
    showData();
}

getDataFromAPI();

function showData(search = "") {
    resultDiv.innerHTML = "";
    const filteredData = allData.filter(user => {
        return (
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            user.age.toString().includes(search.toLowerCase())
        );
    });

    filteredData.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("img");
        img.src = user.image; // Assuming the API returns an `image` field

        const fName = document.createElement("span");
        fName.innerText = `Name: ${user.firstName} ${user.lastName}`;

        const age = document.createElement("p");
        age.innerText = `Age: ${user.age}`;

        card.append(img, fName, age);
        resultDiv.append(card);
    });
}

input.addEventListener("input", () => {
    showData(input.value);
});

// Optionally, if you want to use the search button to trigger the search as well
searchBtn.addEventListener("click", () => {
    showData(input.value);
});
