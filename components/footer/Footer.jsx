import React from "react";
import "./Footer.scss";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="logo">
          <Link href="/">Rido.</Link>
        </div>

        <div className="footer-contents">
          <section>
            <h3>Company</h3>

            <div className="links">
              <Link href="/">About us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Investors</Link>
            </div>
          </section>

          <section>
            <h3>Products</h3>

            <div className="links">
              <Link href="/">Ride with us</Link>
              <Link href="/">Drive with us</Link>
            </div>
          </section>

          <section>
            <h3>Support</h3>

            <div className="links">
              <Link href="/">Terms and conditions</Link>
              <Link href="/">Help Center</Link>
              <Link href="/">Contact us</Link>
            </div>
          </section>

          <div className="country-lang-container">
            <div className="country">Nigeria</div>
            <div className="lang">
              English <TbWorld />
            </div>
          </div>
        </div>

        <div className="socials-app-dir">
          <div className="socials">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </div>

          <div className="app-dir">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Get Driver Rido app
            </a>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Get Rider Rido app
            </a>
          </div>
        </div>

        <div className="terms-c">
          <div className="terms">© 2023 Rido Technologies</div>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
