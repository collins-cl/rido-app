import React from "react";
import "./Marquee.scss";

const Marquee = () => {
  const data = [
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
    "Earn more with Rido",
  ];
  return (
    <div className="marquee">
      <div className="container">
        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>

        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>

        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>
      </div>

      <div className="container2">
        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>

        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>

        <div className="box">
          {data.map((el) => (
            // eslint-disable-next-line react/jsx-key
            <div className="item">{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
