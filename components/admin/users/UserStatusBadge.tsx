export default function UserStatusBadge({status}){
  const map = {
    Active: 'bg-green-100 text-green-800',
    Inactive: 'bg-gray-100 text-gray-800',
    Suspended: 'bg-red-100 text-red-800'
  }
  const cls = map[status] || 'bg-gray-100 text-gray-800'
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${cls}`}>{status}</span>
  )
}
