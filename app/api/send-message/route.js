// app/api/send-message/route.js

import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Twilio from 'twilio';

export async function POST(req) {
  // Initialize clients inside the function to fix Vercel build error
  const resend = new Resend(process.env.RESEND_API_KEY);
  const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    const { name, email, subject, message } = await req.json();

    // --- 1. Send the Email via Resend ---
    await resend.emails.send({
      from: 'RevivaGreen Website <onboarding@resend.dev>',
      to: 'info@revivagreen.com',
      reply_to: email,
      subject: `New Message from ${name}: ${subject}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    // --- 2. Send the SMS Notification via Twilio ---
    await twilioClient.messages.create({
       body: `New RevivaGreen Message!\nFrom: ${name}\nSubject: ${subject}`,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: process.env.YOUR_PERSONAL_PHONE_NUMBER,
     });

    // --- 3. Send a success response back ---
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}