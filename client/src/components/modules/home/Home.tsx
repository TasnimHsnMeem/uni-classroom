import React from "react";
import home4 from "./img/home4.jpg";
import chairman from "./img/chairman.jpg";
import vc from "./img/vc.jpg";
import campus from "./img/campus.jpg";
import vision from "./img/vision.jpg";
import adnan from "./img/adnan.jpg";
import emrul from "./img/emrul.jpg";
import rafat from "./img/rafat.jpg";
import amanur from "./img/amanur.jpg";
import shuvo from "./img/shuvo.jpg";
import nintu from "./img/nintu.jpg";
import { Link } from "react-router-dom";
import RoutingList from "../../../utils/RoutingList";
import { useAppSelector } from "../../../redux/store";

// import "./style.css";
// import "./Home.module.scss"

type Props = {};

const Home = (props: Props) => {
  const { user } = useAppSelector((state) => state.auth.profileData);
  return (
    <div>
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap');

            *{
                font-family: 'Montserrat', sans-serif;
                margin: 0; padding: 0;
                box-sizing: border-box;
                outline: none; border:none;
                text-decoration: none;
                text-transform: capitalize;
                transition: all .2s linear;
            }
            
            
            @mixin grid($val) {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax($val, 1fr));
                gap:2rem;
            }
            
            html{
                font-size: 62.5%;
                overflow-x: hidden;
                scroll-behavior: smooth;
            
                &::-webkit-scrollbar{
                    width: 1rem;
                }
                &::-webkit-scrollbar-track{
                    background: transparent;
                }
                &::-webkit-scrollbar-thumb{
                    background: #89899c ;
                }
            }
            body{
                padding-left: 30rem;
            }
            section{
                padding: 3rem 5%;
                &:nth-child(even){
                background: rgb(235, 233, 233);
                }
            }
            
            .heading{
                text-align: center;
                margin-bottom: 3rem;
                span{
                    font-size: 1.5rem;
                    color: #040430;
                    text-transform: uppercase;
                }
            
                h3{
                    padding-top: 1rem;
                    font-size: 2rem;
                    color: black;
                    text-transform: uppercase;
                }
            
                h4{
                    padding-top: 1rem;
                    font-size: 1.5rem;
                    color: black;
                    text-transform: uppercase;
                }
            }
            
            .btn{
                display: inline-block;
                margin-top: 1rem;
                padding: 1.2rem 3rem;
                cursor: pointer;
                color: #ffffff;
                background: #040430;
                font-size: 1.7rem;
            
                &:hover{
                    background: #eb2626;
                }
            }
            
            .header{
                position: fixed;
                top: 0; left: 0;
                z-index: 1000;
                background: #040430;
                width: 30rem;
                height: 100%;
                padding:3rem;
            
                .logo{
                    font-size: 2rem;
                    color:white;
                    
                    i{
                        color: rgb(255, 255, 255);
            
                    }
                }
            
                .navbar{
                    padding: 12% 0;
                    a{
                        display: block;
                        font-size: 1.8rem;
                        margin: 1.7rem 0;
                        color: white;
            
                        i{
                            color: #eb2626;
                            padding-right: .5rem;
                        }
            
                        &:hover{
                            color: #eb2626;
                            i{
                                padding-right: 2rem;
                            }
                        }
                    }
                }
            
            /* CHATBOT BUTTIONNN  in NAVBAR  */
            
                #chatButton{
                    display: inline-block;
                    margin-top: 1rem;
                    padding: 1.2rem 3rem;
                    cursor: pointer;
                    color: #ffffff;
                    background: #eb2626;
                    font-size: 1.5rem;
                    padding-left: 1rem;
                
                    &:hover{
                        background:#33337e ;
                    }
                }
                
            
            
            
            /* Chat Popup      for CHATBOT WINDOW TO APPEAR  (MIGHT DELETE LATER)*/
            /* Chat Popup      for CHATBOT WINDOW TO APPEAR  (MIGHT DELETE LATER)*/
            .chat-popup {
                display: none;
                position: fixed;
                bottom: 0;
                right: 15px;
                border: 3px solid #f1f1f1;
                z-index: 9;
                background-color: #ffffff;
                width: 300px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
            }
            
            .chat-header {
                padding: 10px;
                background: #33337e;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 10px 10px 0 0;
            }
            
            .chat-body {
                padding: 10px;
                height: 300px;
                overflow-y: auto;
            }
            
            .chat-footer {
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            #userInput {
                width: 80%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            
            #sendButton {
                padding: 10px;
                background: #33337e;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            
            #sendButton:hover {
                background: #eb2626;
            }
            
            .close {
                cursor: pointer;
                font-size: 20px;
            }
            /* Chat Popup      for CHATBOT WINDOW TO APPEAR  (MIGHT DELETE LATER)*/
            /* Chat Popup      for CHATBOT WINDOW TO APPEAR  (MIGHT DELETE LATER)*/
            
            
            
                
            
                .share{
                    text-align: center;
                    a{
                        height: 3.5rem;
                        width: 3.5rem;
                        line-height: 3.5rem;
                        font-size: 1.5rem;
                        background-color: white;
                        color: black;
                        margin:0 .1rem;
            
                        &:hover{
                            color: white;
                            background: #eb2626;
                        }
                    }
                }
            
                .credit{
                    text-align: center;
                    color: white;
                    font-size: 1.5rem;
                    padding-top: 10%;
            
                    span{
                        color: #eb2626;
                    }
            
                }
                
            }
            
            #menu-btn{
            
                position: fixed;
                top:1rem; right:2rem;
                height: 5rem;
                width: 5rem;
                line-height: 5rem;
                font-size: 2.5rem;
                background: #040430;
                color: white;
                cursor: pointer;
                text-align: center;
                z-index: 10000;
                display: none;
            
            
                &.fa-times{
                    background: white;
                    color: rgb(0, 0, 0);
                }
            }
            
            .home{
                 /* i added this
                    padding- for lands cap picture  */
                padding-top: 13rem;
                padding-bottom: 15rem;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 2rem;
                
            
            
                .image{
                    flex:1 1 30rem;
                    
                  img{
                    width:100%;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(75, 73, 73, 0.1);
            
                    /* i added this
                    padding-top: 2rem;  */
                  }
                }
            
                .content{
                  width: 45rem;
                  span{
                    color: #eb2626;
                    font-size: 2.5rem;
                  }
            
                  h3{
                    color: #040430;
                    font-size: 2rem;
                    padding:1rem 0;
            
                    a{
                        color: #eb2626;
            
                        &:hover{
                          text-decoration: underline;
                        }
                    }
                  }
            
                  p{
                    font-size: 1.5rem;
                    color: rgb(160, 21, 21);
                    padding-bottom: 1rem;
                    line-height: 2;
                  }
            
                }
            }
            
            
                /* statistics*/
            .info-container{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                gap: 10px;
                .box{
                    padding: 2rem;
                    background: white;
                    display: flex;
                    align-items: center;
                    gap: 1rem; 
                    border: 1px solid #e6e6eb;
                    background-color: #ffffff;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);      
                    i{
                        height: 5rem;
                        width: 5rem;
                        line-height: 3.5rem;
                        font-size: 3rem;
                        border-radius: 50%;
                        background: #040430;
                        color: white;
                        text-align: center;      
                    }
            
                    h3{
                        font-size: 2rem;
                        padding-bottom: .5rem;
                        color: black;
                    }
                    p{
                        font-size: 1.2rem;
                     
                    }
                }
            }
            
            
            
            
            
            
            /* About */
            .about {
                padding: 2rem;
                background-color: #f9f9f9;
            
            .about-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                justify-content: center;
            }
            
            .about-item {
                flex: 1 1 45%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                background-color: #ffffff;
                padding: 1rem;
                border-radius: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .about-item .image img {
                width: 100%;
                max-width: 100px;
                border-radius: 10px;
                margin-bottom: 1rem;
            }
            
            .about-item .content span {
                font-size: 1.5rem;
                color: #333;
            }
            
            .about-item .content h3 {
                font-size: 2rem;
                color: #000;
                margin: 0.5rem 0;
            }
            
            .about-item .content p {
                font-size: 1.4rem;
                color: #555;
                line-height: 1.6;
            }
            
            /* History Section */
            .history {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-top: 3rem;
            }
            
            .history-content {
                flex: 1;
                max-width: 50%;
            }
            
            .history-content h2 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                padding-top: 1rem;
            }
            
            .history-content p {
                font-size: 1.4rem;
                color: #555;
                line-height: 1.6;
            }
            
            .history-image {
                flex: 1;
                max-width: 50%;
            }
            .history-image img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            }
            
                /* schools and departments*/
            
            .schools {
                padding: 2rem;
                background-color: #f5f5f5;
            
            .box-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
                gap: 1rem;
            
            .box {
                text-align: center;
                padding: 3rem 2rem;
                border: 1px solid #e6e6eb;
                border-radius: 10px;
                background-color: #ffffff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                &:hover i{
                    transform: translateY(-1rem);
                }
            
            }
            .box i {
                display: inline-block;
                height: 5.5rem;
                width: 5.5rem;
                line-height: 4rem;
                font-size: 2rem;
                border-radius: .5rem;
                color: white;
                background: #040430;
                margin-bottom: 1.5rem;
            }
            
            .box h3 {
                font-size: 1rem;
                color: black;
                margin-bottom: .5rem;
            }
            
            .box p {
                font-size: 1rem;
                color: #333;
                line-height: 2;
                padding-top: 1rem;
            }
            
            }
            
            }
            
            
            
            /* departments */
            
                /* students ACHIV*/
            
            .achievements-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
                gap: 12px;
            
            
            .box {
                padding: 2rem;
                background: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                border-radius: 6px;
                background-color: #ffffff;
                border: 1px solid #ececec;
                box-shadow: 0 2px 5px rgba(37, 11, 11, 0.1);
                
            }
            .box:hover {
                transform: translateY(-1rem);
            }
                
            }
            
            .box img {
                height: 10rem;
                width: 10rem;
                background: #040430;
                color: white;
                margin: auto;
            }
            
            .box h3 {
                font-size: 1.5rem;
                padding-top: 1rem;
                padding-bottom: .5rem;
                color: black;
            }
            
            .box p {
                font-size: 1.2rem;
            }
            
            .box i {
                font-size: 2rem;
                padding-top: 1rem;
                
            
            }
            .box .i .img{ 
                height: 1rem;
                width: 1rem;
            
            }
            
            
            
             /* programmes*/
            
             .programmes {
                padding: 2rem;
                background-color: #f5f5f5;
            
            .box-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                gap: 1rem;
            }
            
            .box {
                text-align: center;
                padding: 3rem 2rem;
                border: 1px solid #e6e6eb;
                border-radius: 10px;
                background-color: #ffffff;
                box-shadow: 0 2px 5px rgba(37, 37, 37, 0.1);
                transition: transform 0.3s;
            }
            
            .box:hover {
                transform: translateY(-1rem);
            }
            
            .box .content .stars {
                margin-bottom: 1rem;
            }
            
            .box .content .stars i {
                font-size: 1rem;
                color: #e01a1a;
            }
            
            .box .content .list p {
                display: flex;
                align-items: center;
                font-size: 1rem;
                color: #333;
                line-height: 2;
                padding-top: 1rem;
            }
            
            .box .content .list i {
                margin-right: 0.5rem;
                font-size: 1rem;
                color: #040430;
            }
            
            .box .content a {
                display: inline-block;
                margin-top: 1.5rem;
                padding: 1rem 1rem;
            
                background-color: #040430;
                color: white;
                text-decoration: none;
                transition: background-color 0.3s;
            }
            
            .box .content a:hover {
                background-color: #ff0000;
            }
            
            
             }
             
            
                /* contact*/
            
            .contact{
                .row{
            
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    padding-top: 3rem;
                    .contact-info-container{
                        width: 40rem;
                        .box{
                            margin-bottom: 2rem;
                            margin-top: 1rem;
                            display: flex;
                            gap: 1.5rem;
            
                            i{
                                height: 5rem;
                                width: 5rem;
                                line-height: 3rem;
                                font-size: 2rem;
                                border-radius: 50%;
                                background: #040430;
                                color: white;
                                text-align: center;
                                margin-top: -1rem;
                            
                            }
                            h3{
                                font-size: 1.5rem;
                                color: #000;
                                padding-bottom: 1rem;
                            }
            
                            p{
            
                                font-size: 1rem;
                                color: rgb(27, 24, 24);
                               line-height: 2;
                               
                            }
                        }
            
                    .share{
                        padding-top: 1rem;
                        
            
                        a{
                            height: 3rem;
                            width: 3rem;
                            line-height: 3rem;
                            font-size: 1.5rem;
                            background: #000;
                            color: white;
                            margin-right: .1rem;
                            text-align: center;
                            margin-bottom: 1rem;
                            
            
                            &:hover{
                                background: rgb(255, 0, 0);
                            }
            
                        }
                    }
                    }
            
                  
                    .content{
                        margin-top: 9rem;
                        width: 45rem;
                        align-items: center;
                        text-align: center;
            
                        span{
                          color: #040430;
                          font-size: 3rem;
                          
                        }
                  
                        h3{
                          color: #040430;
                          font-size: 1.5rem;
                          padding:1rem 0;
                  
                          a{
                              color: #eb2626;
                  
                              &:hover{
                                text-decoration: underline;
                              }
                          }
                        }
                  
                        p{
                          font-size: 1.5rem;
                          color: rgb(160, 21, 21);
                          padding-bottom: 1rem;
                          line-height: 2;
                        }
                  
                      }
            
                }
            
            }
            
            
            
            
                /* CHATBOT*/
              
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            @media (max-width:1200px){
                html{
                    font-size: 55%;
                }
            }
            
            @media (max-width:991px){
            
                body{
                    padding-left: 0;
                }
                
            
                #menu-btn{
                    display: block;
                }
                .header{
                    left: -110%;
            
                    &.active{
                        left: 0;
                        box-shadow: 0 0 0 100vw rgba(58, 53, 53, 0.884);
                        width: 35rem;
                    }
                }
              
                .home .content h3{ 
                    font-size: 2.5rem;
                   
                }
            }
            
            
            @media (max-width:450px){
                html{
                    font-size: 50%;
                }
            }
            
            
            
            
            
            
            
            
            
            
            
            `}
      </style>
      <script src="./js/script.js"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      ></link>

      <div id="menu-btn" className="fas fa-bars"></div>

      <header className="header">
        <a target="_blank" href="https://metrouni.edu.bd/" className="logo">
          {" "}
          <i className="fa-solid fa-graduation-cap"> MU Web-Mentor</i>
        </a>

        <nav className="navbar">
          <a href="#home">
            {" "}
            <i className="fas fa-angle-right"></i>home
          </a>
          <a href="#statistics">
            {" "}
            <i className="fas fa-angle-right"></i>Statistics
          </a>
          <a href="#about">
            {" "}
            <i className="fas fa-angle-right"></i>about
          </a>
          <a href="#schoolsofstudies">
            {" "}
            <i className="fas fa-angle-right"></i>Schools of Studies
          </a>
          <a href="#departments">
            {" "}
            <i className="fas fa-angle-right"></i>Departments
          </a>
          <a href="#programmes">
            {" "}
            <i className="fas fa-angle-right"></i>programmes
          </a>
          <a href="#achievements">
            {" "}
            <i className="fas fa-angle-right"></i>achievements
          </a>
          <a href="#contact">
            {" "}
            <i className="fas fa-angle-right"></i>contact
          </a>

          {/* <a href="#" id="chatButton">
            {" "}
            <i className="fas fa-angle-right"></i>mu chat bot
          </a> */}

          <div id="chatPopup" className="chat-popup">
            <div className="chat-header">
              <h2>Chat Bot</h2>
              <span id="closeChat" className="close">
                &times;
              </span>
            </div>
            <div className="chat-body">
              <div id="chatMessages" className="chat-messages"></div>
            </div>
            <div className="chat-footer">
              <input
                type="text"
                id="userInput"
                placeholder="Type a message..."
              />
              <button id="sendButton">Send</button>
            </div>
          </div>
        </nav>

        <div className="share">
          <a
            target="_blank"
            href="https://www.facebook.com/metropolitanuniversity/"
            className="fab fa-facebook"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/school/metropolitanuniversitysylhet/"
            className="fab fa-linkedin"
          ></a>
          <a
            target="_blank"
            href="https://www.instagram.com/metropolitanuniversity/?igsh=azNobDFrbGxrd2J6"
            className="fab fa-instagram"
          ></a>
          <a target="_blank" href="#" className="fab fa-twitter"></a>
          <a
            target="_blank"
            href="https://www.youtube.com/MetropolitanUniversityBangladesh"
            className="fab fa-youtube"
          ></a>
        </div>
        <p className="credit">
          created by<span> Moon-Prokrity-Meem</span> || all rights reserved!
        </p>
      </header>

      <section className="home" id="home">
        <div className="image">
          <img src={home4} alt="" />
        </div>

        <div className="content">
          <span>MU WEB MENTOR</span>
          <h3>
            education, not just a degree. A better learning future starts here,{" "}
            <a href="#schoolsofstudies">Get started.</a>
          </h3>
          <p> Metropolitan University, Bangladesh</p>

          <Link to={user?._id  ? RoutingList.adminNotice.index:  RoutingList.login.index} className="btn">
            {user?._id  ? "Go to Classroom" : "Login"}
          </Link>
        </div>
      </section>

      <section id="statistics">
        <div className="heading">
          <span>University Statistics at a Glance!</span>
          <h4>Top Ranked Private University in Bangladesh</h4>
        </div>

        <div className="info-container">
          <div className="box">
            <i className="fa-solid fa-trophy"></i>
            <div className="info">
              <h3>22+</h3>
              <p>Years of success</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-laptop-code"></i>
            <div className="info">
              <h3>5000+</h3>
              <p>Current Students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div className="info">
              <h3>3000+</h3>
              <p>Allumni</p>
            </div>
          </div>

          <div className="box">
            <i className="fa-solid fa-people-group"></i>
            <div className="info">
              <h3>200+</h3>
              <p>Faculty and Staff</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-grid">
          <div className="history">
            <div className="history-content">
              <h2>History</h2>
              <p>
                Toufique Rahman Chowdhury, a renowned banker and entrepreneur,
                and other educationists initiated the establishment of
                Metropolitan University in Bangladesh in 2003. The university
                aimed to provide quality tertiary education at an affordable
                cost, catering to the growing demand for skilled manpower in
                developing countries. The university began with 17 students in
                Business Administration and Computer Science & Engineering
                departments, offering both undergraduate and Master's degrees.
                Over the years, the university has grown to over 3500 students
                pursuing undergraduate and Master's degrees in various subjects,
                demonstrating the university's commitment to providing quality
                education at an affordable cost.
              </p>
            </div>
            <div className="history-image">
              <img src={home4} alt="" />
            </div>
          </div>

          <div className="about-item">
            <div className="image">
              <img src={chairman} alt="" />
            </div>
            <div className="content">
              <span>The Founder & Chairman</span>
              <h3>Dr. Toufique Rahman Chowdhury</h3>
            </div>
          </div>

          <div className="about-item">
            <div className="image">
              <img src={vc} alt="" />
            </div>
            <div className="content">
              <span>The Vice-Chancellor</span>
              <h3>Professor Dr. Mohammad Jahirul Hoque</h3>
            </div>
          </div>

          <div className="history">
            <div className="history-image">
              <img src={campus} alt="" />
            </div>

            <div className="history-content">
              <h2>Campus</h2>
              <p>
                Initially, the university started its operation in its city
                campus located at the heart of Sylhet city. With a space of
                50,000+ sft. the city campus at present houses six academic
                departments and eight undergraduate and Master’s programmes.
                However, in a bid to keep pace with the burgeoning numbers of
                students, the university’s permanent campus is being built on a
                land area of 8.5 acres. Situated outside the city, the permanent
                campus would be the most comprehensive and architecturally
                iconic campus in the region, and is expected to be operational
                by December 2018.
              </p>
            </div>
          </div>

          <div className="history">
            <div className="history-content">
              <h2>Vison & Mission</h2>
              <p>
                The university's vision is to become a globally recognized
                teaching and research institution, offering innovative
                education, knowledge creation, and community engagement. Its
                mission is to provide students with academic excellence in
                various subjects, focusing on moral values, ethics,
                self-respect, and patriotism, preparing them for academic,
                personal, and career goals.
              </p>
            </div>
            <div className="history-image">
              <img src={vision} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="schools" id="schoolsofstudies">
        <div className="heading">
          <span>Our University Has</span>
          <h3>Four Schools of Studies</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-gear"></i>
            <h3>SCHOOL OF SCIENCE & TECHNOLOGY </h3>
            <p>
              The School is a discipline devoted to the study and advancement of
              computational methods and data analysis techniques also provides
              computing resources for research.
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-toolbox"></i>
            <h3>SCHOOL OF BUSINESS & ECONOMICS</h3>
            <p>
              The School was started in the year 2003 with 49 Students with the
              objective of giving quality education and to enable the student
              community.
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-scale-balanced"></i>
            <h3>SCHOOL OF LAW</h3>
            <p>
              The School is focused on producing litigation specialists,
              corporate lawyers, mediation & arbitration experts, and
              professionals policy makers
            </p>
          </div>

          <div className="box">
            <i className="fa-solid fa-book"></i>
            <h3>SCHOOL OF HUMANITIES & SOCIAL SCIENCES</h3>
            <p>
              The School has been established to understand how societies
              function in local and global settings and learn about the forces
              and events shaping the world.
            </p>
          </div>
        </div>
      </section>

      <section className="schools" id="departments">
        <div className="heading">
          <h3>Departments</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-computer"></i>
            <h3>Computer science and Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-floppy-disk"></i>
            <h3>Software Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-robot"></i>
            <h3> Electrical & Electronic Engineering</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-business-time"></i>
            <h3>Business Administration</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-square-poll-vertical"></i>
            <h3> Economics</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-book-open-reader"></i>
            <h3>English</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-building-columns"></i>
            <h3> Law & Justice</h3>
          </div>

          <div className="box">
            <i className="fa-solid fa-newspaper"></i>
            <h3> Journalism and Media Studies (proposed) </h3>
          </div>
        </div>
      </section>

      <section className="programmes" id="programmes">
        <div className="heading">
          <h3>Programmes</h3>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="content">
              <h3>Honours Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>BSc. in Computer Science &
                  Engineering
                </p>
                <p>
                  <i className="fas fa-check"></i>BSc. in Software Engineering
                </p>
                <p>
                  <i className="fas fa-check"></i>BSc. in EEE
                </p>
                <p>
                  <i className="fas fa-check"></i>B.Sc. Engg. in ETE*
                </p>
                <p>
                  <i className="fas fa-check"></i>B.A. (Hons.) in English
                </p>
                <p>
                  <i className="fas fa-check"></i>BBA
                </p>
                <p>
                  <i className="fas fa-check"></i>BSS in Economics
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.B. (Hons.)
                </p>
              </div>
              <a
                target="_blank"
                href="https://metrouni.edu.bd/sites/admission/undergraduate"
              >
                See Details
              </a>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <h3>Masters Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>MBA (Regular)
                </p>
                <p>
                  <i className="fas fa-check"></i>MBA (General)
                </p>
                <p>
                  <i className="fas fa-check"></i>M.A. in English (Preliminary &
                  Final)
                </p>
                <p>
                  <i className="fas fa-check"></i>M.A. in English (Final)*
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.M. (1 Year)
                </p>
                <p>
                  <i className="fas fa-check"></i>LL.M. (2 Year)
                </p>
                <p>
                  <i className="fas fa-check"></i>MSc. in MIS
                </p>
                <p>
                  <i className="fas fa-check"></i>MSS in Economics
                </p>
              </div>
              <a
                target="_blank"
                href="https://metrouni.edu.bd/sites/admission/graduate"
              >
                See Details
              </a>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <h3>Short Programmes</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="list">
                <p>
                  <i className="fas fa-check"></i>Android Application
                  Development
                </p>
                <p>
                  <i className="fas fa-check"></i>Microcontroller Programming
                </p>
                <p>
                  <i className="fas fa-check"></i>Journalism and Media Studies
                </p>
              </div>
              <a
                target="_blank"
                href="https://metrouni.edu.bd/sites/admission/short-course"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="heading">
          <h3>Students achievements</h3>
        </div>

        <div className="achievements-container">
          <div className="box">
            <img src={adnan} alt="" />
            <div className="info">
              <h3>Nafiul Adnan Chowdhury</h3>
              <p>Site reliable engineer</p>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>

          <div className="box">
            <img src={emrul} alt="" />
            <div className="info">
              <h3>Emrul Chowdhury</h3>
              <p>Software developer engineer</p>
              <i className="fa-brands fa-amazon"></i>
            </div>
          </div>

          <div className="box">
            <img src={rafat} alt="" />
            <div className="info">
              <h3>Majharul Islam Rafat</h3>
              <p>Software engineer</p>
              <i>agoda</i>
            </div>
          </div>

          <div className="box">
            <img src={amanur} alt="" />
            <div className="info">
              <h3>Amanur Rahman</h3>
              <p>Software engineer</p>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>

          <div className="box">
            <img src={shuvo} alt="" />
            <div className="info">
              <h3>Foysol Ahmed Shuvo</h3>
              <p>Software engineer</p>
              <i>agoda</i>
            </div>
          </div>

          <div className="box">
            <img src={nintu} alt="" />
            <div className="info">
              <h3>Nintu Tarafder </h3>
              <p>Area manger of robotics operations</p>
              <i className="fa-brands fa-amazon"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="heading">
          <h3>contact</h3>
        </div>

        <div className="row">
          <div className="contact-info-container">
            <div className="box">
              <i className="fas fa-phone"></i>
              <div className="info">
                <h3>phone:</h3>
                <p>+88 01313 050044</p>
                <p>+88 01313 050066</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <h3>email:</h3>
                <p>info@metrouni.edu.bd</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-map"></i>
              <div className="info">
                <h3>address:</h3>
                <p>Bateshwar, Sylhet-3104, Bangladesh</p>
              </div>
            </div>

            <div className="box">
              <i className="fa-solid fa-globe"></i>
              <div className="info">
                <h3>Website:</h3>
                <p>metrouni.edu.bd</p>
              </div>
            </div>

            <div className="share">
              <a
                target="_blank"
                href="https://www.facebook.com/metropolitanuniversity/"
                className="fab fa-facebook"
              ></a>
              <a
                target="_blank"
                href="https://www.linkedin.com/school/metropolitanuniversitysylhet/"
                className="fab fa-linkedin"
              ></a>
              <a
                target="_blank"
                href="https://www.instagram.com/metropolitanuniversity/?igsh=azNobDFrbGxrd2J6"
                className="fab fa-instagram"
              ></a>
              <a target="_blank" href="#" className="fab fa-twitter"></a>
              <a
                target="_blank"
                href="https://www.youtube.com/MetropolitanUniversityBangladesh"
                className="fab fa-youtube"
              ></a>

              <p className="credit">
                {" "}
                © Metropolitan University 2024 || all rights reserved!
              </p>
            </div>
          </div>

          <div className="content">
            <span>MU WEB MENTOR</span>
            <h3>
              To get more details about{" "}
              <a target="_blank" href="https://metrouni.edu.bd/">
                {" "}
                <br />
                Metropolitan University, Bangladesh
              </a>
            </h3>

            <a target="_blank" href="https://metrouni.edu.bd/" className="btn">
              Visit
            </a>

            <h3>
              For admission details{" "}
              <a
                target="_blank"
                href="https://metrouni.edu.bd/sites/admission/online-admission-form"
              >
                {" "}
                <br />
                clicke here
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
