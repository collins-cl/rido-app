/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Downloadapps.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const Downloadapps = () => {
  return (
    <div className="download">
      <div className="wrapper">
        <div className="title">It's easier in our apps</div>

        <div className="section">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="box">
              <div className="img"></div>

              <div className="desc">
                <p>Request rides in seconds</p>
                <span>Scan QR code to download app</span>
              </div>

              <MdKeyboardArrowRight className="icon" />
            </div>
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="box">
              <div className="img"></div>

              <div className="desc">
                <p>Register to be a driver</p>
                <span>Scan QR code to download app</span>
              </div>

              <MdKeyboardArrowRight className="icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloadapps;
