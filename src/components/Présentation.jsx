import "./Presentation.css";
import { NavLink } from "react-router-dom";

import oclock from "/oclock.png";
import courrier from "/courrier.png";
import github from "/github.png";
import linkedin from "/linkedin.png";

function Presentation() {
  return (
    <div className="presentation-container">
      <h2>Bienvenue</h2>
      <div className="text-container">
        <div className="perso">
          <p>
            Bonjour, je m&apos;appel Pierrick Onchalo et je suis développeur
            front-end.<br></br>
            <br></br>Je suis quelqu&apos;un de passioné qui aime mettre ses
            capacités à contribution de projets innovants. J&apos;ai des
            compétences en différents langages de programmation, en Design,
            ainsi qu&apos;en bases et en manipulation de données.
            <br></br>
            <br></br>
            Vous pouvez retrouver ci-dessous différents projets auquels
            j&apos;ai participé.<br></br> N&apos;hésitez pas à me contacter et à
            consulter les liens ci-dessous si vous désirez en savoir plus.
          </p>
        </div>
        <img src={oclock} />
      </div>
      <div className="image-container">
        <div className="icones">
          <a href="mailto:votreadresse@mail.fr">
            <img src={courrier} className="small-logo" />
          </a>
          <a href="https://github.com/Jhanemba64">
            <img src={github} className="small-logo" />
          </a>
          <a href="https://www.linkedin.com/in/pierrick-onchalo-b5911b1a2/">
            <img src={linkedin} className="small-logo" />
          </a>
        </div>
        <div className="lienS">
          <NavLink to="/Liens">Liens</NavLink>

          <NavLink to="/Liens2">Liens2</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
