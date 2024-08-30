
'use strict'
// const btnsContainerEl=document.querySelector('.btns-Container');
//
// const btnsContainerEl=document.querySelector('.btns-Container');
// function toggleClassBasedOnScreenSize() {
//     const screenWidth = window.innerWidth;
//
// const screenFiv=screenWidth<500
//      btnsContainerEl.innerHTML=`<div class="button-container btn-icons pa">
//             <button class="btn toDo" type="button">
//                 ${screenFiv ? '' : 'ToDo'}
//             </button>
//             <button class="btn notes" type="button">
//                 ${screenFiv ? '<i class="fa-sharp fa-solid fa-note-sticky btn-icon"></i>' : 'Notes'}
//             </button>
//             <button class="btn workspace" type="button">
//                 ${screenFiv ? '<i class="fa-sharp fa-solid fa-list-check btn-icon"></i>' : 'Kanban'}
//             </button>
//         </div>
//     ` 
//
// const todoBtnEl = document.querySelector(".toDo");
// const notesBtnEl = document.querySelector(".notes");
// const spaceBtnEl = document.querySelector(".workspace");
// todoBtnEl.addEventListener("click", toggleTodo)
// notesBtnEl.addEventListener("click", toggleNote);
// spaceBtnEl.addEventListener("click", toggleWorkspace);
// }
//
//
// // Call the function on page load
// toggleClassBasedOnScreenSize();
// window.addEventListener('resize', toggleClassBasedOnScreenSize);
//
//

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

//paragraphs-----------------
const paragraphs = [
  "<p>Welcome to my website! Here, you'll find a range of tools designed to keep you on track and productive. Whether you're managing daily tasks with the todo list, organizing projects with the Kanban list, or jotting down ideas in the notes list, this site has everything you need to stay focused and efficient. Take your time to explore, and let these tools help you achieve your goals.</p>",

  "<p>Discover the ultimate productivity toolkit right here on my website. From a comprehensive todo list to a visual Kanban board, and an intuitive notes list, this site is packed with features that will streamline your workflow. Whether you're planning your day or managing a project, these tools are here to make your life easier. Dive in and see how they can work for you!</p>",

  "<p>I'm excited to have you here on my website! This platform is your one-stop shop for staying organized and on top of your tasks. With a user-friendly todo list, an interactive Kanban board, and a handy notes list, you'll find everything you need to boost your productivity. Explore each tool and start making the most of your time today.</p>",

  "<p>Welcome! This website is designed with your productivity in mind. Whether you're using the todo list to manage your daily tasks, the Kanban list to track your projects, or the notes list to keep important information at your fingertips, you'll find it all here. Take a tour of the features and discover how they can help you stay organized and focused.</p>",

  "<p>Thanks for visiting my site! If you're looking to improve your organization and productivity, you've come to the right place. With a powerful todo list, a visual Kanban board, and a practical notes list, this site offers all the tools you need to manage your tasks effectively. Get started and see how these features can support your goals.</p>"
];

let randomNumber = Math.trunc(Math.random() * 5) ;

const paragraphEl = document.querySelector(".explaintion-text")
//isclicked-------------------
let isTodoClicked = false;
let isNotesClicked = false;
let isKanbanClicked = false;

//date------------------------
const dateEl = document.querySelector(".main-text")
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth()

//todos----------------------------
let todos = []
const todoBtnEl = document.querySelector(".toDo");
const todoAddEl = document.querySelector(".todos-add");
const inputEl = document.querySelector(".add-todo");
const formEl = document.querySelector(".click-todo")
const addClickEl = document.querySelector(".add-click");
let currHtml = todoAddEl.innerHTML
let notes = []
//notes---------------------
const notesBtnEl = document.querySelector(".notes");
const notesContainerEl = document.querySelector(".notes-add");

const addNoteBtnEl = document.querySelector(".add-note-btn");
const textAreaEl = document.querySelector(".note-aree");

//timer---------------------
const timerToggleEl = document.querySelector(".toggle-timer-section")
const timerContainer = document.querySelector(".after-toggle")
const minuteEl = document.querySelector(".minute-input")

