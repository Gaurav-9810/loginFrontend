import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Regitser = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    const formData = {
      userName,
      firstName,
      lastName,
      password,
      email
      // ... (other form data)
    };

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      // const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log('Data sent successfully:', response);

      // const response1 = await fetch(`http://localhost:3000/api/${formData.email}`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      if (response.ok) {
        const responseData = await response.json();
        console.log('Data sent successfully:', responseData);

        localStorage.setItem('token', response.token);
        navigate(`/show/${responseData.id}`); // Replace "userId" with the actual key
      } else {
        console.error('Error sending data:', response.status);
       
      }

      console.log(response.json);
     
      // Handle success or show a message to the user
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error or show an error message to the user
    }
  };






  return (
    <div className='mt-20 '>
      <div className='flex  flex-col mx-auto my-auto items-center w-[50%] h-[50%] shadow-2xl py-2 '>
        <h1 className='text-green-400 text-2xl font-bold'>Login Form</h1>
        <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm '>
          <label className=' '>firstName:</label>
          <input text="input" onChange={(e) => setFirstName(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  ' />
        </div>
        <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm '>
          <label className=' '>lastName:</label>
          <input text="input" onChange={(e) => setlastName(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  ' />
        </div>
        <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm '>
          <label className=' '>userName:</label>
          <input text="input" onChange={(e) => setUserName(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  ' />
        </div>
        <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm'>
          <label className=' '>email:</label>
          <input text="email" onChange={(e) => setEmail(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  ' />
        </div>
        <div className=' my-4 flex flex-col items-start  w-[40vmax] text-sm'>
          <label className=' '>password:</label>
          <input text="password" onChange={(e) => setPassword(e.target.value)} className='border-black border-[1px]   focus:outline-none focus:border-2 focus:border-green-400  w-[15rem] h-[2rem]  ' />
        </div>
        <div className='my-4 flex flex-col items-start  w-[40vmax] '>
          <button onClick={() => handleClick()} className=' text-lg text-black-500 bg-green-500 px-6 py-2 text-white rounded-md'>SUBMIT </button>

        </div>

      </div>
    </div>

  )
}

export default Regitser