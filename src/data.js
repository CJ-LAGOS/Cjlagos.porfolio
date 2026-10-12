// Edit this file to update the whole site. Lines marked TODO are placeholders.

export const profile = {
  name: 'Christian Jake Lagos',
  firstName: 'Christian',
  role: 'Junior Front-End Developer',
  location: 'Philippines · Open to remote', // TODO: city
  email: 'jakelagos639@gmail.com',
  github: 'https://github.com/CJ-LAGOS',
  linkedin: 'https://www.linkedin.com/in/christian-jake-lagos-8a5342307',
  resume: '', // TODO: put resume.pdf in /public and set to './resume.pdf'
  photo: './profile.jpg',
  openToWork: true,
  headline: 'I build clean, simple and responsive websites.',
  intro:
    'IT graduate with hands-on experience in web development, technical support and data encoding. I work with HTML, CSS and JavaScript, and I\'m always learning new tools to build better websites.',
}

export const about = {
  paragraphs: [
    "I'm an Information Technology graduate from Abada College. I've built websites with HTML and CSS, and a Library Management System with JavaScript, PHP and MySQL for a college project.",
    "During my internship as an IT Assistant at Abada College, my IT instructor and I installed Wi-Fi across the entire campus as a two-person team. It taught me to plan carefully, solve problems on the spot and finish what I start. I also handled technical assistance, hardware maintenance and data encoding.",
    "I'm hardworking, adaptable and responsible. I'm looking for a junior role where I can keep learning new technologies and grow as part of a team.",
  ],
  facts: [
    { label: 'Focus', value: 'Front-end web development' },
    { label: 'Education', value: 'BS Information Technology' },
    { label: 'Based in', value: 'Philippines' }, // TODO: city
    { label: 'Availability', value: 'Immediately' }, // TODO
  ],
}

export const skills = [
  { group: 'Front-End', items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive design', 'React (learning)'] },
  { group: 'Back-End & Database', items: ['PHP', 'MySQL'] },
  { group: 'Tools', items: ['Git & GitHub', 'VS Code', 'Microsoft Office'] },
  {
    group: 'IT & UX',
    items: ['Wi-Fi installation', 'Technical support', 'Hardware maintenance', 'Data encoding', 'User research', 'Usability testing'],
  },
]

// status: 'live' | 'done' | 'building'
export const projects = [
  {
    title: 'Library Management System',
    status: 'done',
    // TODO: adjust the description to match the features it actually has
    description:
      'A web-based system for managing a library\'s book records, borrowers and borrowing transactions. Built as a college project with a PHP back end and a MySQL database.',
    tech: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
    live: '',
    code: '', // TODO: GitHub repo URL, if uploaded
  },
  {
    title: 'Campus-wide Wi-Fi Installation',
    status: 'done',
    // TODO: add specifics if known, e.g. number of buildings or access points
    description:
      'Installed Wi-Fi across the entire Abada College campus during my internship, working as a two-person team with my IT instructor.',
    tech: ['Networking', 'Wi-Fi', 'Teamwork'],
    live: '',
    code: '',
  },
  {
    title: 'Personal Portfolio',
    status: 'live',
    description:
      'This site. A responsive single-page portfolio with light and dark themes, scroll animations and an accessible layout, deployed with GitHub Pages.',
    tech: ['React', 'Vite', 'CSS'],
    live: 'https://cj-lagos.github.io/Cjlagos.porfolio/', // works once GitHub Pages is enabled
    code: 'https://github.com/CJ-LAGOS/Cjlagos.porfolio',
  },
]

export const journey = [
  // Newest first
  {
    period: 'Nov — Dec 2022',
    title: 'IT Assistant (Internship)',
    place: 'Abada College',
    detail:
      'Installed Wi-Fi across the whole campus as a two-person team with my IT instructor. Also provided technical assistance, computer hardware maintenance and data encoding.',
  },
  {
    period: '2019 — 2023',
    title: 'Bachelor of Science in Information Technology',
    place: 'Abada College',
    detail: 'Built a Library Management System using JavaScript, PHP and MySQL as a college project.',
  },
]
