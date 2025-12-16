import AdminDashboardHeader from '@/components/admin/dashboard/AdminDashboardHeader';
import DashboardStatsCards from '@/components/admin/dashboard/DashboardStatsCards';
import AdminQuickActions from '@/components/admin/dashboard/AdminQuickActions';
import SystemNotifications from '@/components/admin/dashboard/SystemNotifications';
import ApplicationsStatusChart from '@/components/admin/dashboard/ApplicationsStatusChart';
import RecentApplicationsTable from '@/components/admin/dashboard/RecentApplicationsTable';
import TopSpecializationsSection from '@/components/admin/dashboard/TopSpecializationsSection';

export default function AdminDashboardPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminDashboardHeader adminName="Sarah" />

        {/* Stats Cards */}
        <DashboardStatsCards />

        {/* Quick Actions */}
        <AdminQuickActions />

        {/* Notifications */}
        <SystemNotifications />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Chart and Table */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Chart */}
            <ApplicationsStatusChart />

            {/* Recent Applications */}
            <RecentApplicationsTable />
          </div>

          {/* Right Column - Specializations */}
          <div>
            <TopSpecializationsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
