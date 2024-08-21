let apiKey = "nGjPHrEI8KYkptNK3hzYHvs62cs7ikwJlh_d-0fVJzA";
let count = 20;

let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let fetching = false;

async function getPhotos() {
    if (fetching) return; // Prevent multiple calls
    fetching = true;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        let box = document.querySelector(".scroll-container");
        data.forEach((photo) => {
            let img = document.createElement("img");
            img.src = photo.urls.regular;
            box.appendChild(img);
        });
    } catch (error) {
        console.error("Error fetching photos:", error);
    } finally {
        fetching = false;
    }
}

getPhotos();

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight; 
    const documentHeight = document.documentElement.offsetHeight; 
    const threshold = 50;
       if (!fetching && scrollPosition >= documentHeight - threshold) {
        getPhotos();
    }
});