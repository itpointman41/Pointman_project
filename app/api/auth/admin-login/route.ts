import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const adminsCollection = db.collection('admins');

    // Find admin by email
    const admin = await adminsCollection.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify role is admin or super_admin
    if (admin.role !== 'admin' && admin.role !== 'super_admin') {
      console.log('Invalid role:', admin.role);
      return NextResponse.json(
        { error: 'Unauthorized: Admin access required' },
        { status: 403 }
      );
    }

    // Verify password
    console.log('Comparing password for admin:', email);
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      console.log('Password mismatch for admin:', email);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create response with admin data
    const response = NextResponse.json(
      {
        success: true,
        message: 'Admin login successful',
        admin: {
          _id: admin._id,
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role,
        },
        token: 'admin-token-' + Date.now(), // In production, use JWT
      },
      { status: 200 }
    );

    // Set secure auth cookies
    response.cookies.set('adminToken', 'admin-token-' + Date.now(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
}
