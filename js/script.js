'use strict';

let todoControl = document.querySelector('.todo-control'),
	headerInput = document.querySelector('.header-input'),
	todoList = document.querySelector('.todo-list'),
	todoCompleted = document.querySelector('.todo-completed');

const todoData = [];
if(localStorage.getItem('todoSave')){
	saveToDo();
}

console.log(todoData)
console.log(typeof todoData)


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

		const btnRemove = li.querySelector('.todo-remove');
		btnRemove.addEventListener('click', function(){
			if(confirm("Удалить задачу?")){
				// li.parentNode.remove();
			
				todoData.forEach(function(item){
					console.log(indexOf(item))
				});
			}
			console.log('УДАЛИЛ')
		});
		console.log(btnRemove)

	const btnTodoCompleted = li.querySelector('.todo-complete');
	btnTodoCompleted.addEventListener('click', function(){
	item.completed = !item.completed;




	

	/*const btnRemove = li.querySelector('.todo-remove');
	btnRemove.addEventListener('click', function(){
		console.log(btnRemove + ' Удалить')
	});*/


/*
		localStorage.setItem('saveBool', saveBtnCompleted);
		let getBtnCompleted = localStorage.getItem('saveBool');
		console.log(getBtnCompleted)*/
		// newTodo.completed.push(getBtnCompleted);
		// console.log(getBtnCompleted)
		// console.log(newTodo)



		render();
	});	

	});
}

function saveToDo(){
	const storageSave = localStorage.getItem("todoSave");

  const storageSaveJSON = JSON.parse(storageSave);
  	storageSaveJSON.map(function(item){
  			todoData.push(item);
  			console.log(item)
  	});
}

/*
let removeLine = addEventListener('click', function(){
	
});*/



todoControl.addEventListener('submit', function(event){
	event.preventDefault();
	const newTodo = {
		value: headerInput.value,
		completed: false
	};

	// newTodo.completed=localStorage.getItem('saveBool');

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







