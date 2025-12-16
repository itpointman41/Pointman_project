import clientPromise from '../../../../lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const dbName = process.env.MONGODB_DB || 'rec_plat'
    const db = client.db(dbName)

    const raw = await db.collection('users').find({}).limit(100).toArray()

    const users = raw.map(u=>{
      const id = u._id?.toString?.() || String(u._id)
      const createdAt = u.createdAt ? new Date(u.createdAt).toISOString() : (u._id && typeof u._id.getTimestamp === 'function' ? u._id.getTimestamp().toISOString() : null)
      const lastLogin = u.lastLogin ? new Date(u.lastLogin).toISOString() : null
      return {
        id,
        name: u.name || '',
        email: u.email || '',
        role: u.role || 'Applicant',
        status: u.status || 'Inactive',
        createdAt,
        lastLogin
      }
    })

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Admin users error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
