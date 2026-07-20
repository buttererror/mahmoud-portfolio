# Development Guide

This document holds detailed engineering conventions and current implementation status. These are working defaults and should evolve with the repository.

## Current Architecture

```txt
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  components/
    cards/
    layout/
    sections/
    ui/
  data/
    capabilities.ts
    case-studies.ts
    domains.ts
    focus-areas.ts
    links.ts
    profile.ts
```

Architecture defaults:

- Keep route files responsible for page composition and route metadata.
- Use small components with clear ownership.
- Use static TypeScript data for public MVP content.
- Prefer plain composition over clever abstractions.
- Add `src/lib/` only when shared logic creates a real need.
- Extract large section components when doing so improves reviewability or maintenance.

## Route Roadmap

Implemented:

- `/`

Next:

- `/case-studies/renohome`

Planned for the MVP:

- `/projects`
- `/contact`

Optional later routes remain defined by [portfolio-brief.md](portfolio-brief.md). Publish navigation links only after their destinations exist and are verified.

## Scope Defaults

Build the public-safe MVP before adding optional infrastructure.

- Do not add a CMS, authentication, database, backend endpoint, or contact form without a demonstrated need.
- Do not add animation libraries for the MVP.
- Keep case-study claims evidence-based and company-specific implementation details generalized.
- Use `https://www.buttererror.com` for canonical and social URLs. The approved social preview is `public/preview.png`.

## Commit Strategy

Use Conventional Commits:

```txt
type(scope): subject
```

Recommended types:

- `feat`: new user-facing behavior or content
- `fix`: bug fix
- `docs`: documentation-only change
- `style`: visual change without behavioral impact
- `refactor`: restructuring without intended behavior change
- `test`: test-only change
- `chore`: tooling, configuration, dependency, or maintenance work

Recommended scopes:

- `app`: app-wide behavior or layout
- `home`: homepage
- `case-studies`: case-study routes or content
- `projects`: Projects route or data
- `contact`: Contact route or links
- `docs`: project documentation and guidance
- `config`: Next.js, TypeScript, lint, package, or deployment configuration

Examples:

```txt
docs(guidance): streamline portfolio agent instructions
feat(home): refine portfolio hero content
feat(case-studies): add renohome case study
fix(contact): correct external link behavior
chore(config): update metadata defaults
```

Keep commits reviewable and scoped. Inspect the worktree and diff summary before suggesting or creating one.

## Verification Matrix

Documentation-only changes:

- Check Markdown links and referenced paths.
- Check for stale status or duplicated guidance.
- Run a tracked-file privacy scan when documentation discusses personal or project context.

TypeScript or React changes:

- Run `pnpm lint`.
- Run `pnpm build` after structural, import, metadata, or route changes.

UI changes:

- Check mobile, tablet, and desktop layouts.
- Check keyboard navigation, visible focus, heading order, and link behavior.
- Confirm copy remains public-safe and evidence-based.

Before deployment:

- Verify every implemented public route.
- Confirm metadata and navigation destinations.
- Confirm no placeholder or private content is exposed.
- Confirm the README reflects the current routes, setup, roadmap, and public-safe project scope.

## Deployment

- Production domain: `https://buttererror.com`
- Canonical URL: `https://www.buttererror.com`
- Hosting and CI/CD: Vercel
- Current behavior: the apex domain permanently redirects to the canonical `www` URL
