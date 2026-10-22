# Nitrosend TypeScript SDK first-send report

- **Runtime:** Windows CMD and PowerShell; Node.js v26.3.0; npm 11.16.0; TypeScript 7.0.2; @nitrosend/sdk 0.11.7; tsx (version not recorded).
- **Install:** `npm install --save @nitrosend/sdk@latest` and `npm install --save-dev typescript@latest tsx@latest @types/node@latest`. API key entered locally via hidden PowerShell prompt, then passed in the `NITROSEND_API_KEY` environment variable.
- **Strict check:** `npx tsc --noEmit --strict --skipLibCheck --target ES2022 --module NodeNext --moduleResolution NodeNext --types node send-proof.ts` passed with no errors. Initial runner compilation without `--types node` failed for `node:crypto` and `process`.
- **Execution:** a local PowerShell wrapper (invoking `npx tsx send-proof.ts`). The final run reported **0.26 minutes** elapsed.
- **Result:** On 2026-10-21 13:14:00 UTC, SDK returned message ID **5159378**, status **queued**, recipient the official proof inbox. A subsequent Nitrosend email confirmed arrival and issued a signed receipt at 13:14 UTC: https://runx.ai/r/6b28e7ae93b4c37f82baaa7825388c0328fdbdfd9374913b88c715080040aff8
- **Blocker:** Before the successful run, the SDK returned `Complete the Brand Kit company name, or choose a sender name, before activating a sender`. Configuring the sender identity resolved it.
- **Documentation gap:** The activation failure did not identify which account/sender setting needed attention; reproduce by trying a first SDK send on a newly configured account without a completed sender identity.
- **Suggested change:** Surface a direct settings URL and the missing field name in sender activation errors, and include the TypeScript 7 `--types node` requirement in the SDK quickstart.
- **Secret handling:** No API tokens, secret keys, or personal recipient email are included in these artifacts.