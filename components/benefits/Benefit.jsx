"use client";

import React, { useState } from "react";
import "./Benefit.scss";
import Image from "next/image";
import Link from "next/link";
import { TfiTimer } from "react-icons/tfi";
import { MdAttachMoney } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPersonBiking } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import DriverImage from "../../assets/driver-img.jpg";
import RiderImage from "../../assets/rider-img.jpg";

const Benefit = () => {
  const [selected, setSelected] = useState("driver");

  return (
    <div className="benefits">
      <div className="wrapper">
        <div className="title">Earn more with Rido</div>

        <div className="options">
          <div className={`option-a`} onClick={() => setSelected("driver")}>
            As a driver
          </div>
          <div className={`option-a`} onClick={() => setSelected("rider")}>
            As a rider
          </div>
        </div>

        <Actions selected={selected} />
      </div>
    </div>
  );
};

const Actions = ({ selected }) => {
  switch (selected) {
    case "driver":
      return (
        <div className="driver-section">
          <div className="wrapper">
            <div className="image">
              <Image src={DriverImage} fill alt="image of driver" />
            </div>

            <div className="description">
              <div className="head">Drive with Rido</div>

              <div className="desc-ul">
                <div className="list-item">
                  <div className="icons">
                    <TfiTimer className="icon" />
                  </div>

                  <div className="li">
                    <span>Flexible working hours</span>
                    <p>
                      You can decide when, and how much time you want to drive.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icons">
                    <MdAttachMoney className="icon" />
                  </div>

                  <div className="li">
                    <span>Earnings</span>
                    <p>Make money while you do what you love.</p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icons">
                    <BsLightning className="icon" />
                  </div>

                  <div className="li">
                    <span>Get paid instantly</span>
                    <p>
                      You’ll receive your earnings at the end of each day — no
                      need to wait around for payday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="c-t-a">
                <Link href="/">Apply to driv</Link>
              </div>
            </div>
          </div>
        </div>
      );

    case "rider":
      return (
        <div className="driver-section">
          <div className="wrapper  rider">
            <div className="description">
              <div className="head">Ride with Rido</div>

              <div className="desc-ul">
                <div className="list-item">
                  <div className="icons">
                    <FaPersonBiking className="icon" />
                  </div>

                  <div className="li">
                    <span>Get a reliable ride in minutes</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel praesentium fugiat optio ducimus vero animi earum
                      molestiae enim hic sit necessitatibus reiciendis nulla
                      perspiciatis?.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icons">
                    <FaRegCalendarCheck className="icon" />
                  </div>

                  <div className="li">
                    <span>Schedule your ride in advance</span>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      laborum et unde nam, quam numquam facilis quis beatae eum
                      adipisci nulla odio a veniam debitis.
                    </p>
                  </div>
                </div>

                <div className="list-item">
                  <div className="icons">
                    <MdOutlineSecurity className="icon" />
                  </div>

                  <div className="li">
                    <span>24/7 Security</span>
                    <p>
                      We are proud to attend adn respond to your complaints as
                      swiftly as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="c-t-a">
                <Link href="/">Get a ride</Link>
              </div>
            </div>

            <div className="image">
              <Image src={RiderImage} fill alt="image of driver" />
            </div>
          </div>
        </div>
      );
  }
};

export default Benefit;
