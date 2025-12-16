"use client";

import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'alert' | 'info' | 'success' | 'error';
  title: string;
  message: string;
  timestamp: string;
  dismissible?: boolean;
}

interface SystemNotificationsProps {
  notifications?: Notification[];
  onDismiss?: (id: string) => void;
}

const notificationStyles: Record<string, { bg: string; border: string; icon: React.ReactNode; textColor: string }> = {
  alert: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: <AlertCircle className="w-5 h-5 text-yellow-600" />,
    textColor: 'text-yellow-800',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <Info className="w-5 h-5 text-blue-600" />,
    textColor: 'text-blue-800',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    textColor: 'text-green-800',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: <XCircle className="w-5 h-5 text-red-600" />,
    textColor: 'text-red-800',
  },
};

export default function SystemNotifications({
  notifications = [
    {
      id: '1',
      type: 'alert',
      title: 'Pending Reviews',
      message: '324 applications are waiting for your review',
      timestamp: 'Today, 9:30 AM',
      dismissible: true,
    },
    {
      id: '2',
      type: 'info',
      title: 'System Maintenance',
      message: 'Scheduled maintenance is coming on Dec 20 from 2-4 PM UTC',
      timestamp: 'Today, 8:00 AM',
      dismissible: true,
    },
    {
      id: '3',
      type: 'success',
      title: 'New Applicants',
      message: '45 new applicants signed up in the last 24 hours',
      timestamp: 'Yesterday, 5:20 PM',
      dismissible: true,
    },
  ],
  onDismiss = () => {},
}: SystemNotificationsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">System Notifications</h2>

      {notifications.length === 0 ? (
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
          <p className="text-gray-600">No notifications at this time</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => {
            const style = notificationStyles[notification.type];
            return (
              <div
                key={notification.id}
                className={`${style.bg} border ${style.border} rounded-lg p-4 flex items-start gap-4`}
              >
                <div className="shrink-0 mt-0.5">{style.icon}</div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${style.textColor}`}>{notification.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                </div>
                {notification.dismissible && (
                  <button
                    onClick={() => onDismiss(notification.id)}
                    className="text-gray-400 hover:text-gray-600 shrink-0"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
