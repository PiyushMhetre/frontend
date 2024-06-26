import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/getTodo');
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const addTodo = async (todo) => {
    try {
      await axios.post('http://localhost:4000/api/v1/createTodo', todo);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/updateTodo/${id}`, updatedTodo);
      fetchTodos();
      setEditingTodo(null);
    } catch (error) {
      console.error("Error updating todo", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/deleteTodo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} editingTodo={editingTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
