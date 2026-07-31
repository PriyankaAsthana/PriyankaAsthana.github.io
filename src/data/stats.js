import {
  Medal,
  Lightbulb,
  FileText,
  Briefcase,
  Certificate,
  Robot,
} from "@phosphor-icons/react";
export const stats = [
  {
    id: 1,
    icon: Medal,
    value: "8.63",
    suffix: "/10",
    title: "CGPA",
    color: "from-amber-400 to-yellow-500",

    points: [
      "Gold Medalist",
      "B.Tech (Hons.)",
      "First Division with Distinction",
    ],
  },

  {
    id: 2,
    icon: Lightbulb,
    value: "1",
    title: "Granted Patent",
    color: "from-blue-500 to-cyan-500",

    points: [
      "Indian Patent",
      "Healthcare AI",
      "Conversational Diagnosis",
    ],
  },

  {
    id: 3,
    icon: FileText,
    value: "4+",
    title: "Research Papers",
    color: "from-violet-500 to-purple-500",

    points: [
      "ACL Submission",
      "Springer Nature",
      "Peer-reviewed Research",
    ],
  },

  {
    id: 4,
    icon: Briefcase,
    value: "3",
    title: "Research Internships",
    color: "from-green-500 to-emerald-500",

    points: [
      "Hindalco",
      "IIT BHU",
      "Research Labs",
    ],
  },

  {
    id: 5,
    icon: Certificate,
    value: "8+",
    title: "AI Certifications",
    color: "from-pink-500 to-rose-500",

    points: [
      "Oracle",
      "Microsoft",
      "NPTEL",
    ],
  },

  {
    id: 6,
    icon: Robot,
    value: "92%",
    title: "Detection Accuracy",
    color: "from-indigo-500 to-blue-600",

    points: [
      "Healthcare AI",
      "Disease Detection",
      "Voice Assistant",
    ],
  },
];