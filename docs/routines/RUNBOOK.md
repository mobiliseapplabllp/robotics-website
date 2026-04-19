# Routine runbook — operator procedures

When a routine misbehaves, follow this file. This is the playbook for the on-call person, not for the routines themselves.

---

## 1. Kill switch — pause all routines

The fastest way to stop every routine from doing anything.

```bash
git checkout -b ops/pause-routines
touch .routines-paused
git add .routines-paused
git commit -m "ops: pause all routines"
git push origin ops/pause-routines
# open PR, merge — every routine reads this file at Step 0 and exits
```

Effect: every routine reads `.routines-paused` at step 0 and exits with status `exited-paused` without writing anything else.

Resume:

```bash
git checkout -b ops/resume-routines
git rm .routines-paused
git commit -m "ops: resume routines"
git push origin ops/resume-routines
# open PR, merge
```

## 2. Pause a single routine

Routines are controlled in Claude Code's routine management UI. To pause one without affecting the others:

1. Open Claude Code → routines list.
2. Select the routine (e.g., `fix-security`).
3. Disable its trigger(s). This stops scheduled and GitHub-event firings.
4. API triggers remain callable — remove the trigger entirely if you want the endpoint off too.

## 3. Cancel a run in progress

If you see a routine doing something wrong right now:

1. Open the Claude Code session URL (from the routine's run log or Slack notification).
2. Stop the session from the UI. This halts further tool calls.
3. If a branch was pushed, close the PR without merging.
4. If a commit was merged before you caught it, go to §4 (rollback).

## 4. Rollback a merged change

Every routine PR includes rollback instructions in its body. The default pattern:

```bash
git checkout main && git pull
git revert -m 1 <merge-commit-sha>
git push origin main
# CI/CD deploys the revert automatically
```

For a blog post that was merged and indexed by Google:

1. Revert the commit as above.
2. Add the URL to `robots.txt` with a `Disallow` for 7 days (so search engines re-crawl and see the removal).
3. Submit a URL removal request in Google Search Console.
4. If the post was syndicated to LinkedIn/X, delete those posts manually.
5. If the post contained a factual error, note it in `docs/routines/ERRATA.md` (create if missing).

## 5. Investigate a failing routine

1. Open `docs/routines/COMPLETED.md`. Find the row for the failed run.
2. Open the linked Claude Code session. Read the transcript end-to-end.
3. Common failure modes:
   - **CI check red** — look at the failing job's log. Usually a test or lint rule the routine didn't anticipate.
   - **Guardrail exit** — the routine hit a hard stop (file count, path block, `.routines-paused`). Check what changed recently.
   - **Research loop / timeout** — the routine couldn't satisfy a constraint (e.g., no whitelist source for a required claim). Fix the input (expand BLOG-SOURCES.md or rewrite the backlog row) and re-run.
4. If the routine is producing bad output consistently, open `routine-prompts/<routine>.txt`, adjust the prompt, test against a branch with `.routines-paused` removed only on that branch, and update the live routine.

## 6. When to escalate to a human PR, not a routine fix

Don't let a routine reattempt if:

- It's made the same mistake twice in a row.
- It's editing files it shouldn't (check the guardrail hard-stop list).
- It's injecting claims not backed by `BRAND.md` or `BLOG-SOURCES.md`.

Open a regular PR, fix it by hand, and then tighten the routine prompt or guardrails to prevent recurrence.

## 7. Post-incident log

Any incident (wrong content shipped, CI bypass, guardrail miss, vendor alert) gets a one-page write-up in `docs/routines/INCIDENTS/<YYYY-MM-DD>-<slug>.md`:

- What happened.
- Timeline (IST).
- Who noticed, how.
- Immediate mitigation taken.
- Root cause.
- Permanent fix (prompt change, guardrail tightening, CI rule added).
- Follow-ups with owners and dates.

This is the mechanism by which the routine system gets steadily safer over time. Skipping it is how you end up with the same mistake three times.
