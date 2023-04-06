import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const students = [
        { id: 1, name: 'Student 1', phy: 80, che: 90, math: 70 },
        { id: 2, name: 'Student 2', phy: 70, che: 85, math: 90 },
        { id: 3, name: 'Student 3', phy: 95, che: 75, math: 80 },
        { id: 4, name: 'Student 4', phy: 60, che: 80, math: 65 },
        { id: 5, name: 'Student 5', phy: 85, che: 95, math: 90 },
        { id: 6, name: 'Student 6', phy: 70, che: 80, math: 75 },
        { id: 7, name: 'Student 7', phy: 90, che: 85, math: 95 },
        { id: 8, name: 'Student 8', phy: 75, che: 70, math: 80 },
        { id: 9, name: 'Student 9', phy: 80, che: 85, math: 90 },
        { id: 10, name: 'Student 10', phy: 90, che: 75, math: 80 },
        { id: 11, name: 'Student 11', phy: 85, che: 90, math: 75 },
        { id: 12, name: 'Student 12', phy: 70, che: 80, math: 90 },
      ];
      

    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={students}
            >
                <Line dataKey="phy"></Line>
                <XAxis dataKey="name" />

                <Line stroke="#82ca9d" dataKey="math"></Line>
                <YAxis />
                <Tooltip />
                
            </LineChart>
        </div>
    );
};

export default Dashboard;