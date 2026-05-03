# Futuristic Portfolio Template

A visually immersive, premium portfolio website template for creative professionals featuring advanced 3D elements, smooth UI animations, and modern design aesthetics.

## 🌟 Features

### Core Visual & Interactive Features
- **3D Hero Section**: Interactive Three.js scene with floating geometric shapes
- **Glassmorphism & Neumorphism**: Modern UI effects throughout the interface
- **Animated Components**: Smooth transitions, hover effects, and micro-interactions
- **Theme Switcher**: Light/dark mode support with smooth transitions
- **Custom Cursor**: Interactive cursor that responds to different elements
- **Parallax Scrolling**: Depth effects as users scroll through the page

### Template Structure
- **Hero/Landing**: Fullscreen 3D scene with animated headline and call-to-action
- **Portfolio Gallery**: Grid layout with filtering, 3D hover previews, and category support
- **About**: Timeline view for education, skills, and experience with animated reveals
- **Services**: Visually rich cards with icons and animated progress bars
- **Testimonials**: Carousel with animated counters and entry animations
- **Contact**: Elegant form with validation and interactive 3D globe

### Technical Specifications
- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS 4 with custom animations and effects
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Animations**: Framer Motion for smooth UI animations
- **Components**: shadcn/ui component library
- **Performance**: Optimized with lazy loading and performance monitoring
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd futuristic-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page component
├── components/
│   ├── ui/                # shadcn/ui components and custom UI
│   │   ├── glass-card.tsx
│   │   ├── neumorphism-card.tsx
│   │   ├── futuristic-button.tsx
│   │   ├── custom-cursor.tsx
│   │   ├── navigation.tsx
│   │   └── ...
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── portfolio-section.tsx
│   │   ├── services-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── contact-section.tsx
│   ├── 3d/                # Three.js components
│   │   ├── hero-scene.tsx
│   │   └── globe.tsx
│   └── optimization/      # Performance components
│       └── performance-optimizer.tsx
├── hooks/                 # Custom React hooks
│   ├── use-toast.ts
│   ├── use-mobile.ts
│   └── use-parallax.ts
└── lib/                   # Utility functions
    ├── utils.ts
    ├── db.ts
    └── socket.ts
```

## 🎨 Customization

### Colors & Themes
The template uses a sophisticated color system with CSS variables. Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... other color variables */
}
```

### 3D Scene Customization
Customize the 3D hero scene in `src/components/3d/hero-scene.tsx`:
- Add/remove 3D objects
- Modify colors and animations
- Adjust camera settings and controls

### Content Updates
Update content in each section component:
- **Hero**: Headline, description, and call-to-action text
- **About**: Personal story, skills, and timeline items
- **Portfolio**: Project data, images, and categories
- **Services**: Service offerings and process steps
- **Testimonials**: Client feedback and statistics
- **Contact**: Contact information and form fields

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
```

### Adding New Sections

1. Create a new section component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/ui/navigation.tsx`
4. Update the scroll-to-section functionality

### Custom Animations

The template uses Framer Motion for animations. Create custom animations:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

## 📱 Responsive Design

The template is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

Use Tailwind's responsive prefixes:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## ⚡ Performance Optimization

### Built-in Optimizations
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic bundle splitting with Next.js
- **Image Optimization**: Next.js Image component with WebP support
- **Performance Monitoring**: Real-time metrics in development mode
- **Smooth Scrolling**: Optimized scroll animations

### Best Practices
- Use `next/image` for all images
- Implement proper loading states
- Optimize 3D assets and textures
- Use CSS transforms instead of position changes for animations
- Monitor Core Web Vitals

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

### Tailwind Configuration
Extend the theme in `tailwind.config.ts`:

```tsx
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The template can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework for production
- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation
- Review the example implementations

---

Built with ❤️ using Next.js and modern web technologies.