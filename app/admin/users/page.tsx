'use client'
import {useState, useMemo, useEffect} from 'react'
import AdminUsersHeader from '../../../components/admin/users/AdminUsersHeader'
import UsersSearchBar from '../../../components/admin/users/UsersSearchBar'
import UsersFilterBar from '../../../components/admin/users/UsersFilterBar'
import UsersStatsOverview from '../../../components/admin/users/UsersStatsOverview'
import UsersTable from '../../../components/admin/users/UsersTable'
import EditUserModal from '../../../components/admin/users/EditUserModal'
import DeleteUserModal from '../../../components/admin/users/DeleteUserModal'
import PaginationControls from '../../../components/admin/users/PaginationControls'

type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
  createdAt: string
  lastLogin?: string | null
}


export default function AdminUsersPage(){
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({role:'All', status:'All', from:'', to:'', sort:'newest'})
  const [page, setPage] = useState(1)
  const perPage = 10

  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [editingOpen, setEditingOpen] = useState(false)
  const [deletingUser, setDeletingUser] = useState<User | null>(null)
  const [deletingOpen, setDeletingOpen] = useState(false)

  const stats = useMemo(()=>{
    const total = users.length
    const active = users.filter(u=>u.status==='Active').length
    const suspended = users.filter(u=>u.status==='Suspended').length
    const applicants = users.filter(u=>u.role==='Applicant').length
    const new30 = users.filter(u=> (Date.now() - new Date(u.createdAt).getTime()) <= (30*24*3600000)).length
    return {total, active, suspended, applicants, new30}
  },[users])

  const processed = useMemo(()=>{
    let list = [...users]
    if(search){
      const s = search.toLowerCase()
      list = list.filter(u=> u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s) || u.id.toLowerCase().includes(s))
    }
    if(filters.role && filters.role!=='All') list = list.filter(u=>u.role===filters.role)
    if(filters.status && filters.status!=='All') list = list.filter(u=>u.status===filters.status)
    if(filters.from) list = list.filter(u=> new Date(u.createdAt) >= new Date(filters.from))
    if(filters.to) list = list.filter(u=> new Date(u.createdAt) <= new Date(filters.to))
    list.sort((a,b)=> filters.sort==='newest'? new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime() : new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())
    return list
  },[users, search, filters])

  const totalPages = Math.max(1, Math.ceil(processed.length / perPage))
  const pageSlice = processed.slice((page-1)*perPage, page*perPage)

  useEffect(()=>{ if(page>totalPages) setPage(1) },[page, totalPages])

  // Fetch from a possible API endpoint; fall back to demo data
  useEffect(()=>{
    let mounted = true
    const fetchUsers = async ()=>{
      setLoading(true)
      setError(null)
      try{
        const res = await fetch('/api/admin/users')
        if(!res.ok) throw new Error('Network error')
        const data = await res.json()
        if(mounted && Array.isArray(data)) setUsers(data)
        }catch(err){
          // surface error
          const msg = err instanceof Error ? err.message : String(err)
          if(mounted) setError(msg || 'Failed to load users')
      }finally{
        if(mounted) setLoading(false)
      }
    }

    fetchUsers()
    return ()=>{ mounted = false }
  }, [])

  const handleSave = (updated: User) => {
    setUsers(prev=>{
      const exists = prev.some(u=> u.id === updated.id)
      if(exists){
        return prev.map(u=> u.id===updated.id? updated : u)
      }
      // create new user
      const id = updated.id || `U${Date.now()}`
      return [{...updated, id}, ...prev]
    })
    setEditingOpen(false)
  }

  const handleDelete = (user: User) => {
    setUsers(prev=> prev.filter(u=> u.id!==user.id))
    setDeletingOpen(false)
  }

  const toggleStatus = (user: User) => {
    const toggled = {...user, status: user.status==='Active'? 'Inactive':'Active'}
    setUsers(prev => prev.map(u=> u.id===user.id? toggled : u))
  }

  return (
    <div className="p-6">
      <AdminUsersHeader onCreate={()=>{ setEditingUser({ id: '', name: '', email: '', role: 'Applicant', status: 'Active', createdAt: new Date().toISOString(), lastLogin: null }); setEditingOpen(true) }} />

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=""><UsersSearchBar value={search} onChange={setSearch} /></div>
        <div className="hidden md:block md:col-span-2"><UsersFilterBar filters={filters} onChange={(f)=> setFilters(prev=> ({...prev, ...f}))} /></div>
      </div>

      <div className="md:hidden mb-4"><UsersFilterBar filters={filters} onChange={(f)=> setFilters(prev=> ({...prev, ...f}))} /></div>

      <UsersStatsOverview stats={stats} />

      {loading ? (
        <div className="py-8 text-center text-sm text-gray-600">Loading users...</div>
      ) : error ? (
        <div className="py-8 text-center text-sm text-red-600">Error loading users: {String(error)}</div>
      ) : (
        <>
          <UsersTable users={pageSlice} onView={(u: User)=>alert(JSON.stringify(u, null, 2))} onEdit={(u: User)=>{ setEditingUser(u); setEditingOpen(true)}} onReset={(u: User)=>alert('Reset password for '+u.email)} onToggleStatus={(u: User)=>toggleStatus(u)} onDelete={(u: User)=>{ setDeletingUser(u); setDeletingOpen(true)}} />

          <PaginationControls page={page} totalPages={totalPages} onPageChange={(p: number)=> setPage(Math.max(1, Math.min(totalPages, p)))} />
        </>
      )}

      <EditUserModal open={editingOpen} user={editingUser} onClose={()=>setEditingOpen(false)} onSave={handleSave} />
      <DeleteUserModal open={deletingOpen} user={deletingUser} onClose={()=>setDeletingOpen(false)} onConfirm={handleDelete} />
    </div>
  )
}
