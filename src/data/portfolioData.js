export const personalInfo = {
  name: "Utkarsh Chavan",
  degree: "B.Tech Information Technology",
  minor: "Data Science",
  institution: "MGM University — IICT",
  location: "Chh. Sambhajinagar, Maharashtra, IN",
  sgpa: "8.5",
  positioning: "Building practical software and data-driven solutions across web, AI, systems and mobile.",
  aboutText: [
    "I am a B.Tech Information Technology student with a minor in Data Science, focused on building practical software and data-driven solutions across web, AI/ML, computer vision, systems, and mobile applications.",
    "My technical work spans real-time computer vision detection pipelines, sensor-driven mobile safety systems, and full-stack web applications. I learn best by engineering under pressure—often refining concepts through hackathons and hands-on projects.",
    "I am continuously expanding my capabilities in cloud infrastructure, DevOps workflows, and data processing, seeking opportunities where practical engineering meets meaningful problem-solving."
  ],
  contacts: {
    email: "chavanutkarsh707@gmail.com",
    phone: "+91 98345 48133",
    linkedin: "https://www.linkedin.com/in/utkarsh-chavan-656853247",
    github: "https://github.com/Utkarsh-Chavan",
    resumePdf: "assets/Utkarsh_Chavan_Resume.pdf"
  }
};

export const capabilityDomains = [
  {
    id: "BUILD",
    number: "01",
    title: "BUILD",
    subtitle: "Web Applications & Mobile",
    description: "Developing responsive web applications, robust REST APIs, and native mobile interfaces.",
    technologies: ["JavaScript", "HTML", "CSS", "Angular", "Flask", "FastAPI", "Node.js", "Express.js", "Kotlin"],
    relatedProjectIds: ["smart-city", "medicare", "zero-ui", "ngo-connect"]
  },
  {
    id: "INTELLIGENCE",
    number: "02",
    title: "INTELLIGENCE",
    subtitle: "Machine Learning & Vision",
    description: "Applied AI models, computer vision hazard detection, and predictive classifiers.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "OpenCV", "YOLOv8"],
    relatedProjectIds: ["smart-city", "medicare", "exoplanet", "zero-ui"]
  },
  {
    id: "DATA",
    number: "03",
    title: "DATA",
    subtitle: "Data Science & Databases",
    description: "Data pipelines, relational schema engineering, analytics, and scientific dataset processing.",
    technologies: ["SQL", "MySQL", "PostgreSQL", "SQLite", "Pandas", "NumPy"],
    relatedProjectIds: ["exoplanet", "ngo-connect", "smart-city"]
  },
  {
    id: "SYSTEMS",
    number: "04",
    title: "SYSTEMS",
    subtitle: "Cloud & DevOps Tooling",
    description: "Containerization workflows, cloud storage, real-time protocols, and version control.",
    technologies: ["AWS S3", "Docker", "Kubernetes", "CI/CD", "Firebase", "Git", "GitHub"],
    relatedProjectIds: ["smart-city", "zero-ui", "ngo-connect"]
  }
];

export const journeyMilestones = [
  {
    id: "ssc",
    year: "2021",
    badge: "01",
    title: "Secondary Education (SSC)",
    institution: "Aurangabad Police Public School",
    score: "91.60%",
    summary: "Built strong mathematical and analytical foundations with high academic standing."
  },
  {
    id: "hsc",
    year: "2023",
    badge: "02",
    title: "Higher Secondary (HSC)",
    institution: "Defence Career Institute",
    score: "77.64%",
    summary: "Focused on Higher Mathematics, Physics, and foundational computer concepts."
  },
  {
    id: "btech",
    year: "2023 — Present",
    badge: "03",
    title: "B.Tech Information Technology",
    institution: "MGM University — IICT",
    score: "8.5 SGPA (Data Science Minor)",
    summary: "Pursuing core IT curriculum paired with a specialized minor track in Data Science."
  },
  {
    id: "exploring",
    year: "Core Progression",
    badge: "04",
    title: "Building & Domain Exploration",
    institution: "Self-Directed Engineering",
    summary: "Developing cross-functional projects spanning computer vision, full-stack backends, and Android apps."
  },
  {
    id: "hackathons",
    year: "Milestones",
    badge: "05",
    title: "Hackathons & Advanced Projects",
    institution: "IEEE MGMU & Cummins College Pune",
    summary: "Finalist at Hack the Gap & Zero UI Challenge; built real-time platforms and emergency detection apps."
  },
  {
    id: "now",
    year: "Current Focus",
    badge: "06",
    title: "Professional Preparation & Research",
    institution: "Sure Trust & Capstone Project",
    summary: "Advancing full-stack development, cloud/DevOps skills, capstone NGO platform, and exoplanet ML research."
  }
];

