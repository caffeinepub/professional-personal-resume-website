export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
  contactLinks: ContactLink[];
}

export const resumeData: ResumeData = {
  name: "Fatima Chowdhury",
  headline: "Computer Science Student",
  summary: "",
  email: "chowdhuryz313@gmail.com",
  phone: "(313)-419-2063",
  location: "Detroit, MI",
  
  experience: [
    {
      title: "Employee",
      company: "GDYT – The Lawn Academy",
      location: "Hamtramck, MI",
      period: "Summers 2023, 2024 & 2025",
      description: "",
      highlights: [
        "Performed detail-oriented outdoor work requiring accuracy, consistency, and responsibility",
        "Collaborated with team members to complete tasks efficiently and safely",
        "Followed structured procedures and quality standards",
        "Developed strong time management and organizational skills"
      ]
    },
    {
      title: "Employee",
      company: "Edible Arrangements",
      location: "Detroit, MI",
      period: "May 2024",
      description: "",
      highlights: [
        "Organized and assembled customer orders with attention to detail and presentation standards",
        "Maintained cleanliness and hygiene in food preparation areas",
        "Managed supplies and ensured workflow efficiency",
        "Followed quality and safety guidelines consistently"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Wayne State University",
      location: "Detroit, MI",
      period: "Anticipated 2029",
      details: "University Honors Co-Major"
    },
    {
      degree: "Chemical/Biological",
      institution: "Cass Technical High School",
      location: "Detroit, MI",
      period: "June 2025",
      details: "GPA 3.9"
    }
  ],
  
  skills: [
    {
      category: "Technical & Professional Skills",
      skills: [
        "Microsoft Excel & Spreadsheets",
        "Microsoft Office Suite",
        "Basic SQL (coursework exposure)",
        "Data organization and accuracy",
        "Problem solving & critical thinking",
        "Teamwork and communication",
        "Computer proficiency"
      ]
    }
  ],
  
  projects: [],
  
  contactLinks: []
};
