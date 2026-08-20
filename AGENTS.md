# Mahmoud Ahmed Portfolio

## Purpose And Sources

This repository contains Mahmoud Ahmed's professional portfolio. Treat these documents as working sources of truth:

- Product positioning and public copy: [docs/portfolio-brief.md](docs/portfolio-brief.md)
- Open or changeable decisions: [docs/open-decisions.md](docs/open-decisions.md)
- Engineering conventions, route status, and commits: [docs/development.md](docs/development.md)
- Completed homepage sequence and review history: [docs/homepage-implementation-plan.md](docs/homepage-implementation-plan.md)

Current guidance is allowed to evolve. When new information conflicts with a documented default, raise the tradeoff and update the owning document after a decision is made.

## Stack And Commands

- Next.js App Router with the `src/` directory
- React and TypeScript
- Tailwind CSS
- ESLint
- pnpm
- Production hosting and CI/CD: Vercel

Use `pnpm`:

```bash
pnpm dev
pnpm lint
pnpm build
```

Do not introduce another package manager unless the project is intentionally migrated.

## Working Agreement

- Act as an experienced software engineer and active collaborator.
- Inspect the real repository and `git status --short` before editing.
- Preserve user changes and never revert unrelated work.
- Keep each change focused on the current task.
- Surface meaningful alternatives and recommend one with reasons.
- Ask before resolving meaningful ambiguity in product direction, architecture, routing, data shape, visual direction, SEO, accessibility, privacy, or deployment.
- Follow established repository patterns for small mechanical choices that are already clear.
- Record unresolved choices in [docs/open-decisions.md](docs/open-decisions.md) instead of silently deciding.
- Grow architecture with the product. Add abstractions only when they improve current readability, reuse, or ownership.

## Public Content And Privacy

Private background is source material, not publishable copy.

- Publish only facts, links, metrics, screenshots, and claims that Mahmoud has approved as public-safe.
- Generalize private companies, clients, projects, domains, workflows, architecture, and implementation details.
- Do not invent evidence, metrics, links, personal details, project facts, or screenshots.
- Do not inspect hidden private notes unless Mahmoud explicitly asks or approves it.
- Never name, link to, or require hidden private sources from tracked files or public UI.
- Ask for the specific public-safe facts needed when private context would improve a claim or case study.
- Position Mahmoud as a Full-Stack Developer with 7+ years of frontend experience. Keep the difference between long-term frontend experience and recent hands-on full-stack work explicit.

After every task, review changed files for:

- Secrets, credentials, private names, domains, client details, internal tools, email addresses, and phone numbers
- Unsupported metrics, exaggerated claims, and invented evidence
- Fake, broken, placeholder, or unapproved links
- Privacy leaks in UI copy, metadata, docs, alt text, and assets

## Implementation Rules

- Prefer existing App Router, component, and static-data patterns.
- Keep `src/app/page.tsx` as a readable composition map while the homepage remains small.
- Keep reusable UI in `src/components/` and public static content in `src/data/`.
- Add shared utilities only when there is real reuse.
- Avoid new dependencies unless their value is clear and proportionate.
- Prefer static rendering and route-level Next.js metadata.
- Use semantic HTML, one clear `h1` per page, logical heading order, descriptive links, visible focus states, and sufficient contrast.
- Make UI changes responsive and verify text does not overflow or overlap.
- Use optimized, approved, public-safe visual assets. Never use private dashboard screenshots.
- Do not add a CMS, authentication, database, backend endpoints, or heavy animation unless the scope is intentionally changed.

Detailed structure, route status, and commit conventions live in [docs/development.md](docs/development.md).

## Verification

After meaningful code changes, run:

```bash
pnpm lint
pnpm build
```

For UI changes:

- Verify every changed route that currently exists.
- Check mobile, tablet, and desktop layouts.
- Confirm navigation, metadata, keyboard behavior, and visible focus states.
- Run the privacy review above.

Do not claim checks passed when they were not run. Do not require verification of routes that have not been implemented.

## Commits

Use Conventional Commits unless Mahmoud requests another format. Before suggesting or creating a commit, inspect:

```bash
git status --short
git diff --stat
```

Use focused commits and do not include unrelated changes. See [docs/development.md](docs/development.md) for types, scopes, and examples.

## Learning Notes

The ignored `learning/` directory is a separate personal-learning Git repository, not portfolio source code.

- Follow `learning/AGENTS.md` before editing it.
- Use `learning/README.md` as its index.
- Check `git -C learning status --short` before editing.
- Update learning notes only when Mahmoud asks or the learning workflow explicitly requires it.
- Keep learning-repository rules there instead of duplicating them here.
