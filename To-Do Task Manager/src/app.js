//selectors
const todobar =  document.querySelector('.todo-bar');
const todobtn = document.querySelector('.todo-btn');
const todolist = document.querySelector('.todo-list');
const todocontainer = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');
//eventlisteners

todobtn.addEventListener('click',addtodo);
todolist.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filtertodo);
//functions
function addtodo(event){

    //prevent from submitting
    event.preventDefault();

    //tododiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todobar.value;
    newtodo.classList.add('todo-item');

    todoDiv.appendChild(newtodo);

    //chech mark button
    const completedbtn = document.createElement('button');
    completedbtn.innerHTML= '<i class="fas fa-check"></i>';
    completedbtn.classList.add('complete-btn');
    todoDiv.appendChild(completedbtn);
    
    //chech trash button
    const trashbtn = document.createElement('button');
    trashbtn.innerHTML= '<i class="fas fa-trash"></i>';
    trashbtn.classList.add('trash-btn');
    todoDiv.appendChild(trashbtn);
   
    //append to dolist
    todolist.appendChild(todoDiv);
    //clear todo input
    todobar.value = "";

}


function deleteCheck(e){

    //Getting the target

    const item = e.target;
    
    //delete todo

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
        todo.remove()
    });
    }

    //checkmark
    
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filtertodo(e){
    const todos = todolist.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                todo.style.display = "flex";
                }
                else{
                todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}