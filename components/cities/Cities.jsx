import React from "react";
import "./Cities.scss";
import Link from "next/link";

const Cities = () => {
  return (
    <div className="cities">
      <div className="wrapper">
        <div className="title">Rido in your city</div>

        <p>
          Rido is currently available in only two states at the moment and would
          be fully expanded in due course.
        </p>

        <div className="c-t-a">
          <Link href="/">Learn more about Rido</Link>
        </div>
      </div>
    </div>
  );
};

export default Cities;
