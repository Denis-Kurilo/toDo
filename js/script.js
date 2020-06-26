'use strict';

let todoControl = document.querySelector('.todo-control'),
	headerInput = document.querySelector('.header-input'),
	todoList = document.querySelector('.todo-list'),
	todoCompleted = document.querySelector('.todo-completed');

const todoData = [];
if(localStorage.getItem('todoSave') || localStorage == []){
	saveToDo();
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





	const btnRemove = li.querySelector('.todo-remove')
	btnRemove.setAttribute('data-action', 'delete');

	btnRemove.addEventListener('click', function(e){
		if(true){
			let target = e.target.closest("li").remove();
			var textValue = e.target.parentNode.firstChild.textContent;
			var arrIndex = todoData.findIndex(function(item){
				textValue;
			});
			todoData.splice(arrIndex, 1);
			localStorage.setItem("todoSave", JSON.stringify(todoData));

		}
		// var arrIndex = todoData.indexOf(1);
console.log(arrIndex)
		// console.log(arrIndex)

		
	});
});
}










function saveToDo(){
	const storageSave = localStorage.getItem("todoSave");

  const storageSaveJSON = JSON.parse(storageSave);
  	storageSaveJSON.map(function(item){
  			todoData.push(item);
  	});
}

/*function removeItem(e) {
    if (
        e.target.hasAttribute("data-action") &&
        e.target.getAttribute("data-action") == "delete"
    ) {
        if (confirm("Удалить задачу?")) {
            e.target.parentNode.remove();
        }
    }

   saveToDo();
}*/


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







