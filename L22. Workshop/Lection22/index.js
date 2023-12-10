const users = [{ id: 0, name: "Unknown User" }];

const form = document.querySelector("form.add-task");
const tbody = document.querySelector("table.task-table tbody");
const modalContainer = document.querySelector("div.modal-container");
const editForm = modalContainer.querySelector("form.edit-task");
const btnCloseModal = modalContainer.querySelector("span.close-btn");

btnCloseModal.addEventListener("click", function (e) {
    modalContainer.classList.remove("open");
});

function loadApplication() {
    fetchUsers();
    loadInitialTasks();
}

function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((userData) => {
            userData.forEach((user) => {
                users.push({ id: user.id, name: user.name });
            });
        });
}

function fetchTasks() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((tasks) => {
            const tempTasks = tasks.map((task) => {
                return {
                    id: task.id,
                    userId: task.userId,
                    username: getUserName(task.userId),
                    taskDescription: task.title,
                    status: task.completed,
                };
            });
            localStorage.setItem("tasks", JSON.stringify(tempTasks));
            tempTasks.forEach(createTaskRow);
        });
}

function getTasksFromStorage() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        return JSON.parse(storedTasks);
    }

    return [];
}

function loadInitialTasks() {
    const storedTasks = getTasksFromStorage();

    if (storedTasks.length) {
        storedTasks.forEach(createTaskRow);
        return;
    }

    fetchTasks();
}

function addTaskToStorage(task) {
    const storedTasks = getTasksFromStorage();

    storedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

function getUserName(userId) {
    let userIndex = users.findIndex((user) => user.id === +userId);

    if (userIndex < 0) {
        userIndex = 0;
    }

    return users[userIndex].name;
}

function submitAddTaskForm(event) {
    event.preventDefault();
    const { target } = event;

    const userIdInput = target.querySelector("input[name='userId']");
    const taskInput = target.querySelector("input[name='task']");

    const userId = userIdInput.value.trim();
    const taskDescription = taskInput.value.trim();

    if (!userId || !taskDescription) {
        alert("Missing required fields in the application");
    }

    const task = {
        userId,
        username: getUserName(userId),
        taskDescription,
        status: false,
    };

    createTaskRow(task);
    addTaskToStorage(task);

    userIdInput.value = "";
    taskInput.value = "";
}

function createTaskRow(task) {
    const tr = document.createElement("tr");
    tr.setAttribute("data-task-id", task.id);
    tr.addEventListener("click", handleRowClick(task));

    Object.keys(task).forEach((field) => {
        if (field === "id") return;
        const td = document.createElement("td");
        td.textContent = task[field];

        tr.append(td);
    });

    tbody.prepend(tr);
}

function handleRowClick(task) {
    return function () {
        modalContainer.classList.add("open");
        const editUserIdInput = editForm.querySelector("input[name='userId']");
        const editTaskInput = editForm.querySelector("input[name='task']");
        const editStatusInput = editForm.querySelector("input[name='status']");

        editUserIdInput.value = task.userId;
        editTaskInput.value = task.taskDescription;
        editStatusInput.value = task.status;

        editForm.addEventListener("submit", handleEditTask(task.id));
    };
}

function handleEditTask(taskId) {
    return function (event) {
        event.preventDefault();

        const editUserIdInput = editForm.querySelector("input[name='userId']");
        const editTaskInput = editForm.querySelector("input[name='task']");
        const editStatusInput = editForm.querySelector("input[name='status']");

        const userId = editUserIdInput.value.trim();
        const taskDescription = editTaskInput.value.trim();
        const status = editStatusInput.value.trim();

        if (!userId || !taskDescription || !status) {
            alert("Missing required fields in the application");
        }

        const task = {
            id: taskId,
            userId,
            username: getUserName(userId),
            taskDescription,
            status,
        };

        // To be optimized
        const tr = document.createElement("tr");
        tr.setAttribute("data-task-id", task.id);
        tr.addEventListener("click", handleRowClick(task));

        Object.keys(task).forEach((field) => {
            if (field === "id") return;
            const td = document.createElement("td");
            td.textContent = task[field];

            tr.append(td);
        });

        tbody.querySelector(`tr[data-task-id="${task.id}"]`).replaceWith(tr);

        modalContainer.classList.remove("open");
    };
}

form.addEventListener("submit", submitAddTaskForm);

loadApplication();

// /**
//  * LocalStorage - localStorage
//  * SessionStorage - sessionStorage
//  */

// /**
//  * Add item
//  */
// localStorage.setItem(
//     "name",
//     JSON.stringify({ first: "Ivan", second: "Petkov" })
// );
// localStorage.setItem("age", 10);

// /**
//  * Get item
//  */
// console.log(localStorage.getItem("name"));
// console.log(localStorage.name);

// /**
//  * Remove item
//  */
// // localStorage.removeItem("name");
// // localStorage.clear();

// /**
//  * Length of items in storage
//  */
// console.log(localStorage.length);
