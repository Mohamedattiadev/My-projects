'use strict'

const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.bars-tree');
const navlinksEl = document.querySelector('.nav-link');
const barsEl=document.querySelector('.bars-tree')
const exitEl=document.querySelector('.exit')


exitEl.addEventListener('click',exitSideBar)

function exitSideBar() {
sidebar.classList.remove('sidebar-open');

}

toggleButton.addEventListener('click', () => {
  if (sidebar.classList.contains('sidebar-open')) {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('hidden');
  } else {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('sidebar-open');
  }
});

//--------------------------------
let paragraphsArr = []
const paragraphEl = document.querySelector(".aboutUs-paragraph")
const textareaEl = document.querySelector(".about-us")
const submitBtnEl = document.querySelector(".submit-btn")

const editEl = document.querySelector(".edit-text")
const addEl = document.querySelector(".add-text")
const deleteEl = document.querySelector(".delete-text")
//jsons--------------------localstorage---------------------
function saveToLocalStorage() {
  let paragraphsString = JSON.stringify(paragraphsArr);
  localStorage.setItem("paragraphsArr", paragraphsString);
}

function getFromLocalStorage() {
  const storedParagraphs = localStorage.getItem("paragraphs");
  if (storedParagraphs) {
    paragraphsArr = JSON.parse(storedParagraphs);
  } else {
    paragraphsArr = [];
  }
}

//--------------------

// submitBtnEl.addEventListener("click", submitAboutUs);


submitBtnEl.addEventListener("click", submitAboutUs)
editEl.addEventListener("click", editText)
// paragraphEl.querySelector(".add-text").addEventListener("click",addText)
addEl.addEventListener("click",addText)
// about us ---------functions-----------
function submitAboutUs() {
  let textValue = textareaEl.value;
  if (textValue.length > 0) {
    paragraphsArr.push(textValue);
    saveToLocalStorage();
    renderText();
  }
}

function renderText() {
  paragraphEl.innerHTML = "";
  paragraphsArr.forEach((text, i) => {
    paragraphEl.innerHTML += `<p>${text}</p>
      <div>
        <i class="fa-solid fa-pen-to-square icons hover edit-text" onclick="editText(${text}, ${i})"></i>
        <i class="fa-solid fa-trash icons hover delete-text" onclick="deleteText(${i})"></i>

       <i class="fa-solid fa-square-plus icons hover add-text" onclick="addText()"></i>
      </div>`;
  });
  textareaEl.value = "";
}

function editText(text, i) {
  submitBtnEl.classList.remove("hidden");
  textareaEl.classList.remove("hidden");

  textareaEl.value = text;
  paragraphsArr.splice(i, 1);
}

function addText(){
    submitBtnEl.classList.toggle("hidden");
    textareaEl.classList.toggle("hidden")

    saveToLocalStorage()
  renderText()
}

function deleteText(i) {
  console.log("delete")
  paragraphsArr.splice(i, 1);
  saveToLocalStorage();
  renderText();

  if (paragraphsArr.length === 0) {
    submitBtnEl.classList.remove("hidden");
    textareaEl.classList.remove("hidden");
  }
}

// Load paragraphs and render on page load
getFromLocalStorage();
renderText();

//-----------------------------------------

