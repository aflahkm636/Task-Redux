import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';


function App() {
  const todos = useSelector(state => state.todolist.todos); 
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };



  return (
    <div >
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.todo}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
