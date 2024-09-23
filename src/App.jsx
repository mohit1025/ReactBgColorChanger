import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (

    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="flex fixed flex-wrap justify-center top-12 inset-x-0  px-2 ">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-5 py-2 rounded-3xl">
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}} onClick={()=>setColor("grey")}>Grey</button>
        <button className="outline-none px-5 py-2 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
        <button className="outline-none px-5 py-2 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>Purple</button>
        </div>
      </div>

    </div>

  )
}

export default App
