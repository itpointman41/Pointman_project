import {useEffect} from 'react'

export default function DeleteUserModal({open, user, onClose, onConfirm}){
  useEffect(()=>{
    const onKey = (e)=>{ if(e.key === 'Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open, onClose])

  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="delete-user-title">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="relative bg-white rounded-md shadow-lg w-full max-w-md p-6 z-10">
        <h3 id="delete-user-title" className="text-lg font-semibold text-red-600 mb-2">Delete User</h3>
        <p className="text-sm text-gray-700">Are you sure you want to permanently delete <strong>{user?.name}</strong>? This action cannot be undone.</p>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
          <button onClick={()=>onConfirm(user)} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  )
}
