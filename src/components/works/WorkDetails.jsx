import { useParams } from "react-router-dom";
import { works } from "../../data/works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function WorkDetails() {
  const { id } = useParams();
  const work = works.find((work) => work.id === id);

  return (
    <div className="work-wrapper">
      <div className="work-screen">
        <div className="work-details">
          <div className="work-image">
            <img src={work.img} alt={work.title} />
          </div>
          <div className="work-describe">
            <div className="work-title">
              <div className="work-header">
                <h1>{work.title}</h1>
                <p>{work.describe}</p>
              </div>
              <div className="technology">
                <h3>Technologies used :</h3>
                {work.technology.map((technology, index) => {
                  return (
                    <img key={index} src={technology} alt={technology}></img>
                  );
                })}
                {work.framework &&
                <>
                  <h3 className="framework">Framework :</h3>
                  <img src={work.framework} alt={work.framework} />
                </>
                }
              </div>
              <a
                href={work.link}
                key={work.title}
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <FontAwesomeIcon icon={faShareFromSquare} className="view-site" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="base-screen"></div>
    </div>
  );
}
