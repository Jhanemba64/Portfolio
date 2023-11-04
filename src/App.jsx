import data from "./data/data.json";
import "./App.css";
import Présentation from "./components/Présentation.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseOver = (p) => {
    setHoveredProject(p);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  return (
    <>
      <body>
        <h1 className="centered-header text-with-gradient">
          Designer Developer <br></br> Frontend
        </h1>
        <div className="présentation">
          <Présentation />
        </div>
        <Outlet />
        <div className="projetList">
          {data.map((p) => (
            <div
              key={p.id}
              className={`projectCard ${p === hoveredProject ? "hovered" : ""}`}
              // ${p === hoveredProject ? "hovered" : ""} est une expression conditionnelle.
              // Cela signifie que si p (l'élément en cours de la boucle)
              // est égal à hoveredProject (l'élément survolé par la souris),
              // alors la classe "hovered" sera ajoutée, sinon une chaîne vide sera ajoutée
              // (ce qui signifie qu'aucune classe supplémentaire ne sera ajoutée).
              onMouseOver={() => handleMouseOver(p)}
              onMouseOut={handleMouseOut}
              onClick={() => setSelectedProject(p)}
            >
              <img className="responsive" src={p.picture} alt={p} />
            </div>
          ))}
        </div>
        <div className="projectDetails">
          {selectedProject && (
            <div>
              <h2>
                {selectedProject.name} <br></br>
                <br></br>
                {selectedProject.description}
              </h2>
            </div>
          )}
        </div>
      </body>
    </>
  );
}

export default App;
