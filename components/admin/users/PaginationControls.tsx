interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationControls({page, totalPages, onPageChange}: PaginationControlsProps){
  const pages = []
  for(let i=1;i<=totalPages;i++) pages.push(i)
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
      <div className="flex items-center gap-2">
        <button onClick={()=>onPageChange(page-1)} disabled={page<=1} className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
        <div className="hidden sm:flex items-center gap-1">
          {pages.map(p=> (
            <button key={p} onClick={()=>onPageChange(p)} className={`px-2 py-1 text-sm rounded ${p===page? 'bg-green-600 text-white':'border'}`}>{p}</button>
          ))}
        </div>
        <button onClick={()=>onPageChange(page+1)} disabled={page>=totalPages} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
      </div>
    </div>
  )
}
