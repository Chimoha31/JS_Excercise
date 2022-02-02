"use strict";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");

const todos = JSON.parse(localStorage.getItem("todos"));

todos.forEach((todo) => {
  add(todo);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  add();
});

function add(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo;
  }

  if (todoText.length > 0) {
    let li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    console.log(ul);
    input.value = "";

    save();
  }
}

function save() {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach((list) => {
    todos.push(list.innerText);
    console.log(todos);

    list.addEventListener("click", () => {
      for (let i = 0; i < todos.length; i++) {
        list.classList.toggle("done");
      }
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
