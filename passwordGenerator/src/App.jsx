import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str +="~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)

    }
    // console.log(pass);
    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)

    // document.querySelector(".para").innerHTML="Text copied to Clipboard!"

    // con/sole.log(para);

  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,characterAllowed,passwordGenerator])
  
  return (
   <div className="w-screen h-screen bg-black p-5">
    <h1 className="text-white text-4xl text-center font-semibold">Password Generator</h1>
    <div className="w-[500px] h-[180px] bg-gray-800 m-5 p-5 rounded-xl fixed left-[30%] ">
      <div className="flex flex-col gap-5">
      <div className="flex  w-full">
     <input type="text" id="input" className="bg-white w-[400px] rounded-l-md text-orange-400 p-2 font-semibold  tracking-wide" value={password} readOnly ref={passwordRef} />
     <button onClick={copyPasswordToClipboard}
      className="bg-green-500 hover:bg-blue-700 text-white font-bold p-2 rounded-r-md">
        Copy
      </button>
     </div>
    
     <div className="flex py-5 px-2 w-full align-middle   gap-5">
     <div className="flex w-[220px]  align-middle gap-2">
     <input type="range"  id="length" className="cursor-pointer" min={8} max={100} value={length}
     onChange={(e)=>{setLength(e.target.value)}}
     />
     <label htmlFor="length" className="text-orange-500"> Length ({length})</label>
     </div>
     <div className="flex gap-2 ">
     <input type="checkbox"  name="Numbers" id="number"
      onChange={()=>{
        setNumberAllowed((prev)=> !prev);
    }}  />
      <label htmlFor="number" className="text-orange-500" >Numbers</label>
     </div>
     <div className="flex gap-2 ">
     <input type="checkbox" name="Numbers" id="char" onChange={()=>{
        setCharacterAllowed((prev)=> !prev);
    }}   />
      <label htmlFor="char" className="text-orange-500">Characters</label>
     </div>
      
      
     </div>
      </div>
      {/* <div>
      <p className="text-orange-400 text-center text-md para"></p>
     </div> */}
    </div>`
   </div>
  )
}

export default App
