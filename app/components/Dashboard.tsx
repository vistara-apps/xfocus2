'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from './StatCard';

const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 4000 },
  { name: 'May', value: 5000 },
  { name: 'Jun', value: 7000 },
  { name: 'Jul', value: 8000 },
  { name: 'Aug', value: 6000 },
];

const pieData = [
  { name: 'Filtered', value: 75, color: '#3B82F6' },
  { name: 'Remaining', value: 25, color: '#E5E7EB' },
];

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-2xl p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">ChronoFilter</h1>
          <p className="text-blue-200">Coordinated follow on X Behavior</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm">Series</span>
            <span className="text-lg font-semibold">32.3%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">6,679.4</span>
          </div>
          <div className="w-20 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={15}
                  outerRadius={25}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="h-48 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#93C5FD' }}
            />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#60A5FA" 
              strokeWidth={2}
              dot={{ fill: '#60A5FA', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-effect rounded-lg p-4">
          <p className="text-xs text-blue-200 font-medium">Experience</p>
          <p className="text-xl font-bold mt-1">$14.4 k</p>
          <p className="text-xs text-blue-300 mt-1">millionaire</p>
        </div>
        <div className="glass-effect rounded-lg p-4">
          <p className="text-xs text-blue-200 font-medium">Status</p>
          <p className="text-xl font-bold mt-1">H.96%</p>
        </div>
        <div className="glass-effect rounded-lg p-4">
          <p className="text-xs text-blue-200 font-medium">Achievement</p>
          <p className="text-xl font-bold mt-1">$365,525</p>
        </div>
        <div className="glass-effect rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-1"></div>
            <p className="text-xs text-blue-200">Style Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
