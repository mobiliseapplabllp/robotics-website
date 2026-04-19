# Routine guardrails — binding rules for all automated runs

Every Claude Code Routine that touches this repo reads this file first and treats every rule below as binding. If a rule is ambiguous for a given situation, the routine must exit and log rather than guess.

## Hard stops (exit immediately, do nothing else)

1. If `.routines-paused` exists at repo root → exit with message `paused`.
2. If `main` has open, unresolved security advisories from Dependabot marked critical → exit and open a Slack alert; do not attempt fixes.
3. If the current run would change more than 40 files, or more than 800 lines of diff → split the work; open a PR with the smallest atomic subset, leave the rest for the next run.
4. If any file under these paths would be modified → do not touch; open an issue instead:
   - `infra/`, `terraform/`, `.github/workflows/`
   - any file containing `SECRET`, `API_KEY`, `CREDENTIAL`, `.env*`
   - database migrations (`migrations/`, `prisma/migrations/`)
   - payment, checkout, or auth code (`**/payment/**`, `**/checkout/**`, `**/auth/**`)

## Branch, commit, PR, merge policy

- Always branch from the latest `main`. Branch name: `routine/<routine-name>/<YYYY-MM-DD>-<short-slug>`.
- Commits: conventional commits (`fix(a11y):`, `chore(deps):`, `docs(content):`, `content(blog):` etc.), one concern per commit.
- PR body must include: summary, category (accessibility / security / content / blog / mixed), files touched, automated-test evidence, rollback instructions, link to the routine run.
- Merge only when ALL required status checks are green. If any check is red, leave the PR open, append the failure reason to `docs/routines/COMPLETED.md`, and exit.
- Never force-push. Never rewrite history. Never delete branches other than the one this run created.

## Logging

At the end of every run (success, no-op, or guardrail exit), append a row to `docs/routines/COMPLETED.md` with: date/time (IST), routine name, trigger, branch, PR link, status (`merged` / `pr-open` / `no-op` / `exited-<reason>`), one-line summary. Commit that log entry in its own commit on the routine branch.

## Content integrity (applies to `refresh-content`, `publish-industry-blog`, combined)

- Never state a fact about Keenon products, specs, pricing, certifications, or the MALL × Keenon agreement unless it is in `docs/routines/BRAND.md` OR sourced from a domain on `docs/routines/BLOG-SOURCES.md`. Cite the URL in the PR body for every new factual claim.
- Never quote more than 15 words from any single external source, and never more than one quote per source. Paraphrase by default.
- Never invent customer logos, testimonials, case studies, stats, awards, or pilot results. If a placeholder exists in the site copy, leave it as a placeholder and open an issue asking for real input.
- Every blog post must preserve at least one `[HUMAN INPUT REQUIRED: ...]` block; do not auto-fill these.

## Escalation (open PR, do not merge)

- Any security fix that touches authentication, session handling, CSRF, CORS, CSP, or crypto.
- Any dependency bump that is a major version jump for a production dependency.
- Any accessibility fix that changes the visual design beyond color/contrast (e.g., restructures a landmark or replaces a custom component with a semantic one).
- Any content change to the homepage hero, partnership announcement, press page, or investor page.
- Any new blog post (the `publish-industry-blog` routine is PR-only by design).

## Size caps per routine

- `fix-accessibility`: ≤ 40 files, ≤ 800 lines per run.
- `fix-security`: ≤ 40 files, ≤ 800 lines per run.
- `refresh-content`: ≤ 30 files, ≤ 600 lines per run.
- `publish-industry-blog`: 1 post per run (plus its assets), soft cap ≤ 25 files.
- `site-review-and-ship` (combined): ≤ 60 files, ≤ 1200 lines total across all phases.

If a run hits the cap mid-work, it commits what it has, opens the PR, and exits.

## Override

This file is the authority for every routine. If a routine's prompt contradicts anything here, GUARDRAILS wins. Changes to this file require a human-approved PR; no routine may self-edit its own rules.
