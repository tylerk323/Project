function addHomework() {

let homework = 
  document.getElementById("homeworkInput").value;

let dueDate = 
  document.getElementById("dateInput").value;

let list = 
  document.getElementById("homeworkList");

let li = 
  document.createElement("li");

li.innerHTML = 
  homework + " - Due: " + dueDate;

li.onclick = function () {
  li.style.textDecoration = "line-through";
};
  list.appendChild(li);
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
