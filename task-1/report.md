# Report: Company Leaderboard Replication

## Approach

The goal was to replicate a company leaderboard UI as shown in the provided screenshots, while replacing all real data with fictional data.

## Tools and Techniques Used

- **HTML5/CSS3/JavaScript (Vanilla)**: Chose a simple static stack with no build tools or frameworks to ensure easy deployment to GitHub Pages without any build step.
- **Font Awesome 6.4**: Used for icons (star, presentation/desktop, gem/review, chevron) matching the original UI.
- **DiceBear Avatars API**: Used to generate unique, consistent avatar images for each fictional person via URL-based SVG generation (`https://api.dicebear.com/7.x/avataaars/svg?seed=Name`).
- **CSS Flexbox/Grid**: Used to replicate the card-based layout with proper alignment of rank, avatar, info, stats, and total score sections.

## Data Replacement Strategy

All original data was replaced with completely fictional information:

- **Names**: Used gender-neutral, common fictional names (e.g., "Alex Johnson", "Morgan Davis", "Jordan Rivera") that don't correspond to any real individuals.
- **Job Titles**: Used generic tech industry titles (Senior Software Engineer, Lead QA Engineer, Group Manager, etc.) that match the categories visible in the original but are not linked to specific people.
- **Departments**: Created generic department names (Engineering, Operations, Quality Assurance, Infrastructure, Design, Analytics) that are common across many organizations.
- **Scores/Stats**: Used plausible numerical values that demonstrate the sorting and ranking functionality without copying original scores exactly.
- **Avatars**: Generated procedurally using DiceBear API instead of using any real photos.

This approach ensures:
1. No personally identifiable information (PII) is exposed
2. No company-specific data is leaked
3. The application remains fully functional for demonstration purposes
4. All UI elements, filters, sorting, and expand/collapse features work correctly

## Features Implemented

1. **Ranked leaderboard cards** with position number, avatar, name, title, activity stats, and total score
2. **Department filter** dropdown to filter by team
3. **Period filter** dropdown (UI present for completeness)
4. **Sort functionality** by total score or name (ascending/descending)
5. **Expandable card details** showing breakdown of activities per person
6. **Responsive design** that works on mobile and desktop

## Deployment

The application is deployed as a static site in the `task-1` folder and is accessible via GitHub Pages at:
`https://mareel21.github.io/AI-challenge/task-1/`
