
import { FaUsers } from 'react-icons/fa';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../../styles/dashboard.module.css'
const DashboardItems = () => {
    const data = [
        {
          name: 'Nav 1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Nav 2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Nav 3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Nav 4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Nav 5',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Nav 6',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Nav 7',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <>
        <div className='text-[#102048] pl-8 pb-16 text-3xl font-bold'>Dashboard</div>
        <p className='pl-8 pb-4 font-semibold'>Company Status</p>
        <div className={styles.box_container}>
            <div className='bg-white py-10 px-6 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-300'>Total Employee</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">450</h2>
                
              
              

              <button className='bg-[#1E2772] ml-10 px-4 py-1 text-white font-semibold rounded-lg'>View All</button>
       
            </div>
            <hr  />
            <div className="flex flex-col mx-2  mt-5 justify-center">
            <div className="flex -space-x-4">
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-gray-100 border-gray-700">+</span>
            </div>
        </div>
            </div>
            <div className='bg-white py-10 px-6 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-300'>Attend Today</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">420</h2>
                
              
              

              <button className='bg-[#1E2772] ml-10 px-4 py-1 text-white font-semibold rounded-lg'>View All</button>
       
            </div>
            <hr  />
            <div className="flex flex-col mx-2  mt-5 justify-center">
            <div className="flex -space-x-4">
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-gray-100 border-gray-700">+</span>
            </div>
        </div>
            </div>
            <div className='bg-white py-10 px-6 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-300'>Employees on Leave</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">15</h2>
                
              
              

              <button className='bg-[#1E2772] ml-10 px-4 py-1 text-white font-semibold rounded-lg'>View All</button>
       
            </div>
            <hr  />
            <div className="flex flex-col mx-2  mt-5 justify-center">
            <div className="flex -space-x-4">
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-gray-100 border-gray-700">+</span>
            </div>
        </div>
            </div>
            <div className='bg-white py-10 px-6 rounded-lg'>
                <div className='flex items-center'>
                <FaUsers></FaUsers>
                   <h2 className='px-2 text-sm font-medium text-gray-300'>New Expense Request</h2> 
                    </div>
            <div className="flex justify-between  items-center my-10">
              
                <h2 className="text-3xl font-bold">5</h2>
                
              
              

              <div className='bg-[#1E2772] ml-10 px-3 py-1 text-white font-semibold rounded-lg'>View All</div>
       
            </div>
            <hr  />
            <div className="flex flex-col mx-2  mt-5 justify-center">
            <div className="flex -space-x-4">
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <img alt="" className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-gray-100 border-gray-700">+</span>
            </div>
        </div>
            </div>

           
          </div>

          
          <div className='flex flex-col md:flex-row pl-0 gap-10'>
          
          <div>
          <p className='pl-8 py-10 font-semibold'>Expense Report</p>
            <div className='bg-white p-7 ml-0 md:ml-7 rounded-lg'>
            <div className='flex'>
                <div className='flex text-sm items-center gap-1 md:gap-10'>
                <p className='text-black'>Day</p>
                <p className='text-gray-400'>Week</p>
                <p className='text-gray-400'>Month</p>
                <p className='text-gray-400'>Year</p>
                </div>
                <div className='ml-3 md:ml-10'>
                    <p className='export-btnn'>Export Details</p>
                </div>
               
            </div>
            <p className='text-4xl font-bold mt-4'>$45000</p>
            <AreaChart
            className='block md:hidden'
          width={300}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
            <XAxis  dataKey="name" />
          
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            
        
            <AreaChart
            className='hidden md:block'
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
            <XAxis  dataKey="name" />
          
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            </div>
            </div> 
          <div>
          <p className='pl-8 py-10 font-semibold'>Task Summary</p>
            <div className='p-7 ml-7 border-dashed border-2 border-indigo-600 w-[300px] rounded-lg'>
                <p>Total task</p>
                <p className='font-semibold mb-5'>112</p>
                <p className='mt-5'>Completed</p>
            <ProgressBar 
            completed="50/80"
            completedClassName="barCompleted"
            labelClassName="label"
            ></ProgressBar>
                <p className='mt-5'>In Progress</p>
            <ProgressBar 
            completed="50/80"
            completedClassName="barCompleted"
            labelClassName="label"
            ></ProgressBar>
                <p className='mt-5'>Pending</p>
            <ProgressBar 
            completed="50/80"
            completedClassName="barCompleted"
            labelClassName="label"
            ></ProgressBar>
            
            </div>
            </div> 
            
          </div>
            
        </>
    );
};

export default DashboardItems;