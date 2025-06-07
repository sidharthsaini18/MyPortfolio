import React from "react";
import "./mydetails.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaAddressCard,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

const Mydetails = () => {
  return (
    <>
      <h3 className="area-heading ">About me</h3>
      <div className="line  m-2"> </div>
      <p className="m-4 fst-italic fs-6">
        👋 Hey there! I'm Sidharth, a passionate Frontend Developer specializing
        in building user-friendly and visually appealing web applications. I
        have completed my BCA (Bachelor of Computer Applications) and honed my
        skills in modern frontend technologies.
        <p />
        <p>
          💡 My expertise includes React, HTML, CSS, JavaScript, and Vite,
          ensuring optimized and efficient project setups. I love crafting
          interactive, scalable, and performance-driven UI designs, making sure
          users have a seamless experience.
        </p>
        <p>
          🎨 I'm also deeply interested in creative design, exploring animations
          and UI effects to make applications engaging. I focus on responsive
          layouts, SEO optimization, and delivering structured documentation for
          clarity.
        </p>
      </p>
      <h3>My Skills</h3>
      <div className="line  m-2"> </div>
      <div className="row m-4   justify-content-center gap-3">
        <div className=" border border-secondary shadow rounded col-md-5">
          <FaHtml5 size={60} className="my-3" />

          <span className="text-warning fs-4 fw-4">HTML</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>

        <div className=" border border-secondary shadow rounded col-md-5">
          <FaCss3Alt size={60} className="my-3" />

          <span className="text-warning fs-4 fw-4">CSS</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>

        <div className=" border border-secondary shadow rounded col-md-5">
          <TbBrandJavascript size={60} className="my-3" />

          <span className="text-warning fs-4 fw-4">JavaScript</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>

        <div className=" border border-secondary shadow rounded col-md-5">
          <FaReact size={60} className="my-3" />
          {"   "}
          <span className="text-warning fs-4 fw-4">REACT JS</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>
        <div className=" border border-secondary shadow rounded col-md-5">
          <FaGithub size={60} className="my-3" />
          {"   "}
          <span className="text-warning fs-4 fw-4">GIT/GITHUB</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>
        <div className=" border border-secondary shadow rounded col-md-5">
          <FaAddressCard size={60} className="my-3" />
          {"  "}
          <span className="text-warning fs-4 fw-4">UI/UX</span>
          <p className="fs-6  w-100">
            {"  "}
            The foundation of web structure, utilizing semantic elements for
            accessibility and SEO.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mydetails;
