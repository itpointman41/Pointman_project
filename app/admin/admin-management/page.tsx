"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminManagementHeader from '@/components/admin-management/AdminManagementHeader';
import AdminStatsOverview from '@/components/admin-management/AdminStatsOverview';
import AdminActionsBar from '@/components/admin-management/AdminActionsBar';
import AdminListTable from '@/components/admin-management/AdminListTable';
import AdminModal from '@/components/admin-management/AdminModal';
import EmptyAdminState from '@/components/admin-management/EmptyAdminState';
import PaginationControls from '@/components/admin-management/PaginationControls';

interface AdminRecord {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'super-admin' | 'admin' | 'moderator';
  status: 'active' | 'disabled';
  lastLogin: string;
}

export default function AdminManagementPage() {
  const router = useRouter();
  const [admins, setAdmins] = useState<AdminRecord[]>([
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
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'confirm-disable' | 'confirm-enable'>('add');
  const [selectedAdminId, setSelectedAdminId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 5;

  // Filter admins
  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedRole === 'all' || admin.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  // Pagination
  const totalPages = Math.ceil(filteredAdmins.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAdmins = filteredAdmins.slice(startIndex, startIndex + itemsPerPage);

  // Stats
  const totalAdminsCount = admins.length;
  const activeAdminsCount = admins.filter((a) => a.status === 'active').length;
  const disabledAdminsCount = admins.filter((a) => a.status === 'disabled').length;
  const superAdminsCount = admins.filter((a) => a.role === 'super-admin').length;

  const handleAddAdmin = () => {
    setModalType('add');
    setSelectedAdminId(null);
    setModalOpen(true);
  };

  const handleEditAdmin = (id: string) => {
    setModalType('edit');
    setSelectedAdminId(id);
    setModalOpen(true);
  };

  const handleToggleStatus = (id: string, currentStatus: 'active' | 'disabled') => {
    setModalType(currentStatus === 'active' ? 'confirm-disable' : 'confirm-enable');
    setSelectedAdminId(id);
    setModalOpen(true);
  };

  const handleViewAdmin = (id: string) => {
    // Could redirect to a detailed view page
    console.log('View admin:', id);
  };

  const handleModalConfirm = async (data?: { firstName: string; lastName: string; email: string; role: string }) => {
    setLoading(true);

    try {
      if (modalType === 'add' && data) {
        // Add new admin
        const newAdmin: AdminRecord = {
          id: Date.now().toString(),
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          role: data.role as 'super-admin' | 'admin' | 'moderator',
          status: 'active',
          lastLogin: 'Never',
        };
        setAdmins([...admins, newAdmin]);
      } else if (modalType === 'edit' && data) {
        // Edit admin
        setAdmins(
          admins.map((admin) =>
            admin.id === selectedAdminId
              ? {
                  ...admin,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email: data.email,
                  role: data.role as 'super-admin' | 'admin' | 'moderator',
                }
              : admin
          )
        );
      } else if (modalType === 'confirm-disable' || modalType === 'confirm-enable') {
        // Toggle status
        setAdmins(
          admins.map((admin) =>
            admin.id === selectedAdminId
              ? { ...admin, status: admin.status === 'active' ? 'disabled' : 'active' }
              : admin
          )
        );
      }

      setModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  const selectedAdmin = admins.find((a) => a.id === selectedAdminId);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminManagementHeader onBackClick={() => router.push('/admin/dashboard')} />

        {/* Stats */}
        <AdminStatsOverview
          totalAdmins={totalAdminsCount}
          activeAdmins={activeAdminsCount}
          disabledAdmins={disabledAdminsCount}
          superAdmins={superAdminsCount}
        />

        {/* Actions Bar */}
        <AdminActionsBar
          onAddAdmin={handleAddAdmin}
          onSearch={setSearchQuery}
          onFilterRole={setSelectedRole}
          searchValue={searchQuery}
          selectedRole={selectedRole}
        />

        {/* Content */}
        {paginatedAdmins.length === 0 && filteredAdmins.length === 0 && admins.length === 0 ? (
          <EmptyAdminState onAddAdmin={handleAddAdmin} />
        ) : paginatedAdmins.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center border border-gray-100">
            <p className="text-gray-600">No admins found matching your criteria.</p>
          </div>
        ) : (
          <>
            <AdminListTable
              admins={paginatedAdmins}
              onView={handleViewAdmin}
              onEdit={handleEditAdmin}
              onToggleStatus={handleToggleStatus}
              loading={loading}
            />

            {totalPages > 1 && (
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      {/* Modal */}
      <AdminModal
        isOpen={modalOpen}
        title={
          modalType === 'add'
            ? 'Add New Admin'
            : modalType === 'edit'
            ? 'Edit Admin'
            : modalType === 'confirm-disable'
            ? 'Disable Admin'
            : 'Enable Admin'
        }
        type={modalType}
        adminName={selectedAdmin ? `${selectedAdmin.firstName} ${selectedAdmin.lastName}` : ''}
        onClose={() => setModalOpen(false)}
        onConfirm={handleModalConfirm}
        loading={loading}
      />
    </div>
  );
}
