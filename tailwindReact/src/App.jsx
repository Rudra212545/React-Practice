
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    name:"Rudra",
    Age:20
  }
  let newArr = [1,2,3,4]
  return (
    <>
     <h1 className='text-2xl text-black bg-green-400 rounded-xl p-4 mb-4'>Tailwind Test</h1>
     <div>
     <Card username="rudra" songName="My Love"/>
      <Card username="riya"/>
     </div>

    </>
  )
}

export default App
