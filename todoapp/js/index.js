"use strict";
let addTask = document.querySelector('.add_task button');
let title = document.querySelector('#title');
let details = document.querySelector('#details');
let title_detail = document.querySelector('.title_details');
let title_para;
let todo;
let task = [];
let removeTask;
// addtask function
const addtask = () => {
    const taskTitle = title.value;
    const taskDetail = details.value;
    if (taskTitle === "" || taskDetail === "") {
        alert("Please enter the details");
    }
    else {
        task.push(taskTitle);
        task.push(taskDetail);
        localStorage.setItem("to_do_app", JSON.stringify(task));
    }
};
function displayTask() {
    title_detail.innerText = "";
    for (let taskItem of task) {
        title_para = document.createElement("p");
        title_detail.appendChild(title_para);
        title_para.innerText = taskItem;
        removeTask = document.createElement("button");
        removeTask.classList.add("remove_task");
        title_detail.appendChild(removeTask).after(title_para);
        removeTask.innerText = "Remove Task";
        title_para.insertAdjacentElement("afterend", removeTask);
        removeTask.addEventListener("click", () => {
            localStorage.removeItem("to_do_app");
            task.splice(0);
            displayTask();
        });
    }
}
addTask.addEventListener('click', function add_task() {
    addtask();
    displayTask();
});
window.addEventListener('load', () => {
    let local_items = localStorage.getItem("to_do_app");
    if (local_items) {
        task = JSON.parse(local_items);
        displayTask();
    }
});
