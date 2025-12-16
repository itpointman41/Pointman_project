interface AdminDashboardHeaderProps {
  adminName?: string;
  date?: string;
}

export default function AdminDashboardHeader({ adminName = 'Admin', date }: AdminDashboardHeaderProps) {
  const currentDate = date || new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="text-gray-600 mt-2">Overview of platform activity and applicant management</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">Welcome back, {adminName}</p>
        <p className="text-sm text-gray-500">{currentDate}</p>
      </div>
    </div>
  );
}
