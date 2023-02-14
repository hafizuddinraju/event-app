
import { FaUsers } from 'react-icons/fa';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,PieChart, Pie } from 'recharts';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from '../../styles/dashboard.module.css'
const DashboardItems = () => {
    // const data = [
    //     {
    //       name: 'Nav 1',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Nav 2',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Nav 3',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Nav 4',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //     },
    //     {
    //       name: 'Nav 5',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //     },
    //     {
    //       name: 'Nav 6',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //     },
    //     {
    //       name: 'Nav 7',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //     },
    //   ];
      const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
    return (
        <>
        <div className='text-[#102048] pl-8 pb-16 text-3xl font-bold'>Dashboard</div>
        <p className='  text-center font-semibold'>Event Name: </p>

          
          <div className='flex flex-col md:flex-row pl-0 gap-10'>

          
          
          {/* <div>
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
            </div>  */}
          <div>
          {/* <p className='pl-8 py-10 font-semibold'>Task Summary</p> */}
            {/* <div className='p-7 ml-7 border-dashed border-2 border-indigo-600 w-[300px] rounded-lg'>
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
            
            </div> */}
            </div> 
            
          </div>
          <div className='mt-10 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6'>
          <div className="radial-progress text-sky-500" style={{ "--value": "10", "--size": "12rem", "--thickness": "2rem" }}>10%</div>
          <div className="radial-progress text-sky-500" style={{ "--value": "30", "--size": "12rem", "--thickness": "2rem" }}>30%</div>
          <div className="radial-progress text-sky-500" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }}>40%</div>
          <div className="radial-progress text-orange-400" style={{ "--value": "50", "--size": "12rem", "--thickness": "2rem" }}>50%</div>
          <div className="radial-progress text-sky-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
          <div className="radial-progress text-sky-500" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }}>80%</div>
          <div className="radial-progress text-sky-500" style={{ "--value": "90", "--size": "12rem", "--thickness": "2rem" }}>90%</div>
          <div className="radial-progress text-green-500" style={{ "--value": "100", "--size": "12rem", "--thickness": "2rem" }}>100%</div>
          </div>


          {/* <div style={{ width: '100%', height: 300 }}>

          
          
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div> */}
            
        </>
    );
};

export default DashboardItems;