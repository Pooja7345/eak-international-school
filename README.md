# EAK International School – Website

A modern, responsive K-12 school website built as a frontend assignment for Eak Pustak.

**Live:** (Vercel link yahan jodna)
**Code:** https://github.com/Pooja7345/eak-international-school

## Tech stack
React (Vite), Tailwind CSS v4, React Router, lucide-react, react-icons.
Why: reusable components, a fast dev server and consistent design tokens.

## Pages
Home, About, Academics, Admissions, Facilities, Events & Notices, Contact, and a 404 page.

## Design decisions
- Parent-first: the Admissions CTA appears in the header, hero, footer and a dedicated page.
- Navy (trust) with gold (call to action) and serif headings for a premium feel.
- Content lives in `src/data/`, separate from the UI, so it is easy to update.
- Reusable pieces: Button, Reveal (scroll animation), SectionTitle, PageBanner.
- Events page: search, category and date filters, and Load More (frontend only).
- Accessibility: alt text, aria labels, focus styles and reduced-motion support.
- Responsive: mobile-first, checked at 360px, 768px and 1280px.

## Run locally
npm install
npm run dev

## Notes
All content is dummy. Forms are UI prototypes and do not send data.
The Events page uses a fixed "today" date (12 Oct 2026) for the demo.
Photos are my own / from free stock sites.