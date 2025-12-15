type AdminUsersHeaderProps = {
  onCreate: () => void;
};

export default function AdminUsersHeader({onCreate}: AdminUsersHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <p className="mt-1 text-sm text-gray-600">Manage accounts for job seekers, employers, recruiters and system admins.</p>
      </div>
      <div>
        <button onClick={onCreate} className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">+ New User</button>
      </div>
    </div>
  )
}
