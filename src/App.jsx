import './global.css'
import ColorPicker from "./components/ColorPicker.jsx"
import { useState } from "react"

function App() {
  const colorOptions = ['red', 'blue', 'green', 'yellow']
  const [color, setColor] = useState("#E5E4E2")

  return (
    <>
      <p className='title'>Pick a color</p>
        <ColorPicker listOfColors={colorOptions} currentColor={color} setColor={setColor}/>
    </>
  )
}

export default App
