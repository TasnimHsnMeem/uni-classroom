import React, { useState } from "react";
import Img1 from "./chatbot.png";
import Img2 from "./chatbot1.png";
import "./chatbot.css";
import Layout from "../../common/layouts/Layout";
import { chat_data } from "./data";

type Props = {};

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
    chat_data.chatinit.title.forEach((title, index) => {
      setTimeout(() => handleChat(title), index * 500);
    });
    setTimeout(() => {
      showOptions(chat_data.chatinit.options);
    }, (chat_data.chatinit.title.length + 1) * 500);
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
    const tempObj = chat_data[findText];

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
