import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: bgColor }}>
      <h1 style={{ textAlign: "center", paddingTop: "300px",paddingBottom: "30px", fontSize:"40px" }}>BACKGROUND COLOUR CHANGER</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "35px" }}>
        <button style={{color:"red"}} onClick={() => changeColor("red")}>RED</button>
        <button style={{color:"blue"}} onClick={() => changeColor("blue")}>BLUE</button>
        <button style={{color:"green"}} onClick={() => changeColor("green")}>GREEN</button>
        <button style={{color:"yellow"}} onClick={() => changeColor("yellow")}>YELLOW</button>
        <button onClick={() => changeColor("white")}>RESET</button>
      </div>
    </div>
    </>
  )
}

export default App
