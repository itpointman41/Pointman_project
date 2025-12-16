interface UsersSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UsersSearchBar({value, onChange}: UsersSearchBarProps){
  return (
    <div className="w-full">
      <label className="sr-only">Search users</label>
      <div className="relative">
        <input
          type="search"
          value={value}
          onChange={e=>onChange(e.target.value)}
          placeholder="Search by name, email or ID..."
          className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
        </div>
      </div>
    </div>
  )
}
