const text = document.querySelector(".task__text");
const addText = document.querySelector(".btn");
const container = document.getElementById("container__tasks");
const containerCompletedTask = document.getElementById("container__completed");


//task js
let tasks = [];
let counter = 0;

//template to the task 
class Task {
    constructor(id , text , state){
        this.id = id;
        this.text = text;
        this.state = state;
    }
}

// trap the text
let task = "";
let cont = 0;

text.addEventListener("change", (e) => {
    task = e.target.value;
});


//add task to the ul with a li tag 
addText.addEventListener("click", () => {
    //HTML
    if(task !== ""){
        let containerTask = document.createElement("li");
        let taskContent ="";
        taskContent += `     
            <input type="checkbox" >
            <button>delete</button>`;
        
        containerTask.setAttribute("contentEditable", "");
        containerTask.setAttribute("id", cont++);
        containerTask.innerHTML = task + taskContent;
        container.appendChild(containerTask);
        
        //JS
        let newTask = new Task(counter++, task , false)
        tasks.push(newTask)
        //unshift this method if to add element in the array, but in different order
        console.log(tasks)
    }
});

//delete task

container.addEventListener('click', (e) => {
    //console.log(e.target.style.visibility)
    
   if(e.target.nodeName === "BUTTON"){
        document.getElementById(e.target.parentNode.id).remove();
        
        tasks = tasks.filter((item)=>{ //filter
            return item.id != e.target.parentNode.id;
        });

        console.log(tasks)       
    }
})