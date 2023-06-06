import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAdd = todo => {
    axios.post('http://localhost:3001/todos', todo)
      .then(response => {
        setTodos([...todos, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleToggle = id => {
    const todo = todos.find(todo => todo.id === id);
    axios.patch(`http://localhost:3001/todos/${id}`, { completed: !todo.completed })
      .then(() => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>Lista rzeczy do zrobienia</h1>
      <AddTodo onAdd={handleAdd} />
      <ul>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} index={index + 1} />
        ))}
      </ul>
    </div>
  );
}

export default App;