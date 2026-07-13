let tasks=[];

function addTask(){

let title=document.getElementById("taskTitle").value;
let priority=document.getElementById("taskPriority").value;

if(title===""){
alert("Enter Task");
return;
}

tasks.push({
title,
priority
});

document.getElementById("taskTitle").value="";

displayTasks();

}

function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=`

<div class="task">

<div>

<h3>${task.title}</h3>

<p>Priority : ${task.priority}</p>

</div>

<div>

<button class="edit" onclick="editTask(${index})">Edit</button>

<button class="delete" onclick="deleteTask(${index})">Delete</button>

</div>

</div>

`;

});

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}

function editTask(index){

let newTask=prompt("Update Task",tasks[index].title);

if(newTask){

tasks[index].title=newTask;

displayTasks();

}

}
