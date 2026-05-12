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

  saveHomework();
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

function saveHomework() {
  let listItems = 
    document.querySelectorAll("homeworkList li");
  let homeworkArray = [];
  listItems.forEach(function(item) {
    homeworkArray.push({
      text: item.innerGTML,
      classes: item.className
    });
  }),

    localStorage.setItem(
      "homework",
      JSON.stringify(homeworkArray)
      );
}

fucntion loadHomework() {
  let savedHomework =
    JSON.parse(localStorage.getItem("homework"));

  if (savedHomework) {
    savedHomework.forEach(function(item) {
      let li =
        document.createElement("li");
      li.innerHTML = item.text;
      li.className = item.classes;
      li.onclick = function () {
        li.classList.toggle("completed");
        savedHomework();
      };
      document.getElementById("homeworkList")
      .appendChild(li);
    });
  }
}
window.onload = loadHomework;
