import React, { useState } from "react";
import Img1 from "./chatbot.png";
import Img2 from "./chatbot1.png";
import "./chatbot.css";
import Layout from "../../common/layouts/Layout";

type Props = {};

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

const data: Data = {
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
interface ChatContent {
  type: string;
  content: string | JSX.Element;
}

const Chatbot: React.FC<Props> = () => {
  const [chatVisible, setChatVisible] = useState<boolean>(false);
  const [chatContent, setChatContent] = useState<ChatContent[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  const showChatBot = () => {
    if (!chatVisible) {
      setChatVisible(true);
      initChat();
    } else {
      window.location.reload();
    }
  };

  const initChat = () => {
    setChatContent([]);
    data.chatinit.title.forEach((title, index) => {
      setTimeout(() => handleChat(title), index * 500);
    });
    setTimeout(() => {
      showOptions(data.chatinit.options);
    }, (data.chatinit.title.length + 1) * 500);
  };

  const handleChat = (message: string) => {
    setChatContent((prev) => [
      ...prev,
      {
        type: "msg",
        content: (
          <p className="msg" dangerouslySetInnerHTML={{ __html: message }} />
        ),
      },
    ]);
    handleScroll();
  };

  const showOptions = (options: string[]) => {
    setOptions(options);
    handleScroll();
  };

  const handleOpt = (option: string) => {
    const textArr = option.split(" ");
    const findText = textArr[0].toLowerCase();
    const tempObj = data[findText];

    setChatContent((prev) => [
      ...prev,
      {
        type: "test",
        content: (
          <p className="test">
            <span className="rep">{option}</span>
          </p>
        ),
      },
    ]);

    setOptions([]);

    if (tempObj) {
      handleResults(tempObj.title, tempObj.options, tempObj.url || {});
    } else {
      console.error(`No data found for the option: ${findText}`);
    }
  };

  const handleDelay = (title: string) => {
    setChatContent((prev) => [
      ...prev,
      {
        type: "msg",
        content: (
          <p className="msg" dangerouslySetInnerHTML={{ __html: title }} />
        ),
      },
    ]);
  };

  const handleResults = (
    titles: string[],
    options: string[],
    url: { more?: string; link?: string[] }
  ) => {
    titles.forEach((title, index) => {
      setTimeout(() => handleDelay(title), index * 500);
    });

    setTimeout(() => {
      if (Object.keys(url).length === 0) {
        showOptions(options);
      } else {
        handleOptions(options, url);
      }
    }, titles.length * 500);
  };

  const handleOptions = (
    options: string[],
    url: { more?: string; link?: string[] }
  ) => {
    const opts = options.map((option, index) => (
      <span key={index} className="opt">
        <span>{option}</span>
      </span>
    ));

    const moreOption = (
      <span key="more" className="opt link">
        <a className="m-link" href={url.more}>
          See more
        </a>
      </span>
    );

    setChatContent((prev) => [
      ...prev,
      ...opts.map((opt) => ({ type: "opt", content: opt })),
      { type: "opt", content: moreOption },
    ]);

    handleScroll();
  };

  const handleScroll = () => {
    const elem = document.getElementById("chat-box");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  };

  return (
    <Layout>
      <div>
        <div className="parent">
          <div className="desc">
            <h1 className="text">Metropolitan University Chatbot</h1>
            <p>
              Welcome to Metropolitan University, Sylhet. How can we assist you
              today?
            </p>
            <button id="init" onClick={showChatBot}>
              {chatVisible ? "CLOSE CHAT" : "START CHAT"}
            </button>
          </div>
          <div>
            <img src={Img1} alt="" className="bot-img" />
          </div>
        </div>
        {chatVisible && (
          <div
            id="test"
            style={{
              position: "fixed",
              top: "4rem",
              right: "8rem",
              display: "block",
            }}
          >
            <div className="child" id="chatbot">
              <div className="header">
                <div className="h-child">
                  <img src={Img2} alt="avatar" id="avatar" />
                  <div>
                    <span className="name">Chatbot</span>
                    <br />
                    <span style={{ color: "lawngreen" }}>online</span>
                  </div>
                </div>
                <div>
                  <button className="refBtn">
                    <i
                      className="fa fa-refresh"
                      onClick={() => console.log("OpenChatbox")}
                    ></i>
                  </button>
                </div>
              </div>
              <div id="chat-box">
                {chatContent.map((item, index) => (
                  <React.Fragment key={index}>{item.content}</React.Fragment>
                ))}
                {options.map((option, index) => (
                  <span
                    key={index}
                    className="opt"
                    onClick={() => handleOpt(option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Chatbot;
