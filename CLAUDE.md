# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal introduction repository.

## Project Structure

This repository contains a personal introduction website built with React, JavaScript, and Tailwind CSS located in the `portfolio-site/` directory.

```
portfolio-site/
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx      # Main hero section with introduction
│   │   ├── About.jsx     # About section with background
│   │   ├── Interests.jsx # Interests and skills section
│   │   └── Footer.jsx    # Footer with contact links
│   ├── App.jsx           # Main app component
│   └── index.css         # Tailwind CSS imports
├── tailwind.config.js    # Tailwind configuration with blue-purple theme
└── package.json          # Dependencies and scripts
```

## Development Commands

To work with this project, navigate to the `portfolio-site/` directory first:

```bash
cd portfolio-site
```

### Essential Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Development Notes

- **Theme**: Uses a blue-purple color scheme with custom Tailwind colors (primary/secondary)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Images**: Currently uses Unsplash placeholders - replace with AI-generated images as needed
- **Components**: Modular React components following UI/UX best practices
- **Typography**: Uses Inter font family for clean, modern typography

### Key Features Implemented

- Hero section with personal introduction
- About section with educational background
- Interests section highlighting AI and coding passion
- Responsive design with hover effects and animations
- Blue-purple gradient theme throughout
- Placeholder spaces for future AI-generated images