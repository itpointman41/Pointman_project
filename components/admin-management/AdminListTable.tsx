import { Eye, Edit, Lock, Unlock } from 'lucide-react';
import AdminRoleBadge from './AdminRoleBadge';
import AdminStatusBadge from './AdminStatusBadge';

interface AdminRecord {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'super-admin' | 'admin' | 'moderator';
  status: 'active' | 'disabled';
  lastLogin: string;
}

interface AdminListTableProps {
  admins?: AdminRecord[];
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onToggleStatus?: (id: string, currentStatus: 'active' | 'disabled') => void;
  loading?: boolean;
}

export default function AdminListTable({
  admins = [
    {
      id: '1',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@admin.com',
      role: 'super-admin',
      status: 'active',
      lastLogin: '2025-12-15 09:30 AM',
    },
    {
      id: '2',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@admin.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2025-12-14 03:15 PM',
    },
    {
      id: '3',
      firstName: 'Emma',
      lastName: 'Wilson',
      email: 'emma@admin.com',
      role: 'moderator',
      status: 'active',
      lastLogin: '2025-12-13 11:45 AM',
    },
    {
      id: '4',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael@admin.com',
      role: 'admin',
      status: 'disabled',
      lastLogin: '2025-11-20 02:00 PM',
    },
  ],
  onView = () => {},
  onEdit = () => {},
  onToggleStatus = () => {},
  loading = false,
}: AdminListTableProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Admin Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {admin.firstName} {admin.lastName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.email}</td>
                <td className="px-6 py-4 text-sm">
                  <AdminRoleBadge role={admin.role} />
                </td>
                <td className="px-6 py-4 text-sm">
                  <AdminStatusBadge status={admin.status} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.lastLogin}</td>
                <td className="px-6 py-4 text-sm space-x-2 flex items-center">
                  <button
                    onClick={() => onView(admin.id)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                    disabled={loading}
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onEdit(admin.id)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 hover:bg-green-100 rounded transition-colors"
                    disabled={loading}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onToggleStatus(admin.id, admin.status)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded transition-colors ${
                      admin.status === 'active'
                        ? 'bg-red-50 text-red-600 hover:bg-red-100'
                        : 'bg-green-50 text-green-600 hover:bg-green-100'
                    }`}
                    disabled={loading}
                  >
                    {admin.status === 'active' ? <Lock size={16} /> : <Unlock size={16} />}
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
