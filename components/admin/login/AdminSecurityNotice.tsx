export default function AdminSecurityNotice() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-md p-4" role="alert">
      <p className="text-sm text-green-800">
        This area is restricted to authorized administrators only.
      </p>
    </div>
  );
}