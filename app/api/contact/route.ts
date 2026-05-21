import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, company, locations, city, scrap, name, phone, email, volume } = body

    // Validate required fields
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

    const htmlContent = isDemoRequest
      ? `
        <h2 style="color:#0A1F14;font-family:sans-serif">New Demo Request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600;width:180px">Company</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${company || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Locations</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${locations || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">City</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${city || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Scrap types</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${scrap || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Contact name</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${name}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${phone}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Email</td><td style="padding:8px 12px">${email || '—'}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:13px;color:#888780;margin-top:16px">Submitted via revivagreen.com · Respond within 4 business hours</p>
      `
      : `
        <h2 style="color:#0A1F14;font-family:sans-serif">New Quote Request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600;width:180px">Company</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${company || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">City</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${city || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Monthly volume</td><td style="padding:8px 12px;border-bottom:1px solid #D3D1C7">${volume || '—'}</td></tr>
          <tr><td style="padding:8px 12px;background:#F5F0E8;font-weight:600">Contact</td><td style="padding:8px 12px">${phone}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:13px;color:#888780;margin-top:16px">Submitted via revivagreen.com · Respond within 4 business hours</p>
      `

    await resend.emails.send({
      from: 'RevivaGreen Website <noreply@revivagreen.com>',
      to: ['info@revivagreen.com'],
      replyTo: email || undefined,
      subject,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try WhatsApp or call us directly.' },
      { status: 500 }
    )
  }
}