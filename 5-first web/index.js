"use strict";
const apikey = "7558c400234f4ae58f3837a568f35fd0";

const blogContEl = document.getElementById("blog-container");
const searchFilter = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
searchButton.addEventListener('click', async () => {
  console.log('ssssssssss')
  const query = searchFilter.value.trim()
  console.log(query)
  if (query !== "") {
    try {
      const articles = await fetchNewFun(query)

      displayFun(articles)
    } catch (error) {

      console.error('eror of new fetxh', error)
    }

  }
})
async function fetchNewFun(query){



  try {
    const urlApi = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`;
    const response = await fetch(urlApi);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("errorrrrr", error);
    return [];
  }
}

async function fetchFunc() {
  try {
    const urlApi = `https://newsapi.org/v2/top-headlines?pageSize=10&sources=techcrunch&apiKey=${apikey}`;
    const response = await fetch(urlApi);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("errorrrrr", error);
    return [];
  }
}

function displayFun(articles) {
  blogContEl.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");

    blogCard.classList.add("blog-card");

    const img = document.createElement("img");
    img.src = article.urlToImage;

    const title = document.createElement("h2");
    const orgnTitle = article.title.length >= 30 ? article.title.slice(0, 30) + "...." : article.title;

    title.textContent = orgnTitle;


    const description = document.createElement("p");
    const orgnDescirption = article.description.length >= 100 ? article.description.slice(0, 100) + '....' : article.description;


    description.textContent = orgnDescirption;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogCard.addEventListener('click', () => {
      window.open(article.url, '_blank')
    })
    blogContEl.appendChild(blogCard);
  });
}

(async () => {
  try {
    const articles = await fetchFunc();
    displayFun(articles);
    console.log('displaaays');
  } catch (error) {
    console.error("eeror2", error);
  }
})();

