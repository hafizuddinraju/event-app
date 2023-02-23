
import React, { useContext, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Spinner/Spinner';
import { getUsers } from '../../lib/helperUser';
import { useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { getSinglePayment } from '../../lib/paymentIssueHelper';
const DashboardItems = () => {
  const { user } = useContext(AuthContext);
  const [paymentEvent, setPaymentEvent] = useState([])
  const {
    data: alluser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getUsers();
      return res;
    },
  });

  useEffect(()=>{
   getSinglePayment(user?.email)
   .then((res) =>{
    setPaymentEvent(res)
   })
   .catch(error =>{
    console.log(error)
   })
   
   
     

  },[user?.email])
  console.log(paymentEvent)

  const dataFilter = alluser?.filter(data => data.email === user.email)

  
  if (isLoading) {
    return <Spinner></Spinner>
  }
  
    
    return (
        <>
        <div className='text-[#102048] pl-8 pb-16 text-3xl font-bold'>Dashboard</div>
        {
            dataFilter[0]?.role == 'User'?
            <>
            {
              paymentEvent?.map(p =>{
                return(
                  <div key={p._id} className='mb-6'>
                   <p className='  text-center text-sky-500 font-semibold'>{p?.eventName} </p>
                  <div className='mt-10 bg-white py-10 rounded-lg px-5 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                    {
                      p?.eventUpdate >=10?
                      <div className="radial-progress text-sky-500" style={{ "--value": "10", "--size": "10rem", "--thickness": "2rem" }}>10%</div>
                      :
                      <div className="radial-progress text-gray-500" style={{ "--value": "10", "--size": "10rem", "--thickness": "2rem" }}>10%</div>

                    }

                    {
                      p?.eventUpdate >= 30?
                      <div className="radial-progress text-sky-500" style={{ "--value": "30", "--size": "10rem", "--thickness": "2rem" }}>30%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "30", "--size": "10rem", "--thickness": "2rem" }}>30%</div>

                    }
                    {
                      p?.eventUpdate >= 40?
                      <div className="radial-progress text-sky-500" style={{ "--value": "40", "--size": "10rem", "--thickness": "2rem" }}>40%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "40", "--size": "10rem", "--thickness": "2rem" }}>40%</div>

                    }
                    {
                      p?.eventUpdate >= 50?
                      <div className="radial-progress text-orange-500" style={{ "--value": "50", "--size": "10rem", "--thickness": "2rem" }}>50%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "50", "--size": "10rem", "--thickness": "2rem" }}>50%</div>

                    }
                    {
                      p?.eventUpdate >= 70?
                      <div className="radial-progress text-sky-500" style={{ "--value": "70", "--size": "10rem", "--thickness": "2rem" }}>70%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "70", "--size": "10rem", "--thickness": "2rem" }}>70%</div>

                    }
                    {
                      p?.eventUpdate >= 80?
                      <div className="radial-progress text-sky-500" style={{ "--value": "80", "--size": "10rem", "--thickness": "2rem" }}>80%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "80", "--size": "10rem", "--thickness": "2rem" }}>80%</div>

                    }
                    {
                      p?.eventUpdate >= 90?
                      <div className="radial-progress text-sky-500" style={{ "--value": "90", "--size": "10rem", "--thickness": "2rem" }}>90%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "90", "--size": "10rem", "--thickness": "2rem" }}>90%</div>

                    }
                    {
                      p?.eventUpdate >= 100?
                      <div className="radial-progress text-green-500" style={{ "--value": "100", "--size": "10rem", "--thickness": "2rem" }}>100%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "100", "--size": "10rem", "--thickness": "2rem" }}>100%</div>

                    }
                 
                  
                  
                  
                  </div>
                  
                  
                  </div>
                )
              })
            }
            {
              paymentEvent.length === 0?
              <>
              <p className='  text-center text-sky-500 font-semibold'> No Booking and No Payment. please Booking and Payment! </p>
              </>
              :
              ""
            }
            
            </>
            :
            ''
        }

        {
          dataFilter[0]?.role == 'Admin'?
          <>
          <div className='grid lg:mx-10 md:mx-7 mx-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7'>
          
          <div className='bg-white py-10 px-10 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-400'>Total Users</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">{alluser?.length}</h2>
                
              
              

                <div className="radial-progress  text-sky-300" style={{ "--value": "60", "--size": "10rem", "--thickness": "2rem" }}>60%</div>
       
            </div>
           
           
            </div>
          <div className='bg-white py-10 px-10 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-400'>Total Payment</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">50</h2>
              
                <div className="radial-progress  text-green-300" style={{ "--value": "100", "--size": "10rem", "--thickness": "2rem" }}>100%</div>
       
            </div>
            
            </div>
          <div className='bg-white py-10 px-10 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-300'>Total Employee</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">6</h2>
                
              
              

                <div className="radial-progress  text-green-300" style={{ "--value": "100", "--size": "10rem", "--thickness": "2rem" }}>100%</div>
       
            </div>
            
            </div>
            

          </div>
          </>
          :
          ''

        }
        
        </>
    );
};

export default DashboardItems;