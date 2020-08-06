function handleClearForm() {
  clearAllInputsNewToDo();
}

function handleSaveNewItem() {
  const newTitleInput = document.getElementById("new-title");
  const newNameInput = document.getElementById("new-name");
  const newDateInput = document.getElementById("new-due-date");

  const newDescriptionInput = document.getElementById("new-description");
  const newDate = formatDate(newDateInput.value);
  const inputs = document.querySelectorAll(".new-input-to-do");
  const result = forEachThroughEelements(inputs, validateInputsNotEmpty);

  if (!result) {
    const toDoList = document.querySelector(".to-do-list");
    const toDoItem = document.querySelector(".template");
    const newToDo = cloneElement(toDoItem);
    changeClassFromElement(newToDo, "to-do-item");
    const newToDoDetails = newToDo.children[0];
    changeTextToElement(newToDoDetails.children[0], newTitleInput.value);
    changeTextToElement(newToDoDetails.children[1], newDate);
    changeTextToElement(newToDoDetails.children[2], newNameInput.value);
    changeTextToElement(newToDoDetails.children[3], newDescriptionInput.value);
    addChildToELement(toDoList, newToDo);
    clearAllInputsNewToDo();
    generateStats();
  }
}

function deleteElementFromItsParent(element) {
  const parent = element.parentElement.parentElement.parentElement;
  const child = element.parentElement.parentElement;
  console.log(parent);
  removeChildFromElement(parent, child);
  generateStats();
}

function handleCompleteToDo(element) {
  const todoItem = element.parentElement.parentElement;
  addClassToElement(todoItem, "completed");
  addClassToElement(element, "unmark");
  changeTextToElement(element, "Unmark");
  addOnclickToElement(element, hadleResurrectTodo);
  generateStats();
}

function hadleResurrectTodo(element) {
  const todoItem = element.parentElement.parentElement;
  removeClassFromElement(todoItem, "completed");
  removeClassFromElement(element, "unmark");
  changeTextToElement(element, "Complete");
  addOnclickToElement(element, handleCompleteToDo);
  generateStats();
}

function onChaneDate(element) {
  const dateFormatMin = getTodaysDateFormat();
  element.min = dateFormatMin.inputFormat;
}

// --------functions------------functions------functions-------------------

function compareDate() {
  const dateFormatMin = getTodaysDateFormat();
}

// compareDate();

function getTodaysDateFormat() {
  const todaysDate = new Date();
  var month = todaysDate.getMonth() + 1;
  month >= 10 ? month : (month = "0" + month);
  console.log(month);
  var dayOfMonth = todaysDate.getDate() + 10;
  dayOfMonth >= 10 ? dayOfMonth : (dayOfMonth = "0" + dayOfMonth);
  const year = todaysDate.getFullYear();
  const dateFormatInput = year + "-" + month + "-" + dayOfMonth;
  const spanDateFormat = dayOfMonth + "-" + month + "-" + year;
  console.log(dateFormatInput);
  return { inputFormat: dateFormatInput, spanFormat: spanDateFormat };
}

function forEachThroughEelements(list, operationFunction) {
  var result = "";
  list.forEach((e, i) => {
    const operationResult = operationFunction(e);
    operationResult ? (result += 1) : result;
  });
  return result;
}

function generateStats() {
  const completedStats = document.getElementById("completed-stats");
  const activeStats = document.getElementById("active-stats");

  const todoItems = document.querySelectorAll(".to-do-item");
  const toDoItemsLength = todoItems.length;

  const completeTasks = document.querySelectorAll(".completed");
  const completedTaskLength = completeTasks.length;

  changeTextToElement(
    completedStats,
    `${completedTaskLength}/${toDoItemsLength}`
  );

  changeTextToElement(
    activeStats,
    `${toDoItemsLength - completedTaskLength}/${toDoItemsLength}`
  );
}

function formatDate(dateStr) {
  const splitDate = dateStr.split("-");
  const newDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];
  return newDate;
}

function addOnclickToElement(element, functionTrigered) {
  element.onclick = () => {
    functionTrigered(element);
  };
}

function isEmptyString(str) {
  return str == "";
}

function validateInputsNotEmpty(element) {
  const isEmpty = isEmptyString(element.value);
  isEmpty
    ? addClassToElement(element, "error-input")
    : removeClassFromElement(element, "error-input");
  return isEmpty;
}

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

function addClassToElement(element, className) {
  element.classList.add(className);
}

function removeClassFromElement(element, className) {
  element.classList.remove(className);
}
