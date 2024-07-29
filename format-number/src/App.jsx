
import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState("")

  const handleChange = (e) => {
  let inputValue = e.target.value
  }

 

  if (inputValue.length > 10) {
    inputValue = inputValue.slice(0, 10)
  }

    if (inputValue.length > 3 && inputValue.length <= 6) {
      inputValue = `(${inputValue.slice(0, 3)})${inputValue.slice(3)}`;
    } else if (inputValue.length > 6) {
      inputValue = `(${inputValue.slice(0, 3)})${inputValue.slice(
        3,
        6
      )}-${inputValue.slice(6)}`;
      setNum(inputValue)
    }


  return (
    <div>
     <input type="number" placeholder='Enter mobile number' value={num} onChange={handleChange} />
    </div>
  )
}

export default App
