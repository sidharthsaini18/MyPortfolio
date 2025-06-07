import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-primary text-white bg-black w-100 container  ">
      <h2 className="">Portfilio</h2>
      <ul className=" ul d-md-flex d-none  ">
        <li>
          <a
            className="btn btn-outline-secondary "
            href="mailto:workwithsidharth18@gmail.com "
          >
            E-mail
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline-secondary "
            href="https://drive.google.com/file/d/1Siq2cFOKMZX4PVDhEJOLnt2T5bzQ3wow/view?usp=drivesdk"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline-secondary "
            href="https://www.linkedin.com/in/sidharth-saini-448688290/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline-secondary "
            href="https://github.com/sidharthsaini18"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