const secondEl = document.querySelector(".second-input")

const startEl = document.querySelector(".start-element")
const restartEl = document.querySelector(".restart-element")
const stopEl = document.querySelector(".stop-element")

const realtimerEl = document.querySelector(".time-element")
const inputsEl = document.querySelector(".time-element-input")
let seconds = 0// parseInt(secondEl.value, 10)||0;
let minutes = 0// parseInt(minuteEl.value, 10)||0;
let timerInterval = null;
//alert ---------------------------
const alertElement = document.querySelector(".alert")
//workspace ---------------------------
const spaceBtnEl = document.querySelector(".workspace");
const workspaceContainer = document.querySelector(".workspace-section");
// const spaceTodoEl = document.querySelector(".todo-part");
const spaceContinueEl = document.querySelector(".continue-part");
const spaceDoneEl = document.querySelector(".done-part");

const workspaceInputContEL = document.querySelector(".workspace-todo");
const workspaceTodoInput = document.querySelector(".workspace-input");
const workspaceTodoBtn = document.querySelector(".workspace-btn"); // Fixed typo
let workspaces = [];
let dragged = []

const workNotesEl = document.querySelector(".workspace-notes");
const noteEl = document.querySelector(".space-note");
const allBox = document.querySelectorAll(".box")
//--------------------------------------------



//jsons--------------------localstorage---------------------
function saveToLocalStorage() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("workspaces", JSON.stringify(workspaces));
    localStorage.setItem("dragged", JSON.stringify(dragged));
  } catch (error) {
    console.error("Failed to save data to localStorage:", error);
  }
}



function getFromLocalStorage() {
  try {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    workspaces = JSON.parse(localStorage.getItem("workspaces")) || [];
    dragged = JSON.parse(localStorage.getItem("dragged")) || [];
  } catch (error) {
    console.error("Failed to retrieve data from localStorage:", error);
    // Set default values if there was an error
    todos = [];
    notes = [];
    workspaces = [];
    dragged = [];
  }
}

//-------------------------------
dateEl.innerHTML = `<h1>This is my first project</h1> <h2>today's date <span class="date-span">${day}-${month}-${year}</span></h2>`
//--------------------------------
addClickEl.addEventListener("click", handleAddTodo);
todoBtnEl.addEventListener("click", toggleTodo)
//--------------------------------
notesBtnEl.addEventListener("click", toggleNote);
addNoteBtnEl.addEventListener("click", addNote)
//--------------------------------
timerToggleEl.addEventListener("click", toggleTimer)//done
startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
restartEl.addEventListener("click", restartTimer)
minuteEl.addEventListener("input", setMinute);//done
secondEl.addEventListener("input", setSecond); //done
//------------------------------
spaceBtnEl.addEventListener("click", toggleWorkspace);
workspaceTodoBtn.addEventListener("click", addToWorkspace);

//--------------------------------


//btns-display ---------------functions-------------------------

// Disable buttons except for the active one
function disableOtherButtons(activeButton) {
  if (activeButton !== 'todo') todoBtnEl.disabled = true;
  if (activeButton !== 'notes') notesBtnEl.disabled = true;
  if (activeButton !== 'kanban') spaceBtnEl.disabled = true;
}

// Re-enable all buttons
function enableAllButtons() {
  todoBtnEl.disabled = false;
  notesBtnEl.disabled = false;
  spaceBtnEl.disabled = false;
}

//timer---------------functions-------------------------
function setMinute(e) {


  e.preventDefault();
  minutes = parseInt(minuteEl.value, 10);
  // Ensure minutes are between 0 and 59
  if (isNaN(minutes)) minutes = 0;
  if (minutes >= 60) minutes = 60;
  if (minutes < 0) minutes = 0;
  minuteEl.value = minutes;
}

function setSecond(e) {
  e.preventDefault();
  seconds = parseInt(secondEl.value, 10);
  // Ensure seconds are between 0 and 59
  if (isNaN(seconds)) seconds = 0;
  if (seconds >= 60) seconds = 60;
  if (seconds < 0) seconds = 0;
  secondEl.value = seconds;
}

