import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'junghyungu@towncup.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const from = process.env.RESEND_FROM || 'noreply@towncup.com';
    const subject = `TownCup Contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const result = await resend.emails.send({
      from,
      to: TO,
      subject,
      text,
    });

    if ('error' in result && result.error) {
      return res.status(500).json({ error: result.error.message || 'Failed to send' });
    }

    return res.status(200).json({ ok: true, id: (result as any).data?.id });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Unexpected error' });
  }
}

