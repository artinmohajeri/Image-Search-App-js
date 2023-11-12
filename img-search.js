// const $ = document.querySelector.bind(document);
const key = "Ml_oUoQoibUIGOXB6j4yIam2pSBsUDBLvLz87i3IcEI";

const form = document.querySelector("form");
const input = document.querySelector("input[type='search']");
const searchResults = document.querySelector(".results");
const showMore = document.querySelector(".show-more");
let inputData = "";
let pageNumber = 1;


async function searchImages() {
    inputData = input.value
    const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputData}&client_id=${key}`

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (pageNumber === 1) {
        searchResults.innerHTML = "";
    }
    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("mt-5");
        imageWrapper.classList.add("col-12");
        imageWrapper.classList.add("col-md-6");
        imageWrapper.classList.add("col-lg-4");
        imageWrapper.classList.add("col-xxl-3");
        imageWrapper.classList.add("d-flex");
        imageWrapper.classList.add("justify-content-center");

        const image = document.createElement("img");
        image.setAttribute("src",`${result.urls.small}`);
        image.style.width = "250px"
        image.style.height = "250px"
        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);
    })
    pageNumber++;
    if (pageNumber > 1) {
        showMore.classList.remove("d-none");
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    pageNumber = 1;
    searchImages()
})

showMore.addEventListener("click",()=>{
    searchImages()
})
