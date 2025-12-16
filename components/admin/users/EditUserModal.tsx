import {useState, useEffect, useRef} from 'react'

type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
  createdAt: string
  lastLogin?: string | null
}

interface EditUserModalProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export default function EditUserModal({open, user, onClose, onSave}: EditUserModalProps){
  const [form, setForm] = useState({name:'', email:'', role:'Applicant', status:'Active'})
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(user) setForm({name: user.name, email: user.email, role: user.role, status: user.status})
  },[user])

  useEffect(()=>{
    if(open){
      // focus first input when opened
      setTimeout(()=> firstInputRef.current?.focus(), 0)
    }
  },[open])

  useEffect(()=>{
    const onKey = (e: KeyboardEvent)=>{ if(e.key === 'Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open, onClose])

  if(!open) return null

  const save = ()=>{
    if (!user) return;
    onSave({...user, ...form})
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="edit-user-title">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="relative bg-white rounded-md shadow-lg w-full max-w-md p-6 z-10">
        <h3 id="edit-user-title" className="text-lg font-semibold mb-4">Edit User</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input ref={firstInputRef} value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full border rounded-md py-2 px-3 text-sm" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full border rounded-md py-2 px-3 text-sm" />
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm text-gray-600">Role</label>
              <select value={form.role} onChange={e=>setForm({...form, role: e.target.value})} className="w-full border rounded-md py-2 px-3 text-sm">
                <option>Admin</option>
                <option>Applicant</option>
                <option>Staff</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm text-gray-600">Status</label>
              <select value={form.status} onChange={e=>setForm({...form, status: e.target.value})} className="w-full border rounded-md py-2 px-3 text-sm">
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
          <button onClick={save} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  )
}
