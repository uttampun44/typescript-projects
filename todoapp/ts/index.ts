let addTask = document.querySelector('.add_task button') as HTMLButtonElement;
let title = document.querySelector('#title') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;

// addtask function

const addtask = ():void =>{

    let tasks:string[] = [];

    const taskTitle: string = title.value;
    const taskDetail:string = details.value
    tasks.push(taskTitle);
    tasks.push(taskDetail)
    console.log(tasks)
    localStorage.setItem("do_to_app", JSON.stringify(tasks))
}

addTask.addEventListener('click', function add_task () {
addtask()
})