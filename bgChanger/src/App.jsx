import { useState } from 'react'
import './App.css'



function App() {

const colorHandler = ()=>{

}
const [color, setColor] = useState("black")


return (
    <div className='w-screen h-screen  p-5 ' style={{backgroundColor: color}}>
      <h1 className='text-green-400 text-4xl text-center '>Background Changer Project</h1>
      <div className='bg-white fixed bottom-10 p-2 left-[25%] flex flex-wrap justify-center rounded-full w-1/2 gap-5 h-[60px]'>
        <button onClick={()=>{setColor("red")}} className='bg-red-600 text-white p-1 rounded-xl font-semibold outline-none w-1/9'>Red</button>
        <button onClick={()=>{setColor("green")}} className='bg-green-400 p-1 rounded-xl font-semibold outline-none w-1/9'>Green</button>
        <button onClick={()=>{setColor("blue")}} className='bg-blue-600 p-1 rounded-xl font-semibold outline-none w-1/9'>Blue</button>
        <button onClick={()=>{setColor("orange")}} className='bg-orange-600 p-1 rounded-xl font-semibold outline-none w-1/9'>Orange 
        </button>
        <button onClick={()=>{setColor("purple")}} className='bg-purple-600 p-1 rounded-xl font-semibold outline-none w-1/9'>Purple</button>
        <button onClick={()=>{setColor("black")}} className='bg-black text-white p-1 rounded-xl font-semibold outline-none w-1/9'>Black</button>


      </div>
    </div>
  )
}

export default App
