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
// display task
function displayTask() {
    title_detail.innerText = "";
    for (let i = 0; i < task.length; i += 2) {
        const taskTitle = task[i];
        const taskDetail = task[i + 1];
        title_para = document.createElement("p");
        title_detail.appendChild(title_para);
        title_para.innerText = `Title: ${taskTitle}, Details: ${taskDetail}`;
        removeTask = document.createElement("button");
        removeTask.classList.add("remove_task");
        removeTask.innerText = "Remove Task";
        // Append the button after the details <p> tag
        title_para.insertAdjacentElement("afterend", removeTask);
        removeTask.addEventListener("click", () => {
            task.splice(i, 2);
            localStorage.setItem("to_do_app", JSON.stringify(task));
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
