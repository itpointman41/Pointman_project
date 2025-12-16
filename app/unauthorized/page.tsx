'use client';

import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
        <div>
          <h1 className="text-4xl font-bold text-red-600">403</h1>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Access Denied</h2>
          <p className="text-gray-600 mt-2">You do not have permission to access this resource.</p>
          <p className="text-sm text-gray-500 mt-4">Admin access is required.</p>
        </div>

        <div className="space-y-3">
          <a
            href="/admin/login"
            className="block w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to Admin Login
          </a>
          <Link
            href="/"
            className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
