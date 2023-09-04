var inp = document.getElementById("inp");
var list = document.getElementById("list");
var todoList = []

function addTodo() {
    if (inp.value == "") {
        alert("Please Enter value or text");
        return;
    }
    todoList.push(inp.value);
    inp.value = "";
    render();
}
function render() {
    list.innerHTML = ""
    for (var i = 0; i < todoList.length; i++) {
        list.innerHTML += `<li> ${todoList[i]} <button  onclick="editTodo(${i})" Edit</button  <button onclick="DeleteTodo(${i})">Delete</button> </li>`

    }
}

function editTodo(indexNum){
    todoList[indexNum]=prompt("Enter  your value");
    render()
}

function deleteTodo(indexNum) {
    todoList.splice(indexNum,1);
    render();
}
function DeleteAll() {
    todoList=[]
    list.innerHTML=""
    
}