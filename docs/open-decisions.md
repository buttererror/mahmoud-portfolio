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

- Status: Open
- Current default: Use placeholders during development only.
- Options: Email link, LinkedIn link, GitHub link, resume download, contact form, or a subset of these.
- Recommendation: Use direct email, LinkedIn, GitHub, and resume links for MVP; avoid a contact form until there is a real need.
- Notes: Visible placeholder links are not production-ready.

## Personal And Work Evidence Inputs

- Status: Open
- Current default: Ask Mahmoud for additional background or GPT-extracted context when needed.
- Options: Provide details directly in chat, provide a GPT-generated summary for review, or defer until a specific section needs the detail.
- Recommendation: Request only the info needed for the current decision or public claim, then keep unsupported details out of the site.
- Notes: Useful inputs include role targets, final links, resume facts, screenshots, real metrics, case-study responsibilities, constraints, team role, and privacy boundaries.

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

- Status: Open
- Current default: Clean, modern, readable, recruiter-friendly design.
- Options: Minimal editorial, compact dashboard-inspired, or case-study-heavy portfolio.
- Recommendation: Start with a compact dashboard-inspired portfolio because it supports the target positioning without becoming decorative.
- Notes: Ask before locking visual direction if design references are provided later.

## Code Organization Scale

- Status: Open
- Current default: `src/app`, `src/components`, `src/data`, and `src/lib`.
- Options: Keep simple folders, use feature folders, or use route-local components for each page.
- Recommendation: Start with simple folders for MVP; revisit if pages become complex.
- Notes: Discuss before introducing a larger architecture pattern.
