import React from "react";


function Todo({ todo, onDelete, onToggle, index  }) {
  return (
    <li>
      {/* <span onClick={() => onToggle(todo.id)} className={todo.completed ? "completed" : ""}>
        {todo.completed ? " ✔️" : " ❌"}
        {todo.title}
      </span> */}
      <span className={todo.completed ? 'completed' : ''}>
        {index}. {todo.title}
      </span>
      <div className="button-container">
        <button onClick={() => onToggle(todo.id)} className={`button-toggle ${todo.completed ? "completed" : ""}`}>
          {todo.completed ? "Otwórz ponownie" : "Zrealizowane"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="button-delete">
          Usuń
        </button>
      </div>
    </li>
  );
}

export default Todo;
