# The Scrapbook Chronicle - Setup Guide

## 🎨 Project Overview

A beautiful scrollytelling website presenting your 2025 year in review with a handmade scrapbook aesthetic mixed with editorial magazine design.

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site in action!

### Build for Production
```bash
npm run build
npm run preview  # Preview the production build
```

## 📝 Customization Guide

### 1. Update Your Name
Edit `src/components/sections/HeroSection.tsx` line 48:
```tsx
by [Your Name]  // Replace with your actual name
```

And line 33 in `src/components/sections/LessonsSection.tsx`:
```tsx
[Your Name]  // Replace with your actual name
```

### 2. Add Content to Sections

Each section is a separate component in `src/components/sections/`:

- **HeroSection.tsx** - Landing page (already styled)
- **TravelSection.tsx** - Add your travel photos and destinations
- **AccomplishmentsSection.tsx** - List your 2025 achievements
- **BakingSection.tsx** - Showcase your baking creations (uses Polaroid style)
- **EventsMissedSection.tsx** - Events you couldn't attend
- **EventsAttendedSection.tsx** - Events you showed up to
- **NumbersSection.tsx** - Your year in statistics
- **LessonsSection.tsx** - Lessons learned in 2025
- **GoalsSection.tsx** - Your 2026 goals

### 3. Design System

#### Colors
All colors are defined in `src/index.css` under the `@theme` section:
- `--color-cream`: Background color
- `--color-warm-brown`: Primary text color
- `--color-travel`: Travel section accent (#6B9AC4)
- `--color-accomplishments`: Accomplishments accent (#D4AF37)
- `--color-baking`: Baking section accent (#F4A460)
- And more...

#### Fonts
- **Playfair Display**: Headlines (serif, editorial)
- **Montserrat**: Subheadings (sans-serif, clean)
- **Inter**: Body text (readable)
- **Caveat**: Handwritten notes (script)

### 4. Visual Elements

Pre-built CSS classes you can use:
- `.polaroid` - Polaroid-style photo frame
- `.polaroid-caption` - Caption text for polaroids
- `.torn-edge` - Torn paper edge divider
- `.washi-tape` - Decorative tape accent
- `.handwritten` - Handwritten font style
- `.section-number` - Section number badge

### 5. Adding Photos

Replace placeholder content with actual images:
```tsx
<div className="polaroid">
  <img
    src="/path/to/your/image.jpg"
    alt="Description"
    className="w-full h-full object-cover rounded"
  />
  <div className="polaroid-caption">
    Your caption here
  </div>
</div>
```

## 📱 Mobile Responsiveness

The site is fully responsive:
- Mobile: Single column layout, stack elements
- Tablet (md): 2-column grids
- Desktop (lg): 3-column grids, side navigation visible

## 🎭 Animations

Powered by Framer Motion:
- Sections fade in as you scroll
- Smooth scroll behavior
- Intersection Observer for scroll-triggered animations
- Hover effects on interactive elements

## 🧭 Navigation

- **Desktop**: Dot navigation on right side (shows active section)
- **Mobile**: Smooth scrolling between sections
- Click any dot to jump to that section

## 📊 Project Structure

```
scrapbook-chronicle/
├── src/
│   ├── components/
│   │   ├── sections/         # All 9 section components
│   │   ├── PaperTexture.tsx  # Paper grain overlay
│   │   ├── ScrollProgressIndicator.tsx  # Dot navigation
│   │   └── Section.tsx       # Reusable section wrapper
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles & theme
│   └── main.tsx              # App entry point
├── index.html                # HTML template
└── package.json              # Dependencies
```

## 🎨 Next Steps

1. Replace "[Your Name]" with your actual name
2. Add your personal content to each section
3. Upload your photos to the `public/` folder
4. Customize colors if desired
5. Build and deploy!

## 🚢 Deployment

Ready to deploy? Build the project:
```bash
npm run build
```

The `dist/` folder contains your production-ready static files. Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 💡 Tips

- Keep the scrapbook aesthetic: use hand-drawn elements, polaroids, and organic layouts
- Mix in your personality: adjust colors, fonts, and content to match your style
- Add more sections if needed: follow the same pattern as existing sections
- The paper texture overlay is subtle (5% opacity) - adjust in `index.css` if desired

---

**Have fun creating your 2025 wrapped! 🎉**
