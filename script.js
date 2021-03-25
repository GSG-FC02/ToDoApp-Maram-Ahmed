//Gitting elements from HTML code
let storageData = [];
let addButton = document.getElementById("add");
let todoList = document.getElementById("todoList");
let inputField = document.getElementById("inputFeild");
let clearButton = document.getElementById("clear");

addButton.addEventListener("click", function showCase() {
  if (inputField.value) {
    // get data from input box

    let dataStorage = JSON.parse(localStorage.getItem("data"));
    console.log(dataStorage);
    //If there is previous data add it to the local storage
    if (dataStorage != null) {
      dataStorage.push(inputField.value);
      localStorage.setItem("data", JSON.stringify(dataStorage));
    } else {
      // if there's no previous data push the new ones

      storageData.push(inputField.value);
      localStorage.setItem("data", JSON.stringify(storageData));
    }

    //Creating the Li element after the user add his tasks
    let taskContainer = document.createElement("li");

    taskContainer.classList.add("todoList");
    taskContainer.textContent = inputField.value;
    todoList.appendChild(taskContainer);
    inputField.value = "";
  }
});
// slapping olddata when relode
window.onload = function () {
  let oldData = JSON.parse(localStorage.getItem("data"));
  if (oldData != null) {
    oldData.map(function (ele) {
      let taskContainer = document.createElement("li");

      taskContainer.classList.add("todoList");
      taskContainer.textContent = ele;
      todoList.appendChild(taskContainer);
    });
  }
};

//Removing part
todoList.addEventListener("click", function () {
  let removeIcone = localStorage.getItem("data");
  if (removeIcone == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(removeIcone);
  }
  if (listArray.length > 0) {
    //if array length is greater than 0
    clearButton.classList.add("active"); 
  } else {
    clearButton.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
});



function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("data");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("data", JSON.stringify(listArray));
    showCase(); 
  }
  
  clearButton.addEventListener("click", function () {
    document.getElementById("todoList").innerHTML = '';
     listArray = []; //empty the array
     localStorage.setItem("data", JSON.stringify(listArray)); 
    
 
  });