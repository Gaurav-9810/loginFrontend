import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';



const ShowData = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")||null;
        if(token==null){
          navigate(`/notoken`);
          return ;
        }
        const response = await fetch("http://localhost:3000/api/showAll", {
          method: 'GET',
          headers: {
            authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        });
        if(response.status!=200){
          navigate(`/notadmin`);
          return ;
        }
        
        const data = await response.json();
        setUserDetails(data);
        console.log(data);
      } catch (error) {
        console.log("Error in getting data: " + error);
      }
    };

    fetchData();
  }, []); // The empty array [] ensures the effect runs only once on mount

  const [UserDetails, setUserDetails] = useState([]);

  const navigate = useNavigate();
const handleClick=(id)=>{
  navigate(`/show/${id}`);
}
 

  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-2xl text-green-500 font-extrabold'>showData all the data of student</h1>
      <table border="1" >
                  <thead>
                  <tr className='border-black border-2'>
                        <th className='border-r-2 border-black p-2'>username</th>
                        <th className='border-r-2 border-black p-2'>firstName</th>
                        <th className='border-r-2 border-black p-2'>LastName</th>
                        
                  </tr>
                  </thead>
                  <tbody>
                  {  
                    UserDetails.map((item, index) => (
                      <tr key={index} className='border-black border-2'>
                        <td className='border-r-2 border-black p-2'>{item.userName}</td>
                        <td className='border-r-2 border-black p-2'>{item.firstName}</td>
                        <td className='border-r-2 border-black p-2'>{item.lastName}</td> {/* Corrected casing for 'lastName' */}
                        
                        <td className='border-r-2 border-black p-2'><button className='bg-green-500 px-3 py-1 text-white rounded-md' onClick={()=>handleClick(item._id)}>show more</button></td>
                      </tr>
                    ))
                  }
     </tbody>
     </table>

    </div>
  )
}

export default ShowData