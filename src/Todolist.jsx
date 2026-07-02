import Todo from "./Todo.jsx";


export default function ToDoList({Tasks, toggleTodo}) {
    return (
        Tasks.map(function (Task,) {
            return <Todo key={Task.id} todo={Task} toggleTodo={toggleTodo} />;
        })
    )
}

