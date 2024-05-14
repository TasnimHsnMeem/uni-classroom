interface Data {
  [key: string]: {
    title: string[];
    options: string[];
    url?: {
      more?: string;
      link?: string[];
    };
  };
}

export const chat_data: Data = {
  chatinit: {
    title: [
      "Hello 👋",
      "Welcome to Metropolitan University, Sylhet Chatbot",
      "How can I assist you today?",
    ],
    options: ["Admissions", "Courses", "Departments", "Events", "Contact"],
  },
  admissions: {
    title: ["Please select a category"],
    options: ["Undergraduate", "Postgraduate", "PhD", "International Students"],
  },
  courses: {
    title: ["Please select a department to see available courses"],
    options: [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Law",
      "Pharmacy",
    ],
  },
  departments: {
    title: ["Here are the departments in our university"],
    options: [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Law",
      "Pharmacy",
    ],
  },
  events: {
    title: ["Upcoming University Events"],
    options: [
      "Orientation Program - January 15",
      "Cultural Fest - February 20",
      "Convocation - December 10",
    ],
    url: {
      more: "https://metrouni.edu.bd/events",
      link: [
        "https://metrouni.edu.bd/orientation",
        "https://metrouni.edu.bd/cultural-fest",
        "https://metrouni.edu.bd/convocation",
      ],
    },
  },
  contact: {
    title: ["Contact Information"],
    options: [
      "Phone: +880123456789",
      "Email: info@metrouni.edu.bd",
      "Visit Us",
    ],
    url: {
      more: "https://metrouni.edu.bd/contact",
    },
  },
  undergraduate: {
    title: ["Undergraduate Admissions Information"],
    options: [
      "Apply Now",
      "Admission Requirements",
      "Tuition Fees",
      "Scholarships",
    ],
    url: {
      more: "https://metrouni.edu.bd/undergraduate",
      link: [
        "https://metrouni.edu.bd/apply-now",
        "https://metrouni.edu.bd/requirements",
        "https://metrouni.edu.bd/tuition",
        "https://metrouni.edu.bd/scholarships",
      ],
    },
  },
  postgraduate: {
    title: ["Postgraduate Admissions Information"],
    options: [
      "Apply Now",
      "Admission Requirements",
      "Tuition Fees",
      "Scholarships",
    ],
    url: {
      more: "https://metrouni.edu.bd/postgraduate",
      link: [
        "https://metrouni.edu.bd/apply-now",
        "https://metrouni.edu.bd/requirements",
        "https://metrouni.edu.bd/tuition",
        "https://metrouni.edu.bd/scholarships",
      ],
    },
  },
  phd: {
    title: ["PhD Admissions Information"],
    options: [
      "Apply Now",
      "Admission Requirements",
      "Research Opportunities",
      "Funding",
    ],
    url: {
      more: "https://metrouni.edu.bd/phd",
      link: [
        "https://metrouni.edu.bd/apply-now",
        "https://metrouni.edu.bd/requirements",
        "https://metrouni.edu.bd/research",
        "https://metrouni.edu.bd/funding",
      ],
    },
  },
  international: {
    title: ["International Students Information"],
    options: [
      "Apply Now",
      "Admission Requirements",
      "Visa Information",
      "Scholarships",
    ],
    url: {
      more: "https://metrouni.edu.bd/international",
      link: [
        "https://metrouni.edu.bd/apply-now",
        "https://metrouni.edu.bd/requirements",
        "https://metrouni.edu.bd/visa",
        "https://metrouni.edu.bd/scholarships",
      ],
    },
  },
  computer: {
    title: ["Computer Science Courses"],
    options: [
      "Introduction to Programming",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
    ],
    url: {
      more: "https://metrouni.edu.bd/computer-science",
      link: [
        "https://metrouni.edu.bd/programming",
        "https://metrouni.edu.bd/data-structures",
        "https://metrouni.edu.bd/algorithms",
        "https://metrouni.edu.bd/os",
      ],
    },
  },
  business: {
    title: ["Business Administration Courses"],
    options: ["Introduction to Business", "Marketing", "Finance", "Management"],
    url: {
      more: "https://metrouni.edu.bd/business",
      link: [
        "https://metrouni.edu.bd/business-intro",
        "https://metrouni.edu.bd/marketing",
        "https://metrouni.edu.bd/finance",
        "https://metrouni.edu.bd/management",
      ],
    },
  },
  engineering: {
    title: ["Engineering Courses"],
    options: [
      "Introduction to Engineering",
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
    ],
    url: {
      more: "https://metrouni.edu.bd/engineering",
      link: [
        "https://metrouni.edu.bd/intro-engineering",
        "https://metrouni.edu.bd/civil",
        "https://metrouni.edu.bd/mechanical",
        "https://metrouni.edu.bd/electrical",
      ],
    },
  },
  law: {
    title: ["Law Courses"],
    options: [
      "Introduction to Law",
      "Criminal Law",
      "Constitutional Law",
      "International Law",
    ],
    url: {
      more: "https://metrouni.edu.bd/law",
      link: [
        "https://metrouni.edu.bd/intro-law",
        "https://metrouni.edu.bd/criminal-law",
        "https://metrouni.edu.bd/constitutional-law",
        "https://metrouni.edu.bd/international-law",
      ],
    },
  },
  pharmacy: {
    title: ["Pharmacy Courses"],
    options: [
      "Introduction to Pharmacy",
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Clinical Pharmacy",
    ],
    url: {
      more: "https://metrouni.edu.bd/pharmacy",
      link: [
        "https://metrouni.edu.bd/intro-pharmacy",
        "https://metrouni.edu.bd/pharmaceutical-chemistry",
        "https://metrouni.edu.bd/pharmacology",
        "https://metrouni.edu.bd/clinical-pharmacy",
      ],
    },
  },
};
