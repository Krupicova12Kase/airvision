

## Plan: UX improvements, scroll animations, collaboration links, logo replacement, and team initials

### 1. Replace school logo
- Copy `user-uploads://Logo_steel.png` to `src/assets/skolni_logo.png` (overwrite)
- Update all `<img>` tags using the logo to use `object-contain` and appropriate sizing (not square `h-7 w-7` but width-based like `h-7 w-auto`) to preserve the non-square aspect ratio

### 2. Team initials update
- In `Index.tsx`, change the team avatar logic from `member.name.charAt(0)` to use a new `initials` field
- Add `initials` field to each team member in `translations.ts`: MK, JT, LZ, BZ, MZ

### 3. Mobile UX improvements
- Add a hamburger menu for mobile navigation (currently `hidden md:flex`)
- Create a mobile menu component with slide-in drawer using Sheet from shadcn/ui
- Adjust font sizes, padding, and grid layouts for small screens (e.g., hero text sizing, results grid `grid-cols-1` on mobile)
- Make the NDVI formula box responsive
- Ensure the "About" section image overlay doesn't overflow on mobile

### 4. Scroll animations
- Create a `useScrollAnimation` hook using `IntersectionObserver`
- Add CSS keyframe animations: `slide-up`, `slide-in-left`, `slide-in-right`, `scale-up`, `fade-in`
- Apply animations to sections as they enter viewport:
  - Section titles: fade-up
  - Tech cards: staggered scale-up
  - About image: slide-in-right, text: slide-in-left
  - NDVI color bar: animated width expansion
  - Advantages items: staggered slide-in
  - Result cards: staggered fade-up
  - Team members: staggered scale-up
  - Collaboration items: staggered slide-in

### 5. Collaboration links
- Update `translations.ts` collaboration items to include `url` field:
  - Odbor městské ekologie: `https://www.hradeckralove.org/zivotni-prostredi/mestska-zelen`
  - ÚCL: `https://www.caa.cz/`
  - ESA Climate Detectives: `https://www.esa.int/Education/Climate_Detectives`
- Make collaboration items clickable `<a>` tags with `target="_blank"`

### Files to modify
- `src/assets/skolni_logo.png` — replace with uploaded logo
- `src/lib/translations.ts` — add `initials` to team members, add `url` to collaboration items
- `src/pages/Index.tsx` — mobile menu, scroll animations, logo sizing, initials, collaboration links
- `src/index.css` — scroll animation keyframes and classes
- `src/hooks/useScrollAnimation.ts` — new hook for intersection observer

