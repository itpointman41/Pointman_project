interface Filters {
  role?: string;
  status?: string;
  from?: string;
  to?: string;
  sort?: string;
}

export default function UsersFilterBar({filters, onChange}: {filters: Filters, onChange: (filters: Filters) => void}){
  const roles = ["All","Admin","Applicant","Staff"]
  const statuses = ["All","Active","Inactive","Suspended"]

  const update = (key: string, value: string) => onChange({...filters, [key]: value})

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
      <div className="w-full md:w-1/6">
        <select value={filters.role||'All'} onChange={e=>update('role', e.target.value)} className="w-full border rounded-md py-2 px-3 text-sm">
          {roles.map(r=> <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div className="w-full md:w-1/6">
        <select value={filters.status||'All'} onChange={e=>update('status', e.target.value)} className="w-full border rounded-md py-2 px-3 text-sm">
          {statuses.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex gap-2 items-center w-full md:w-1/6 mr-45">
        <input type="date" value={filters.from||''} onChange={e=>update('from', e.target.value)} className="border rounded-md py-2 px-3 text-sm" />
        <span className="text-sm text-gray-400">to</span>
        <input type="date" value={filters.to||''} onChange={e=>update('to', e.target.value)} className="border rounded-md py-2 px-3 text-sm" />
      </div>

      <div className="w-full md:w-1/6">
        <select value={filters.sort||'newest'} onChange={e=>update('sort', e.target.value)} className="w-full border rounded-md py-2 px-3 text-sm">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  )
}
