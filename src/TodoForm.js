import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, updateTodo, editingTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      updateTodo(editingTodo._id, { title, description });
    } else {
      addTodo({ title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        maxLength={50}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        maxLength={50}
      />
      <button type="submit">{editingTodo ? 'Update' : 'Add'} Todo</button>
    </form>
  );
};

export default TodoForm;
