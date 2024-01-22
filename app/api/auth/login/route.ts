import { NextResponse } from 'next/server';
import User from '@/models/userModel';
import connectDB from '@/lib/connectDb';

export async function GET() {
  return NextResponse.json({ msg: 'API Health OK' });
}

export async function POST(req: Request) {
  await connectDB();

  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }

    const data = await req.json();

    let user;
    user = await User.find({ email: data.email, password: data.password });
    if (!user.length) {
      return NextResponse.json({
        success: false,
        error_msg: 'Wrong Credentials',
      });
    } else {
      return NextResponse.json({
        success: true,
        user: user[0],
      });
    }
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({
      error_msg: 'Internal Server Error',
      success: false,
    });
  }
}
