const allProfiles = document.querySelector("#profiles");
let currentPage = 0;
let profilesPerPage = 10;
let allData = [];

async function getDataFromApi() {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    allData = result.users; // Store all the data
    console.log(allData);
    showInitialData(allData);
}

getDataFromApi();

function showInitialData(data) {
    displayProfiles(data.slice(0, profilesPerPage));
}

function displayProfiles(data) {
    allProfiles.innerHTML = ''; // Clear existing profiles

    data.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        profileCard.innerHTML = `
            <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>${user.email}</p>
        `;

        allProfiles.appendChild(profileCard);
    });
}

function next() {
    if ((currentPage + 1) * profilesPerPage < allData.length) {
        currentPage++;
        displayProfiles(allData.slice(currentPage * profilesPerPage, (currentPage + 1) * profilesPerPage));
    }
}

function prev() {
    if (currentPage > 0) {
        currentPage--;
        displayProfiles(allData.slice(currentPage * profilesPerPage, (currentPage + 1) * profilesPerPage));
    }
}

document.getElementById("Next").addEventListener("click", next);
document.getElementById("Prev").addEventListener("click", prev);
