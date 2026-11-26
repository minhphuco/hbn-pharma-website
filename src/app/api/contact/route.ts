import {NextRequest, NextResponse} from 'next/server'
import {Resend} from 'resend'

// Cần cài: npm install resend
// Set env: RESEND_API_KEY và CONTACT_EMAIL

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {name, email, phone, subject, message} = body

    if (!name || !email || !message) {
      return NextResponse.json({error: 'Missing required fields'}, {status: 400})
    }

    const {error} = await resend.emails.send({
      from: 'noreply@hbnpharma.com.vn',
      to: [process.env.CONTACT_EMAIL || 'info@hbnpharma.com.vn'],
      replyTo: email,
      subject: subject ? `[HBN Web] ${subject}` : `[HBN Web] Liên hệ từ ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #154E1A; padding: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">HBN Pharma - Tin nhắn liên hệ</h2>
          </div>
          <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Họ tên:</td><td style="padding: 8px;">${name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Điện thoại:</td><td style="padding: 8px;">${phone || 'Không cung cấp'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Chủ đề:</td><td style="padding: 8px;">${subject || 'Không có'}</td></tr>
            </table>
            <hr style="margin: 16px 0; border-color: #e5e7eb;"/>
            <p style="font-weight: bold; margin: 0 0 8px;">Nội dung:</p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({error: error.message}, {status: 500})
    }

    return NextResponse.json({success: true})
  } catch (err) {
    return NextResponse.json({error: 'Server error'}, {status: 500})
  }
}
