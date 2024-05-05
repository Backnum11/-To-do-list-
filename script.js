function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task === "") {
        alert("할일을 입력하세요!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + '<button class="delete-btn" onclick="removeTask(this)">삭제</button>';
    ul.appendChild(li);
    input.value = "";
}

function removeTask(btn) {
    var li = btn.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
