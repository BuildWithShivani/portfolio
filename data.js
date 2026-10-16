// All portfolio content lives here. Edit this file to update the site.
const PORTFOLIO = {
  name: "Shivani Kumari",
  headline: "Computer Engineering student who likes building practical things.",
  role: "Diploma in Computer Engineering · Meerabai DSEU · Social Media Intern @ Mooncee",
  location: "Noida, Uttar Pradesh",
  photo: "assets/photo.jpg",
  photoNote: "hi, that's me!",
  resume: "assets/Shivani_Kumari_Resume.pdf",

  // little sticky notes around the hero (Nitish-style)
  heroNotes: [
    { label: "currently", text: "3rd year @ DSEU", color: "peach" },
    { label: "learning", text: "Python, SQL & AI", color: "mint" },
  ],

  about:
    "Hi, I'm Shivani — a third-year Diploma in Computer Engineering student at Meerabai DSEU. " +
    "I enjoy learning by building practical applications and exploring how technology can solve everyday problems. " +
    "My projects include Emora, an app that responds to users' self-described emotions, a Student Management System " +
    "and a Student Expense Tracker.",
  about2:
    "Alongside my studies, I'm a Social Media Intern at Mooncee, where I create visual content and use AI tools " +
    "like ChatGPT, Gemini and Claude in day-to-day work. And when I'm not doing either, I'm probably taking photos.",

  // "now" cards next to the about text
  now: [
    { label: "Current focus", text: "Python & SQL fundamentals", color: "lilac" },
    { label: "Working at", text: "Mooncee · social media", color: "sun" },
    { label: "Graduating", text: "Diploma, 2027", color: "mint" },
  ],

  stats: [
    { value: "7.3", label: "Diploma CGPA" },
    { value: "3rd", label: "Year of diploma" },
    { value: "3", label: "Projects built" },
    { value: "1", label: "Internship" },
  ],

  principles: [
    { title: "Learn by building.", text: "A small project that works teaches me more than a chapter of theory." },
    { title: "Tech meets creativity.", text: "Code, AI tools and a camera all help tell a story. I like using them together." },
    { title: "One step at a time.", text: "Steady progress over perfection — build it, get feedback, make it better." },
  ],

  skills: [
    { group: "Programming", items: [["Python", "basic"], ["C", "basic"], ["SQL", "basic"]] },
    { group: "AI tools", items: [["ChatGPT", ""], ["Google Gemini", ""], ["Claude", ""]] },
    { group: "Digital & e-commerce", items: [["Social media management", ""], ["Content creation", ""], ["Product listing", ""], ["Product lifestyle imagery", ""], ["Image editing", ""], ["Photography", ""]] },
    { group: "Productivity", items: [["MS Word", ""], ["MS Excel", ""], ["MS PowerPoint", ""]] },
    { group: "Strengths", items: [["Communication", ""], ["Problem-solving", ""], ["Time management", ""], ["Teamwork", ""], ["Creative thinking", ""]] },
    { group: "Languages", items: [["Hindi", ""], ["English", ""]] },
  ],

  projects: [
    {
      name: "Emora",
      kind: "Emotion reflection app",
      desc: "You describe how you feel, and Emora interprets those self-reported feelings to pick a likely mood and respond to it. It reflects emotions — it's not a medical diagnosis tool.",
      tech: [],
      github: "",
      live: "",
    },
    {
      name: "Student Management System",
      kind: "Records app",
      desc: "A student-focused application to organise student information and related records in one place.",
      tech: [],
      github: "",
      live: "",
    },
    {
      name: "Student Expense Tracker",
      kind: "Personal finance",
      desc: "Record and review personal spending, so students can see where their money actually goes.",
      tech: [],
      github: "",
      live: "",
    },
  ],

  experience: [
    {
      role: "Social Media Intern",
      org: "Mooncee · Gaur City Centre",
      period: "Jul 2026 – Present",
      points: [
        "Managing social media content and activities across LinkedIn and Instagram.",
        "Creating product lifestyle images and visual content for e-commerce marketing.",
        "Supporting website product listings and product presentation.",
        "Using ChatGPT, Google Gemini and Claude for content ideation and AI-assisted workflows.",
      ],
    },
  ],

  education: [
    { title: "Diploma in Computer Engineering", org: "Meerabai DSEU · CGPA 7.3/10", period: "2024 – 2027" },
    { title: "Class XII", org: "+2 Jila School, Hazaribag, Jharkhand · 68%", period: "2024" },
    { title: "Class X (CBSE)", org: "Campion Basic Academy · 82%", period: "2022" },
  ],

  achievements: [
    { title: "Social Media Certified", by: "Certification", year: "", link: "" },
  ],

  photography: {
    text: "Photography and visual storytelling are a big part of who I am — catching moments, ideas and small details that add another layer to the content I make.",
    // Add photos like: { src: "assets/photos/1.jpg", caption: "golden hour" }
    photos: [],
  },

  githubUser: "BuildWithShivani",

  contact: {
    email: "kumarishivani35127@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivani-kumari-ai/",
    linkedinHandle: "shivani-kumari-ai",
    github: "https://github.com/BuildWithShivani",
    instagram: "",
  },
};
