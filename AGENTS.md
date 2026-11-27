# ELEC2441 Review working agreement

- This repository contains the user's ELEC2441 review website. The main notes file is `ELEC2441 Review.html`; `index.html` is the GitHub Pages entry point.
- Write all study notes in English unless the user explicitly requests Chinese.
- Organize additions under the appropriate LT1-LT9 section and preserve existing notes.
- After each user-requested update to this review website, perform appropriate checks, commit the relevant changes, and push to `origin/main` without asking for a separate reminder or confirmation. The user explicitly authorized this ongoing workflow.
- Preserve unrelated changes and remote history. Do not force-push. If authentication, conflicts, or another error prevents pushing, report the exact blocker and distinguish committed changes from successfully pushed changes.
- Remote: git@github.com:EsperSze/ELEC2441.git
- On this Windows computer, use Windows OpenSSH with the user's SSH agent when needed: `git -c core.sshCommand="C:/Windows/System32/OpenSSH/ssh.exe -o BatchMode=yes -o ConnectTimeout=15" push`.
- This agreement applies when the assistant performs an update; it does not imply background monitoring of edits made outside the chat.

- In review formulas, retain the lecture notes' full descriptive terms (such as CPU time, CPU clock cycles, Clock cycle time, Clock rate and Instruction count); do not introduce shorthand symbols. Keep abbreviations used in the source, such as CPI.

- For future exam questions, place a small question link/button to the right of the relevant knowledge topic only. Open questions on a separate HTML page under `questions/`. Show questions and options immediately; hide each answer and explanation in a native `<details>` disclosure without the `open` attribute, revealed with its triangle. Include a link back to the relevant lecture, keep the layout responsive, and label derived solutions as unofficial.

- When the user annotates text and writes "hidden note", add a concise English explanation at that exact text using the established hover-tooltip format. Show it on mouse hover and keyboard focus; keep it hidden otherwise. Render the tooltip outside clipping containers and position it within the viewport, following the corrected ISR tooltip. Check the change, then commit and push automatically without asking for a separate reminder.

- Use soft gray backgrounds for all text highlights; do not use bright highlight colors. Apply this to future note updates as well.
