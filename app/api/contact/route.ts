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
    const body = await req.json()
    const {
      formType,
      company,
      locations,
      city,
      scrap,
      name,
      phone,
      email,
      volume,
    } = body

    // ── Validate ─────────────────────────────────────────
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    const isDemoRequest = formType === 'demo'

    const subject = isDemoRequest
      ? `New demo request — ${company || 'Unknown company'}`
      : `New quote request — ${company || 'Unknown company'}`

    // ── Email HTML ────────────────────────────────────────
    const rows = isDemoRequest
      ? [
          ['Company',       company   || '—'],
          ['Locations',     locations || '—'],
          ['City',          city      || '—'],
          ['Scrap types',   scrap     || '—'],
          ['Contact name',  name           ],
          ['Phone',         phone          ],
          ['Email',         email     || '—'],
        ]
      : [
          ['Company',        company  || '—'],
          ['City',           city     || '—'],
          ['Monthly volume', volume   || '—'],
          ['Contact',        phone         ],
        ]

    const tableRows = rows
      .map(
        ([label, val]) => `
        <tr>
          <td style="padding:8px 12px;background:#F5F0E8;font-weight:600;width:180px;font-family:sans-serif;font-size:14px">${label}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #D3D1C7;font-family:sans-serif;font-size:14px">${val}</td>
        </tr>`
      )
      .join('')

    const htmlContent = `
      <h2 style="color:#0A1F14;font-family:sans-serif">
        ${isDemoRequest ? 'New Demo Request' : 'New Quote Request'}
      </h2>
      <table style="border-collapse:collapse;width:100%">${tableRows}</table>
      <p style="font-family:sans-serif;font-size:13px;color:#888780;margin-top:16px">
        Submitted via revivagreen.com · Respond within 4 business hours
      </p>
    `

    // ── SMS body ──────────────────────────────────────────
    const smsBody = isDemoRequest
      ? `RevivaGreen: New demo request from ${name}${company ? ` (${company})` : ''}. Phone: ${phone}. City: ${city || '—'}. Reply within 4 hrs.`
      : `RevivaGreen: New quote request from ${company || name}. Volume: ${volume || '—'}. Contact: ${phone}.`

    // ── Send both in parallel ─────────────────────────────
    const [emailResult, smsResult] = await Promise.allSettled([
      resend.emails.send({
        from:    'RevivaGreen Website <noreply@revivagreen.com>',
        to:      ['info@revivagreen.com'],
        replyTo: email || undefined,
        subject,
        html:    htmlContent,
      }),
      twilioClient.messages.create({
        body: smsBody,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to:   process.env.YOUR_PERSONAL_PHONE_NUMBER!,
      }),
    ])

    // Log any failures but don't block success response
    if (emailResult.status === 'rejected') {
      console.error('Email send failed:', emailResult.reason)
    }
    if (smsResult.status === 'rejected') {
      console.error('SMS send failed:', smsResult.reason)
    }

    // Return success as long as at least one notification was sent
    if (
      emailResult.status === 'rejected' &&
      smsResult.status === 'rejected'
    ) {
      return NextResponse.json(
        { error: 'Failed to send. Please contact us via WhatsApp.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try WhatsApp or call us directly.' },
      { status: 500 }
    )
  }
}