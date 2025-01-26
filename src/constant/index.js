import {
  HomeIcon,
  BuildingOffice2Icon,
  ChartBarSquareIcon,
  AcademicCapIcon,
  GiftIcon,
  CubeIcon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const jobPostings = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description:
      "We are looking for a skilled Software Engineer to develop and maintain our web applications. The ideal candidate has experience with JavaScript, React, and Node.js.",
    salary: "$120K - $140K",
    level: "Mid-Level",
    type: "Full-Time",
    postedDate: "2023-10-01",
    skillsRequired: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
  {
    id: 2,
    jobTitle: "Data Scientist",
    company: "Data Insights Inc.",
    location: "New York, NY",
    description:
      "Join our team as a Data Scientist to analyze large datasets and build predictive models. Proficiency in Python, R, and machine learning is required.",
    salary: "$130K - $150k",
    level: "Senior",
    type: "Full-Time",
    postedDate: "2023-10-05",
    skillsRequired: ["Python", "R", "Machine Learning", "Data Analysis", "SQL"],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
  {
    id: 3,
    jobTitle: "Product Manager",
    company: "Innovate Tech",
    location: "Austin, TX",
    description:
      "We are seeking a Product Manager to lead the development of our new product line. The ideal candidate has experience in Agile methodologies and a strong technical background.",
    salary: "$110K - $130K",
    level: "Mid-Level",
    type: "Full-Time",
    postedDate: "2023-10-10",
    skillsRequired: [
      "Product Management",
      "Agile",
      "Scrum",
      "JIRA",
      "Market Research",
    ],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
  {
    id: 4,
    jobTitle: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Seattle, WA",
    description:
      "We are looking for a talented UX/UI Designer to create intuitive and visually appealing user interfaces. Experience with Figma, Sketch, and Adobe XD is a must.",
    salary: "$90K - $110K",
    level: "Entry-Level",
    type: "Full-Time",
    postedDate: "2023-10-15",
    skillsRequired: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "User Research",
      "Wireframing",
    ],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
  {
    id: 5,
    jobTitle: "DevOps Engineer",
    company: "Cloud Innovators",
    location: "Remote",
    description:
      "We are hiring a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes is required.",
    salary: "$140K - $160K",
    level: "Senior",
    type: "Full-Time",
    postedDate: "2023-10-20",
    skillsRequired: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
  {
    id: 6,
    jobTitle: "Marketing Specialist",
    company: "Global Marketing Co.",
    location: "Chicago, IL",
    description:
      "We are looking for a Marketing Specialist to develop and execute marketing campaigns. Experience with digital marketing, SEO, and social media is preferred.",
    salary: "$70K - $90K",
    level: "Entry-Level",
    type: "Full-Time",
    postedDate: "2023-10-25",
    skillsRequired: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Content Creation",
      "Analytics",
    ],
    companyLogo:
      "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
  },
];

export const jobCategories = [
  { name: "Remote", icon: HomeIcon },
  { name: "MNC", icon: BuildingOffice2Icon },
  { name: "Analytics", icon: ChartBarSquareIcon },
  { name: "Internship", icon: AcademicCapIcon },
  { name: "Sales", icon: GiftIcon },
  { name: "Supply Chain", icon: CubeIcon },
  { name: "Fortune 500", icon: CheckBadgeIcon },
  { name: "Software & IT", icon: ComputerDesktopIcon },
  { name: "Marketing", icon: ArrowTrendingUpIcon },
  { name: "Project Mgmt", icon: CheckCircleIcon },
  { name: "HR", icon: UsersIcon },
];
