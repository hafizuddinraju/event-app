
import React, { useContext, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from '../Spinner/Spinner';
import { getUsers } from '../../lib/helperUser';
import { useEffect } from 'react';
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
                  <div className='mt-10 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6'>
                    {
                      p?.eventUpdate >=10?
                      <div className="radial-progress text-sky-500" style={{ "--value": "10", "--size": "12rem", "--thickness": "2rem" }}>10%</div>
                      :
                      <div className="radial-progress text-gray-500" style={{ "--value": "10", "--size": "12rem", "--thickness": "2rem" }}>10%</div>

                    }

                    {
                      p?.eventUpdate >= 30?
                      <div className="radial-progress text-sky-500" style={{ "--value": "30", "--size": "12rem", "--thickness": "2rem" }}>30%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "30", "--size": "12rem", "--thickness": "2rem" }}>30%</div>

                    }
                    {
                      p?.eventUpdate >= 40?
                      <div className="radial-progress text-sky-500" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }}>40%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }}>40%</div>

                    }
                    {
                      p?.eventUpdate >= 50?
                      <div className="radial-progress text-orange-500" style={{ "--value": "50", "--size": "12rem", "--thickness": "2rem" }}>50%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "50", "--size": "12rem", "--thickness": "2rem" }}>50%</div>

                    }
                    {
                      p?.eventUpdate >= 70?
                      <div className="radial-progress text-sky-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>

                    }
                    {
                      p?.eventUpdate >= 80?
                      <div className="radial-progress text-sky-500" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }}>80%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }}>80%</div>

                    }
                    {
                      p?.eventUpdate >= 90?
                      <div className="radial-progress text-sky-500" style={{ "--value": "90", "--size": "12rem", "--thickness": "2rem" }}>90%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "90", "--size": "12rem", "--thickness": "2rem" }}>90%</div>

                    }
                    {
                      p?.eventUpdate >= 100?
                      <div className="radial-progress text-green-500" style={{ "--value": "100", "--size": "12rem", "--thickness": "2rem" }}>100%</div>
                      :
                      <div className="radial-progress text-gray-300" style={{ "--value": "100", "--size": "12rem", "--thickness": "2rem" }}>100%</div>

                    }
                 
                  
                  
                  
                  </div>
                  
                  
                  </div>
                )
              })
            }
            {
              !paymentEvent?
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
          <h1>Admin Call</h1>
          </>
          :
          ''

        }
        
        </>
    );
};

export default DashboardItems;