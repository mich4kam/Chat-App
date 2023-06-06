import React, { useState } from "react";

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      return; 
    }
    onAdd({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} placeholder="Wpisz tytuł zadania" />
      <button type="submit" className="add-button">Dodaj</button>
    </form>
  );
}

export default AddTodo;
