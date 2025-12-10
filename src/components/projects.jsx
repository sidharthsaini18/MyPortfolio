import React from "react";
import projectData from "./projects.json";
import Card from "./card";

const Projects = () => {
  return (
    <div className="area py-3">
      <h3 className="fs-3 fw-1 mx-3 px-2">Projects</h3>
      <div className="line mx-4"></div>
      <div className=" cardd d-lg-flex justify-content-evenly ">
        {projectData.map((pData) => (
          <Card
            id={pData.id}
            img={pData.image}
            pName={pData.projectName}
            tech={pData.tech}
            sCode={pData.soureCode}
            live={pData.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
