/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import "./Downloadapps.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";

const Downloadapps = () => {
  const [selected, setSelected] = useState("rider");
  return (
    <div className="download">
      <div className="wrapper">
        <div className="title">It's easier in our apps</div>

        <div className="container">
          <div className="options">
            <p onClick={() => setSelected("rider")}>Rider</p>
            <p onClick={() => setSelected("driver")}>Driver</p>
          </div>

          <div className="apps-container">
            <SelectedApp selected={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedApp = ({ selected }) => {
  switch (selected) {
    case "rider":
      return (
        <div className="box1">
          <section>
            <p>Request in seconds, ride in minutes.</p>
            <span>
              Scan the QR code with your phone camera to download the Rido app.
              Available for iOS and Android devices.
            </span>
          </section>

          <BsQrCode className="icon" />
        </div>
      );

    case "driver":
      return (
        <div className="box1">
          <section>
            <p>Set your own hours. Earn on your own terms.</p>
            <span>
              Scan the QR code with your phone camera to download the Rido app.
              Available for iOS and Android devices.
            </span>
          </section>

          <BsQrCode className="icon" />
        </div>
      );
  }
};

export default Downloadapps;
