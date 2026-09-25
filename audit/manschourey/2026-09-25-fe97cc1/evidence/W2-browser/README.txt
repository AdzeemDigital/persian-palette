W2 browser / a11y / UX evidence (ManschouRey audit, baseline fe97cc1, 2026-09-25)
Reproduce (from $SCRATCH/W2 with playwright 1.56.0, @axe-core/playwright, axe-core 4.13.0 installed):
  (cd $SCRATCH/work && MANSHOUR_PORT=4199 node scripts/serve.mjs &)     # needed by 02 and 03 only
  WORK=$SCRATCH/work OUT=./out node scripts/01-smoke.mjs   (then 02 ... 09 in order)
Browser: Chromium 141.0.7390.37 headless (/opt/pw-browsers/chromium-1194), executablePath set in lib.mjs.
All non-local requests are recorded and then aborted (route -> internetdisconnected); no external host was fetched.
results/*.json  raw outputs (axe summary trimmed to 3 example nodes per rule and state)
results/*.PARTIAL.yml  Playwright ariaSnapshot: partial evidence only, NOT a screen-reader test
downloads/  files produced by the export modal's "download" button (json/tokens truncated to 20 KB)
screens/    16 JPEG screenshots
