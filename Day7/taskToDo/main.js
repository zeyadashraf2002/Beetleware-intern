import { HttpClient } from "./httpClient.js";


const api = new HttpClient();
const BASE = "https://jsonplaceholder.typicode.com/todos";


const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");


async function loadTodos() {
const todos = await api.get(`${BASE}?_limit=5`);
render(todos);
}


function render(items) {
list.innerHTML = "";
items.forEach(item => {
const li = document.createElement("li");
li.textContent = item.title;


const del = document.createElement("button");
del.textContent = "X";
del.onclick = () => remove(item.id);


li.appendChild(del);
list.appendChild(li);
});
}


async function add() {
const title = input.value.trim();
if (!title) return;


await api.post(BASE, { title, completed: false });
input.value = "";
loadTodos();
}


async function remove(id) {
await api.delete(`${BASE}/${id}`);
loadTodos();
}


addBtn.onclick = add;
loadTodos();