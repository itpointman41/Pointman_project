"use client";

import { Users, FileText, Clock, Settings } from 'lucide-react';

interface QuickActionItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href?: string;
  onClick?: () => void;
}

interface AdminQuickActionsProps {
  actions?: QuickActionItem[];
}

export default function AdminQuickActions({
  actions = [
    {
      id: 'manage-applicants',
      label: 'Manage Applicants',
      description: 'View and manage all applicant profiles',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-50 hover:bg-blue-100 text-blue-600',
      href: '/admin/users',
    },
    {
      id: 'manage-applications',
      label: 'Manage Applications',
      description: 'Review and process job applications',
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-green-50 hover:bg-green-100 text-green-600',
      href: '/admin/applications',
    },
    {
      id: 'pending-reviews',
      label: 'Pending Reviews',
      description: 'Review applications awaiting action',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-600',
      href: '/admin/pending',
    },
    {
      id: 'system-settings',
      label: 'System Settings',
      description: 'Configure platform settings',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-purple-50 hover:bg-purple-100 text-purple-600',
      href: '/admin/settings',
    },
  ],
}: AdminQuickActionsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.href || '#'}
            onClick={(e) => {
              if (action.onClick) {
                e.preventDefault();
                action.onClick();
              }
            }}
            className={`p-6 rounded-lg border border-gray-200 transition-all ${action.color} group cursor-pointer`}
          >
            <div className="mb-3">{action.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-current">{action.label}</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700">{action.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
