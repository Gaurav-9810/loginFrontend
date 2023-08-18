import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [name, setName] = useState('');
const[password ,setPassword]=useState('');
const[email ,setEmail]=useState('');

const navigate = useNavigate();
const handleClick=async ()=>{

  const formData={
    password,
    email
  }

  try{
    const response=await fetch("http://localhost:3000/api/login",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    })
    console.log('Data sent successfully:', response);
    
    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);

      localStorage.setItem('token', responseData.token); 
      navigate(`/show/${responseData.id}`); // Replace "userId" with the actual key
    } else {
      console.error('Error sending data:', response.status);
     
    }

  }
  catch(error){
    console.error('Error sending data:', error);
  }

};

  return (
    <div className='mt-20 '>
          <div className='flex  flex-col mx-auto my-auto items-center w-[50%] h-[50%] shadow-2xl py-2 '> 
           <h1 className='text-green-400 text-2xl font-bold'>Login Form</h1>
          <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm '>
              <label className=' '>username:</label>
              <input text="input"  onChange={(e)=>setName(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  '/>
          </div>
          <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm'>
              <label className=' '>email:</label>
              <input text="email" onChange={(e)=>setEmail(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  '/>
          </div>
          <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm'>
            <label className=' '>password:</label>
            <input text="password" onChange={(e)=>setPassword(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  '/>
          </div>
          <div className='my-4 flex flex-col items-start  w-[40vmax] '>
              <button onClick={()=>handleClick()} className=' text-lg text-black-500 bg-green-500 px-6 py-2 text-white rounded-md'>SUBMIT </button>
              
          </div>
         
      </div>
    </div>
    
  )
}

export default Login