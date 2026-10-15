// Vercel serverless function (plain Node, no build step): POST /api/subscribe
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;
const R = 'https://api.resend.com';

async function resend(path, key, body) {
  const r = await fetch(R + path, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  let data = {};
  try { data = await r.json(); } catch (_) {}
  return { ok: r.ok, status: r.status, data };
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch (_) { return {}; } }
  return {};
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  const key = process.env.RESEND_API_KEY, audience = process.env.RESEND_AUDIENCE_ID;
  if (!key || !audience) return res.status(500).json({ error: 'Newsletter is not configured yet.' });

  const body = await readBody(req);
  // Honeypot: real users never fill the hidden "company" field. Pretend success for bots.
  if (body.company) return res.status(200).json({ ok: true });
  const email = String(body.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return res.status(400).json({ error: 'Please enter a valid email address.' });

  const c = await resend(`/audiences/${audience}/contacts`, key, { email, unsubscribed: false });
  if (!c.ok) {
    const msg = JSON.stringify(c.data).toLowerCase();
    if (!(c.status === 409 || msg.includes('already'))) {
      console.error('Resend contact error', c.status, c.data);
      return res.status(502).json({ error: 'Could not subscribe right now. Please try again later.' });
    }
  }

  // Welcome email; failures (e.g. domain not verified) are logged, not fatal.
  let welcomed = false;
  try {
    const w = await resend('/emails', key, {
      from: 'BuildBin <hello@buildbin.dev>',
      to: [email],
      subject: "You're on the BuildBin list 🔧",
      text: "Thanks for joining the BuildBin weekly build list!\n\nEach issue: a few hand-picked maker projects (Arduino, Raspberry Pi, ESP32, drones/FPV) with parts lists, plus news worth knowing.\n\nFind your next build: https://buildbin.dev\n\nHappy tinkering,\nBuildBin\n\nDidn't sign up? Just ignore this email.",
    });
    welcomed = w.ok;
    if (!w.ok) console.warn('Welcome email skipped', w.status, w.data);
  } catch (e) { console.warn('Welcome email skipped', e.message); }

  return res.status(200).json({ ok: true, welcomed });
};
