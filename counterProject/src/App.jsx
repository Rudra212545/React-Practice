import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5
  
  const [counter, setCounter] = useState(0)

  const addValue =()=>{
    // counter = counter+1;
    if(counter <20){
      setCounter(counter+1)
    }
    console.log("Value added", counter);
  }
  const decreaseValue =()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    console.log("Value Decresed", counter);

  }
  return (
    <>
      <h1 className='mb-5'>Hello </h1>
      <h2 className='mb-5'>Counter Value : {counter}</h2>

      <div className='flex gap-5'>
      <button onClick={addValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  )
}

export default App
