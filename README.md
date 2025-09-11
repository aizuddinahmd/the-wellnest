# The WellNest - Wellness & Fitness Studio

A modern, responsive landing page for The WellNest wellness and fitness studio. This is a simple static website built with Next.js 15, React, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Multiple Pages**:
  - Home page with hero section and services
  - Classes page showcasing different fitness programs
  - Schedule page with weekly class timetable
  - Dashboard page for user management
  - Get Started page with membership plans
- **Interactive Components**:
  - Animated hero section
  - Service carousels
  - Mobile-responsive navigation

## Tech Stack

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd thewellnest
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── classes/           # Classes page
│   ├── schedule/          # Schedule page
│   ├── dashboard/         # Dashboard page
│   ├── get-started/       # Get Started page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── navbar.tsx         # Navigation component
│   ├── hero-section.tsx   # Hero section
│   ├── Services2.tsx      # Services component
│   ├── ListofServices.tsx # Services list
│   ├── Services3.tsx      # Additional services
│   └── feature-slider.tsx # Feature slider
└── public/               # Static assets
    └── thewellnest-logo.png
```

## Customization

### Colors

The main brand colors are defined in `globals.css`:

- Primary: `#b7a37a` (warm beige)
- Secondary: Various blues and purples
- Background: Gradient from blue to purple

### Content

- Update text content in the respective page components
- Replace logo in `public/thewellnest-logo.png`
- Modify service offerings in the Services components

### Styling

- All styling is done with Tailwind CSS
- Custom CSS variables are defined in `globals.css`
- Responsive breakpoints follow Tailwind's default system

## Deployment

This is a static Next.js application that can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Build for Production

```bash
npm run build
```

The built files will be in the `.next` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. Please ensure you have the right to use any images or content.

## Contact

For questions or support, please contact the development team.
