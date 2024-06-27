import React from 'react';

const TodoItem = ({ todo, deleteTodo, setEditingTodo }) => {
  return (  
    
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={() => setEditingTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
