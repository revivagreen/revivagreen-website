// app/api/send-message/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // --- Action 1: Send Notification Email to YOU ---
    await resend.emails.send({
      // We can now send from our own verified domain
      from: 'Contact Enquiry <contact@revivagreen.com>', 
      // This will now work correctly
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

    // --- Action 2: Send Confirmation Email to the USER ---
    await resend.emails.send({
      // We can now send from a professional "support" address
      from: 'RevivaGreen Support <support@revivagreen.com>',
      // This will now correctly send to the user's email address
      to: email,                                            
      subject: `We've Received Your Message!`,
      html: `
        <div>
          <h2>Hi ${name},</h2>
          <p>Thank you for contacting RevivaGreen. We have received your message and will get back to you as soon as possible.</p>
          <br>
          <p><strong>Here's a copy of your message:</strong></p>
          <hr>
          <p><strong>Subject:</strong> ${subject}</p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <br>
          <p>Best regards,</p>
          <p>RevivaGreen Team</p>
        </div>
      `,
    });

    // --- Action 3: Send SMS Notification ---
    await twilioClient.messages.create({
       body: `RevivaGreen Message!\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: process.env.YOUR_PERSONAL_PHONE_NUMBER,
     });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}