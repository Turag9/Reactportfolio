// portfolio data — pulled from my CV
// last updated: may 2026

export const personalInfo = {
  name: "Syed Mohammed Musabbir Turag",
  title: "Computer Science & Engineering Student",
  tagline: "Competitive Programmer | Full Stack Developer | Problem Solver",
  email: "musabbirturag9@gmail.com",
  phone: "+8801610985746",
  location: "Chittagong, Bangladesh",
  linkedin: "https://www.linkedin.com/in/musabbir-turag-b4b519230/",
  github: "https://github.com/Turag9",
  cvLink: "/cv/final cv .pdf",
};

export const about = {
  bio: `I'm a CSE student at IIUC who got seriously into competitive programming back in 2022 and kind of never stopped. Solving problems on Codeforces became a habit — I've crossed 1000+ by now. Alongside that, I've been building web apps with React and Node.js, mostly full-stack stuff.

I also train junior programmers at the IIUC CP Society, which honestly taught me more than I expected — explaining things forces you to actually understand them.

Still learning, still grinding.`,
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    duration: "June 2022 – Present",
    graduation: "Expected June 2026",
    cgpa: "3.083 / 4.00",
  },
];

export const skills = {
  languages: ["C", "C++", "TypeScript", "Dart"],
  frontend: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Flutter"],
  backend: ["Node.js", "Express.js", "JWT Authentication", "REST API Development"],
  database: ["MySQL", "SQLite", "PostgreSQL"],
  tools: ["GitHub", "VS Code", "IntelliJ", "Android Studio", "Postman"],
  libraries: ["Prisma ORM", "STL", "Get", "Http", "Sqflite"],
  others: ["OOP", "API Integration", "DBMS", "Linux", "Competitive Programming"],
};

export const experience = [
  {
    role: "Trainer",
    organization: "IIUC Competitive Programming Society",
    duration: "2022 – Present",
    responsibilities: [
      "Ran bootcamps for juniors — graph theory, DP, segment trees, the usual stuff.",
      "Tracked who's actually making progress vs who just shows up (harder than it sounds).",
      "Helped students debug their contest submissions during practice sessions.",
    ],
    learnings: ["Mentoring", "Problem Solving", "Adaptability", "Critical Thinking", "Conflict Resolution"],
  },
];

export const projects = [
  {
    title: "Royal Mart – E-commerce Frontend",
    description:
      "Built the frontend for a full e-commerce app using React. Has product listing, cart, wishlist — the standard stuff. Hooked it up to REST APIs for live product data. Tried to keep the component structure clean so the backend team could work independently.",
    technologies: ["React.js", "REST API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Turag9/Royal-Mart-React/tree/main/Royalmart-Forntend/%20royal%20mart%20react",
    type: "Frontend",
  },
  {
    title: "Royal Mart – E-commerce Backend",
    description:
      "The backend side of Royal Mart. JWT auth, RESTful routes, Prisma ORM on top of PostgreSQL. Spent more time on the DB schema than I expected — relational data with products, users, and orders gets messy fast.",
    technologies: ["Express.js", "Prisma ORM", "PostgreSQL", "JWT", "Node.js"],
    github: "https://github.com/Turag9/Royal-Mart-React/tree/main/Royalmart-Backend",
    type: "Backend",
  },
  {
    title: "Subnet Calculator",
    description:
      "Made this while studying networking — wanted to actually verify my manual subnet calculations. Does network address, broadcast, host range, subnet mask. Pure JS, no libraries. Kinda fun to build honestly.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Turag9/Subnet-Calculator",
    type: "Tool",
  },
];

export const competitiveProgramming = [
  {
    platform: "Codeforces",
    handle: "Turag9",
    url: "https://codeforces.com/profile/Turag9",
    stats: "1000+ problems solved",
    badge: "CF",
    color: "#1a91da",
  },
  {
    platform: "CodeChef",
    handle: "musabbir_turag",
    url: "https://www.codechef.com/users/musabbir_turag",
    stats: "Max Rating: 1624 | 3★ | 100+ problems",
    badge: "CC",
    color: "#6b3a1f",
  },
  {
    platform: "LeetCode",
    handle: "Turag9",
    url: "https://leetcode.com/u/Turag9/",
    stats: "Max Rating: 1480 | 100+ problems",
    badge: "LC",
    color: "#ffa116",
  },
  {
    platform: "Other Platforms",
    handle: "Turag9",
    url: "https://github.com/Turag9",
    stats: "200+ problems on Vjudge, CSES, SPOJ, HackerRank, AtCoder, Toph, LightOJ etc.",
    badge: "++",
    color: "#10b981",
  },
];

export const achievements = [
  {
    title: "1st Runner Up",
    event: "IIUC Intra University Programming Contest Spring'24",
    team: "IIUC_pushback",
    year: "2024",
    type: "🥈",
  },
  {
    title: "Top 20",
    event: "IIUC Intra University Programming Contest Spring 2023",
    team: "IIUC_AFT_2nd",
    year: "2023",
    type: "🏆",
  },
  {
    title: "Top 22% — ICPC Asia Dhaka Regional Online Preliminary",
    event: "The 2022 ICPC Asia Dhaka Regional Site",
    team: "AFT_2nd",
    year: "2022",
    type: "🌏",
  },
  {
    title: "Top 33% — ICPC Asia Dhaka Regional Online Preliminary",
    event: "The 2023 ICPC Asia Dhaka Regional Site",
    team: "IIUC_pushback",
    year: "2023",
    type: "🌏",
  },
  {
    title: "Top 41% — ICPC Asia Dhaka Regional Online Preliminary",
    event: "The 2024 ICPC Asia Dhaka Regional Site",
    team: "IIUC_pushback",
    year: "2024",
    type: "🌏",
  },
];
