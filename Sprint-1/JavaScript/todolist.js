function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") 
        return;

    const li = document.createElement("li");

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    li.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

setBackgroundByTime();

function setBackgroundByTime() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 5 && hour < 12) {
        body.style.backgroundColor = "#FFFAE3";
    } else if (hour >= 12 && hour < 17) {
        body.style.backgroundColor = "#E3F2FD";
    } else if (hour >= 17 && hour < 21) {
        body.style.backgroundColor = "#FFE4B5";
    } else {
        body.style.backgroundColor = "#2C3E50";
        body.style.color = "white";
    }
}

