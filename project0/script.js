const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  var numberOfTasks = 0
  var uncheckedTasks = 0
  var taskID = 0
  
function newTodo() {
	// text com todo
	const task = window.prompt("What is the task?")
	let spanTask = document.createElement("li")
	spanTask.id = taskID
	taskID += 1
	let task1 = document.createTextNode(task)
	spanTask.appendChild(task1)
	
	// counter
	numberOfTasks = numberOfTasks+1
	uncheckedTasks = uncheckedTasks+1
	itemCountSpan.textContent = numberOfTasks
	uncheckedCountSpan.textContent = uncheckedTasks
	
	//Criar botão de check
	let checker = document.createElement("button")
	checker.innerHTML = "Check"
	checker.id = "c" + spanTask.id
	checker.setAttribute("onclick","checker(this.id)")
	
	//Criar botão de delete
	let del = document.createElement("button")
	del.innerHTML = "Delete"
	del.id = "d" + spanTask.id
	del.setAttribute("onclick","deleter(this.parentNode.parentNode.parentNode,this.parentNode.parentNode)")
	
	// div com os butoes
	let divButton = document.createElement("div")
	divButton.style = "float: right; clear: both"
	divButton.appendChild(checker)
	divButton.appendChild(del)
	
	// Para dar um espaco
	br1 = document.createElement("br")
	br2 = document.createElement("br")
	
	// append butoes ao li
	spanTask.appendChild(divButton)
	spanTask.appendChild(br1)
	spanTask.appendChild(br2)

	// criar o li
	list.appendChild(spanTask)
}

// funcao do butao check/uncheck
function checker(id){
	let but = document.getElementById(id)
	if(but.innerHTML==="Check"){
	  	if(uncheckedTasks-1 < 0){
			alert("No tasks to check")
		  }
		  
	  	else{
			uncheckedCountSpan.textContent = uncheckedTasks-1
			uncheckedTasks = uncheckedTasks-1
			but.innerHTML = "Uncheck"
	  	}
	}

	else{
	  	but.innerHTML = "Check"
	  	uncheckedCountSpan.textContent = uncheckedTasks+1
	  	uncheckedTasks = uncheckedTasks+1
	}
}
  
// funcao do butao delete
function deleter(ul,li){
	ul.removeChild(li)

	if(uncheckedTasks-1 >= 0){
	  	uncheckedCountSpan.textContent = uncheckedTasks-1
	  	uncheckedTasks = uncheckedTasks-1
	}

	else{
		uncheckedCountSpan.textContent = 0
	}

	itemCountSpan.textContent = numberOfTasks-1
	numberOfTasks = numberOfTasks-1
}