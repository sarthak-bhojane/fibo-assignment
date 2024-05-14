import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const data = [
  { date: '2024-05-10', percentage: 20 },
  { date: '2024-05-11', percentage: 40 },
  // More data points...
];

const ProgressGraph = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="percentage" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ProgressGraph;
