const taskMaker = document.getElementById("task-maker");
taskMaker.addEventListener("submit", function (event) {
  event.preventDefault();
  const customTask = document.getElementById("custom-task");
  const list = document.getElementById("list");
  // create elements
  const div = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", function () {
    check.parentNode.remove();
  });
  const task = document.createElement("p");
  task.classList.add("task");
  task.addEventListener("click", function (event) {
    task.classList.toggle("crossed");
  });
  // rende la prima lettera della task maiuscola di default
  const upperCase =
    customTask.value.slice(0, 1).toUpperCase() + customTask.value.slice(1);
  task.innerText = upperCase;
  // mette sulla stessa linea il checkbox e la task
  check.classList.add("inline");
  task.classList.add("inline");
  // append elements
  div.append(check, task);
  list.append(div);
  //reset form
  taskMaker.reset();
});