export const projectsData = [
  {
    id: "smart-city",
    title: "Smart City AI Road Hazard Detection Platform",
    shortTitle: "Smart City AI Hazard Platform",
    subtitle: "Real-Time Computer Vision & Analytics Dashboard",
    category: "INTELLIGENCE",
    status: "Completed",
    statusType: "completed",
    technologies: ["Python", "FastAPI", "SQLite", "YOLOv8", "OpenCV", "WebSockets", "Leaflet.js"],
    oneLiner: "AI-powered real-time road hazard detection platform with WebSocket broadcasting and Leaflet map dashboard.",
    problem: "Road hazards like potholes, accidents, and debris often go unmonitored until severe accidents occur.",
    approach: "Built a high-efficiency processing pipeline that runs YOLOv8 and OpenCV object detection on video streams, broadcasting live hazard events over WebSockets to an interactive Leaflet.js dashboard.",
    features: [
      "Real-time detection of potholes, accidents, and road obstacles",
      "Low-latency WebSocket event streaming",
      "Interactive Leaflet.js map with live alert markers and hazard analytics",
      "SQLite event logging and spatial hazard metrics"
    ],
    contribution: "Designed and implemented the complete computer vision pipeline, WebSocket server, and frontend dashboard.",
    statusNote: "Completed project core architecture.",
    github: null,
    demo: null
  },
  {
    id: "medicare",
    title: "MediCare – AI-Powered Health Diagnostic Web Application",
    shortTitle: "MediCare AI Diagnostics",
    subtitle: "24-Hour Hackathon Health Classifier",
    category: "INTELLIGENCE",
    status: "Completed",
    statusType: "completed",
    technologies: ["Python", "Flask", "Random Forest", "HTML", "CSS", "JavaScript"],
    oneLiner: "Symptom-driven health diagnostic web app built during a 24-hour hackathon, using Machine Learning to map symptoms to guidance.",
    problem: "Non-technical users frequently struggle to search for medical conditions using exact medical jargon.",
    approach: "Paired a trained Random Forest classifier with an intuitive input system supporting auto-suggest, fuzzy symptom matching, and severity scoring to generate personalized guidance.",
    features: [
      "Auto-suggest symptom input with fuzzy string matching",
      "Symptom intensity and duration scoring",
      "Random Forest machine learning prediction model",
      "Responsive guidance output interface"
    ],
    contribution: "Integrated the Random Forest classifier and constructed the full end-to-end web application flow during the 24h event.",
    statusNote: "Completed during IEEE MGMU Hack the Gap hackathon.",
    github: "https://github.com/Utkarsh-Chavan/Medicare-The-Health-App-",
    demo: null
  },
  {
    id: "zero-ui",
    title: "Zero UI – Sensor-Based Emergency Alert System",
    shortTitle: "Zero UI Emergency Alert",
    subtitle: "Hands-Free Fall & Impact Detection Android App",
    category: "SYSTEMS",
    status: "FINALIST — Zero UI Challenge",
    statusType: "finalist",
    technologies: ["Kotlin", "Jetpack Compose", "Accelerometer", "Gyroscope", "GPS", "Android Foreground Service"],
    oneLiner: "Hands-free sensor system that automatically detects falls and sudden impacts to initiate emergency verification and GPS tracking.",
    problem: "In critical emergency situations such as sudden physical falls, victims cannot physically operate phone screens to dial emergency services.",
    approach: "Leveraged device accelerometer and gyroscope sensors inside an Android Foreground Service to process spatial acceleration telemetry, executing verification timers before trigger.",
    features: [
      "Abnormal motion, free-fall, and sudden impact detection",
      "Post-impact verification countdown with user confirmation",
      "Manual panic mode trigger",
      "Real-time GPS location tracking via Android Foreground Service"
    ],
    contribution: "Designed and built the on-device Kotlin sensor processing pipeline and UI flow.",
    statusNote: "Finalist at Cummins College Pune. Backend API and responder dashboard are planned for future development.",
    github: null,
    demo: null
  },
  {
    id: "exoplanet",
    title: "Exoplanet Detection System",
    shortTitle: "Exoplanet Transit Detection",
    subtitle: "NASA TESS Light-Curve Analysis & ML Pipeline",
    category: "DATA",
    status: "IN PROGRESS",
    statusType: "in-progress",
    technologies: ["Python", "Lightkurve", "Astropy", "Scikit-learn", "XGBoost"],
    oneLiner: "End-to-end light-curve analysis system processing NASA TESS data with Transit Least Squares to detect exoplanet candidates.",
    problem: "Astronomical light-curve data contains heavy stellar noise, systematic satellite anomalies, and background trends that hide minute planet transit signals.",
    approach: "Constructed a signal processing pipeline with Astropy and Lightkurve to perform trend removal and transit least squares (TLS) periodogram analysis for candidate detection.",
    features: [
      "Automated NASA TESS light-curve data fetching & preprocessing",
      "Stellar trend removal and noise filtering",
      "Transit Least Squares (TLS) signal searching",
      "Transit depth and period feature extraction"
    ],
    contribution: "Developing the full scientific processing and transit detection framework.",
    statusNote: "In Progress. Scikit-learn & XGBoost candidate classification models are planned for implementation.",
    github: null,
    demo: null
  },
  {
    id: "ngo-connect",
    title: "NGO-Volunteer Connect Platform",
    shortTitle: "NGO-Volunteer Connect",
    subtitle: "Full-Stack Need Matching Capstone Platform",
    category: "BUILD",
    status: "IN PROGRESS — CAPSTONE",
    statusType: "capstone",
    technologies: ["Angular", "Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
    oneLiner: "Full-stack capstone platform linking non-profits with individual volunteers through a skill-based Need Matching engine.",
    problem: "NGOs often struggle to quickly recruit volunteers with specific expertise, while volunteers lack a central portal for targeted social impact.",
    approach: "Architecting a modular REST backend using Express.js and PostgreSQL with JWT authorization, powering an Angular web interface with role-based dashboards.",
    features: [
      "Need Matching algorithm pairing NGO requests with volunteer skillsets",
      "Role-based access control for Volunteers, NGOs, and System Admins",
      "RESTful API architecture fully documented with Swagger",
      "Secure JWT authentication and session handling"
    ],
    contribution: "Capstone Project — leading backend architecture, database schema, matching engine, and API development.",
    statusNote: "In Progress Capstone Project.",
    github: null,
    demo: null
  }
];

export const achievementsData = [
  {
    type: "finalist",
    title: "Finalist — Hack the Gap",
    organizer: "IEEE MGMU",
    details: "24-hour hackathon where MediCare AI diagnostic web app was engineered from scratch under time constraints."
  },
  {
    type: "finalist",
    title: "Finalist — Zero UI Challenge",
    organizer: "Cummins College of Engineering for Women, Pune",
    details: "Recognized for Zero UI, a sensor-based emergency response app designed for hands-free assistance."
  },
  {
    type: "participation",
    title: "Hackathon Competitor",
    organizer: "Smart India Hackathon, Google Solution Challenge, Hack2Skill",
    details: "Active participation in national hackathons building solutions for civic, health, and environmental challenges."
  },
  {
    type: "leadership",
    title: "Logistics & Hospitality Head",
    organizer: "College Cultural Events, MGM University",
    details: "Led event operations, hospitality logistics, and team coordination for university-wide cultural events."
  }
];

export const certificationsData = [
  {
    title: "Full Stack Development Program",
    issuer: "Sure Trust",
    status: "Ongoing · Remote · Since May 2026",
    details: "Comprehensive hands-on training covering front-end frameworks, backend APIs, data management, and software architecture."
  },
  {
    title: "Data Lake & Cloud Fundamentals Workshop",
    issuer: "Workshop Training",
    status: "Completed",
    details: "Hands-on experience with AWS S3, Docker containers, Kubernetes orchestration concepts, CI/CD pipelines, and Git workflows."
  },
  {
    title: "Fundamentals of Machine Learning",
    issuer: "Saylor Academy",
    status: "Completed",
    details: "Foundational theory and practical knowledge in supervised/unsupervised learning algorithms, model evaluation, and regression."
  },
  {
    title: "UI/UX Design Workshop (S8)",
    issuer: "Rablo.in via Unstop",
    status: "Completed",
    details: "User-centered design principles, wireframing, layout hierarchy, accessibility, and visual interface prototyping."
  },
  {
    title: "Generative AI Powered Data Analytics Virtual Internship",
    issuer: "Tata Group via Forage",
    status: "Completed",
    details: "Exploratory data analysis, data storytelling, and leveraging AI tools for analytics visualizations and business insights."
  }
];

export const currentlyExploring = [
  {
    label: "BUILDING",
    topic: "NGO-Volunteer Connect Platform",
    subtext: "Full-stack Angular + Express + PostgreSQL capstone application",
    statusTag: "Capstone Project"
  },
  {
    label: "RESEARCHING",
    topic: "Exoplanet Detection System",
    subtext: "NASA TESS light-curve signal processing & ML transit classifiers",
    statusTag: "Data Science"
  },
  {
    label: "DEVELOPING",
    topic: "Zero UI Emergency Alert System",
    subtext: "Android sensor processing, motion detection logic & foreground services",
    statusTag: "Android & Mobile"
  },
  {
    label: "TRAINING",
    topic: "Full Stack Development Program",
    subtext: "Sure Trust program focusing on modern software engineering practices",
    statusTag: "Ongoing Program"
  },
  {
    label: "EXPLORING",
    topic: "Cloud Infrastructure & DevOps",
    subtext: "Docker containerization, AWS S3 storage, and CI/CD workflow automation",
    statusTag: "DevOps & Cloud"
  }
];
