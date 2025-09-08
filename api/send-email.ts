import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'junghyungu@towncup.com';
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'https://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'https://towncup.com',
  'https://www.towncup.com',
  'https://town-cup-website.vercel.app',
];

function setCors(res: VercelResponse, origin?: string) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : '*';
  res.setHeader('Access-Control-Allow-Origin', allowed);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res, req.headers.origin as string | undefined);
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';
    const from = process.env.RESEND_FROM || (!isProd ? 'onboarding@resend.dev' : '');
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return res.status(500).json({ error: 'Server missing email credentials' });
    }
    if (!from) {
      console.error('Missing RESEND_FROM');
      return res.status(500).json({ error: 'Server missing sender address' });
    }
    const subject = `TownCup Contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.4">
        <h2>New Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to: TO,
      subject,
      text,
      html,
    });

    if ('error' in result && result.error) {
      console.error('Resend send error:', result.error);
      return res.status(500).json({ error: result.error.message || 'Failed to send', debug: isProd ? undefined : result });
    }

    return res.status(200).json({ ok: true, id: (result as any).data?.id });
  } catch (err: any) {
    console.error('Unhandled send-email error:', err);
    return res.status(500).json({ error: err?.message || 'Unexpected error', stack: isProd ? undefined : err?.stack });
  }
}

