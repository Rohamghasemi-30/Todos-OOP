class Todo {
    constructor(title) {
        this.title = title;
        this.isFinished = false;
        this.id = Math.random();
    }

}

class TodoList {
    constructor() {
        this.todos = [];
        this.todosContainer = document.querySelector(".todos");
        this.todosForm = document.querySelector(".todosForm");

        this.todosForm.addEventListener("submit", this.addTodo.bind(this));
        this.todosContainer.addEventListener("click", this.deleteTodo.bind(this));
    }

    addTodo(event) {
        event.preventDefault();
        let newTodoTitle = this.todosForm.Title.value.trim();
        if (newTodoTitle !== '') {
            const newTodo = new Todo(newTodoTitle);
            this.todos.push(newTodo);
            this.showTodosInUI();
            this.todosForm.Title.value = "";
        }
    }

    deleteTodo(event) {
        if (event.target.classList.contains("delete-btn")) {
            let todoId = parseFloat(event.target.parentElement.dataset.id);
            this.todos = this.todos.filter(todo => todo.id !== todoId);
            this.showTodosInUI();
        }
    }

    showTodosInUI() {
        this.todosContainer.innerHTML = "";
        this.todos.forEach(todo => {
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-item");
            todoDiv.setAttribute("data-id", todo.id);
            todoDiv.innerHTML = `
                <span class="title">${todo.title}</span>
                <button class="delete-btn">Delete</button>
            `;
            this.todosContainer.appendChild(todoDiv);
        });
    }
}

let todoList = new TodoList();
