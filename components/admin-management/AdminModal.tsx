"use client";

import { X } from 'lucide-react';
import { useState } from 'react';

interface AdminModalProps {
  isOpen: boolean;
  title: string;
  type: 'add' | 'edit' | 'confirm-disable' | 'confirm-enable';
  adminName?: string;
  onClose: () => void;
  onConfirm: (data?: { firstName: string; lastName: string; email: string; role: string }) => void;
  loading?: boolean;
}

export default function AdminModal({
  isOpen,
  title,
  type,
  adminName = '',
  onClose,
  onConfirm,
  loading = false,
}: AdminModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'admin',
  });

  if (!isOpen) return null;

  const isConfirmType = type.startsWith('confirm');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {isConfirmType ? (
          // Confirmation Modal
          <div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {type === 'confirm-disable' ? 'disable' : 'enable'} admin access for{' '}
              <span className="font-semibold">{adminName}</span>? This action can be reversed.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={() => onConfirm()}
                className={`px-4 py-2 text-white rounded-lg transition-colors ${
                  type === 'confirm-disable'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                } disabled:opacity-50`}
                disabled={loading}
              >
                {loading ? 'Processing...' : type === 'confirm-disable' ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>
        ) : (
          // Add/Edit Modal
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onConfirm(formData);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
            </div>

            <div className="flex gap-3 justify-end pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Processing...' : type === 'add' ? 'Add Admin' : 'Update Admin'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
