const text = document.querySelector(".task__text");
const addText = document.querySelector(".btn");
const container = document.getElementById("container__tasks");
const containerCompletedTask = document.getElementById("container__completed");

let tasks = [];
let counter = 0;

class Task {
    constructor(id , text){
        this.id = id;
        this.text = text;
    }
}
/*
let newTask = new Task(counter++, "sacar perros");
let newTask1 = new Task(counter++, "perros");
tasks.unshift(newTask)
*/
let task = "";
text.addEventListener("change", (e) => {
    task = e.target.value;
});


//add task to the ul with a li tag 
addText.addEventListener("click", (e) => {
    //HTML
    const text = document.createElement("li");
    

    text.innerHTML= task;
    container.appendChild(text)
    console.log(text)

    //JS
    let newTask = new Task(counter++, task)
    tasks.unshift(newTask)

    console.log(tasks)
});

