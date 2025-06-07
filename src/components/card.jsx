import React from "react";

import "./card.css";

const Card = ({ id, img, pName, tech, sCode, live }) => {
  return (
    <div className=" card w-sm-100 border border-secondary d-flex flex-column align-items-center m-3">
      <img className=" pimg m-2" src={img} alt="img" />
      <h4 className="text-white fs-5">{pName}</h4>
      <p className="tech">{tech}</p>

      <a href={sCode} className="btn btn-warning m-2 ">
        Soure Code
      </a>

      <a href={live} className="btn btn-success m-2 ">
        Live View
      </a>
    </div>
  );
};

export default Card;
