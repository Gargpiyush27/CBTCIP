
function addTask() {
    const taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();


    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    
    
    const li = document.createElement('li');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;

   
    const dateAddedSpan = document.createElement('span');
    dateAddedSpan.className = 'task-date';
    dateAddedSpan.textContent = new Date().toLocaleString(); 
    


    const completeButton = document.createElement('button');
    completeButton.innerText = "Complete";
    completeButton.onclick = function () {
        markAsComplete(li); 
    };

   
    li.appendChild(taskTextSpan);
    li.appendChild(dateAddedSpan);
    li.appendChild(completeButton);

    
    taskList.appendChild(li);

    taskInput.value = ""; 
}


function markAsComplete(taskItem) {
    const completedTaskList = document.getElementById('completedTaskList');

    
    const dateCompletedSpan = document.createElement('span');
    dateCompletedSpan.className = 'task-date';
    dateCompletedSpan.textContent = `Completed on: ${new Date().toLocaleString()}`;

    taskItem.appendChild(dateCompletedSpan);
    taskItem.classList.add('completed');

    
    taskItem.removeChild(taskItem.querySelector('button'));

    
    completedTaskList.appendChild(taskItem);
}


function resetTasks() {
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    
    taskList.innerHTML = "";

    
    completedTaskList.innerHTML = "";
}
