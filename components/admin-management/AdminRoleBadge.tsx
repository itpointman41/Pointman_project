interface AdminRoleBadgeProps {
  role: 'super-admin' | 'admin' | 'moderator';
}

const roleStyles: Record<string, { bg: string; text: string }> = {
  'super-admin': { bg: 'bg-red-100', text: 'text-red-800' },
  'admin': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'moderator': { bg: 'bg-purple-100', text: 'text-purple-800' },
};

const roleLabels: Record<string, string> = {
  'super-admin': 'Super Admin',
  'admin': 'Admin',
  'moderator': 'Moderator',
};

export default function AdminRoleBadge({ role }: AdminRoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${roleStyles[role].bg} ${roleStyles[role].text}`}
    >
      {roleLabels[role]}
    </span>
  );
}
