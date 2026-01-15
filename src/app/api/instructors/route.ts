import { NextResponse } from 'next/server';
import { getInstructors } from '@/lib/api';

export async function GET() {
  try {
    const instructors = await getInstructors();
    return NextResponse.json({ data: instructors, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: [], success: false, message: 'Failed to fetch instructors' },
      { status: 500 }
    );
  }
}
