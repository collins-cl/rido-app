import React from "react";
import "./hero.scss";
import Image from "next/image";
import Google from "../../assets/playstore.png";
import HeroImage from "../../assets/home-hero.png";
import Apple from "../../assets/appstore.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <section className="left-details">
          <h2>
            Ride the <span>Revolution:</span> <br />
            Your Journey, <span>Your Way!</span>
          </h2>

          <p>
            Step into a world where every ride is an experience, not just a
            destination. Welcome to <strong>Rido</strong>, where convenience
            meets class, and every journey becomes a seamless adventure.
          </p>

          <div className="learn-button">
            <Link href="/" className="link">Learn more about Rido</Link>{" "}
            <p>
              <Link href="/">Proceed to download apps</Link>
            </p>
          </div>

          {/* <div className="download-options">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="google">
                <Image alt="" src={Google} className="image" />

                <p>
                  GET IT ON <br /> <span>Google Play</span>
                </p>
              </div>
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="google">
                <Image alt="" src={Apple} className="image" />

                <p>
                  Download on the
                  <br /> <span>Appstore</span>
                </p>
              </div>
            </a>
          </div> */}
        </section>

        <section className="right-image">
          <Image
            src={HeroImage}
            fill
            style={{ objectFit: "cover" }}
            alt="hero image showing a car and a map"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
