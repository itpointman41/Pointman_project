import { Users, FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface DashboardStatsCardsProps {
  totalApplicants?: number;
  totalApplications?: number;
  underReview?: number;
  approved?: number;
  rejected?: number;
}

export default function DashboardStatsCards({
  totalApplicants = 2450,
  totalApplications = 5820,
  underReview = 324,
  approved = 1850,
  rejected = 280,
}: DashboardStatsCardsProps) {
  const stats: StatCard[] = [
    {
      label: 'Total Applicants',
      value: totalApplicants,
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Total Applications',
      value: totalApplications,
      icon: <FileText className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Under Review',
      value: underReview,
      icon: <Clock className="w-8 h-8" />,
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      label: 'Approved / Hired',
      value: approved,
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Rejected',
      value: rejected,
      icon: <XCircle className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            {stat.icon}
          </div>
          <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
