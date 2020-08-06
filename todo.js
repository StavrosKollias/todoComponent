function handleClearForm() {
  clearAllInputsNewToDo();
}

function handleSaveNewItem() {
  const newTitleInput = document.getElementById("new-title");
  const newNameInput = document.getElementById("new-name");
  const newDateInput = document.getElementById("new-due-date");
  const newDescriptionInput = document.getElementById("new-description");
  const toDoList = document.querySelector(".to-do-list");
  const toDoItem = document.querySelector(".template");
  const newToDo = cloneElement(toDoItem);
  changeClassFromElement(newToDo, "to-do-item");
  const newToDoDetails = newToDo.children[0];
  changeTextToElement(newToDoDetails.children[0], newTitleInput.value);
  changeTextToElement(newToDoDetails.children[1], newDateInput.value);
  changeTextToElement(newToDoDetails.children[2], newNameInput.value);
  changeTextToElement(newToDoDetails.children[3], newDescriptionInput.value);

  addChildToELement(toDoList, newToDo);

  clearAllInputsNewToDo();
}

function validateInputsNotEmpty() {}

function deleteElementFromItsParent(element) {
  const parent = element.parentElement.parentElement.parentElement;
  const child = element.parentElement.parentElement;
  console.log(parent);
  removeChildFromElement(parent, child);
}

// ----functions-----------------

function changeClassFromElement(element, className) {
  element.className = className;
}

function cloneElement(element) {
  const newClone = element.cloneNode(true);
  return newClone;
}

function clearAllInputsNewToDo() {
  const newTitleInput = document.getElementById("new-title");
  const newNameInput = document.getElementById("new-name");
  const newDateInput = document.getElementById("new-due-date");
  const newDescriptionInput = document.getElementById("new-description");
  resetValueInput(newTitleInput);
  resetValueInput(newNameInput);
  resetValueInput(newDateInput);
  resetValueInput(newDescriptionInput);
}

function handleTextAreaHeight(element) {
  element.style.height = "";
  element.style.height = element.scrollHeight + "px";
}

function resetValueInput(inputElement) {
  inputElement.value = "";
}

function changeTextToElement(element, txt) {
  element.innerText = txt;
}

function addChildToELement(element, newChild) {
  element.appendChild(newChild);
}

function removeChildFromElement(element, child) {
  element.removeChild(child);
}

function isEmptyString(sting) {}
