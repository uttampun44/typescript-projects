"use strict";
let addTask = document.querySelector('.add_task button');
let title = document.querySelector('#title');
let details = document.querySelector('#details');
// addtask function
const addtask = () => {
    let tasks = [];
    const taskTitle = title.value;
    const taskDetail = details.value;
    tasks.push(taskTitle);
    tasks.push(taskDetail);
    console.log(tasks);
    localStorage.setItem("do_to_app", JSON.stringify(tasks));
};
addTask.addEventListener('click', function add_task() {
    addtask();
});
