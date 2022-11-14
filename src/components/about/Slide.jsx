import { useState } from "react";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataAbout } from "../../data/slider";

export default function Slide({ slides }) {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;
  return (
    <div>
      <FontAwesomeIcon icon={faCircleLeft} size="xl" />
      <FontAwesomeIcon icon={faCircleRight} size="xl" />
      {dataAbout.map((data, index) => {
        return <p key={index}>{data.image}</p>;
      })}
      <div className="wrapper-interests">
        <div className="circle-left"></div>
        <Slide />
        <div className="about-interests">
          <div className="interests-item">
            <p className="animate-1">text</p>
          </div>
          <div className="interests-item">
          <p className="animate-2">text</p>
          </div>
          <div className="interests-item">
          <p className="animate-3">text</p>
          </div>
          <div className="interests-item">
          <p className="animate-4">text</p>
          </div>
          <div className="interests-item">
          <p className="animate-5">text</p>
          </div>
          <div className="interests-item">
          <p className="animate-6">text</p>
          </div>
        </div>
        <div className="circle-right"></div>
        </div>
    </div>
  );
}
