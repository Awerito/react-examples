import { Container, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [tasks, setTasks] = useLocalStorage({ key: 'tasks', defaultValue: [] });

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: prevTasks.length, title: task, completed: false }]);
  }

  const toggleTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <Container size="sm">
      <Title style={{ textAlign: 'center', marginTop: 20 }}>Todo App</Title>

      <TodoForm addTask={addTask} />

      <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </Container>
  );
};

export default TodoApp;
