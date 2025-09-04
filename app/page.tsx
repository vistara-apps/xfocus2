'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentFilters from './components/ContentFilters';
import UserSettings from './components/UserSettings';
import SettingsPanel from './components/SettingsPanel';
import { Search, Plus, Mic } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      {/* Browser-like Header */}
      <div className="bg-white/90 backdrop-blur-sm px-6 py-3 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 min-w-96">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">ChronoFilter For</span>
            </div>
            <Plus className="w-5 h-5 text-gray-600" />
            <Mic className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex items-center space-x-4">
            <ConnectWallet />
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 h-full">
            {/* Dashboard - Left Column */}
            <div className="col-span-8">
              <Dashboard />
              
              {/* Content Filters - Bottom */}
              <div className="mt-6">
                <ContentFilters />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-span-4 space-y-6">
              <UserSettings />
              
              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <p className="text-sm text-gray-600">Activity</p>
                  <p className="text-lg font-bold text-gray-900">SM 4.4</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <p className="text-sm text-gray-600">Reports</p>
                  <p className="text-lg font-bold text-gray-900">SM 4.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Settings Panel */}
        <SettingsPanel />
      </div>
    </div>
  );
}
