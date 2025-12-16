"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface AdminUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin';
  createdAt?: Date;
}

interface AdminAuthContextType {
  admin: AdminUser | null;
  isLoggedIn: boolean;
  logout: () => void;
  isLoading: boolean;
  setAdmin: (admin: AdminUser | null) => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// Custom event for localStorage changes within the same tab
const STORAGE_EVENT = 'admin-auth-storage-change';

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load admin on mount
    try {
      const storedAdmin = localStorage.getItem('adminUser');
      if (storedAdmin) {
        const parsedAdmin = JSON.parse(storedAdmin) as AdminUser;
        setAdmin(parsedAdmin);
      } else {
        setAdmin(null);
      }
    } catch (error) {
      console.error('Failed to parse admin data:', error);
      localStorage.removeItem('adminUser');
      setAdmin(null);
    } finally {
      setIsLoading(false);
    }

    // Listen for custom auth storage events
    const handleAuthChange = () => {
      try {
        const storedAdmin = localStorage.getItem('adminUser');
        if (storedAdmin) {
          const parsedAdmin = JSON.parse(storedAdmin) as AdminUser;
          setAdmin(parsedAdmin);
        } else {
          setAdmin(null);
        }
      } catch (error) {
        console.error('Failed to parse admin data:', error);
        localStorage.removeItem('adminUser');
        setAdmin(null);
      }
    };

    window.addEventListener(STORAGE_EVENT, handleAuthChange);

    // Also listen for storage events from other tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'adminUser') {
        handleAuthChange();
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(STORAGE_EVENT, handleAuthChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('adminUser');
    setAdmin(null);
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new Event(STORAGE_EVENT));
  };

  const value: AdminAuthContextType = {
    admin,
    isLoggedIn: !!admin,
    logout,
    isLoading,
    setAdmin,
  };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}