# Homepage Implementation Plan

This plan guides the homepage refactor from the current prototype toward the latest direction in [portfolio-brief.md](portfolio-brief.md).

## Status

Implemented and verified. Public-safe visual evidence remains an open refinement decision.

The final homepage audit confirmed:

- One semantic `h1` and consistent section heading hierarchy.
- Keyboard-accessible navigation with a skip link and visible focus states.
- Real GitHub and LinkedIn destinations with no fake public links.
- Responsive layouts at mobile, tablet, and desktop widths.
- Public-safe copy with no hidden source names or private project details.
- Successful lint and production build checks.

## Strategy

Keep the current homepage prototype. Do not revert and restart from scratch.

The current homepage is useful scaffolding because it already establishes:

- Static data files.
- Reusable cards and CTA components.
- Layout components.
- Homepage metadata.
- A working responsive page.

However, the current homepage is behind the updated [portfolio-brief.md](portfolio-brief.md). It should be treated as a checkpoint, not the final structure.

## Architecture Decision

Grow the architecture while building.

Use a balanced approach:

- Keep `src/app/page.tsx` as the page composition map.
- Use generic building blocks such as section wrappers, info cards, case-study cards, and CTA links.
- Extract major section components when they make the current slice easier to review or maintain.
- Do not create every section file from the brief upfront just because the draft lists them.
- Avoid a large upfront architecture while the homepage direction is still evolving.

This gives us enough structure to move piece by piece without locking the project into an overbuilt design too early.

## Current Work Checkpoint

Before the next refactor slice, commit the current homepage prototype if it is not already committed.

Suggested commit:

```txt
feat(home): add first homepage MVP scaffold
```

If planning/decision docs are changed separately, commit them separately.

Suggested commit:

```txt
docs(decisions): record homepage implementation approach
```

## Slice Sequence

### Slice 1: Data Model First

Update static data before changing layout:

- Replace placeholder links with decided public links: LinkedIn and GitHub.
- Keep resume unresolved; do not invent a resume URL.
- Update profile headline, summary, current direction, and footer copy.
- Add domain/product experience data.
- Add core frontend capability data.
- Replace the current three case-study cards with four public-safe cards.
- Replace direct `techStack` data with frontend engineering focus data.
- Keep company-specific stacks generalized.

### Slice 1 Review

Before moving on:

- Confirm data names and file structure are clear.
- Check content against [portfolio-brief.md](portfolio-brief.md).
- Search for private project names, private domains, and private implementation details.
- Confirm no fake metrics or unsupported claims.
- Revise the next slice structure before implementing it.

### Slice 2: Header And Hero

Update the first impression:

- Header navigation: Case Studies, Projects, Contact.
- Header CTA: Get in Touch.
- Hero label, headline, supporting text, and CTA links from the brief.
- Use real public links where decided.
- Keep the section clean, readable, and responsive.

### Slice 2 Review

Before moving on:

- Review mobile and desktop header behavior.
- Check hero readability and line length.
- Confirm no phone number or private details appear.
- Decide whether the next slice needs new section components or can reuse generic cards.

### Slice 3: Domain Experience And Capabilities

Add or refactor sections for:

- Domain and product experience.
- Core frontend capabilities.

Use compact cards or rows. Keep each item short and recruiter-friendly.

### Slice 3 Review

Before moving on:

- Check that the page shows breadth without sounding scattered.
- Confirm domain labels are public-safe.
- Confirm the cards do not read like a long resume.

### Slice 4: Selected Case Studies

Refactor case studies to the four-card model:

- Frontend Platforms And Dashboards.
- Renohome Frontend Delivery.
- SEO And Performance-Focused Websites.
- Healthtech Applications.

Use public-safe summaries and render CTAs only when real detail pages exist.

### Slice 4 Review

Before moving on:

- Confirm no exact private company stacks are exposed.
- Confirm no private dashboard screenshots are referenced.
- Confirm Renohome includes the live-site-change caveat.

### Slice 5: Frontend Engineering Focus

Replace the direct "Tech Stack" section with "Frontend Engineering Focus."

The section should group technologies by engineering focus:

- Modern Frontend Development.
- UI Systems And Forms.
- SEO And Performance.
- Delivery And Collaboration.

Do not attach exact technologies to specific private company projects.

### Slice 5 Review

Before moving on:

- Confirm the section is not titled "Tech Stack."
- Confirm broad technologies are general and public-safe.
- Check responsive card layout.

### Slice 6: Current Direction, Contact, And Footer

Update final homepage sections:

- Current Direction.
- Contact CTA.
- Footer.

Use LinkedIn and GitHub. Keep backend learning secondary. Do not present Mahmoud as a Full-Stack Developer.

### Slice 6 Review

Before moving on:

- Confirm contact links are real and safe.
- Confirm no unresolved placeholder looks production-ready.
- Confirm footer is concise.

## Verification After Each Slice

Run checks appropriate to the slice:

- `pnpm lint` after TypeScript/React changes.
- `pnpm build` after structural or import changes.
- Manual responsive review when UI changes.
- Privacy search when content changes.

Suggested privacy search targets:

- Private project names.
- Private domains.
- Private company/client names.
- Exact private stacks.
- Unsupported metrics.
- Fake links.
- Phone number.

## Private Context Rule

Private source notes are ignored by git.

Do not name or link to hidden private sources from tracked docs, source code, public UI, metadata, or README content. When private context is needed, ask Mahmoud for the specific public-safe facts to use, then publish only generalized or approved content.

## Done Criteria

The homepage refactor is done when:

- It matches [portfolio-brief.md](portfolio-brief.md).
- It shows industry and product breadth.
- It shows frontend capabilities without exposing private stacks.
- It includes four selected case-study cards.
- It links to LinkedIn and GitHub.
- It has correct metadata.
- It is responsive.
- It uses semantic HTML.
- It avoids fake metrics.
- It avoids private/confidential details.
- It does not mention Shopify.