function toggleTimer(e) {
  e.preventDefault();
  timerContainer.classList.toggle("hidden");
}

function startTimer(e) {
  e.preventDefault();
  // Show the restart button and hide the start button
  if (minuteEl.value == 0 && secondEl.value == 0) {
    alertMessage("write a number")
  } else {

    restartEl.classList.remove("hidden");
    startEl.classList.add("hidden");
    inputsEl.classList.add("hidden");
    realtimerEl.classList.remove("hidden");
    stopEl.classList.remove("hidden");
    timerInterval = setInterval(updateTimer, 1000);
    updateTimerDisplay(); // Update display immediately

  }
  // Initialize timer interval
}

function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      // Stop timer if both minutes and seconds are zero
      stopTimer();
      inputsEl.classList.remove("hidden")

      realtimerEl.classList.add("hidden")
      restartEl.classList.add("hidden")
      alertMessage("Timer Complete"); minutes = 0;
      seconds = 0;
      minuteEl.value = minutes;
      secondEl.value = seconds;
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateTimerDisplay();
}

//alert---------------function-----------------------
function alertMessage(message) {
  alertElement.classList.remove("hidden");
  alertElement.innerHTML = `<h4 class="alert-title">${message}</h4>
  <p class="alert-content">this message will disappear after 5</p>             <div class="progress"></div>`;

  setTimeout(() => {
    alertElement.classList.add("hidden");
  }, 5000);
}




function updateTimerDisplay() {
  realtimerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function restartTimer(e) {
  e.preventDefault();
  // Reset to initial state
  startEl.classList.remove("hidden");
  restartEl.classList.add("hidden");
  inputsEl.classList.remove("hidden");
  realtimerEl.classList.add("hidden");
  stopEl.classList.add("hidden");
  minutes = 0;
  seconds = 0;
  minuteEl.value = minutes;
  secondEl.value = seconds;
}

function stopTimer(e) {
  if (e) e.preventDefault();
  clearInterval(timerInterval);
  // Show start button and hide stop button
  startEl.classList.remove("hidden");
  stopEl.classList.add("hidden");
}



//todo---------------functions-------------------------
function handleAddTodo(e) {
  e.preventDefault();
  if (inputEl.value) {
    todos.push(inputEl.value);
    saveToLocalStorage()
    renderTodos()
  } else {
    alertMessage("write To do ")
  }
  inputEl.value = '';
}

function toggleTodo(e) {
  e.preventDefault();
  if (!isTodoClicked) {
    formEl.classList.remove("hidden")
    todoAddEl.classList.remove("hidden")
    // notesContainerEl.style.display = "none"
    // textAreaEl.
   // todoAddEl.style.display = "flex"

    paragraphEl.innerHTML = `
    <p >
      A todo list is a powerful tool for managing tasks and boosting productivity. It allows users to organize their daily responsibilities, ensuring nothing important is overlooked. By breaking down complex projects into manageable steps, a todo list provides clarity and focus. Whether you’re juggling work tasks, personal goals, or both, a well-structured todo list can help you stay on track and accomplish more with ease.</p>
`

    isTodoClicked = true;
    disableOtherButtons("todo")
  }
  else if (isTodoClicked) {
    formEl.classList.add("hidden")
    todoAddEl.classList.add("hidden")
    isTodoClicked = false;
    paragraphEl.innerHTML = `${paragraphs[randomNumber]}`
    enableAllButtons()

  }

}


function deleteTodo(index) {
  todos.splice(index, 1);
  saveToLocalStorage()
  renderTodos()
}

function renderTodos() {
  todoAddEl.innerHTML = "";
  todos.forEach((todo, i) => {
     let newToDOHtml = `<div class="one-todo">
      <div class="todo-item"><p>${i + 1}- ${todo}</p><div class="todo-icon"><i class="fa-solid fa-trash icons hover" id="delete-icon" onclick="deleteTodo(${i})" ></i></div></div> </div>
      `
    todoAddEl.innerHTML += newToDOHtml;


  })

}

//notes---------------functions-------------------------
function toggleNote() {
  // Toggle visibility and update paragraph based on the state
  if (!isNotesClicked) {
        notesContainerEl.style.display = "grid"
    notesContainerEl.classList.remove("hidden");
    paragraphEl.innerHTML = `<p>Notes are essential for capturing thoughts, ideas, and important information on the fly. Whether it’s a sudden inspiration or a crucial reminder, notes help you keep track of everything in an organized manner. Sticky notes, with their colorful and easily movable nature, add an extra layer of convenience. They serve as quick reminders that can be placed anywhere, ensuring that important details are always within sight and mind.</p>`;
    isNotesClicked = true;
    disableOtherButtons('notes');
  } else {
    notesContainerEl.classList.add("hidden");
    isNotesClicked = false;
    paragraphEl.innerHTML = `${paragraphs[randomNumber]}`;
    enableAllButtons();
  }
}

function createNoteElement(id, value = "") {

  const newNote = document.createElement('textarea');
  newNote.classList.add("note-area");
  newNote.setAttribute("id", `note-${id}`);
  newNote.value = value;
  newNote.addEventListener("input", (e) => updateNote(e, id));
  newNote.addEventListener("dblclick", (e) => deleteNote(e, id));
  return newNote;
}

function addNote() {
  const id = notes.length + 1;
  const newNote = { id, value: "" };
  notes.push(newNote);
  const noteElement = createNoteElement(id);
  notesContainerEl.appendChild(noteElement);
  saveToLocalStorage();
}

function deleteNote(e, id) {
  e.preventDefault();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    const deletedElement = document.getElementById(`note-${id}`);
    if (deletedElement) {
      notesContainerEl.removeChild(deletedElement);
    }
  }
    saveToLocalStorage();
}

