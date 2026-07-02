export default function Todo({ todo, toggleTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.6 : 1,
        }}
      >
        {todo.name}
      </span>
    </div>
  );
}