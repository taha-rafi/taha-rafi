import { Nitrosend } from '@nitrosend/sdk';
import { randomUUID } from 'node:crypto';

async function main() {
  const key = process.env.NITROSEND_API_KEY;
  if (!key) throw new Error('NITROSEND_API_KEY is not set');
  const ns = new Nitrosend(key);
  const response = await ns.messages.send({
    channel: 'email',
    to: 'proof@dogfood.nitrosend.net',
    subject: 'Nitrosend SDK first-send test — Taha Rafi',
    html: '<p>Hello, this is my first real Nitrosend TypeScript SDK test send.</p>',
  }, randomUUID());
  console.log('SEND_RESPONSE:', JSON.stringify(response, null, 2));
}

main().catch((error) => {
  console.error('SEND_FAILED:', error?.message ?? error);
  process.exitCode = 1;
});