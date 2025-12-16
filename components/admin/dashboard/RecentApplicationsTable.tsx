"use client";

import { Eye } from 'lucide-react';

interface ApplicationRecord {
  id: string;
  applicantName: string;
  jobTitle: string;
  specialization: string;
  dateApplied: string;
  status: 'submitted' | 'review' | 'interview' | 'hired' | 'rejected';
}

interface RecentApplicationsTableProps {
  applications?: ApplicationRecord[];
  onViewDetails?: (id: string) => void;
}

const statusStyles: Record<string, { bg: string; text: string }> = {
  submitted: { bg: 'bg-blue-100', text: 'text-blue-800' },
  review: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  interview: { bg: 'bg-purple-100', text: 'text-purple-800' },
  hired: { bg: 'bg-green-100', text: 'text-green-800' },
  rejected: { bg: 'bg-red-100', text: 'text-red-800' },
};

const statusLabels: Record<string, string> = {
  submitted: 'Submitted',
  review: 'Under Review',
  interview: 'Interview',
  hired: 'Hired',
  rejected: 'Rejected',
};

export default function RecentApplicationsTable({
  applications = [
    { id: '1', applicantName: 'John Smith', jobTitle: 'Software Engineer', specialization: 'Backend Development', dateApplied: '2025-12-14', status: 'review' },
    { id: '2', applicantName: 'Sarah Johnson', jobTitle: 'UI/UX Designer', specialization: 'Frontend Development', dateApplied: '2025-12-13', status: 'interview' },
    { id: '3', applicantName: 'Mike Chen', jobTitle: 'Data Analyst', specialization: 'Data Science', dateApplied: '2025-12-12', status: 'submitted' },
    { id: '4', applicantName: 'Emily Davis', jobTitle: 'Full Stack Developer', specialization: 'Full Stack Development', dateApplied: '2025-12-11', status: 'hired' },
    { id: '5', applicantName: 'Alex Rodriguez', jobTitle: 'DevOps Engineer', specialization: 'Cloud Infrastructure', dateApplied: '2025-12-10', status: 'rejected' },
  ],
  onViewDetails = () => {},
}: RecentApplicationsTableProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Applicant Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Job Title</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date Applied</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{app.applicantName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{app.jobTitle}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{app.specialization}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{app.dateApplied}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyles[app.status].bg
                    } ${statusStyles[app.status].text}`}
                  >
                    {statusLabels[app.status]}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => onViewDetails(app.id)}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 hover:bg-green-100 rounded transition-colors"
                  >
                    <Eye size={16} />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
