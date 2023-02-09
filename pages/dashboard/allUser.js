import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import LayoutDashboard from '../../layout/LayoutDashboard';
import { useQuery } from '@tanstack/react-query';
import { deleteUser, getUsers, updateUser } from '../../lib/helperUser';
import Spinner from '../../components/Spinner/Spinner';
import { toast } from 'react-toastify';
const Attendance = () => {
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

      const deleteUserData = (id)=>{
        deleteUser(id).then(res =>{
            toast.success('User Delete Successful', {autoClose:500})
            refetch();
        })
        .catch(error =>{
            toast.error(error, {autoClose:1000})
        })

      }

      const UpdateToAdmin =(email)=>{
        const info = {role: 'Admin'}
        updateUser(email, info)
        .then(res =>{
            refetch();
            toast.success('Add to Admin', {autoClose:500})
        })
        .catch(error =>{
            toast.error(error, {autoClose:1000});
        })

      }
  
      if(isLoading){
        return <Spinner></Spinner>
      }
    return (
        <>
       
        <title>All Users</title>
      
        <LayoutDashboard>
        <div className='flex justify-between items-center'>
            <h2 className=' text-[#102048] text-3xl font-bold py-2 px-3 '>AllUser</h2>
            <div className='flex items-center gap-6'>
                <p className='bg-[#1E2772] text-white py-2 px-3 rounded-lg shadow-md'>Download Report</p>
                <IoSettingsSharp className='text-2xl text-[#1E2772]'></IoSettingsSharp>
            </div>
        </div>
    
            <div className="report-container">
            

            <div className="report-body">
            <div className="report-topic-heading">   
<div className="relative overflow-x-auto p-6 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
            <hr />
        </thead>
        
        <tbody>
            {
                alluser?.map(user =>{
                    return(
                        <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user?.name}
                        </th>
                        <td className="px-6 py-4">
                            {user?.email}
                        </td>
                        <td onClick={()=>UpdateToAdmin(user?.email)} className="px-6 py-4">
                            {
                                user?.role == 'User'?
                                <div className='bg-gray-500 cursor-pointer  text-white w-1/2 text-center rounded-lg'>{user?.role}</div>
                                :
                                <div className='bg-sky-500 cursor-pointer text-white w-1/2 text-center rounded-lg'>{user?.role}</div>

                            }
                        
                        </td>
                        <td className="px-6 py-4">
                            <AiFillDelete onClick={() => deleteUserData(user?._id)} className='text-3xl text-center text-[#ea0606]'></AiFillDelete>
                        </td>
                    </tr>

                    )
                })
            }
           
            
            
            
            
            
            
        </tbody>
    </table>
    
</div>
</div>

            </div>
          </div>
            
        </LayoutDashboard>
        </>
    );
};

export default Attendance;