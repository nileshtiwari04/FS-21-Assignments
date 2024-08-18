let searchText = 'ipad pro';

function searchHandler(isShowAll) {
    loading(true);
    const searchField = document.getElementById("searchField");
    searchText = searchField.value;
    loadPhone(searchText, isShowAll);
}

const loading = (isLoading) => {
    const loading = document.getElementById("loading");
    if (isLoading) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = '';

    const showAll = document.getElementById("showALLBtn");
    if (phones.length > 20 && !isShowAll) {
        showAll.classList.remove('hidden');
    } else {
        showAll.classList.add('hidden');
    }

    if (!isShowAll) {
        phones = phones.slice(0, 20);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card';

        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="phone" />
            </figure>
            <div class="card-body">
                <h2>${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <button onclick="showDetailsHandler('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });

    loading(false);
}

function showBtn() {
    searchHandler(true);
}

const showDetailsHandler = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();

    const phone = data.data;
    showPhoneDetails(phone);
}

const showPhoneDetails = (details) => {
    const my_modal = document.getElementById("my_modal");
    my_modal.showModal();

    const modelName = document.getElementById('detailsPhoneName');
    const brandName = document.getElementById('detailsBrand');
    const detailsSpec = document.getElementById('detailsSpec');
    const releaseDate = document.getElementById('releaseDate');
    const imageDiv = document.getElementById('imgContainer');

    imageDiv.innerHTML = `<img src="${details.image}" alt="${details.name}">`;
    modelName.innerText = details.name;
    brandName.innerText = `Brand: ${details.brand}`;
    const features = details.mainFeatures;
    
    let specString = "";
    for (const key in features) {
        specString += `${key}: ${features[key]}\n`;
    }
    detailsSpec.innerText = specString;
    releaseDate.innerText = details.releaseDate || "No release date available";
}

loadPhone(searchText);
