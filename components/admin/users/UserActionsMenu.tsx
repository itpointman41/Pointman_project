import {useState, useRef, useEffect} from 'react'
import { Eye, Edit2, KeyRound, Lock, Unlock, Trash2, MoreVertical } from 'lucide-react'

type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
  createdAt: string
  lastLogin?: string | null
}

type UserActionsMenuProps = {
  user: User
  onView: (user: User) => void
  onEdit: (user: User) => void
  onReset: (user: User) => void
  onToggleStatus: (user: User) => void
  onDelete: (user: User) => void
}

export default function UserActionsMenu({user, onView, onEdit, onReset, onToggleStatus, onDelete}: UserActionsMenuProps){
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleBodyClick = (e: MouseEvent)=>{
      if(!rootRef.current) return
      if(!rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent)=>{ if(e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', handleBodyClick)
    document.addEventListener('keydown', onKey)
    return ()=>{
      document.removeEventListener('click', handleBodyClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button aria-haspopup="true" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="p-1 rounded hover:bg-gray-100 text-gray-600" aria-label={`Open actions for ${user?.name}`}>
        <MoreVertical className="w-5 h-5" />
      </button>
      {open && (
        <div role="menu" aria-label="User actions" className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <button onClick={()=>{ onView(user); setOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <Eye className="w-4 h-4" /> View Profile
          </button>
          <button onClick={()=>{ onEdit(user); setOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <Edit2 className="w-4 h-4" /> Edit User
          </button>
          <button onClick={()=>{ onReset(user); setOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <KeyRound className="w-4 h-4" /> Reset Password
          </button>
          <button onClick={()=>{ onToggleStatus(user); setOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors border-t border-gray-100">
            {user.status==='Active'? (
              <>
                <Lock className="w-4 h-4" /> Disable Account
              </>
            ) : (
              <>
                <Unlock className="w-4 h-4" /> Enable Account
              </>
            )}
          </button>
          <button onClick={()=>{ onDelete(user); setOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-gray-100">
            <Trash2 className="w-4 h-4" /> Delete Account
          </button>
        </div>
      )}
    </div>
  )
}
