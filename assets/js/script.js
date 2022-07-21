var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
   
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("Please add a task name and task type!");
        return false;
    }
    formEl.reset();

    // send it as an arguement to createTaskEl
    createTaskEl(taskDataObj);
    }; 


    
    var createTaskEl = function(taskDataObj) {
       // create list item
        var listItemEl = document.createElement("li"); 
        listItemEl.className = "task-item";

        // add task id as a customer attribute
        listItemEl.setAttribute("data-task-id", taskIdCounter);
    
        // give it a class name
        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";

        // add HTML content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        listItemEl.appendChild(taskInfoEl);

        // add entire list item to list
        tasksToDoEl.appendChild(listItemEl);

        // increase task counter for next unique id
        taskIdCounter++;

    };

  
    

    formEl.addEventListener("submit", taskFormHandler);


