let storageData = [];
let addButton = document.getElementById("add")
let todoList = document.getElementById("todoList")
let inputField = document.getElementById("inputFeild")
let clearButton = document.getElementById("clear")



addButton.addEventListener('click',function showCase (){
    if(inputField.value ){

        // get data from input box
        
        let dataStorage = JSON.parse(localStorage.getItem('data'))
        console.log(dataStorage)
        if ( dataStorage != null) {
            dataStorage.push(inputField.value)
            localStorage.setItem('data', JSON.stringify(dataStorage))
             
        }else {
    
    
        storageData.push(inputField.value)
        localStorage.setItem('data', JSON.stringify(storageData))
        }
        
        
    
            let taskContainer= document.createElement('li')
        
            taskContainer.classList.add('todoList')
            taskContainer.textContent = inputField.value;
            todoList.appendChild(taskContainer)
            inputField.value = '';
            
            
       

        
        
    // } )
}
})
// slapping olddata when relode
window.onload = function (){
    let oldData = JSON.parse(localStorage.getItem('data'))
    if (oldData != null){
    oldData.map(function(ele){
        
        let taskContainer= document.createElement('li')
        
            taskContainer.classList.add('todoList')
            taskContainer.textContent = ele;
            todoList.appendChild(taskContainer)

    })}
}

// addButton.addEventListener('click', showCase())
  