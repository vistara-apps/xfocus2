'use client';

import { Home, Hash, Bell, Mail, Bookmark, User, Settings, TrendingUp, Filter } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Hash, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: Filter, label: 'Filters' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">DC</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Dan Coaching</p>
            <p className="text-xs text-gray-500">@dancoaching</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                item.active ? 'bg-gray-100 border-r-2 border-blue-500' : ''
              }`}
            >
              <Icon className={`w-5 h-5 ${item.active ? 'text-blue-500' : 'text-gray-600'}`} />
              <span className={`text-sm ${item.active ? 'text-blue-500 font-medium' : 'text-gray-700'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
