interface Data {
  [key: string]: {
    title: string[];
    content?: string;
    options?: { text: string; url?: string }[];
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
    options: [
      { text: "Admissions" },
      { text: "Courses" },
      { text: "Departments" },
      { text: "Events" },
      { text: "Contact" },
    ],
  },
  admissions: {
    title: ["Please select a category"],
    options: [
      { text: "Undergraduate" },
      { text: "Postgraduate" },
      { text: "PhD" },
      { text: "International Students" },
    ],
  },
  courses: {
    title: ["Please select a department to see available courses"],
    options: [
      { text: "Computer Science" },
      { text: "Business Administration" },
      { text: "Engineering" },
      { text: "Law" },
      { text: "Pharmacy" },
    ],
  },
  departments: {
    title: ["Here are the departments in our university"],
    options: [
      { text: "Computer Science" },
      { text: "Business Administration" },
      { text: "Engineering" },
      { text: "Law" },
      { text: "Pharmacy" },
    ],
  },
  events: {
    title: ["Upcoming University Events"],
    options: [
      { text: "Orientation Program - January 15", url: "https://metrouni.edu.bd/orientation" },
      { text: "Cultural Fest - February 20", url: "https://metrouni.edu.bd/cultural-fest" },
      { text: "Convocation - December 10", url: "https://metrouni.edu.bd/convocation" },
    ],
    url: {
      more: "https://metrouni.edu.bd/events",
    },
  },
  contact: {
    title: ["Contact Information"],
    options: [
      { text: "Phone: +880123456789" },
      { text: "Email: info@metrouni.edu.bd" },
      { text: "Visit Us", url: "https://metrouni.edu.bd/contact" },
    ],
  },
  undergraduate: {
    title: ["Undergraduate Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/apply-now" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/requirements" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/tuition" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/scholarships" },
    ],
    url: {
      more: "https://metrouni.edu.bd/undergraduate",
    },
  },
  postgraduate: {
    title: ["Postgraduate Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/apply-now" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/requirements" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/tuition" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/scholarships" },
    ],
    url: {
      more: "https://metrouni.edu.bd/postgraduate",
    },
  },
  phd: {
    title: ["PhD Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/apply-now" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/requirements" },
      { text: "Research Opportunities", url: "https://metrouni.edu.bd/research" },
      { text: "Funding", url: "https://metrouni.edu.bd/funding" },
    ],
    url: {
      more: "https://metrouni.edu.bd/phd",
    },
  },
  international: {
    title: ["International Students Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/apply-now" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/requirements" },
      { text: "Visa Information", url: "https://metrouni.edu.bd/visa" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/scholarships" },
    ],
    url: {
      more: "https://metrouni.edu.bd/international",
    },
  },
  computer: {
    title: ["Computer Science Courses"],
    content: `
      <p>Introduction to Programming - 3 Credits</p>
      <p>Data Structures - 3 Credits</p>
      <p>Algorithms - 3 Credits</p>
      <p>Operating Systems - 3 Credits</p>
    `,
    url: {
      more: "https://metrouni.edu.bd/computer-science",
    },
  },
  business: {
    title: ["Business Administration Courses"],
    content: `
      <p>Introduction to Business - 3 Credits</p>
      <p>Marketing - 3 Credits</p>
      <p>Finance - 3 Credits</p>
      <p>Management - 3 Credits</p>
    `,
    url: {
      more: "https://metrouni.edu.bd/business",
    },
  },
  engineering: {
    title: ["Engineering Courses"],
    content: `
      <p>Introduction to Engineering - 3 Credits</p>
      <p>Civil Engineering - 3 Credits</p>
      <p>Mechanical Engineering - 3 Credits</p>
      <p>Electrical Engineering - 3 Credits</p>
    `,
    url: {
      more: "https://metrouni.edu.bd/engineering",
    },
  },
  law: {
    title: ["Law Courses"],
    content: `
      <p>Introduction to Law - 3 Credits</p>
      <p>Criminal Law - 3 Credits</p>
      <p>Constitutional Law - 3 Credits</p>
      <p>International Law - 3 Credits</p>
    `,
    url: {
      more: "https://metrouni.edu.bd/law",
    },
  },
  pharmacy: {
    title: ["Pharmacy Courses"],
    content: `
      <p>Introduction to Pharmacy - 3 Credits</p>
      <p>Pharmaceutical Chemistry - 3 Credits</p>
      <p>Pharmacology - 3 Credits</p>
      <p>Clinical Pharmacy - 3 Credits</p>
    `,
    url: {
      more: "https://metrouni.edu.bd/pharmacy",
    },
  },
};
