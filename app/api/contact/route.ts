import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, contact, idea, placement, size } = await req.json()

    if (!name || !contact || !idea || !placement || !size) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "OCD Tattoo <onboarding@resend.dev>",
      to: "omer3107@gmail.com",
      subject: `New tattoo inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="margin-bottom: 24px;">New Booking Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 130px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Contact</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${contact}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Placement</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${placement}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Size</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${size}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Idea</td><td style="padding: 10px 0; white-space: pre-line;">${idea}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
