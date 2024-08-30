
//function to sum 2 num``
const acceseKey = "T3eK8SBW3YZLbXYVidITmrjcO83xfzCHCCWzTBYRYPg";
const inputEl = document.getElementById("search-input");
const buttonEl = document.getElementById("search-button");
const formEl = document.querySelector("form");
const me = document.querySelector('form')

const searchedEl = document.querySelector(".blog-container");
const showMoreBtn = document.getElementById("show-more-btn");

console.log(dasd)
searchedEl.innerHTML = ''
let inputData = "";

let page = 1;

async function searchImages() {

  inputData = inputEl.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceseKey}`;


  const response = await fetch(url)
  const data = await response.json()

  const results = data.results

  console.log(results)
  if (page === 1) {

    searchedEl.innerHTML = ''
  }

  results.map((result) => {
    const imageWrapper = document.createElement('div'); imageWrapper.classList.add('blog-card')
    const image = document.createElement('img')
    image.src = result.urls.small
    image.alt = result.alt_description
    const link = document.createElement('a')
    link.href = result.links.html
    link.target = "_blank"
    link.textContent = result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(link)
    searchedEl.appendChild(imageWrapper)

  })
  page++

  if (page > 1) {
    showMoreBtn.style.display = 'block'
  }

}


buttonEl.addEventListener('click', (event) => {

  event.preventDefault()
  page = 1;
  searchImages()
})
formEl.addEventListener('submit', (event) => {

  event.preventDefault()
  page = 1;
  searchImages()
})

showMoreBtn.addEventListener('click', () => {
  searchImages()
})
