import React from "react";
import "./sidebar.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Mydetails from "./mydetails.jsx";
import Resume from "./resume.jsx";
import Projects from "./projects.jsx";

const Sidebar = () => {
  return (
    <div className="row">
      <div
        className="sidebar   mx-md-5 my-2 rounded col-md-3 d-flex flex-column align-items-center "
        // style={{ top: "60px", height: "calc(115vh - 60px)", overflowY: "auto" }}
      >
        <img className=" myimg m-2" src="/assets/sidh.jpg" alt="image" />

        <h4 className="text-white fs-2 f">Sidharth</h4>
        <p className=" job p-1 fw-lighter  border rounded">Web developer</p>
        <div className=" border border-secondary w-75 m-1"></div>
        <div className="details">
          <span className="fw-lighter text-secondary ">Phone: </span>
          <div className="fw-lighter opacity-75">+91 9816637462</div>
          <span className="fw-lighter text-secondary">Email: </span>
          <div className="fw-lighter opacity-75">
            <a
              className="text-white"
              href="mailto:workwithsidharth18@gmail.com "
            >
              workwithsidharth@gmail.com
            </a>
          </div>
          <span className="fw-lighter text-secondary">DOB: </span>
          <div className="fw-lighter opacity-75">18/12/2004</div>
          <span className="fw-lighter text-secondary">Location </span>
          <div className="fw-lighter opacity-75">Una,Himachal Pradesh</div>
          <div className="social media m-2 px-5">
            <a
              className="text-white m-2 logo"
              href="https://www.instagram.com/"
            >
              <FaInstagram size={30} />
            </a>
            <a
              className="text-white m-2 logo"
              href="https://www.linkedin.com/in/sidharth-saini-448688290/"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              className="text-white m-2 logo"
              href="https://github.com/sidharthsaini18"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className=" area rounded my-1  col-md-7 ">
        <Mydetails />
        <Resume />
        <Projects />
      </div>
    </div>
  );
};

export default Sidebar;
