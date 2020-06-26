'use strict';

let todoControl = document.querySelector('.todo-control'),
	headerInput = document.querySelector('.header-input'),
	todoList = document.querySelector('.todo-list'),
	todoCompleted = document.querySelector('.todo-completed');

const todoData = [];
if(localStorage.getItem('todoSave') || localStorage == []){
	saveToDo();
}

function updateList(){
    localStorage.removeItem("todoSave")
    localStorage.setItem("todoSave",JSON.stringify(todoData))
}

const render = function() {

	todoList.textContent = '';
	todoCompleted.textContent = '';

	todoData.forEach(function(item){
		const li = document.createElement('li');
		li.classList.add('todo-item');

		li.innerHTML = `
			<span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
		`;

		if(item.completed) {
			todoCompleted.append(li);
		} else{
			todoList.append(li);
		}

	const btnTodoCompleted = li.querySelector('.todo-complete');
	btnTodoCompleted.addEventListener('click', function(){
	item.completed = !item.completed;
		render();
	});	
	updateList()
	
	const btnRemove = li.querySelector('.todo-remove')
	btnRemove.addEventListener('click', function(e){
    let taskDelete = e.target.closest("li").firstChild
        if (confirm('Удалить задачу?')){
        e.target.closest("li").remove();
        
        let itemIndex = todoData.indexOf(taskDelete)
        todoData.splice(itemIndex, 1)
        localStorage.setItem("todoSave", JSON.stringify(todoData));
        }    
	});
});
}

function saveToDo(){
	const storageSave = localStorage.getItem("todoSave");

  const storageSaveJSON = JSON.parse(storageSave);
  	storageSaveJSON.forEach(function(item){
  			todoData.push(item);
  	});
}

todoControl.addEventListener('submit', function(event){
	event.preventDefault();
	const newTodo = {
		value: headerInput.value,
		completed: false
	};

	if(headerInput.value === ''){
		return;
	}else{
		todoData.push(newTodo);

		localStorage.setItem("todoSave", JSON.stringify(todoData));

		headerInput.value = '';
	}
	render();

});

render();







