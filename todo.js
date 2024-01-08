// let addbutton=document.getElementById('btn');
// let container=document.getElementById('todolist');
// let inputtext=document.getElementById('textc');
// addbutton.addEventListener('click', function(){
// var paragraph=document.createElement('p')
// paragraph.innerText=textc.value;
// container.appendChild(paragraph);
// textc.value="";
// )}
// paragraph.addEventListener('dblclick',function(){
// todolist.removechild(paragraph);

// )}
// let addButton = document.getElementById('btn');
// let container = document.getElementById('todolist');
// let inputText = document.getElementById('textc');


// addButton.addEventListener('click', function() {
//   var paragraph = document.createElement('p');
//   paragraph.classList.add("para-styling");
//   paragraph.innerText = inputText.value; // Use inputText.value to get the text
//   container.appendChild(paragraph);
//   inputText.value = "";
//   localStorage.setItem(JSON.stringify([paragraph.value]))
// });

// container.addEventListener('dblclick', function(event) {
// //   if (event.target.tagName === 'P') { // Check if the clicked element is a paragraph
//     container.removeChild(event.target); // Remove the paragraph that was double-clicked
//   }
// );
// enter your javascript code here
let addButton = document.getElementById('btn');
let container = document.getElementById('todolist');
let inputText = document.getElementById('textc');

// Load existing tasks from localStorage on page load
const todoItems = JSON.parse(localStorage.getItem("todo")) || [];

// Display saved items on page load
todoItems.forEach(task => {
  const paragraph = document.createElement('p');
  paragraph.classList.add("para-styling");
  paragraph.innerText = task;
  container.appendChild(paragraph);
});

// Add tasks to localStorage and display them
function addTask() {
  const task = inputText.value.trim(); // Get the task text, trimmed for whitespace
  if (task) { // Check if there's actual text to add
    todoItems.push(task); // Add the task to the array
    localStorage.setItem("todo", JSON.stringify(todoItems)); // Save the array to localStorage

    // Create and display the paragraph
    const paragraph = document.createElement('p');
    paragraph.classList.add("para-styling");
    paragraph.innerText = task;
    container.appendChild(paragraph);
    inputText.value = ""; // Clear the input field
  }
}

addButton.addEventListener('click', addTask);

inputText.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Delete tasks from localStorage and DOM
container.addEventListener('dblclick', function(event) {
  if (event.target.tagName === 'P') { // Check if a paragraph was clicked
    const clickedParagraph = event.target;
    const taskToRemove = clickedParagraph.innerText;

    const indexToRemove = todoItems.indexOf(taskToRemove);
    if (indexToRemove !== -1) {
      todoItems.splice(indexToRemove, 1); // Remove from the array
      localStorage.setItem("todo", JSON.stringify(todoItems)); // Update localStorage
      container.removeChild(clickedParagraph); // Remove from the DOM
    }
  }
});



