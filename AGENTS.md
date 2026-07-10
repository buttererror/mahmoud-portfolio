# Mahmoud Ahmed Portfolio

## Purpose

This repo is Mahmoud Ahmed's professional portfolio website. The site should be a clear proof-of-work asset for recruiters and hiring managers, focused on React.js, Next.js, TypeScript, dashboards, SEO, performance, and production-ready frontend delivery.

Current product and content direction lives in [docs/portfolio-brief.md](docs/portfolio-brief.md). Open or changeable decisions live in [docs/open-decisions.md](docs/open-decisions.md). Treat both as working defaults, not permanent law.

## Stack And Commands

- Next.js App Router with the `src/` directory.
- React.js and TypeScript.
- Tailwind CSS.
- ESLint.
- pnpm.
- Intended deployment target: Vercel.

Use `pnpm` for this repo:

```bash
pnpm dev
pnpm lint
pnpm build
```

Do not add another package manager unless the project is intentionally migrated.

## Current Repo State

The repo currently starts from a fresh Next.js app. The only app files are under `src/app/`:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`

When building the portfolio, replace the default starter content with project-specific content and structure.

## Collaboration And Decisions

- Act like an experienced software engineer, not a passive code generator.
- Keep an open mind: current docs, rules, defaults, routes, and structure may change as the portfolio direction becomes clearer.
- When multiple reasonable paths exist, raise the tradeoff and give a recommendation with reasons.
- Ask before implementing meaningful ambiguity in product direction, architecture, code organization, routing, data shape, visual direction, SEO, accessibility, or deployment.
- When personal background, work evidence, links, metrics, screenshots, or case-study facts would improve accuracy, ask Mahmoud for that information. He may extract extra context from GPT when needed.
- Follow existing repo patterns for small mechanical choices that are already clear.
- If a decision remains unresolved, add or update it in [docs/open-decisions.md](docs/open-decisions.md) instead of silently choosing.

## Agent Working Rules

- Check `git status --short` before editing.
- Preserve user changes. Do not revert unrelated files.
- Keep changes focused on the current request.
- Use Conventional Commits for commit messages unless the user requests another style.
- Prefer the existing Next.js App Router patterns.
- Use route-level metadata from Next.js for page SEO.
- Avoid dependencies unless the benefit is clear for the MVP.
- If a change affects UI, check responsive behavior before considering it done.
- Keep public-facing claims accurate and evidence-based.

## Commit Strategy

Use Conventional Commits:

```txt
type(scope): subject
```

Recommended types:

- `feat`: new user-facing functionality or content.
- `fix`: bug fixes.
- `docs`: documentation-only changes.
- `style`: visual styling changes that do not change behavior.
- `refactor`: code restructuring without behavior changes.
- `chore`: tooling, config, dependency, or maintenance changes.

Recommended scopes:

- `app`: app-wide behavior or layout.
- `home`: homepage.
- `case-studies`: case-study pages or content.
- `projects`: projects page or project data.
- `contact`: contact page or contact links.
- `docs`: documentation and guidance.
- `config`: package, lint, TypeScript, Next, or deployment config.

Examples:

- `docs(guidance): add portfolio agent instructions`
- `feat(home): build portfolio hero section`
- `feat(case-studies): add renohome page`
- `chore(config): update next metadata defaults`

Before suggesting or making a commit, inspect the real diff with `git status --short` and `git diff --stat`.

## Learning Notes

The [learning](learning/) folder is an ignored nested git repo for personal learning notes, not portfolio source code.

- Follow [learning/AGENTS.md](learning/AGENTS.md) before editing learning notes.
- Use [learning/README.md](learning/README.md) as the learning index.
- Check `git -C learning status --short` before editing learning files.
- Update learning only when the user asks or when the workflow explicitly calls for it.
- Future portfolio-specific learning should live under `learning/cases/mahmoud-portfolio/` and `learning/projects/mahmoud-portfolio.md`.

Do not duplicate learning repo rules in this file; link to them.

## MVP Scope

Build the MVP first. Required routes:

- `/`
- `/case-studies/renohome`
- `/projects`
- `/contact`

Optional later routes:

- `/about`
- `/experience`
- `/case-studies/dashboards`
- `/case-studies/healthtech-video-consultation`

Do not delay the MVP by adding optional routes, a CMS, authentication, a database, backend endpoints, or heavy animation work.

## Code Organization Defaults

These are current defaults, not final decisions. Revisit them when the project grows or a better structure becomes clear.

```txt
src/
  app/
  components/
    cards/
    layout/
    sections/
    ui/
  data/
    case-studies.ts
    projects.ts
    skills.ts
    links.ts
  lib/
```

Guidelines:

- Use TypeScript for data and components.
- Keep components small and readable.
- Prefer plain composition over clever abstractions.
- Use static TypeScript data files for MVP content.
- Add shared utilities in `src/lib/` only when there is real reuse.

## Implementation Priority

1. Replace the starter homepage with the portfolio homepage.
2. Add shared layout pieces, including header and footer.
3. Add static data files for links, skills, projects, and case studies.
4. Add reusable section and card components.
5. Add the Renohome case study route.
6. Add the Projects route.
7. Add the Contact route.
8. Add route metadata.
9. Replace the starter README.
10. Deploy to Vercel after the MVP is verified.

## Quality Rules

- Use semantic HTML and one clear `h1` per page.
- Keep heading hierarchy clear.
- Preserve visible focus states.
- Use descriptive links.
- Maintain good color contrast.
- Add alt text for meaningful images.
- Prefer static rendering where possible.
- Use optimized images and lazy-load non-critical media where useful.
- Do not add animation libraries in the MVP.
- Do not invent metrics, confidential details, or unsupported claims.
- Do not invent links, personal details, project facts, screenshots, or work evidence.
- Do not describe Mahmoud as a Full-Stack Developer yet.
- Mention backend only as a growth area.

## Verification

After meaningful code changes, run:

```bash
pnpm lint
pnpm build
```

Before considering the MVP ready, manually verify:

- `/`
- `/case-studies/renohome`
- `/projects`
- `/contact`

Check mobile, tablet, and desktop layouts. Confirm navigation works, metadata exists, copy is claim-safe, and no private details are exposed.
