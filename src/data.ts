import { Project, Skill, Achievement } from './types';

export const projects: Project[] = [
  {
    title: 'OpenD',
    description: 'A decentralized NFT marketplace built on the Internet Computer blockchain with DHAM token integration.',
    techStack: ['React.js', 'Tailwind CSS', 'Motoko', 'Blockchain'],
    image: 'https://raw.githubusercontent.com/Mayurdhamgunde/OpenD--MarketPace/refs/heads/master/Screenshot%202025-02-09%20150911.png',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'WORKS',
    description: 'A collection of diverse projects showcasing web development skills and creative implementations.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    image: 'https://raw.githubusercontent.com/Mayurdhamgunde/WORKS/master/Works-project-snaps/photo-3.png',
    demoLink: '#',
    githubLink: 'https://github.com/Mayurdhamgunde/WORKS'
  },
  {
    title: 'Shoes Store',
    description: 'A modern e-commerce platform for premium footwear with an intuitive shopping experience.',
    techStack: ['React.js', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    demoLink: '#',
    githubLink: 'https://github.com/Mayurdhamgunde/shoes-mayurpage'
  },
  {
    title: 'ConcrefyAI',
    description: 'A machine learning model predicting concrete compressive strength to optimize mix design.',
    techStack: ['Python', 'Flask', 'NumPy', 'Pandas', 'Scikit-Learn'],
    image: 'https://media.licdn.com/dms/image/v2/D4D2DAQFP05C2yxzqvA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1714860600770?e=1739700000&v=beta&t=zz8tL7MuYqxA9kcm1aFxKQE-pydNsJ08e68erMwmRO0',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'GYMOTION',
    description: 'A responsive gym landing page with smooth animations for an engaging user experience.',
    techStack: ['React.js', 'TypeScript', 'SCSS', 'Framer Motion'],
    image: 'https://raw.githubusercontent.com/Mayurdhamgunde/GYMotion/master/GYM-Site-IMAGES/image-1.png',
    demoLink: '#',
    githubLink: '#'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'EJS', 'jQuery']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'GraphQL', 'Flask', 'Socket.io']
  },
  {
    category: 'Machine Learning',
    technologies: ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib']
  },
  {
    category: 'Blockchain',
    technologies: ['DFINITY Motoko']
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'PostgreSQL', 'Firebase']
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Postman', 'Vercel', 'Render', 'Figma']
  }
];

export const achievements: Achievement[] = [
  {
    title: 'HacktoberFest 2023',
    description: '4 PRs merged'
  },
  {
    title: 'Smart India Hackathon (SIH) 2023',
    description: 'Participated in national-level hackathon'
  },
  {
    title: 'LinkedIn Top Frontend Coding Voice',
    description: '5k+ followers'
  },
  {
    title: 'LeetCode Achievement',
    description: 'Problem Solver Badge (Top 4.2%) with 230+ problems solved'
  }
];