// All site content lives here. Edit freely.

export const profile = {
  name: 'Tejiri Anthony',
  short: 'TEEJAY',
  role: 'Frontend Engineer',
  location: 'Lagos, Nigeria',
  email: 'sirteejay007@gmail.com',
  intro:
    'I build whatever the client needs: responsive websites, e-commerce storefronts and production apps, using React, TypeScript and Next.js.',
  about:
    'Results-driven Frontend Engineer with 5+ years of experience building responsive, high-performance web applications with React, TypeScript, Next.js, Tailwind CSS and Redux. I deliver pixel-perfect UI, integrate REST APIs, and work well in Agile teams. My background covers dashboards, SEO optimization and remote freelance delivery for global clients.',
  greetings: ['Hello', 'Hola', 'Salut', 'Hallo', 'Hi there'],
  resume: '/resume.pdf',
}

export const stats: { to?: number; suffix?: string; text?: string; label: string }[] = [
  { to: 5, suffix: '+', label: 'Years of experience' },
  { to: 8, label: 'BigCommerce apps in production' },
  { text: 'Global', label: 'Freelance clients since 2020' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/greeniie' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejiri-anthony' },
  { label: 'Twitter / X', href: 'https://twitter.com/SirTeejaii' },
  { label: 'Instagram', href: 'https://www.instagram.com/official_sirteejay/' },
  { label: 'Upwork', href: 'https://www.upwork.com' }, // TODO: swap for your profile URL
  { label: 'Fiverr', href: 'https://www.fiverr.com/greeniieteejay' },
]

export type Project = {
  title: string
  kind: string
  status: string
  blurb: string
  stack: string[]
  items?: string[]
  href?: string
  accent: 'acid' | 'hot' | 'sky'
}

export const projects: Project[] = [
  {
    title: 'Pels Skincare',
    kind: 'E-commerce',
    status: 'Live',
    blurb: 'Online storefront for a skincare brand, built with Next.js for speed, SEO and a smooth shopping experience on mobile.',
    stack: ['Next.js', 'Tailwind CSS', 'Styled Components'],
    href: 'https://www.pelsskincare.com/',
    accent: 'acid',
  },
  {
    title: 'JMD Linetronix',
    kind: 'Company website',
    status: 'Live',
    blurb: 'Responsive company website written in vanilla JavaScript, HTML and CSS. No framework, just lean, fast pages.',
    stack: ['Vanilla JS', 'HTML5', 'Custom CSS'],
    href: 'https://jmdlinetronix.com.ng/',
    accent: 'hot',
  },
  {
    title: 'Subscriptions Plus',
    kind: 'BigCommerce app',
    status: 'In production',
    blurb: 'Subscription management for BigCommerce stores, with a self-serve experience for shoppers and an admin backoffice for merchants.',
    stack: ['React', 'TypeScript', 'Styled Components', 'BigDesign'],
    accent: 'sky',
  },
  {
    title: 'Memberships Plus',
    kind: 'BigCommerce app',
    status: 'In production',
    blurb: 'Membership management for BigCommerce stores, live in production.',
    stack: ['React', 'TypeScript', 'Styled Components', 'BigDesign'],
    accent: 'acid',
  },
  {
    title: 'App Extensions Suite',
    kind: 'BigCommerce extensions',
    status: 'In production',
    blurb: 'A set of embeddable extensions for BigCommerce storefronts, built in React and TypeScript.',
    stack: ['React', 'TypeScript', 'Styled Components', 'BigDesign'],
    items: ['Form Builder', 'Contact Form', 'NPS Survey Builder', 'Feedback Widget', 'FAQ Builder', 'Knowledge Base'],
    accent: 'hot',
  },
]

export type Job = {
  role: string
  company: string
  period: string
  points: string[]
}

export const jobs: Job[] = [
  {
    role: 'Frontend Engineer',
    company: 'Resuss',
    period: '2024 — Present',
    points: [
      'Built the admin dashboard to monitor and visualize data from the mobile application, using ReactJS and TailwindCSS.',
      'Developed the Resuss marketing website with ReactJS and TailwindCSS, responsive across all devices.',
      'Delivered all features on time with pixel-perfect accuracy against design specifications.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'iRespond Africa',
    period: '2022 — 2024',
    points: [
      'Revamped the product interface to improve usability and visual appeal for a diverse user base.',
      "Built iRespond's assessment platform and multiple UI products using ReactJS.",
      'Applied SEO best practices to drive engagement and improve search rankings.',
      'Delivered features on schedule following Agile/Scrum methodologies.',
    ],
  },
  {
    role: 'Frontend Developer & Webmaster',
    company: 'ISSL',
    period: '2021 — 2022',
    points: [
      'Converted mockups into functional web pages using ReactJS, TailwindCSS and MUI.',
      'Fixed UI bugs and performance issues to improve stability and user experience.',
      'Handled DNS registration and technical support for WordPress-based client sites.',
    ],
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Upwork',
    period: '2020 — Present',
    points: [
      'Delivered responsive React and TypeScript web applications for global clients across various industries.',
      'Translated Figma and design files into clean, maintainable component-based code.',
      'Maintained strong client relationships through clear communication and on-time delivery.',
    ],
  },
]

export const education = {
  school: 'Mountaintop University',
  degree: 'Bachelor of Science — Computer Science',
  period: '2015 — 2019',
}

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SASS/SCSS'] },
  { title: 'Frameworks', items: ['React', 'Next.js', 'Redux', 'TailwindCSS', 'Material UI', 'Shadcn/UI', 'Vite'] },
  { title: 'Frontend', items: ['Responsive Design', 'Component Architecture', 'Pixel-Perfect UI', 'React Router'] },
  { title: 'Tools', items: ['Git', 'REST API Integration', 'Figma', 'Agile/Scrum', 'SEO Optimization'] },
]
