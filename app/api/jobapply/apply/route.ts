import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const about = formData.get('about');
    const resume = formData.get('resume');

    // Add your logic here (e.g., save to database, send email, etc.)
    console.log({ fullName, email, subject, about, resume });

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to submit application' }, { status: 500 });
  }
}
