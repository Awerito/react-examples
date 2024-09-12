import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import CustomForm from './components/CustomForm'
// import RangeSlider from './components/RangeSlide'
// import Demo from './components/MantineForm'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <MantineProvider>
      {/*
      <h1>React Form</h1>
      <CustomForm />
      <h1>Range Input</h1>
      <RangeSlider />
      <h1>Mantine Form</h1>
      <Demo />
      */}
      <TodoApp />
    </MantineProvider>
  )
}

export default App
