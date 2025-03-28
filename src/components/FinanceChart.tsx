"use client"

import React from 'react';
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    exponse: 2400,
  },
  {
    name: 'Fab',
    income: 3000,
    exponse: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    exponse: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    exponse: 3908,
  },
  {
    name: 'May',
    income: 1890,
    exponse: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    exponse: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    exponse: 4300,
  },
  {
    name: 'Aug',
    income: 2490,
    exponse: 7300,
  },
  {
    name: 'Jul',
    income: 3490,
    exponse: 4300,
  },
  {
    name: 'Oct',
    income: 4890,
    exponse: 4300,
  },
  {
    name: 'Nov',
    income: 3790,
    exponse: 4500,
  },
  {
    name: 'Dec',
    income: 3200,
    exponse: 4850,
  },
];


const FinanceChart = () => {
    return (
        

        <div className='bg-white rounded-xl w-full h-full p-4'> 
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,

                }}
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10}/>
                <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20}/>
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
                <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                <Line type="monotone" dataKey="exponse" stroke="#CFCEFF" strokeWidth={5}  />
                </LineChart>
            </ResponsiveContainer>
        </div>  

    );
};

export default FinanceChart;