import React, { useState } from "react";
import Img1 from "./chatbot.png";
import Img2 from "./chatbot1.png";
// import "./chatbot.css";
import Layout from "../../common/layouts/Layout";
import { chat_data } from "./data";
import { RootState, useAppSelector } from "../../../redux/store";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

type Props = {};

interface ChatContent {
  type: string;
  content: string | JSX.Element;
}

const Chatbot: React.FC<Props> = () => {
  const [chatVisible, setChatVisible] = useState<boolean>(false);
  const [chatContent, setChatContent] = useState<ChatContent[]>([]);
  const [options, setOptions] = useState<{ text: string; url?: string }[]>([]);

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
      showOptions(chat_data.chatinit.options || []); // Ensure options is always an array
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

  const showOptions = (options: { text: string; url?: string }[]) => {
    setOptions(options);
    handleScroll();
  };

  const handleOpt = (option: { text: string; url?: string }) => {
    const findText = option.text.split(" ")[0].toLowerCase();
    const tempObj = chat_data[findText];

    setChatContent((prev) => [
      ...prev,
      {
        type: "test",
        content: (
          <p className="test">
            <span className="rep">{option.text}</span>
          </p>
        ),
      },
    ]);

    setOptions([]);

    if (tempObj) {
      handleResults(
        tempObj.title,
        tempObj.content,
        tempObj.options,
        tempObj.url || {}
      );
    } else if (option.url) {
      window.open(option.url, "_blank");
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
    content: string | undefined,
    options: { text: string; url?: string }[] | undefined,
    url: { more?: string; link?: string[] }
  ) => {
    titles.forEach((title, index) => {
      setTimeout(() => handleDelay(title), index * 500);
    });

    setTimeout(() => {
      if (content) {
        handleChat(content);
      }
      if (options && options.length > 0) {
        showOptions(options);
      }
      if (url.more) {
        handleOptions(options, url);
      }
    }, titles.length * 500);
  };

  const handleOptions = (
    options: { text: string; url?: string }[] | undefined,
    url: { more?: string; link?: string[] }
  ) => {
    const moreOption = (
      <span key="more" className="opt link">
        <a
          className="m-link"
          href={url.more}
          target="_blank"
          rel="noopener noreferrer"
        >
          See more
        </a>
      </span>
    );

    setChatContent((prev) => [...prev, { type: "opt", content: moreOption }]);

    handleScroll();
  };

  const handleScroll = () => {
    const elem = document.getElementById("chat-box");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  };
  const {
    isAuth,
    user: { role },
  } = useAppSelector((state: RootState) => {
    return state.auth.profileData;
  }, shallowEqual);

  const navigate = useNavigate();
  if (!isAuth) {
    navigate("/login");
  }

  return (
    <Layout>
      <div>
        <style>
          {`
        #init{
          margin-top: 2rem;
          background: indianred;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: aliceblue;
          cursor: pointer;
      }
      .desc p{
          color: rgb(133,153,168);
          margin: 0;
          font-weight: 600;
      }
      .text{
          font-size: 65px;
          font-weight: 800;
          color: cadetblue;
          margin: 0;
      }
      .parent{
          position: relative;
          height: 100%;
          padding: 0 7rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .bot-img{
          width: 20rem;
          height: 20rem;
      }
      .child{
          box-shadow: 0 0 2px salmon;
          border-radius: 15px;
          height: 30rem;
          width: 16rem;
          margin: auto;
          background: white;
      }
      .header img{
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin: 0 0.5rem;
          border: 1px solid rgb(231,231,231);
          padding: 5px;
      }
      .header{
          position: absolute;
          top: 0;
          display: flex;
          align-items: center;
          border-bottom: 1px solid whitesmoke;
          background: white;
          width: 16rem;
          padding: 5px 0;
          border-top-right-radius: 15px;
          border-top-left-radius: 15px;
          z-index: 1;
          box-shadow: 0 0 2px rgb(175,175,175);
      }
      .h-child{
          display: flex;
          align-items: center;
      }
      .header span{
          font-size: 13px;
          margin: 0;
          padding: 0;
      }
      .refBtn{
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: none;
          border: none;
          border-radius: 50%;
          color: indianred;
          font-size: 18px;
          cursor: pointer;
      }
      .name{
          font-weight: 600;
      }
      .footer{
          position: absolute;
          bottom: 0;
          width: 16rem;
          background: white;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          color: indianred;
          padding: 15px 0;
          text-align: center;
          font-size: 14px;
          box-shadow: 0 0 3px rgb(153,153,153);
      }
      #chat-box{
          border-radius: 5%;
          position: relative;
          top: 40px;
          padding: 8px 10px;
          font-size: 12px;
          height: 27.5rem;
          overflow: auto;
          background: rgb(224,241,253);
          text-align: center;
      }
      
      /* these classes will be used in javascript file */
      .msg{
          background: white;
          padding: 5px 15px;
          border-top-right-radius: 15px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          width: max-content;
          font-size: 14px;
          color: lightslategrey;
          box-shadow: 0 0 5px rgb(226,226,226);
          max-width: 65%;
          text-align: left;
      }
      .test{
          text-align: right;
          margin: 20px 0;
      }
      .rep{
          background: rgb(253,243,224);
          color: lightslategray;
          padding: 5px 15px;
          border-top-right-radius: 15px;
          border-bottom-left-radius: 15px;
          border-top-left-radius: 15px;
          font-size: 14px;
          box-shadow: 0 0 5px rgb(211,211,211);
      }
      .opt{
          padding: 5px 20px;
          columns: lightsalmon;
          border: 1px solid blueviolet;
          border-radius: 1rem;
          margin: 0.3rem 0.5rem;
          display: inline-block;
          cursor: pointer;
          font-weight: 500;
          background: white;
          text-align: center;
          font-size: 14px;
          color: blueviolet;
      }
      .link{
          text-decoration: none;
          display: block;
          text-align: center;
          color: aliceblue !important;
          background: blueviolet;
      }
      .m-link{
          text-decoration: none;
      }
      .link:active{
          background: white;
          border: 1px solid blueviolet;
          color: blueviolet;
      }
        `}
        </style>
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
              bottom: "4rem",
              right: "4rem",
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
                    dangerouslySetInnerHTML={{ __html: option.text }}
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
