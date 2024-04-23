import React from "react";
import "./Newsletter.css";
import { AiOutlineSend } from "react-icons/ai";
import newsletterIllustration from "../../assets/get-newsletter-updates.svg";

const Newsletter = () => {
  return (
    <section id="contacts" className="newscontainer">
      <div className="newswrapper">
        <h4 className="newssubtitle">Get our latest offers</h4>
        <h2 className="newstitle">Newsletter</h2>
        <div className="inputContainer">
          <input type="text" placeholder="Enter email..." />
          <AiOutlineSend className="sendIcon" />
        </div>
        <img src={newsletterIllustration} alt="" className="newsillustration" />
      </div>
    </section>
  );
};

export default Newsletter;
