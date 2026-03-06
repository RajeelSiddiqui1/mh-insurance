# **App Name**: MH Insurance

## Core Features:

- Dynamic Theme Switching: Implement a light/dark mode toggle button with sun/moon icons, defaulting to light mode and ensuring colors automatically adjust for optimal visibility in dark mode.
- Responsive Header & Navigation: Display 'MH Insurance' logo/text on the left, with navigation links (Home, Services, About, Contact) for desktop, and a responsive hamburger menu for mobile devices.
- Engaging Hero Section: Feature a bold headline ('Protect What Matters Most'), a clear subtitle ('Commercial, Home, Auto, Life & More'), and a prominent 'Get a Quote' button that visually scales up on hover.
- Interactive Service Cards Grid: Showcase nine insurance services in a 3x3 grid for desktop, stacking on mobile, with each card featuring a relevant icon (Lucide-React or Heroicons) and a lift-up/shadow hover effect. Card backgrounds adjust for light/dark themes (white for light, bg-slate-800 for dark).
- AI-Powered Service Summary: An AI tool will provide concise, dynamically generated summary snippets for each insurance service upon user interaction (e.g., hover over a card), offering immediate, relevant information.
- Informative Multi-Column Footer: A three-column footer with 'About MH Insurance', 'Quick Links', and 'Contact Info' (Email, Phone), including social media placeholders and copyright text at the bottom.

## Style Guidelines:

- Primary brand color (deep professional blue): #2859AC. This represents trust and stability, used for important text and elements.
- Background color (light mode): #F9FBFF. A very light, desaturated blue providing a clean, airy, and trustworthy foundation. For dark mode, card backgrounds will be #2D3748 as requested, with other backgrounds adapting to dark, cool greys.
- Accent color (vibrant action orange): #F48E25. Used prominently for Calls-to-Action like the 'Get a Quote' button to signify energy and engagement, ensuring high contrast with the primary blue.
- All text will use 'Inter', a grotesque sans-serif font, for a modern, objective, and highly readable look suitable for both headlines and body text on a professional platform.
- Utilize icons from either Lucide-React or Heroicons library. Each service card will feature a contextually relevant icon, contributing to clear visual communication.
- Implement a mobile-first responsive layout ensuring seamless experience across all devices. The services grid will be 3x3 on desktop and stacked on mobile. Navigation will feature a hamburger menu for mobile and fixed links for desktop, alongside a three-column footer structure.
- Incorporate smooth and subtle animations using 'framer-motion', specifically for the 'Get a Quote' button (scale-up on hover) and service cards (lift/shadow on hover), enhancing interactivity and perceived quality.