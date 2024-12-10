import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password',
    });

    if (error) throw error;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Password Reset Request',
      html: '<p>Click the link in your email to reset your password.</p>'
    });

    return NextResponse.json({ message: 'Password reset email sent' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send reset email' }, { status: 500 });
  }
}