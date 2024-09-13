import { Stack, Checkbox, Paper, Button } from '@mantine/core';

function TodoItems({ tasks, toggleTask, removeTask }) {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="flex-start"
      gap="xs"
    >
      {tasks.map((task) => (
        <Paper key={task.id} shadow="xs" withBorder p="xs" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Checkbox
            checked={task.completed}
            label={task.title}
            color="green"
            radius="xl"
            size="lg"
            style={{ flex: 1, marginTop: 5, marginRight: 10, textDecoration: task.completed ? 'line-through' : 'none' }}
            onChange={() => toggleTask(task.id)}
          />
          <Button
            variant="filled"
            color="pink"
            size="md"
            radius="lg"
            onClick={() => removeTask(task.id)}
          >
            Delete
          </Button>
        </Paper>
      ))}
    </Stack>
  );
};

export default TodoItems;
