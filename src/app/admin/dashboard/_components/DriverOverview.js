'use client';

import { DatePicker, Skeleton } from 'antd';
import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import moment from 'moment';

const UserOverView = ({ driverData }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  // Dummy data for earnings
  // const dummyEarningsData = {
  //   2025: [
  //     { month: 'Jan', earning: 7000 },
  //     { month: 'Feb', earning: 8000 },
  //     { month: 'Mar', earning: 9000 },
  //     { month: 'Apr', earning: 9500 },
  //     { month: 'May', earning: 1000 },
  //     { month: 'Jun', earning: 1500 },
  //     { month: 'Jul', earning: 1100 },
  //     { month: 'Aug', earning: 11500 },
  //     { month: 'Sep', earning: 1200 },
  //     { month: 'Oct', earning: 12500 },
  //     { month: 'Nov', earning: 1000 },
  //     { month: 'Dec', earning: 3500 },
  //   ],
  // };

  const dummyEarningsData = driverData?.data?.monthlyUsers?.map((item) => ({
    month: item.month,
    earning: item.total,
  }));

  const handleChange = (date, dateString) => {
    setSelectedYear(dateString); // DatePicker returns the year in 'YYYY' format
  };

  // Get chart data based on selected year or default to 2025 (current year)
  // const chartData = selectedYear
  //   ? dummyEarningsData[selectedYear] || dummyEarningsData['2025']
  //   : dummyEarningsData['2025'];

  return (
    <div className="w-full rounded-xl bg-[#ffffff] p-6 xl:w-full">
      <div className="text-black mb-10 flex items-center justify-between">
        <h1 className="text-xl font-medium">Driver Overview</h1>
        <div className="flex gap-x-4">
          {/* <DatePicker
            value={selectedYear ? moment(selectedYear, 'YYYY') : null}
            onChange={handleChange}
            picker="year"
            placeholder="Select Year"
            style={{ width: 120 }}
          /> */}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={dummyEarningsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#5dd3a6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#5dd3a6" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <XAxis tickMargin={10} axisLine={false} tickLine={false} dataKey="month" />

          <YAxis tickMargin={20} axisLine={false} tickLine={false} />

          <CartesianGrid opacity={0.1} stroke="#080E0E" strokeDasharray="3 3" />

          <Tooltip
            formatter={(value) => [`Monthly Driver Growth: ${value}`]}
            contentStyle={{
              color: 'var(--primary-green)',
              fontWeight: '500',
              borderRadius: '5px',
              border: '0',
            }}
            itemStyle={{ color: '#1B70A6' }}
          />

          <Area
            activeDot={{ fill: '#1B70A6' }}
            type="monotone"
            dataKey="earning"
            strokeWidth={0}
            stroke="blue"
            fill="url(#color)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverView;
