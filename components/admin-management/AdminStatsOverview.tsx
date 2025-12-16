import { Users, CheckCircle, XCircle, Crown } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface AdminStatsOverviewProps {
  totalAdmins?: number;
  activeAdmins?: number;
  disabledAdmins?: number;
  superAdmins?: number;
}

export default function AdminStatsOverview({
  totalAdmins = 12,
  activeAdmins = 10,
  disabledAdmins = 2,
  superAdmins = 3,
}: AdminStatsOverviewProps) {
  const stats: StatCard[] = [
    {
      label: 'Total Admins',
      value: totalAdmins,
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Active Admins',
      value: activeAdmins,
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Disabled Admins',
      value: disabledAdmins,
      icon: <XCircle className="w-8 h-8" />,
      color: 'bg-gray-50 text-gray-600',
    },
    {
      label: 'Super Admins',
      value: superAdmins,
      icon: <Crown className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            {stat.icon}
          </div>
          <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
