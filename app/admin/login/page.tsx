import AdminLoginHeader from '@/components/admin/login/AdminLoginHeader';
import AdminLoginForm from '@/components/admin/login/AdminLoginForm';
import AdminSecurityNotice from '@/components/admin/login/AdminSecurityNotice';
import AdminForgotPasswordLink from '@/components/admin/login/AdminForgotPasswordLink';
import AdminLoginFooter from '@/components/admin/login/AdminLoginFooter';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <AdminLoginHeader />
        <AdminLoginForm />
        <AdminSecurityNotice />
        <AdminForgotPasswordLink />
        <AdminLoginFooter />
      </div>
    </div>
  );
}