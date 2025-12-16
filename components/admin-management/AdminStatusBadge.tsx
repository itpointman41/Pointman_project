interface AdminStatusBadgeProps {
  status: 'active' | 'disabled';
}

const statusStyles: Record<string, { bg: string; text: string }> = {
  'active': { bg: 'bg-green-100', text: 'text-green-800' },
  'disabled': { bg: 'bg-gray-100', text: 'text-gray-800' },
};

const statusLabels: Record<string, string> = {
  'active': 'Active',
  'disabled': 'Disabled',
};

export default function AdminStatusBadge({ status }: AdminStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status].bg} ${statusStyles[status].text}`}
    >
      {statusLabels[status]}
    </span>
  );
}
