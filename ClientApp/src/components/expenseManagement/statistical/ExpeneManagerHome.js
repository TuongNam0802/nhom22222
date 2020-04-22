import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class ExpeneManagerHome extends Component {

  render() {
    const data = this.props.product;
    return (

      <ResponsiveContainer className="chart" height={350}>
        <LineChart
          width={600}
          height={350}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month"></XAxis>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="thu" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="chi" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

    );
  }
}

export default ExpeneManagerHome;