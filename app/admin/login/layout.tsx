import { AdminAuthProvider } from '@/context/admin-auth-context';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminAuthProvider>{children}</AdminAuthProvider>;
}