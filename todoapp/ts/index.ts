let addTask = document.querySelector('.add_task button') as HTMLButtonElement;
let title = document.querySelector('#title') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let title_detail = document.querySelector('.title_details') as HTMLDivElement
let title_para;
// addtask function

const addtask = ():void =>{

    let tasks:string[] = [];

    const taskTitle: string = title.value;
    const taskDetail:string = details.value

    if(taskTitle === "" || taskDetail === ""){
        alert("Please enter the details")
    }else{
        tasks.push(taskTitle);
        tasks.push(taskDetail);

        title_para = document.createElement("p") as HTMLDivElement;
        title_detail.appendChild(title_para)

           let task_join = tasks.join(" ");

           title_detail.innerText = task_join

            localStorage.setItem("do_to_app", JSON.stringify(tasks))
     }
}


addTask.addEventListener('click', function add_task () {
addtask()
})