function updateNote(e, id) {
  e.preventDefault();
  const noteValue = e.target.value;
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex !== -1) {
    notes[noteIndex].value = noteValue;
  }
    saveToLocalStorage();
}

function renderNotes() {
  // notesContainerEl.innerHTML = ""; // Clear existing notes in the container
  notes.forEach(note => {
    const noteElement = createNoteElement(note.id, note.value);
    notesContainerEl.appendChild(noteElement);
  });
}
//workspace------------------function--------------



function toggleWorkspace() {
  if (!isKanbanClicked) {
    workspaceContainer.classList.remove("hidden");
    workspaceInputContEL.classList.remove("hidden");
   todoAddEl.style.display = "none"
    paragraphEl.innerHTML = `<p>A Kanban list is a visual method for managing tasks and workflows, making it easier to track progress and stay organized. By categorizing tasks into different stages, such as "To Do," "In Progress," and "Done," the Kanban list provides a clear overview of your workflow. This method enhances productivity by allowing you to focus on what’s important, identify bottlenecks, and efficiently manage your time.</p>`

    disableOtherButtons('kanban');
    isKanbanClicked = true;
  }
  else if (isKanbanClicked) {
    workspaceContainer.classList.add("hidden");
    workspaceInputContEL.classList.add("hidden");
// todoAddEl.classList.remove("hidden")

   todoAddEl.style.display = "inline-block"
   // todoAddEl.classList.remove("hidden")
    isKanbanClicked = false;
    paragraphEl.innerHTML = `${paragraphs[randomNumber]}`
    enableAllButtons()
  }
}

