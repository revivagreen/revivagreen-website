import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import twilio from 'twilio'

const resend = new Resend(process.env.RESEND_API_KEY)
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // Send confirmation to subscriber
    const [emailToSubscriber, emailToTeam, sms] = await Promise.allSettled([

      // 1. Confirmation email to subscriber
      resend.emails.send({
        from: 'RevivaGreen Insights <noreply@revivagreen.com>',
        to: [email],
        subject: 'You are subscribed to RevivaGreen Insights',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
            <div style="background:#0A1F14;padding:32px 40px;border-radius:8px 8px 0 0">
              <h1 style="color:#ffffff;font-size:22px;font-weight:600;margin:0">
                Reviva<span style="color:#1D9E75">Green</span> Insights
              </h1>
            </div>
            <div style="background:#F5F0E8;padding:32px 40px;border-radius:0 0 8px 8px">
              <h2 style="color:#0A1F14;font-size:20px;font-weight:600;margin:0 0 16px">
                You are now subscribed.
              </h2>
              <p style="color:#2C2C2A;font-size:16px;line-height:1.7;margin:0 0 16px">
                Thank you for subscribing to RevivaGreen Insights — regulatory intelligence for AP businesses.
              </p>
              <p style="color:#2C2C2A;font-size:16px;line-height:1.7;margin:0 0 24px">
                You will receive updates on EPR rule changes, BRSR filing deadlines, and circular economy policy news — sent fortnightly and only when there is something genuinely useful to share.
              </p>
              <p style="color:#888780;font-size:13px;line-height:1.6;margin:0">
                To unsubscribe at any time, reply to this email with "unsubscribe" in the subject line.<br/>
                RevivaGreen Ventures Private Limited · Mylavaram, NTR District, AP — 521230
              </p>
            </div>
          </div>
        `,
      }),

      // 2. Notification email to team
      resend.emails.send({
        from: 'RevivaGreen Website <noreply@revivagreen.com>',
        to: ['info@revivagreen.com'],
        subject: `New newsletter subscriber — ${email}`,
        html: `
          <h2 style="font-family:sans-serif;color:#0A1F14">New Newsletter Subscriber</h2>
          <p style="font-family:sans-serif;font-size:15px;color:#2C2C2A">
            <strong>Email:</strong> ${email}<br/>
            <strong>Source:</strong> revivagreen.com/insights — newsletter signup<br/>
            <strong>Consent:</strong> Checkbox confirmed at time of submission
          </p>
          <p style="font-family:sans-serif;font-size:13px;color:#888780">
            Add to Zoho Campaigns manually until API is connected.
          </p>
        `,
      }),

      // 3. SMS to Surendra
      twilioClient.messages.create({
        body: `RevivaGreen: New newsletter subscriber — ${email}`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: process.env.YOUR_PERSONAL_PHONE_NUMBER!,
      }),
    ])

    // Log any failures silently
    if (emailToSubscriber.status === 'rejected') {
      console.error('Subscriber confirmation email failed:', emailToSubscriber.reason)
    }
    if (emailToTeam.status === 'rejected') {
      console.error('Team notification email failed:', emailToTeam.reason)
    }
    if (sms.status === 'rejected') {
      console.error('SMS notification failed:', sms.reason)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}