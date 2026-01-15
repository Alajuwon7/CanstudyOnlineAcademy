import { NextResponse } from 'next/server';
import { getCourseById } from '@/lib/api';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const course = await getCourseById(id);

    if (!course) {
      return NextResponse.json(
        { data: null, success: false, message: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: course, success: true });
  } catch (error) {
    return NextResponse.json(
      { data: null, success: false, message: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}
