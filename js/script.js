'use strict';

let todoControl = document.querySelector('.todo-control'),
	headerInput = document.querySelector('.header-input'),
	todoList = document.querySelector('.todo-list'),
	todoCompleted = document.querySelector('.todo-completed')

const todoData = [];
saveToDo();



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
	});
}

function saveToDo(){
     const storageSave = localStorage.getItem("todoSave");
    // todoData.push(storageSave);
   
	if(storageSave){
        let todoDataa = JSON.parse(storageSave);
	console.log(todoDataa + ' JSAONasad')
    }
	console.log(todoData + ' DATA')
	console.log(storageSave + ' JSAON')
	console.log(storageSave + ' JSAON')

	
	// const JSON.parse(localStorage.getItem("todoSave"));

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
		localStorage.setItem('todoSave', JSON.stringify(todoData));
		headerInput.value = '';
	}
	render();
});
render();






