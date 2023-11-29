import React from "react";
import "./CallToAction.scss";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const CallToAction = () => {
  return (
    <div className="calltoaction">
      <div className="wrapper">
        <Link href="/">
          Sign up to drive <MdKeyboardArrowRight />
        </Link>

        <Link href="/">
          Sign up to drive <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
