'use client';

import { ChevronRight } from 'lucide-react';

const settingsItems = [
  { label: 'Shares Profile', value: '', enabled: true },
  { label: 'ConUINGs', value: '', enabled: true },
  { label: 'Display Ethers', value: '', enabled: false },
  { label: 'Comment Save Criteria', value: 'SM 4.6x', enabled: false },
  { label: 'Con-filing', value: '', enabled: false },
  { label: 'HeartWitch', value: '', enabled: true },
  { label: 'PreHUng', value: '', enabled: false },
];

const bottomSettings = [
  { label: 'Download', value: '', enabled: false },
  { label: 'Marge', value: '53.2mm', hasArrow: true },
  { label: 'ManhOut', value: '3.0s', hasArrow: true },
  { label: 'Force plugins', value: '', enabled: false },
];

export default function SettingsPanel() {
  return (
    <div className="w-80 bg-gray-900 text-white p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Settings</h2>
        <div className="text-right">
          <p className="text-2xl font-bold">$3,556</p>
        </div>
      </div>

      {/* Main Settings */}
      <div className="space-y-4">
        {settingsItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-sm">{item.label}</span>
            </div>
            <div className="flex items-center space-x-2">
              {item.value && (
                <span className="text-sm text-gray-400">{item.value}</span>
              )}
              <div className={`w-8 h-4 rounded-full ${item.enabled ? 'bg-blue-500' : 'bg-gray-600'} relative`}>
                <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all ${item.enabled ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Section */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-sm font-medium mb-4">Settings</h3>
        <div className="space-y-4">
          {bottomSettings.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.value && (
                  <span className="text-sm text-gray-400">{item.value}</span>
                )}
                {item.hasArrow ? (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                ) : (
                  <div className={`w-8 h-4 rounded-full ${item.enabled ? 'bg-blue-500' : 'bg-gray-600'} relative`}>
                    <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all ${item.enabled ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
