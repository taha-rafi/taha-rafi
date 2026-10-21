# Nitrosend CLI first-send run report

- Environment: Windows 11, Node.js v22.21.1, npm v10.9.4, Nitrosend CLI v0.3.9.
- Installed/updated using `npm install -g '@nitrosend/cli@^0.3.9'`, then checked `nitrosend --version` and authenticated using `nitrosend login` and `nitrosend whoami`.
- First script run stopped before sending because I entered `Send` rather than the exact uppercase confirmation `SEND`. This is a local wrapper-script prompt, not a Nitrosend CLI defect.
- On the second script run, I confirmed `SEND`. The wrapper ran `nitrosend send --to proof@dogfood.nitrosend.net --subject "CLI first-send verification 20261021-224417" --body "First CLI email delivery test. Sent with Nitrosend CLI from my own account."`.
- CLI reported message ID `5161279`, `queued`, `Dry run: false`, at 2026-10-21 17:44:17 UTC. Nitrosend subsequently emailed a signed CLI-send receipt confirming the proof inbox received the message.
- Time from installation to first send was not precisely measured. Initial npm installation took 39 seconds, and the successful send occurred at approximately 22:44 PKT after browser-based OAuth login and two script runs.
- The slowest step was browser OAuth login and verifying that the hosted sender was active before sending.
- No CLI defect has been confirmed from this run. The CLI's `login`, `whoami`, `--version`, and `send` paths were exercised successfully.
- Suggested improvement: offer an easily discoverable CLI command to display the hosted sender's activation/readiness state before `send`, to reduce dashboard/API switching.
