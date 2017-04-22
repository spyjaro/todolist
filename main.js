var tasks = [];
//add elements into list
function addList() {
    var todolist = document.getElementById('todolist');
    var task = document.getElementById('add-task__input');
    var newLi = document.createElement('li');
    // newLi.classList.add('notCompleted');
    var checkBoxLi= document.createElement('input');
    checkBoxLi.setAttribute('class', 'input__Checkbox')
    var span = document.createElement('span');
    var cross = '&times;';
    checkBoxLi.type = 'checkbox';
    span.setAttribute('class','deleteButton');
    if(!task.value){return false}

    var taskText = document.createTextNode(task.value);
    todolist.appendChild(newLi).appendChild(checkBoxLi);
    newLi.appendChild(taskText);
    newLi.appendChild(span).innerHTML= '&times;';
    tasks.push(taskText);
    task.value= task.defaultValue;
}

//test for press Enter
var inputKeyCode = document.querySelector('input').addEventListener('keydown' ,testForKeyCode);
function testForKeyCode(e) {
    if (e.keyCode == 13) {
        addList();
    }
}
//delete function for X
var deleteButtons = document.getElementById('todolist').addEventListener('click', deleteTasks);
function deleteTasks(event) {
    if (event.target.classList.contains('deleteButton')){
        event.target.parentNode.remove();
    }
    toggleLiAttributes(event);
}

function toggleLiAttributes(event) {
    if(event.target.checked){

        event.target.parentNode.classList.toggle("completed")
    }
    else{
        event.target.parentNode.classList.toggle("completed")
    }
}

//delete all completed tasks
function deleteCompleted() {
    var parent = document.querySelector('#todolist');
    var itemList = document.querySelectorAll('.completed');

    for(var i = itemList.length - 1; i >= 0; i--) {
        parent.removeChild(itemList[i]);
    }
}


