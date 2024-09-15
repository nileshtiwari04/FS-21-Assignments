const allProfiles = document.querySelector("#profiles");
const showmoreDiv = document.querySelector("#show-more");

async function getDataFromApi() {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();

    console.log(result.users);
    showInitialData(result.users);
}

getDataFromApi();

function showInitialData(data) {
    const limitedData = data.slice(0, 15);
    displayProfiles(limitedData);

    if (data.length > 15) {
        showmoreDiv.innerHTML = '<button id="showmorebtn">Show More</button>';
        document.getElementById("showmorebtn").addEventListener("click", () => showAllData(data));
    }
}

function showAllData(data) {
    displayProfiles(data);
    showmoreDiv.innerHTML = ""; // Remove the "Show More" button
}

function displayProfiles(data) {
    allProfiles.innerHTML = ''; // Clear any existing profiles

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
