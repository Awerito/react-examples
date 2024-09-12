import { useState } from 'react';
import { Button, TextInput, Paper, Checkbox, Container, Group, Title } from '@mantine/core';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTodoCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container size="sm" style={{ marginTop: 40 }}>
      <Title align="center">Todo App</Title>

      <Group position="apart" style={{ marginTop: 30 }}>
        <TextInput
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button onClick={addTodo} color="blue">Add Task</Button>
      </Group>

      <div style={{ marginTop: 30 }}>
        {todos.map((todo, index) => (
          <Paper
            key={index}
            withBorder
            shadow="sm"
            padding="md"
            style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Checkbox
              checked={todo.completed}
              label={todo.text}
              onChange={() => toggleTodoCompletion(index)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: 10 }}
            />
            <Button color="red" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </Paper>
        ))}
      </div>
    </Container>
  );
}

export default TodoApp;
