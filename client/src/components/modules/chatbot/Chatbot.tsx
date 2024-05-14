import React, { useState } from "react";

import Img1 from "./chatbot.png";
import Img2 from "./chatbot1.png";
import "./chatbot.css";

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
      "Hello",
      "I am Mr. Chatbot",
      "How can I help you?",
    ],
    options: [
      "Movies",
      "News",
      "Shopping",
      "Music",
    ],
  },
  movies: {
    title: ["Please select category"],
    options: ["Hollywood", "Bollywood", "Web Series", "Others"],
    url: {},
  },

  news: {
    title: ["Today's Top 5 Headlines"],
    options: [
      "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
      "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
      "The rare green comet will make its closest pass of Earth between February 1 and February 2, according to NASA.",
    ],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  shopping: {
    title: [
      "Thanks for your response",
      "Welcome to shopping zone",
      "Please select one of the below options to proceed further",
    ],
    options: [
      "Electronics",
      "Beauty products",
      "Mobiles",
      "Men Fashion",
      "Women fashion",
    ],
    url: {},
  },
  electronics: {
    title: [
      "Thanks for your response",
      "Here are some electronic items for you",
      "Click on it to know more",
    ],
    options: [
      "Televisions",
      "Cameras",
      "Gaming Consoles",
      "Headphones",
      "Speakers",
    ],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#", "#"],
    },
  },
  beauty: {
    title: [
      "Thanks for your response",
      "Here are some beauty products for you",
      "Click on it to know more",
    ],
    options: ["Make-up & Nails", "Skin Care", "Fragrance", "Hair care"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#"],
    },
  },
  mobiles: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Mobile Phones", "Cases & Covers", "Power Banks", "Tablets"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#"],
    },
  },
  men: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Clothing", "Shirts", "T-shirts", "Innerwear", "Jeans"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#", "#"],
    },
  },
  women: {
    title: [
      "Thanks for your response",
      "These are some results based on your input",
      "Click on it to know more",
    ],
    options: ["Clothing", "Western Wear", "Ethnic Wear", "Top Brands"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#"],
    },
  },
  music: {
    title: [
      "These are some latest songs",
    ],
    options: ["song 1", "song 2", "song 3", "song 4", "song 5"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: [
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
        "https://www.youtube.com/@webhub/videos",
      ],
    },
  },
  hollywood: {
    title: ["Thanks for your response", "Here are some genre based movies"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#", "#"],
    },
  },
  bollywood: {
    title: ["Thanks for your response", "Here are some genre based movies"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#", "#"],
    },
  },
  web: {
    title: ["Thanks for your response", "Here are some genre based web series"],
    options: ["Comedy", "Horror", "Sci-Fi", "Romance", "Action"],
    url: {
      more: "https://www.youtube.com/@webhub/videos",
      link: ["#", "#", "#", "#", "#"],
    },
  },
  others: {
    title: ["Here are some more options for you"],
    options: ["YouTube", "Netflix", "Amazon Prime", "Hot Star"],
    url: {
      more: "https://www.youtube.com/",
      link: ["#", "#", "#", "#", "#"],
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
      { type: "msg", content: <p dangerouslySetInnerHTML={{ __html: message }} /> },
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
        content: <p className="test"><span className="rep">{option}</span></p>,
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
      { type: "msg", content: <p dangerouslySetInnerHTML={{ __html: title }} /> },
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
        <a className="m-link" href={url.link ? url.link[index] : "#"}>
          {option}
        </a>
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
    <div>
      <div className="parent">
        <div className="desc">
          <h1 className="text">JavaScript Chatbot</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            quasi obcaecati, voluptatum perspiciatis illum sunt? Lorem ipsum
            dolor sit amet.
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
                <React.Fragment key={index}>
                  {item.content}
                </React.Fragment>
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
  );
};

export default Chatbot;
