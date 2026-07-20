# Open Decisions

Use this file for portfolio choices that should not be guessed. Current defaults are allowed to change as the project direction becomes clearer.

When a decision is resolved, update its status and move the chosen direction into the relevant source of truth, such as [AGENTS.md](../AGENTS.md), [portfolio-brief.md](portfolio-brief.md), or implementation docs created later.

## Decision Template

```md
## Question

- Status: Open | Decided | Deferred
- Current default:
- Options:
- Recommendation:
- Notes:
```

## Final Contact Links

- Status: Decided
- Current default: Use LinkedIn, GitHub, and email on the homepage.
- Options: Email link, LinkedIn link, GitHub link, resume download, contact form, or a subset of these.
- Recommendation: Use direct email, LinkedIn, and GitHub links for MVP; avoid a contact form until there is a real need.
- Notes: LinkedIn is `https://linkedin.com/in/buttererror`, GitHub is `https://github.com/buttererror`, and email is `mahmoud@buttererror.com`. Resume behavior remains a separate open decision.

## Personal And Work Evidence Inputs

- Status: Open
- Current default: Ask Mahmoud for additional background or GPT-extracted context when needed.
- Options: Provide details directly in chat, provide a GPT-generated summary for review, or defer until a specific section needs the detail.
- Recommendation: Request only the info needed for the current decision or public claim, then keep unsupported details out of the site.
- Notes: Useful inputs include role targets, final links, resume facts, screenshots, real metrics, case-study responsibilities, constraints, team role, and privacy boundaries. Treat private context as source material only; publish generalized, approved facts.

## Privacy Review After Tasks

- Status: Decided
- Current default: Review changed files for privacy leaks before calling each task complete.
- Options: Manual review, targeted text search, or both.
- Recommendation: Use both when content changes: manually review UI/docs/metadata and search for known private names or domains.
- Notes: Check public UI, metadata, README/docs, alt text, data files, and link placeholders.

## Resume Behavior

- Status: Open
- Current default: Link to a resume when the final file or URL exists.
- Options: Public PDF in `public/`, external hosted resume URL, or no resume link in MVP.
- Recommendation: Use a PDF in `public/` if Mahmoud wants the portfolio to be self-contained; otherwise use a stable external URL.
- Notes: Do not invent a resume link.

## Renohome Live Link Handling

- Status: Open
- Current default: Mention that the live site may have changed after Mahmoud's contribution.
- Options: Link to the live site with a careful disclaimer, show no live link, or link only to screenshots if provided.
- Recommendation: Use a live link only if the page still supports the case study and the disclaimer remains visible.
- Notes: Do not imply the current live site fully represents Mahmoud's original work.

## Cluster Point Visibility

- Status: Open
- Current default: Include only if cleaned and worth showing.
- Options: Show it on Projects, keep it hidden, or mention it later after cleanup.
- Recommendation: Keep it hidden until it strengthens the portfolio.
- Notes: Do not add weak repos just to fill space.

## Full-Stack Web App Visibility

- Status: Deferred
- Current default: Add later only after a working vertical slice exists.
- Options: Hide for now, list as in-progress, or show after MVP-quality screenshots and README exist.
- Recommendation: Hide for now.
- Notes: Do not reveal the private project name or domain. If this work is shown later, describe it generically as a full-stack web app and generalize all details.

## Visual Direction References

- Status: Decided
- Current default: Clean, professional, recruiter-friendly layout with strong typography, clear spacing, high contrast, responsive structure, fast loading, easy scanning, and public-safe content.
- Options: Minimal editorial, compact dashboard-inspired, or case-study-heavy portfolio.
- Recommendation: Use the homepage layout in [portfolio-brief.md](portfolio-brief.md) as the current direction.
- Notes: Avoid heavy animations, 3D effects, overdesigned visuals, long paragraphs, generic template look, private screenshots, and company-specific stack exposure.

## Homepage Visual Evidence

- Status: Open
- Current default: Keep the homepage text-first until public-safe work visuals are approved.
- Options: Approved project screenshots, public product imagery, purpose-built diagrams, or no imagery for the MVP.
- Recommendation: Prefer real public-safe project evidence when available. Do not use private dashboard screenshots or decorative stock imagery that implies unsupported work.
- Notes: Any asset must be reviewed for company names, domains, client data, internal workflows, and other identifying details before publication.

## Production URL And Social Metadata

- Status: Decided
- Current default: Use `https://www.buttererror.com` as the canonical production URL and `public/preview.png` for Open Graph and X/Twitter previews.
- Options: Use the apex domain or its `www` redirect destination as canonical; use text-only social metadata now or wait for a dedicated preview image.
- Recommendation: Use the final `www` destination because `https://buttererror.com` permanently redirects there. Use the approved homepage preview for large social cards and replace it later if a stronger dedicated asset is designed.
- Notes: The site is deployed to Vercel with CI/CD configured. Do not publish a temporary URL or unreviewed image as permanent metadata.

## Projects Navigation Timing

- Status: Decided
- Current default: Omit Projects from homepage navigation until `/projects` exists.
- Options: Omit the link, show a disabled placeholder, or publish the route first.
- Recommendation: Publish only working navigation destinations.
- Notes: Add Projects to the header when the Projects route is implemented and verified.

## Code Organization Scale

- Status: Decided
- Current default: Grow architecture while building the homepage.
- Options: Keep simple folders, use feature folders, use route-local components, or create one component per homepage section upfront.
- Recommendation: Use a balanced approach: keep `src/app/page.tsx` as the composition map, use generic reusable cards/buttons/wrappers, and extract major section components only when they make a slice easier to review or maintain.
- Notes: Decision by Mahmoud. Review each slice before moving to the next one, then revise the next slice's structure, content, and styling as needed. See [homepage-implementation-plan.md](homepage-implementation-plan.md).
