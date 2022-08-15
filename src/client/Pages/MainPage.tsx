import * as React from "react";
import * as Types from "../../../Types";
import { ProjectArray } from "../../ProjectInfo";
import { useNavigate } from "react-router-dom";
import { SiMysql, SiExpress, SiMongodb, SiJavascript, SiSelenium, SiReact, SiNodedotjs, SiHtml5, SiCss3 } from "react-icons/si";

const MainPage = (props: Types.MainPageProps) => {
  const nav = useNavigate();
  // <SiReact size="2rem" />
  const projectsJSX = () => {
    return (
      <div>
        <h1 className="text-center">Projects</h1>
        <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
        <div className="d-flex flex-wrap justify-content-center">
          {ProjectArray.map((project) => {
            return project.personalProject ? (
              <div key={`project-${project.title}`} className="card col-6 m-5 ">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title text-center">{project.title}</h3>
                  <p className="card-text">{project.details}</p>
                </div>
                <div className="card-body">
                  {project.techStack.sort().map((tech) => (
                    <span key={`tech-stack-item-${tech}`} className="mx-2 badge bg-light text-dark border border-1 border-dark">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        nav(`${project.pageURL}`);
                      }}
                    >
                      Details
                    </button>
                    <a className="btn btn-primary" href={project.appURL} target="_blank">
                      Project Site
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    );
  };
  const labsJSX = () => {
    return (
      <div>
        <h1 className="text-center">Labs</h1>
        <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
        <div className="d-flex flex-wrap justify-content-center">
          {ProjectArray.map((project) => {
            return project.lab ? (
              <div key={`project-${project.title}`} className="card col-6 m-5 ">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title text-center">{project.title}</h3>
                  <p className="card-text">{project.details}</p>
                </div>
                <div className="card-body">
                  {project.techStack.sort().map((tech) => (
                    <span key={`tech-stack-item-${tech}`} className="mx-2 badge bg-light text-dark border border-1 border-dark">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        nav(`${project.pageURL}`);
                      }}
                    >
                      Details
                    </button>
                    <a className="btn btn-primary" href={project.appURL} target="_blank">
                      Project Site
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="my-4">
        {projectsJSX()}
        {labsJSX()}
      </div>
    </div>
  );
};

export default MainPage;
