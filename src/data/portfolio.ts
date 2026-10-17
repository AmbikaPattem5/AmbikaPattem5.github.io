export const personal = {
  name: 'Ambika Pattem',
  title: 'React Developer · Frontend Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'ambikapattem@gmail.com',
  phone: '+91 7995352932',
  linkedin: 'https://www.linkedin.com/in/ambikapattem/',
  github: 'https://github.com/ambikapattem5',
  tagline:
    'Building responsive, component-based web applications with React, TypeScript, and modern frontend tooling.',
  availability: 'Open to React & Frontend Developer roles',
}

export const summary = `React Developer with 2+ years of professional frontend experience at Infor, complemented by ongoing independent React development. I turn requirements into functional, user-friendly interfaces—from component design and state management to REST API integration, validation, debugging, and responsive testing.`

export const focusAreas = [
  'Requirements → UI → Components → State → APIs → Validation → Deployment',
  'Reusable component architecture with React Hooks & modern patterns',
  'Redux Toolkit, React Router, and REST integration with Axios',
  'Tailwind CSS, responsive layouts, and accessible UI',
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'React & State',
    skills: ['React Hooks', 'React Router', 'Redux Toolkit', 'Context API'],
  },
  {
    title: 'API & Data',
    skills: ['REST APIs', 'Axios', 'Fetch API', 'JSON', 'Async data handling'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Chrome DevTools', 'JIRA', 'Agile/Scrum', 'Responsive Design'],
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Frontend Developer · React.js',
    company: 'Independent Projects & Professional Development',
    location: 'Bengaluru, India',
    period: 'Jan 2024 – Present',
    highlights: [
      'Building responsive, component-based React apps from real-world requirements and workflows.',
      'Reusable components with React Hooks & React Router; state with Redux Toolkit.',
      'REST APIs via Axios with form validation, error handling, and responsive testing.',
      'Tailwind CSS, Git/GitHub workflows, deployment, and growing TypeScript proficiency.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Infor',
    location: 'Hyderabad, India',
    period: 'Jan 2021 – Dec 2022',
    highlights: [
      'Engineered responsive enterprise web apps with React.js, JavaScript (ES6+), and CSS3.',
      'Integrated RESTful APIs with Axios to fetch, map, and render dynamic data.',
      'Collaborated with product, QA, and engineering in Agile delivery and feature releases.',
      'Git/GitHub for version control, branch workflows, and maintainable components.',
    ],
  },
]

export type Project = {
  name: string
  subtitle?: string
  description: string
  features: string[]
  stack: string[]
  liveUrl: string
  sourceUrl: string
  previewImage?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'TaskFlow',
    subtitle: 'Project & Task Management · Team Collaboration',
    description:
      'TaskFlow is a project and task management application designed to help teams plan projects, organize tasks, assign responsibilities, and track work progress in one centralized platform. It aims to improve team collaboration by providing visibility into project activities, task priorities, deadlines, and overall progress. The application helps teams stay organized, manage workloads efficiently, and coordinate their work toward shared goals.',
    features: [
      'Project planning & multi-view task organization',
      'Task assignment & workload distribution',
      'Priority levels, deadlines & status tracking',
      'Redux Toolkit & Context API state architecture',
      'Team collaboration & centralized progress tracking',
    ],
    stack: ['React.js', 'TypeScript', 'React Router', 'Tailwind CSS', 'Redux Toolkit', 'Context API'],
    liveUrl: 'https://ambikapattem5.github.io/taskflow',
    sourceUrl: 'https://github.com/AmbikaPattem5/taskflow',
    previewImage: 'taskflow-preview.jpg',
    featured: true,
  },
  {
    name: 'CareHub',
    subtitle: 'Clinic Management · Healthcare Operations',
    description:
      'CareHub is a clinic management application designed to simplify and organize day-to-day healthcare operations. It helps manage patient and doctor information, schedule appointments, maintain consultation records, manage prescriptions, and handle billing activities. The platform brings essential clinic operations together in one place, helping streamline administrative tasks, improve information management, and support efficient clinic workflows.',
    features: [
      'Patient & doctor profile management',
      'Appointment scheduling & consultation queue',
      'Consultation records & prescription handling',
      'Clinic billing & administrative workflows',
      'Context API state management & responsive UI',
    ],
    stack: ['React.js', 'TypeScript', 'React Router', 'Tailwind CSS', 'Context API'],
    liveUrl: 'https://ambikapattem5.github.io/carehub/',
    sourceUrl: 'https://github.com/AmbikaPattem5/carehub',
    previewImage: 'carehub-preview.jpg',
    featured: true,
  },
  {
    name: 'FoodHub',
    subtitle: 'Restaurant Ordering · Single-Page Application',
    description:
      'A responsive restaurant ordering single-page application with menu browsing, cart management, and a polished mobile-first experience.',
    features: [
      'Menu browse & filter',
      'Cart interactions & ordering flow',
      'React Router navigation',
      'Reusable component structure',
      'Deployed on GitHub Pages',
    ],
    stack: ['React.js', 'TypeScript', 'React Router', 'Tailwind CSS', 'Context API'],
    liveUrl: 'https://ambikapattem5.github.io/foodhub/',
    sourceUrl: 'https://github.com/AmbikaPattem5/foodhub',
    previewImage: 'foodhub-preview.png',
    featured: true,
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech) — Computer Science and Engineering',
  school: 'Sri Venkateswara College of Engineering, Tirupati',
  period: '2016 – 2020',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
