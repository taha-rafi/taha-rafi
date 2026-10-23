# Nitrosend TypeScript SDK first-send report

- **Runtime:** Windows CMD and PowerShell; Node.js v26.3.0; npm 11.16.0; TypeScript 7.0.2; @nitrosend/sdk 0.11.7; tsx (version not recorded).
- **Install:** `npm install --save @nitrosend/sdk@latest` and `npm install --save-dev typescript@latest tsx@latest @types/node@latest`. An API key was entered via a hidden PowerShell prompt and supplied locally as `NITROSEND_API_KEY`.
- **Compile/test:** `npx tsc --noEmit --strict --skipLibCheck --target ES2022 --module NodeNext --moduleResolution NodeNext --types node send-proof.ts` passed. An earlier compilation without `--types node` could not resolve `node:crypto` and `process`; adding the Node types resolved it.
- **Execution:** Local PowerShell wrapper ran `npx tsx send-proof.ts`. The successful run reported 0.26 minutes elapsed.
- **Result:** On 2026-10-21 at 13:14:00 UTC, the SDK returned message ID 5159378 with status `queued` for the official proof inbox. Nitrosend subsequently issued a delivery receipt at 13:14 UTC: https://runx.ai/r/6b28e7ae93b4c37f82baaa7825388c0328fdbdfd9374913b88c715080040aff8
- **Initial configuration issue:** The first attempt returned `Complete the Brand Kit company name, or choose a sender name, before activating a sender`. Completing the sender identity resolved it. The error already specifies the missing configuration; this was not an SDK defect.
- **Finding:** No reproducible SDK defect or undocumented gap was confirmed. I tested sender configuration and strict TypeScript compilation, then checked the existing TypeScript 7/Node types guidance; both behaviors were explainable.
- **Suggested improvement:** Consider linking the relevant sender settings page directly from the existing validation error to reduce first-send navigation, without changing its accurate error message.
- **Secret handling:** No credentials or personal recipient address are included.
