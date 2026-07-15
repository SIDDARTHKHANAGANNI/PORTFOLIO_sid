export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: ('ML' | 'Backend' | 'Frontend' | 'IoT')[];
}

export interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  credentialUrl?: string;
}

export interface Award {
  title: string;
  detail: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface RoleDetail {
  title: string;
  tagline: string;
  description: string;
  matchingSkills: string[];
  keyHighlights: string[];
  relevantProjects: string[]; // references to Project IDs
}

export const PERSONAL_INFO = {
  name: "Siddarth S Khanaganni",
  title: "Full-Stack Developer & Machine Learning Engineer",
  email: "siddarthkhanaganni11.18@gmail.com",
  phone: "+91 7975345189",
  github: "https://github.com/SIDDARTHKHANAGANNI",
  linkedin: "https://www.linkedin.com/in/siddarth-khanaganni-2532122a2",
  location: "Bengaluru, India",
  summary: "Driven Computer Science student specializing in Machine Learning, IoT systems, and full-stack web development. Experienced in building end-to-end AI-powered platforms including energy optimization, financial prediction, and environmental monitoring systems. Proficient in Python, Java, TensorFlow, and Flask. Strong foundation in data analysis, predictive modeling, and real-world hardware-software integration.",
  education: {
    degree: "Bachelor of Technology (Hons.) - Computer Science & Engineering",
    school: "RV University, Bengaluru",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Management Systems",
      "IoT & Embedded Systems",
      "Web Technologies"
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    id: "stockflow",
    title: "StockFlow",
    subtitle: "Multi-Tenant Business Management & AI Assistant Platform",
    description: "A full-stack, multi-tenant business management and CRM platform featuring secure per-user data isolation and an LLM-powered assistant for natural-language live transactional queries.",
    bullets: [
      "Architected a full-stack, multi-tenant business management platform (Flask, PostgreSQL, SQLAlchemy) with secure authentication and isolated per-user data, replacing manual tracking.",
      "Integrated an LLM-powered business assistant (Claude via OpenRouter) with retrieval-grounded responses over live transactional data, enabling natural-language queries against real-time records.",
      "Containerized with Docker and deployed across dual pipelines (Render, Vercel serverless) with geolocation-based CRM (Leaflet.js) and a responsive analytics dashboard (Chart.js)."
    ],
    tags: ["Python", "Flask", "PostgreSQL", "Docker", "LLM Integration", "SQLAlchemy", "Leaflet.js", "Chart.js"],
    liveUrl: "http://stockflow-tradehelp.vercel.app",
    category: ["Backend", "ML", "Frontend"]
  },
  {
    id: "solariq",
    title: "SolarIQ",
    subtitle: "Intelligent Energy Optimization & Monitoring Platform",
    description: "An AI-assisted energy optimization platform validated on real institutional energy data from RV University, achieving substantial reductions in energy wastage through predictive load analysis and real-time dashboard tracking.",
    bullets: [
      "Achieved an estimated 28–32% reduction in energy wastage through predictive load analysis and AI-driven recommendations.",
      "Applied machine learning models for consumption pattern recognition and anomaly detection, improving operational efficiency by automating energy decisions.",
      "Designed real-time monitoring dashboards with scalable architecture, reducing energy anomaly detection response time by approximately 40%."
    ],
    tags: ["Python", "Machine Learning", "Data Analytics", "Web Technologies", "Predictive Modeling"],
    githubUrl: "https://github.com/SIDDARTHKHANAGANNI/Solar-IQ.git",
    category: ["ML", "Backend"]
  },
  {
    id: "fraud_detection",
    title: "Fraud Detection using ML",
    subtitle: "Supervised Transaction Classification Pipeline",
    description: "A comprehensive supervised machine learning pipeline to flag fraudulent transactions on highly imbalanced transaction datasets.",
    bullets: [
      "Built a robust ML pipeline applying advanced resampling techniques (SMOTE/oversampling) to handle imbalanced transaction data and boost minority-class recall.",
      "Engineered high-signal features from transactional patterns and trained multiple classification models including Logistic Regression and Random Forest.",
      "Tuned decision thresholds to optimize the precision-recall curve and minimize false negatives, ensuring reliability for real-world deployment."
    ],
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Data Analytics", "Feature Engineering"],
    category: ["ML"]
  },
  {
    id: "carbonflow",
    title: "CarbonFlow",
    subtitle: "Carbon Credit Estimation & EV Station Dashboard",
    description: "A reactive EV station dashboard with NASA Power API integration, hourly State of Charge (SoC) tracking, and CO₂ offset calculations benchmarked against India's national grid emission factor.",
    bullets: [
      "Built a highly responsive EV station dashboard with live API integration and CO₂ offset calculations.",
      "Engineered heuristic battery sizing algorithms to minimize solar curtailment and maximize self-consumption across Tech Park, Institution, and Residential profiles.",
      "Delivered interactive solar vs. EV demand curves, cost savings analysis, and projected annual ROI at ₹1,500/ton carbon credit valuation."
    ],
    tags: ["TypeScript", "React", "Recharts", "NASA Power API", "Data Analytics", "Micro-Grid Simulation"],
    liveUrl: "https://carbonflow-ev-513804914430.asia-southeast1.run.app",
    category: ["Frontend", "Backend"]
  },
  {
    id: "gassensor",
    title: "IoT Gas & Fire Safety System",
    subtitle: "Standalone Multi-Hazard Safety Device",
    description: "Extended in-house IoT prototype into a standalone safety device combining MQ-series gas sensors and flame detectors with real-time alerts and remote notifications.",
    bullets: [
      "Integrated MQ-series gas sensors and flame detectors to perform continuous multi-hazard real-time monitoring.",
      "Developed custom alert escalation logic in C++ triggering local buzzer alarms and remote push notifications via Blynk.",
      "Calibrated and tested across simulated hazard scenarios, producing documented schematics and reproducible firmware."
    ],
    tags: ["C++", "IoT", "MQ Sensors", "Flame Detection", "Blynk", "Embedded Systems"],
    category: ["IoT", "Backend"]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    role: "Machine Learning Intern",
    company: "RV University (In-House Internship)",
    location: "Bengaluru, India",
    period: "2025",
    technologies: ["Python", "TensorFlow", "ANN", "GARCH", "Machine Learning"],
    bullets: [
      "Developed an Artificial Neural Network (ANN)-based stock market prediction model integrating GARCH volatility modelling for robust risk adjustment.",
      "Handled end-to-end preprocessing, including normalization, outlier handling, and train-test splitting across large historical financial datasets.",
      "Validated performance using standard metrics (RMSE, MAPE, accuracy), showing enhanced prediction accuracy under volatile market conditions."
    ]
  },
  {
    role: "IoT Developer Intern",
    company: "RV University (In-House Internship)",
    location: "Bengaluru, India",
    period: "2024",
    technologies: ["C++", "IoT", "Gas Sensors", "Fire Detection", "Blynk"],
    bullets: [
      "Designed and fabricated an IoT-based gas and fire leak detection device utilizing MQ-series sensors.",
      "Programmed C++ alert systems and established secure wireless communication with Blynk cloud for instantaneous user push notifications.",
      "Calibrated sensor reading thresholds and verified system reliability through hardware-in-the-loop simulated hazard testing."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["TensorFlow", "Flask", "React", "Pandas", "NumPy", "Scikit-learn", "Recharts"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Blynk", "Kubernetes", "Docker", "AWS (Cloud Foundations)"]
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algorithms (Java)", "Machine Learning & ANN", "GARCH Volatility", "IoT & Sensor Integration", "Data Analysis", "REST APIs", "Database Management"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Academy Cloud Foundations", issuer: "Simplilearn" },
  { name: "Introduction to Containers, Kubernetes, and OpenShift V2", issuer: "IBM" },
  { name: "Computer Networking Basics: How Computers Communicate", issuer: "IBM" },
  { name: "Big Data 101", issuer: "IBM" },
  { name: "Big Data Foundations Level 2", issuer: "IBM" }
];

export const AWARDS: Award[] = [
  {
    title: "Runner up - IDEATHON",
    detail: "JSS Academy Bengaluru (among 120+ competing teams)"
  },
  {
    title: "Finalist - 24-Hour Hackathon",
    detail: "CMRIT Bengaluru (selected among 160+ competing teams)"
  }
];

export const ROLES: Record<string, RoleDetail> = {
  swe: {
    title: "Software Engineer",
    tagline: "Building scalable, efficient, and robust software solutions with a strong DSA foundation.",
    description: "As a Software Engineer, I focus on applying sound architectural principles, optimal data structures, and clean coding practices. My foundation in Java (DSA) and full-stack development allows me to tackle complex system designs and deliver reliable products.",
    matchingSkills: ["Java", "Python", "Data Structures & Algorithms", "SQL", "Git/GitHub", "Docker", "REST APIs"],
    keyHighlights: [
      "Strong command of Data Structures & Algorithms (implemented and practiced in Java).",
      "Full-stack capabilities, bridging hardware (IoT), backend (Flask/Express), and beautiful frontends.",
      "Solid understanding of computer networking, containerization, and clean code principles."
    ],
    relevantProjects: ["stockflow", "carbonflow", "solariq", "gassensor"]
  },
  backend: {
    title: "Backend Engineer",
    tagline: "Designing high-performance APIs, reliable data flows, and intelligent server-side systems.",
    description: "I specialize in developing backend architectures that are both fast and scalable. From writing micro-services and integrating relational databases (SQL) to engineering custom heuristic algorithms, I love writing performance-critical server-side logic.",
    matchingSkills: ["Python", "Flask", "SQL", "Java", "Docker", "Kubernetes", "REST APIs", "Database Management"],
    keyHighlights: [
      "Designed scalable backend and database architectures for real-time dashboards like SolarIQ.",
      "Engineered custom heuristic battery sizing and grid emission calculations in CarbonFlow.",
      "Proficient in system containerization (Docker, Kubernetes) and API development."
    ],
    relevantProjects: ["stockflow", "solariq", "carbonflow", "gassensor"]
  },
  frontend: {
    title: "Frontend Engineer",
    tagline: "Crafting beautiful, interactive, and responsive user interfaces with data-driven clarity.",
    description: "I love making data actionable. My frontend philosophy centers around clean design systems, responsive layouts (Tailwind), and fluid user interactions. I have experience building rich dashboards and data visualizations that communicate complex metrics clearly.",
    matchingSkills: ["TypeScript", "React", "HTML/CSS", "Tailwind CSS", "Recharts", "UI/UX Design"],
    keyHighlights: [
      "Built CarbonFlow, a reactive EV station dashboard displaying interactive demand curves and carbon offsets.",
      "Developed dynamic dashboards for SolarIQ with approximately 40% reduction in anomaly response times.",
      "Passionate about interactive UI design, motion graphics, and high visual accessibility."
    ],
    relevantProjects: ["stockflow", "carbonflow", "solariq"]
  },
  ml: {
    title: "Machine Learning Engineer",
    tagline: "Translating data into intelligence through neural networks, prediction pipelines, and analytical models.",
    description: "I build end-to-end Machine Learning pipelines—from normalization and handling imbalanced datasets to training, tuning, and deploying deep learning/statistical models. I specialize in predictive analytics and computer-vision/IoT data streams.",
    matchingSkills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "ANN & GARCH", "Data Analysis"],
    keyHighlights: [
      "Completed a Machine Learning Internship building an ANN-based stock prediction model with GARCH volatility modeling.",
      "Built an AI-assisted energy optimization platform (SolarIQ) validating real campus energy data with 28-32% wastage reduction.",
      "Developed a complete ML transaction fraud detection pipeline optimized for highly imbalanced data."
    ],
    relevantProjects: ["stockflow", "solariq", "fraud_detection"]
  }
};
