import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";

export default function Section7() {
  const [count, setCount] = useLocalStorage("myCounter", 0);
  const [name, setName] = useLocalStorage("userName", "");
  const [todos, setTodos] = useLocalStorage("todoList", []);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="card">
      <h2>💾 useLocalStorage Hook</h2>

      <div className="storage-demo">
        <div className="demo-section">
          <h3>Persistent Counter</h3>
          <div className="counter-display">
            <span className="count-value">{count}</span>
            <div className="counter-controls">
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </div>

        <div className="demo-section">
          <h3>Persistent Name</h3>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{width: '100%', padding: '10px', fontSize: '16px'}}
          />
          <p style={{marginTop: '8px'}}>Stored: <strong>{name || '(empty)'}</strong></p>
        </div>

        <div className="demo-section">
          <h3>Persistent Todo List</h3>
          <div className="flex-row" style={{marginBottom: '12px'}}>
            <input 
              type="text" 
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a todo"
              style={{flex: 1, padding: '8px'}}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <span>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">×</button>
              </li>
            ))}
          </ul>
          {todos.length === 0 && <p style={{color: '#999'}}>No todos yet</p>}
        </div>

        <div className="info-box">
          🔄 Refresh the page - all values persist in localStorage!
        </div>
      </div>
    </div>
  );
}
