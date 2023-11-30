let addTask = document.querySelector('.add_task button') as HTMLButtonElement;
let title = document.querySelector('#title') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let title_detail = document.querySelector('.title_details') as HTMLDivElement

let title_para
let todo;
let task:string [] = [];
// addtask function

const addtask = ():void =>{

    const taskTitle: string = title.value;
    const taskDetail:string = details.value

    if(taskTitle === "" || taskDetail === ""){
        alert("Please enter the details")
    }else{
        task.push(taskTitle);
        task.push(taskDetail);


        localStorage.setItem("to_do_app", JSON.stringify(task))
     }
}


function displayTask(){
     title_detail.innerText = ""

     for(let taskItem of task){
        title_para =  document.createElement("p") as HTMLDivElement;
        title_detail.appendChild(title_para)
        title_para.innerText = taskItem
     }
}

addTask.addEventListener('click', function add_task () {
addtask()
displayTask()
})

window.addEventListener('load', () =>{
     let local_items = localStorage.getItem("to_do_app");

     if(local_items){
        task = JSON.parse(local_items);
        displayTask()
     }
});