// app/api/send-message/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import Twilio from 'twilio';

// NOTE: It is standard practice to initialize these clients outside the function.
// This is more efficient as they are created only once when the server starts.
const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req) {
  try {
    // --- STEP 1: Get the data from the user's request ---
    // Make sure to get the 'subject' from the form data as well
    const { name, email, subject, message } = await req.json();

    // --- STEP 2: Send the Email via Resend ---
    await resend.emails.send({
      from: 'RevivaGreen Website <onboarding@resend.dev>',
      to: 'info@revivagreen.com',
      reply_to: email,
      // CORRECTED: Added the 'subject' key and used backticks for the template literal
      subject: `New Message from ${name} via RevivaGreen.in`, 
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

    // --- STEP 3: Send the SMS Notification via Twilio ---
    await twilioClient.messages.create({
       // CORRECTED: Used backticks for the template literal
       body: `New RevivaGreen Website Message!\nFrom: ${name}\nEmail: ${email}`,
       from: process.env.TWILIO_PHONE_NUMBER,
       to: process.env.YOUR_PERSONAL_PHONE_NUMBER, // Ensure this matches your .env.local file
     });

    // --- STEP 4: Send a success response back ---
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}