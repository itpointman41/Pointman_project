import { Users } from 'lucide-react';

interface EmptyAdminStateProps {
  onAddAdmin?: () => void;
}

export default function EmptyAdminState({ onAddAdmin = () => {} }: EmptyAdminStateProps) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-12 text-center">
      <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Admin Accounts Found</h3>
      <p className="text-gray-600 mb-6">
        There are currently no admin accounts in the system. Create one to get started.
      </p>
      <button
        onClick={onAddAdmin}
        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
      >
        + Add First Admin
      </button>
    </div>
  );
}
