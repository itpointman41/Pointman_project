import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const { db } = await connectToDatabase()
    const usersCollection = db.collection('users')
    const logsCollection = db.collection('logs')

    // Find user by email
    const user = await usersCollection.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Log the login - add last login to logs collection with user ID as _id
    const loginTimestamp = new Date().toISOString()
    await logsCollection.updateOne(
      { _id: user._id },
      {
        $set: {
          userId: user._id,
          lastLogin: loginTimestamp,
          email: user.email,
        }
      },
      { upsert: true }
    )

    // Return user data (without password)
    const userResponse = {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: userResponse,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
