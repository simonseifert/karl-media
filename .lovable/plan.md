

# Plan: Transform Portfolio Template into Karl Media Agency Website

## Summary

Transform the current single-photographer portfolio template into a multi-page agency website for **Karl Media** -- a media agency specializing in video production, social media, photography, and web development, led by **Nirmal Karl Hadzic** (Founder) and **Simon Seifert** (Co-Founder).

## What I Observed from the Screenshot

The old Karl Media site (one-page) features:
- Dark navy/black theme with a video hero background
- "Karl Media" branding with tagline "WORLD CLASS VIDEO FOR BUSINESSES"
- "Watch video" CTA button
- Tagline: "Our end-to-end process makes creating content simple and fun."
- Three service blocks (alternating image/text layout): Social Media, Photography & Videography, Websites
- Two team member profiles: Nirmal Karl Hadzic (Founder) and Simon Seifert (Co-Founder), each with social links (Instagram, LinkedIn, email, phone)
- "Follow Us on Instagram" button
- CTA section: "Let's build together" with "Schedule a Call" button
- Footer with copyright

## Changes Required

### 1. Rebrand Data Layer

**`src/types/index.ts`** -- Restructure types:
- Replace `PhotographerInfo` with `AgencyInfo` containing agency name, tagline, description, and a `teamMembers` array
- Replace `ProjectCategory` with categories like `'social-media' | 'videography' | 'photography' | 'web'`
- Add `TeamMember` interface with name, role, bio, image, social links
- Update `Project` to support Instagram Reels (add optional `reelUrl` for embedded video, remove `camera` field, add `platform` field)
- Add `Service` interface for the services section

**`src/data/photographer.ts`** -- Rename to `src/data/agency.ts`:
- Replace Sarah Mitchell data with Karl Media agency info
- Add team members: Nirmal Karl Hadzic (Founder) and Simon Seifert (Co-Founder)
- Add services data: Social Media, Photography & Videography, Websites
- Update social links, email, location, etc.

**`src/data/projects.ts`** -- Replace photography projects with Instagram Reel showcase entries:
- Each project represents a reel/campaign with a cover thumbnail and an Instagram embed URL
- Replace static images with reel thumbnails
- Update categories to match agency services

### 2. Update Pages

**`src/pages/Home.tsx`**:
- Keep video hero structure, update text to "Karl Media" + "WORLD CLASS VIDEO FOR BUSINESSES"
- Replace "About My Work" intro section with the "end-to-end process" tagline and services overview (3 service cards linking to a services section or about page)
- Keep Featured Projects section but label it "Our Work" -- show Instagram Reel thumbnails
- Add a CTA section at the bottom: "Let's build together" + "Schedule a Call" button

**`src/pages/About.tsx`**:
- Transform from single-person bio to agency about page
- Add agency story/mission section
- Add "Our Team" section with Nirmal and Simon profiles (photo, role, bio, social links -- matching the screenshot layout)
- Add services detail section (Social Media, Photography & Videography, Websites)

**`src/pages/Portfolio.tsx`**:
- Rename/rebrand as "Our Work" or keep as "Portfolio"
- Replace photo grid with Instagram Reel showcases -- each card shows a reel thumbnail, and clicking opens the reel (either embedded or links to Instagram)
- Update category filters to match agency service areas

**`src/pages/ProjectDetail.tsx`**:
- Adapt to show an embedded Instagram Reel instead of a photo gallery
- Show project context (client, service type, description)
- Could embed the actual Instagram reel using an iframe

**`src/pages/Contact.tsx`**:
- Update copy from photographer to agency language
- Change project types in form to match agency services
- Update contact info to Karl Media details
- Add "Schedule a Call" prominent CTA (matching screenshot)

### 3. Update Layout Components

**`src/components/layout/Header.tsx`**:
- Replace photographer name text logo with Karl Media logo (SVG -- user will need to provide/convert their PNG logo)
- For now, use "KARL MEDIA" text as placeholder until SVG logo is provided
- Keep nav structure: Home, Portfolio/Work, About, Contact

**`src/components/layout/Footer.tsx`**:
- Update copyright to Karl Media
- Update social links to agency accounts
- Add "Follow Us on Instagram" CTA

### 4. Update Theme/Styling

- Keep the dark theme as default (matches Karl Media's dark navy aesthetic from screenshot)
- Possibly adjust accent color to match Karl Media's red/coral accent seen in the screenshot
- Remove or adjust the light theme toggle if the brand is strictly dark

### 5. Component Updates

**`src/components/portfolio/ProjectCard.tsx`**:
- Add support for video/reel indicator overlay (play button icon)
- Adapt hover state to indicate video content

### 6. Logo

- User mentioned needing to convert PNG logo to SVG -- placeholder text "KARL MEDIA" will be used initially
- Once SVG is ready, it can be added to `src/assets/` and imported in the Header

## Implementation Order

1. Update types and data files (agency.ts, projects.ts, types)
2. Update Header and Footer with Karl Media branding
3. Update Home page (hero, services preview, CTA)
4. Update About page (team section with Nirmal & Simon, services)
5. Update Portfolio page (reel-focused grid)
6. Update ProjectDetail page (reel embed support)
7. Update Contact page (agency copy, schedule a call)
8. Style refinements (dark theme, accent colors)

## Technical Notes

- Instagram Reels can be embedded via `<iframe>` using `https://www.instagram.com/reel/{REEL_ID}/embed/`
- The existing framer-motion animations, scroll reveals, and responsive layout will be preserved
- All references to `photographerInfo` across the codebase will be updated to use the new `agencyInfo` import
- The video hero background approach is already in place -- only the video source URL needs to change (user will provide)

