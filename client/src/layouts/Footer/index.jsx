import React from "react";
import { Helmet } from "react-helmet";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import { Input, Space } from "antd";
const { Search } = Input;

import "./index.scss";
const Footer = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ADD PAGE</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="left-footer">
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Neque facere laudantium magnam voluptatum autem.Amet aliquid
                nesciunt veritatis aliquam.
              </p>
            </div>
            <div className="middle-footer">
              <h1>FEATURES</h1>
              <nav>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right-footer">
              <h1 className="some">SOME PARAGRAPH</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat nostrum libero iusto dolorum vero atque aliquid.
              </p>
              <h1>SUBSCRIBE TO NEWSLETTER</h1>

              <Search
                placeholder="Enter Email"
                allowClear
                enterButton="Subscribe"
                size="large"
                onSearch={onSearch}
              />
              <h1 className="followus">FOLLOW US</h1>
              <div className="iconssocial">
                <CiFacebook />
                <CiTwitter />
                <CiInstagram />
                <CiLinkedin />
              </div>
            </div>
          </div>
          <hr />
          <p className="lastone">
            Copyright ©2024 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
