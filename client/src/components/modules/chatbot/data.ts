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
      { text: "Orientation Program - January 15", url: "https://metrouni.edu.bd/sites/university/announcement" },
      { text: "Cultural Fest - February 20", url: "https://metrouni.edu.bd/sites/university/event-calendar" },
      { text: "Convocation - December 10", url: "https://metrouni.edu.bd/sites/university/convocation" },
    ],
    url: {
      more: "https://metrouni.edu.bd/sites/university/event-calendar",
    },
  },
  contact: {
    title: ["Contact Information"],
    options: [
      { text: "Phone: +880123456789" },
      { text: "Email: info@metrouni.edu.bd" },
      { text: "Visit Us", url: "https://metrouni.edu.bd/sites/university/contact" },
    ],
  },
  undergraduate: {
    title: ["Undergraduate Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/sites/admission/online-admission-form" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/sites/admission/undergraduate" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/sites/admission/programme-fee-structure" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/sites/admission/scholarship-aid" },
    ],
    url: {
      more: "https://metrouni.edu.bd/sites/admission/undergraduate",
    },
  },
  postgraduate: {
    title: ["Postgraduate Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/sites/admission/online-admission-form" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/sites/admission/graduate" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/sites/admission/programme-fee-structure" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/sites/admission/scholarship-aid" },
    ],
    url: {
      more: "https://metrouni.edu.bd/sites/admission/graduate",
    },
  },
  phd: {
    title: ["PhD Admissions Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/sites/admission/online-admission-form" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/sites/admission/graduate" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/sites/admission/programme-fee-structure" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/sites/admission/scholarship-aid" },
    ],
    url: {
      more: "https://metrouni.edu.bd/sites/admission/graduate",
    },
  },
  international: {
    title: ["International Students Information"],
    options: [
      { text: "Apply Now", url: "https://metrouni.edu.bd/sites/admission/online-admission-form" },
      { text: "Admission Requirements", url: "https://metrouni.edu.bd/sites/admission/graduate" },
      { text: "Tuition Fees", url: "https://metrouni.edu.bd/sites/admission/programme-fee-structure" },
      { text: "Scholarships", url: "https://metrouni.edu.bd/sites/admission/scholarship-aid" },
    ],
    url: {
      more: "https://metrouni.edu.bd/sites/admission/graduate",
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
      more: "https://metrouni.edu.bd/sites/facilities/laboratory-resources",
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
      more: "https://metrouni.edu.bd/sites/school-of-business-economics/school-of-business-economics",
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
      more: "https://metrouni.edu.bd/sites/school-of-science-technology/school-of-science-technology",
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
      more: "https://metrouni.edu.bd/sites/school-of-law/school-of-law",
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
