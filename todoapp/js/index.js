"use strict";
let addTask = document.querySelector('.add_task button');
let title = document.querySelector('#title');
let details = document.querySelector('#details');
let title_detail = document.querySelector('.title_details');
let title_para;
// addtask function
const addtask = () => {
    let tasks = [];
    const taskTitle = title.value;
    const taskDetail = details.value;
    if (taskTitle === "" || taskDetail === "") {
        alert("Please enter the details");
    }
    else {
        tasks.push(taskTitle);
        tasks.push(taskDetail);
        title_para = document.createElement("p");
        title_detail.appendChild(title_para);
        let task_join = tasks.join(" ");
        title_detail.innerText = task_join;
        localStorage.setItem("do_to_app", JSON.stringify(tasks));
    }
};
addTask.addEventListener('click', function add_task() {
    addtask();
});
