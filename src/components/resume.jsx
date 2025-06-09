import React from "react";
import { GiBookshelf, GiAchievement } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
const Resume = () => {
  return (
    <>
      <div className=" area rounded py-2 my-2 w-100 col-md-7 ">
        <h4 className="mx-3">Resume</h4>
        <div className="line mx-3"></div>
        <div className="m-2  d-flex flex-column justify-content-start  align-items-start">
          <div>
            <GiBookshelf size={30} className="m-3" />
            <span className="fs-4 fw-4 my-2"> ACADEMIC DETAILS:</span>
          </div>
          <h5 className="text-bold fw-2  ">
            {" "}
            <PiStudentFill size={35} />
            BACHELOR OF COMPUTER APPLICATIONS (BCA):{"  "}
            <mark className="bg-success text-white">2022-2025</mark>
          </h5>
          <p className=" mx-4 my-2 fs-6 ">
            Unversity : Himachal Pradesh Unversity,Shimla
          </p>
          <p className=" mx-4 my-2 fs-6 ">Current CGPA : 7.7</p>

          <h5 className="text-bold fw-2  ">
            {" "}
            <PiStudentFill size={35} className="" />
            INTERMEDIATE (12TH) :{"  "}
            <mark className="bg-success text-white">2020-2022</mark>
          </h5>
          <p className=" mx-5 my-1 fs-6 ">Stream : PCM</p>
          <p className=" mx-5 my-1 fs-6 ">Percentage : 78%</p>

          <h5 className="text-bold fw-2  ">
            {" "}
            <PiStudentFill size={35} className="" />
            MATRIC (10TH) :{"  "}
            <mark className="bg-success text-white">2019-2020</mark>
          </h5>
          <p className=" mx-5 my-1 fs-6 ">Stream : PCM</p>
          <p className=" mx-5 my-1 fs-6 ">Percentage : 78%</p>
        </div>
        <div>
          <GiAchievement size={38} />
          <span className=" fs-4"> ACHIEVEMENTS</span>
        </div>
        <div className="line mx-5 "></div>
        <ul className="m-3">
          <li>Selected as group leader in Web Weavers Contest.</li>
          <li>Got selected in PM Yashavi scholarship during Graduation.</li>
          <li>
            Got Second prize in Digital Poster Making Contest in our college.
          </li>
        </ul>

        <div className="d-flex w-100  justify-content-center">
          <a
            href="https://drive.google.com/file/d/1WNxgIOXOTf39bPSi9uw_QPKVPEpCVeXi/view?usp=sharing"
            className="btn btn-outline-warning position-relative top-50 left-50 my-3"
          >
            View Full Resume!
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
