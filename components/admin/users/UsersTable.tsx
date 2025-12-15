import UserStatusBadge from './UserStatusBadge'
import UserActionsMenu from './UserActionsMenu'
import { Eye } from 'lucide-react'

export default function UsersTable({users, onView, onEdit, onReset, onToggleStatus, onDelete}){
  return (
    <div className="overflow-x-auto overflow-y-visible bg-white border rounded-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Full Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Role</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Date Registered</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Last Login</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500">ID: {user.id}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{user.role}</td>
              <td className="px-4 py-3 whitespace-nowrap"><UserStatusBadge status={user.status} /></td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                <time dateTime={user.createdAt}>{new Date(user.createdAt).toISOString().split('T')[0]}</time>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                {user.lastLogin ? <time dateTime={user.lastLogin}>{new Date(user.lastLogin).toISOString()}</time> : '—'}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right relative">
                <div className="flex items-center justify-end space-x-2">
                  <button onClick={()=>onView(user)} className="p-1 rounded hover:bg-gray-100 text-gray-600" aria-label="View user details">
                    <Eye className="w-5 h-5" />
                  </button>
                  <UserActionsMenu user={user} onView={onView} onEdit={onEdit} onReset={onReset} onToggleStatus={onToggleStatus} onDelete={onDelete} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
