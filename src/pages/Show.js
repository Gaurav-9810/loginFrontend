import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Show = () => {
  const navigate=useNavigate();
  const { id } = useParams();

  useEffect(() => {

    const token = localStorage.getItem("token")||null;
        if(token==null){
          navigate(`/`);
          return ;
        }




    const fetchData = async () => {
      try {

        const response = await fetch(`http://localhost:3000/api/show/${id}`, {
          method: 'GET',
          headers: {
            authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        console.log(data);
        if(response.status==401){
           navigate('/notallow');
        }
        setUserDetails(data);
        console.log(data);
      } catch (error) {
        console.log("Error in getting data: " + error);
      }
    };

    fetchData();
  }, []); // The empty array [] ensures the effect runs only once on mount

  const [UserDetails, setUserDetails] = useState([]);


  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-2xl text-green-500 font-extrabold'>showData all the data of student</h1>
      <table border="1" >
        <thead>
          <tr className='border-black border-2'>
            <th className='border-r-2 border-black p-2'>username</th>
            <th className='border-r-2 border-black p-2'>firstName</th>
            <th className='border-r-2 border-black p-2'>LastName</th>
            <th className='border-r-2 border-black p-2'>Password</th>
            <th className='border-r-2 border-black p-2'>email</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            UserDetails.map((item, index) => ( */}
              <tr  className='border-black border-2'>
                <td className='border-r-2 border-black p-2'>{UserDetails.userName}</td>
                <td className='border-r-2 border-black p-2'>{UserDetails.firstName}</td>
                <td className='border-r-2 border-black p-2'>{UserDetails.lastName}</td> {/* Corrected casing for 'lastName' */}
                <td className='border-r-2 border-black p-2'>{UserDetails.password}</td>
                <td className='border-r-2 border-black p-2'>{UserDetails.email}</td>
                <td className='border-r-2 border-black p-2'><button className='bg-green-500 px-3 py-1 text-white rounded-md'>show more</button></td>
              </tr>
            {/* ))
          } */}
        </tbody>
      </table>

    </div>
  )
}

export default Show