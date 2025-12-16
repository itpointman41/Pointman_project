"use client";

import { Search } from 'lucide-react';

interface AdminActionsBarProps {
  onAddAdmin?: () => void;
  onSearch?: (query: string) => void;
  onFilterRole?: (role: string) => void;
  searchValue?: string;
  selectedRole?: string;
}

export default function AdminActionsBar({
  onAddAdmin = () => {},
  onSearch = () => {},
  onFilterRole = () => {},
  searchValue = '',
  selectedRole = 'all',
}: AdminActionsBarProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Role Filter */}
        <select
          value={selectedRole}
          onChange={(e) => onFilterRole(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">All Roles</option>
          <option value="super-admin">Super Admin</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>

        {/* Add Admin Button */}
        <button
          onClick={onAddAdmin}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
        >
          + Add New Admin
        </button>
      </div>
    </div>
  );
}
