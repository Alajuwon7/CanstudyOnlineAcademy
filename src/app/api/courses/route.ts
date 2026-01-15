import { NextResponse } from 'next/server';
import { getCourses } from '@/lib/api';

export async function GET() {
  try {
    const courses = await getCourses();
    return NextResponse.json({ data: courses, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: [], success: false, message: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}
