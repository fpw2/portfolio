import { Link } from "react-router-dom";

export default function Work({ work }) {


  return (
      <li key={work.title} className={`card-work work-${work.id}`}>
        <Link to={"/works/" + work.id}>
          <div className="card-image">
            <img src={work.img} alt={work.title} />
          </div>
        </Link>
      </li>
  );
}

