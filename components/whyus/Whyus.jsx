import React from "react";
import "./Whyus.scss";
import Phone from "../../assets/phone.webp";
import Image from "next/image";
import { LuUserCheck } from "react-icons/lu";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbPigMoney } from "react-icons/tb";
import Link from "next/link";

const Whyus = () => {
  return (
    <div className="whyus">
      <div className="wrapper">
        <section className="phone">
          <div className="container">
            <Image
              src={Phone}
              fill
              style={{ objectFit: "cover" }}
              objectFit="cover"
              alt="an image showing rido interface"
            />
          </div>
        </section>

        <section className="details">
          <h3 className="head">Why choose Rido</h3>

          <div className="reasons">
            <div className="box">
              <div className="icon">
                <LuUserCheck className="fill" />
              </div>

              <div className="info">
                <h3>Your safety is our priority</h3>

                <p>
                  With geolocated rides, verified drivers and a safety button
                  available to take care of you during your ride.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <AiFillSafetyCertificate className="fill" />
              </div>

              <div className="info">
                <h3>The highest quality standards</h3>

                <p>
                  Professional drivers, modern vehicles and the ability to
                  control your journey preferences via the app. At last, you’ll
                  travel as you deserve to.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <TbPigMoney className="fill" />
              </div>

              <div className="info">
                <h3>Clear and transparent prices</h3>

                <p>
                  We always show you the price before you order the journey so
                  that you can decide how best to get there. No surprises.
                </p>
              </div>
            </div>
          </div>

          <div className="c-t-a">
            <Link href="/">Ride with Rido</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Whyus;
