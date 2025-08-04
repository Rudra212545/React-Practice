import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/rudra212545")
    //   .then((res)=> res.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data)
    //   })
    
      
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 flex-col items-center gap-5'>
     <h1 className='text-2xl'> Github Followers: {data.followers}</h1>
      <h1 className='text-2xl '> Username: {data.login}</h1>
      <img src={data.avatar_url} alt="Github Profile Image" width={200}  className='rounded-full ml-130 mt-5'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/rudra212545')
  return response.json()
}