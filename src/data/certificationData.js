import oracleLogo from "../assets/logos/oracle_logo.avif";
import azureLogo from "../assets/logos/Microsoft-Azure.jpg";
import anthropicLogo from "../assets/logos/athropic_logo.webp";
import awsLogo from "../assets/logos/AWS-Logo.jpg";
import infosysLogo from "../assets/logos/Infosys-Logo.jpg";
import mckinseyLogo from "../assets/logos/McKinsey-Logo.jpg";

const certifications = [

  {
    id: 1,
    company: "Oracle",

    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",

    short: "OCI AI Foundations",

    logo: oracleLogo,

    issue: "Oct 30, 2025",

    valid: "Valid until Oct 30, 2027",

    category: "Cloud / AI Platform Certifications",

    description:
      "Validates foundational knowledge of Artificial Intelligence, Machine Learning concepts, and Oracle Cloud Infrastructure AI services.",

    skills: [
      "AI Foundations",
      "Machine Learning",
      "OCI AI",
      "Cloud AI",
      "Responsible AI",
    ],

    color: "#F8F9FF",
  },

  {
    id: 2,

    company: "Oracle",

    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",

    short: "OCI Generative AI",

    logo: oracleLogo,

    issue: "Oct 30, 2025",

    valid: "Valid until Oct 30, 2027",

    category: "Cloud / AI Platform Certifications",

    description:
      "Advanced certification covering LLMs, prompt engineering, retrieval augmentation, vector databases and enterprise GenAI deployment.",

    skills: [
      "Generative AI",
      "Prompt Engineering",
      "LLMs",
      "OCI",
      "RAG",
      "Embeddings",
    ],

    color: "#FFF8F6",
  },

  {
    id: 3,

    company: "Oracle",

    title:
      "Oracle AI Vector Search Certified Professional",

    short: "Oracle Vector Search",

    logo: oracleLogo,

    issue: "Nov 5, 2025",

    valid: "Valid until Nov 5, 2027",

    category: "Cloud / AI Platform Certifications",

    description:
      "Professional certification focused on semantic search, embeddings, vector databases and enterprise retrieval systems.",

    skills: [
      "Vector Search",
      "Embeddings",
      "Oracle DB",
      "Semantic Search",
      "AI Search",
    ],

    color: "#F8FFF7",
  },

  {
    id: 4,

    company: "Microsoft",

    title:
      "Microsoft Azure AI-900 — Artificial Intelligence Fundamentals",

    short: "Azure AI-900",

    logo: azureLogo,

    issue: "2026",

    valid: "Lifetime",

    category: "Cloud / AI Platform Certifications",

    description:
      "Foundational Azure AI certification covering machine learning, NLP, computer vision and responsible AI.",

    skills: [
      "Azure",
      "AI",
      "Machine Learning",
      "NLP",
      "Responsible AI",
    ],

    color: "#F7FBFF",
  },

  {
    id: 5,

    company: "Microsoft",

    title:
      "Microsoft Azure AI-102 — Designing and Implementing AI Solutions",

    short: "Azure AI-102",

    logo: azureLogo,

    issue: "2026",

    valid: "Lifetime",

    category: "Cloud / AI Platform Certifications",

    description:
      "Professional Azure certification focused on Azure OpenAI, Azure AI Search, Cognitive Services and enterprise AI deployment.",

    skills: [
      "Azure OpenAI",
      "Azure AI Search",
      "Responsible AI",
      "Cognitive Services",
    ],

    color: "#FFFDF8",
  },

  {
    id: 6,

    company: "Anthropic",

    title: "AI Fluency: Framework & Foundations",

    short: "AI Fluency",

    logo: anthropicLogo,

    issue: "2026",

    valid: "Completed",

    category: "AI Fluency / Foundational Courses",

    description:
      "Developed conceptual understanding of modern AI systems, foundation models and safe AI deployment.",

    skills: [
      "AI Fluency",
      "LLMs",
      "Responsible AI",
      "Prompting",
    ],

    color: "#FFF9FE",
  },

  {
    id: 7,

    company: "Anthropic",

    title: "Claude 101",

    short: "Claude 101",

    logo: anthropicLogo,

    issue: "2026",

    valid: "Completed",

    category: "AI Fluency / Foundational Courses",

    description:
      "Hands-on introduction to Claude, prompting techniques and production AI workflows.",

    skills: [
      "Claude",
      "Prompt Engineering",
      "Workflows",
      "Reasoning",
    ],

    color: "#F8FFFF",
  },

  {
    id: 8,

    company: "Amazon Web Services",

    title:
      "AWS Introduction to Generative AI — Art of the Possible",

    short: "AWS Generative AI",

    logo: awsLogo,

    issue: "July 2, 2026",

    valid: "Completed",

    category: "AI Fluency / Foundational Courses",

    description:
      "Explored enterprise applications of Generative AI across AWS cloud ecosystem.",

    skills: [
      "AWS",
      "Generative AI",
      "Bedrock",
      "Foundation Models",
    ],

    color: "#FFFDF6",
  },

  {
    id: 9,

    company: "Infosys",

    title:
      "Infosys Foundation Finishing School for Employability — Artificial Intelligence",

    short: "Infosys AI",

    logo: infosysLogo,

    issue: "Jan–Feb 2026",

    valid: "Completed",

    category: "Program Certificates",

    description:
      "Program focused on AI fundamentals, machine learning workflows and employability skills.",

    skills: [
      "AI",
      "ML",
      "Python",
      "Problem Solving",
    ],

    color: "#F8FFF9",
  },

  {
    id: 10,

    company: "McKinsey",

    title:
      "McKinsey.org Forward Program",

    short: "Forward Program",

    logo: mckinseyLogo,

    issue: "Dec 2025",

    valid: "Completed",

    category: "Program Certificates",

    description:
      "Professional development program covering leadership, communication, structured thinking and digital transformation.",

    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Growth Mindset",
    ],

    color: "#FDFBFF",
  },
];

export default certifications;