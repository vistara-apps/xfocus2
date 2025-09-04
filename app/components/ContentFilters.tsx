'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 600 },
  { month: 'Apr', value: 400 },
  { month: 'May', value: 500 },
  { month: 'Jun', value: 700 },
  { month: 'Jul', value: 800 },
  { month: 'Aug', value: 600 },
  { month: 'Sep', value: 900 },
  { month: 'Oct', value: 750 },
  { month: 'Nov', value: 850 },
  { month: 'Dec', value: 950 },
];

export default function ContentFilters() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Content Filterers</h2>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">$19,608</p>
          <p className="text-xs text-gray-500">FILTERING 2024</p>
        </div>
      </div>

      <div className="h-40 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              fill="url(#gradient)"
              radius={[2, 2, 0, 0]}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">E</span>
            </div>
            <span className="text-sm text-gray-700">EMC - Future Media</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">S</span>
            </div>
            <span className="text-sm text-gray-700">S.red</span>
          </div>
        </div>
      </div>
    </div>
  );
}
