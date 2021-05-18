const icon = document.querySelector('.residents');
const todos = document.querySelector('.todos');
const addTask = document.querySelector('.add_new');

// Delete resident icon when clicked
icon.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

todos.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});



// Add to-dos
const generateTemplate = todo => {

    const html = `
        <li class="item">
            <span class="list" >${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todos.innerHTML += html;

};

addTask.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTask.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addTask.reset(); 
    }
});


// Add a "checked" symbol when clicking on a list item
todos.addEventListener('click', e => {
    if(e.target.classList.contains('list')){
        e.target.classList.add('checked');
    }
});



