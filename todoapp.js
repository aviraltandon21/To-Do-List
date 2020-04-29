var addbtn = document.querySelector(".add")
var taskfield = document.querySelector(".taskinput")
var list = document.querySelector(".list")

addbtn.addEventListener("click", addtask)

function addtask()
{
	if(taskfield.value.length===0){
		return;
	}else{
		var taskcontainer = list.appendChild(document.createElement("div"))
		var task = taskcontainer.appendChild(document.createElement("p"))
		var donebtn = taskcontainer.appendChild(document.createElement("i"))
		var delbtn = taskcontainer.appendChild(document.createElement("i"))
		delbtn.className = "fas fa-trash-alt"
		donebtn.className = "fas fa-check"
		taskcontainer.className = "taskcontainer"
		task.className = "task"
		task.innerHTML = taskfield.value
		taskfield.value=""
		delbtn.addEventListener("click", deletetask)
		donebtn.addEventListener("click", checktask)
		function checktask(e) {
			e.target.previousSibling.style.textDecoration = "line-through"
		}
		function deletetask(e) {
			e.target.parentElement.remove()
		}
	}
}