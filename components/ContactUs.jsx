import React from "react";
import NavBarScroll from "./NavBarScroll";

const ContactUs = () => {
  return (
    <>
      <NavBarScroll />
      <div className="contactus-area">
        <h3>Meet us on Github</h3>
        <ul className="list-unstyled">
          <li>
            <a href="https://github.com/anhtruong225" target="_blank">
              Anh the Cool
            </a>
          </li>
          <li>
            <a href="https://github.com/shavkat95" target="_blank">
              Shaffi Shavkat
            </a>
          </li>
          <li>
            <a href="https://github.com/CallMeMo29" target="_blank">
              Mo with the Flow
            </a>
          </li>
          <li>
            <a href="http://millionpainter.de/" target="_blank">
              Philly Phil
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactUs;
