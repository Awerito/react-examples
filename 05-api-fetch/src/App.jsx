import { useState } from 'react';
import './App.css';
import Weather from './components/Weather.jsx'
import Select from "./components/Select.jsx"

function App() {
  const [selectedCity, setSelectedCity] = useState('SCTE')

  return (
    <>
      <h1>Clima App</h1>
      <div className="card">
        <Select value={selectedCity} setValue={setSelectedCity} />
        <Weather code={selectedCity} />
      </div>
    </>
  )
}

export default App
