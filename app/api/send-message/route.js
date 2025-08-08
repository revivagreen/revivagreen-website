// app/api/send-message/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // --- 1. Send the Email (Uncommented) ---
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'revivagreenventures@gmail.com',
      subject: `New Message from ${name}: ${subject}`,
      html: `<p>...</p>`, // Your HTML content
    });

    // --- 2. Send the SMS via Twilio ---
    await twilioClient.messages.create({
       body: `New RevivaGreen contact form submission...`, // Your message content
       from: process.env.TWILIO_PHONE_NUMBER, // Now uses the correct variable
       to: process.env.YOUR_PHONE_NUMBER,
     });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}