function createKanbanElement(value) {


    const spaceNoteEl = document.createElement("div");
    spaceNoteEl.classList.add("space-note")
    spaceNoteEl.setAttribute("draggable", "true")
    // spaceNoteEl.setAttribute("data-index", `${i}`)
    // spaceNoteEl.setAttribute("id",`${i}`)
    spaceNoteEl.innerHTML = `${value}`
return spaceNoteEl


}
function renderWorkspace() {
  // Clear existing workspace notes
  workNotesEl.innerHTML = "";

  // // Clear the progress notes section
  // FIX: need to fix
// ---------------------------------------------------------------
  // const progressWorkspaceNoteEl = document.querySelector(".progress-notes");
  // progressWorkspaceNoteEl.innerHTML = "";
  //
  // // Render dragged items in the progress section
  // if (dragged.length > 0) {
  //   dragged.forEach((work) => {
  //     let spaceNoteEl = createKanbanElement(work);
  //     progressWorkspaceNoteEl.appendChild(spaceNoteEl);
  //
  //     // Add event listeners for the dragged items
  //     spaceNoteEl.addEventListener("dblclick", (e) => removeSpaceNote(e, work, progressWorkspaceNoteEl));
  //
  //     spaceNoteEl.addEventListener("dragstart", () => {
  //       spaceNoteEl.classList.add("is-dragged");
  //       spaceNoteEl.classList.add("movedbefore");
  //     });
  //
  //     spaceNoteEl.addEventListener("dragend", () => {
  //       spaceNoteEl.classList.remove("is-dragged");
  //     });
  //   });
  //   saveToLocalStorage();
  // }

  // FIX: need to fix
// ------------------------------------------------------------------


  // Render workspace items
  workspaces.forEach((work, i) => {
    let spaceNoteEl = createKanbanElement(work);
    workNotesEl.appendChild(spaceNoteEl);

    // Add drag event listeners for workspace items
    spaceNoteEl.addEventListener("dragstart", () => {
      spaceNoteEl.classList.add("is-dragged");
      spaceNoteEl.classList.add("movedbefore");
      saveToLocalStorage();
    });

    spaceNoteEl.addEventListener("dragend", () => {
      spaceNoteEl.classList.remove("is-dragged");
    });

    // Handle dragover and dblclick events
    allBox.forEach((box) => {
      spaceNoteEl.addEventListener("dblclick", (e) => removeSpaceNote(e, work, box));

      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        const currentDragged = document.querySelector(".is-dragged");
        const todoBox = document.querySelector(".todo-part");

        if (currentDragged) {
          box.appendChild(currentDragged);

          const index = workspaces.findIndex((el) => el === currentDragged.innerText);
          if (index !== -1) {
            dragged.push(workspaces[index]);
            workspaces.splice(index, 1);
          }

          const draggedEl = todoBox.querySelector(".is-dragged");
          if (draggedEl) {
            const draggedIndex = dragged.findIndex((el) => el === draggedEl.innerText);
            if (draggedIndex !== -1) {
              workspaces.push(dragged[draggedIndex]);
              dragged.splice(draggedIndex, 1);
            }
          }
        }
      });
    });
  });

  // Save to local storage after rendering everything
  saveToLocalStorage();
}


function addToWorkspace(e) {
  e.preventDefault();
  const inputValue = workspaceTodoInput.value;
  if (inputValue) {
    workspaces.push(inputValue);
    workspaceTodoInput.value = ""; // Clear the input after adding

  }
  saveToLocalStorage()
    renderWorkspace();
}



function removeSpaceNote(e, work, box) {
  e.preventDefault(); // Correct method name

  const itemToRemove = work;
  const workIndex = workspaces.indexOf(itemToRemove);
  const dragIndex = dragged.indexOf(itemToRemove);

  // Check if the box is a target area
  if (box.classList.contains("todo-part")) {

    // Remove from workspaces
    if (workIndex !== -1) {
      workspaces.splice(workIndex, 1);
    }

    // Remove the previously moved element if it exists
    const movedBefore = box.querySelector(".movedbefore");
    if (movedBefore && movedBefore.innerText === itemToRemove) {
      box.removeChild(movedBefore);
    }

  } else if (box.classList.contains("done-part") || box.classList.contains("continue-part")||box.classList.contains("progress-part")) {
    // Remove from dragged array and DOM
    const spaceNote = box.querySelector(".space-note");
    if (spaceNote && spaceNote.innerText === itemToRemove) {
      box.removeChild(spaceNote);
    }

    if (dragIndex !== -1) {
      dragged.splice(dragIndex, 1);
    }
  }

  // Render workspace to update UI
  saveToLocalStorage()
  renderWorkspace();
}

// --------------------------------

// Initial render
document.addEventListener("DOMContentLoaded", () => {

getFromLocalStorage()
renderWorkspace();
renderTodos()
renderNotes()

});
