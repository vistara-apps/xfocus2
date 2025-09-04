'use client';

interface UserSettingProps {
  name: string;
  handle: string;
  amount: string;
  avatar: string;
  enabled: boolean;
}

const users: UserSettingProps[] = [
  {
    name: 'Amy Cruise',
    handle: '@amycruise',
    amount: '',
    avatar: 'AC',
    enabled: true,
  },
  {
    name: 'Ad Future',
    handle: '@adfuture',
    amount: '',
    avatar: 'AF',
    enabled: false,
  },
  {
    name: 'Ben George',
    handle: '@bengeorge',
    amount: '$3,541',
    avatar: 'BG',
    enabled: true,
  },
  {
    name: 'Public Design',
    handle: '@publicdesign',
    amount: '',
    avatar: 'PD',
    enabled: true,
  },
];

export default function UserSettings() {
  return (
    <div className="bg-white rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">User settings</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-gray-500">Discussion</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">3</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">{user.avatar}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.handle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {user.amount && (
                <span className="text-sm font-semibold text-gray-900">{user.amount}</span>
              )}
              <div className={`w-8 h-4 rounded-full ${user.enabled ? 'bg-blue-500' : 'bg-gray-300'} relative`}>
                <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all ${user.enabled ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-gray-200">
        <p className="text-xs text-gray-500">Game Recycling</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-gray-700">Con Manage</span>
        </div>
      </div>
    </div>
  );
}
