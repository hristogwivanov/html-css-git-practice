const form = document.querySelector("form.add-task");
const tbody = document.querySelector("tablestask-table .tbody")

function loadInitialTasks(){
    const storedTasks = localStorage.getItem("tasks");

    if(storedTasks) {
        JSON.parse(storedTasks).forEach(createTaskRow);
        return;
    }

    /*Fetch data from API */
}

function submitAddTaskForm(event){
    event.preventDefault();
    const { target } = event;
    
    const userIdInput = target.querySelector("input[name='userId']");
    const usernameInput = target.querySelector("input[name='username']");
    const taskInput = target.querySelector("input[name='task']");

    const userId = userIdInput.value.trim();
    const username = usernameInput.value.trim();
    const taskDescription = taskInput.value.trim();

    console.log(userIdInput.value, usernameInput.value, taskDescription.value);
    if(
        !userId || !username || !taskDescription) {
        alert("Missing required fields in the application");
    }

    const task = {
        userId,
        username,
        taskDescription,
        status: false,
    };

    createTaskRow(task);
    addTaskToStorage();
    userIdInput.value= '';
    usernameInput.value= '';
    taskInput.value= '';

}

fybctuib

form.addEventListener("submit", submitAddTaskForm);

function createTaskRow(task){
    const tr = document.createElement('tr');

    Object.keys(task).forEach((field) =>{
        const td = document.createElement("td");
        td.textContent = task[field];

        tr.append(td);
    })
};

loadInitialTasks();



// LocalStorage - localStorage
// sessionStorage - sessionStorage


// Add ClipboardItem
// localStorage.setItem("name", JSON.stringify({first: "ivan", second: "Petkov"}));
// localStorage.setItem("age", 10);


//Get item
// console.log(localStorage.getItem("name"));
// console.log(localStorage.name)

//Remove item
// localStorage.removeItem("name");
