interface AdminManagementHeaderProps {
  title?: string;
  subtitle?: string;
  onBackClick?: () => void;
}

export default function AdminManagementHeader({
  title = 'Admin Management',
  subtitle = 'Manage admin accounts, roles, and access permissions',
  onBackClick,
}: AdminManagementHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {onBackClick && (
          <button
            onClick={onBackClick}
            className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1"
          >
            ← Back to Dashboard
          </button>
        )}
      </div>
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
  );
}
