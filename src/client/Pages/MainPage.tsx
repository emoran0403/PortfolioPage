import * as React from "react";
import * as Types from "../../../Types";
import { ProjectArray } from "../../ProjectInfo";
import { useNavigate } from "react-router-dom";

const MainPage = (props: Types.MainPageProps) => {
  const nav = useNavigate();
  return (
    <div>
      <div>This is Main Page</div>
      <h1 className="text-center">Projects</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
      <div className="d-flex flex-wrap justify-content-center">
        {ProjectArray.map((project) => {
          return project.personalProject ? (
            <div className="card col-3 m-5 ">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.details}</p>
              </div>
              <ul className="list-group list-group-flush">
                {project.techStack.map((tech) => (
                  <li className="list-group-item">{tech}</li>
                ))}
              </ul>
              <div className="card-body">
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
          ) : (
            ""
          );
        })}
      </div>
      <h1 className="text-center">Labs</h1>

      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
      <div className="d-flex flex-wrap justify-content-center">
        {ProjectArray.map((project) => {
          return project.lab ? (
            <div className="card col-3 m-5 ">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.details}</p>
              </div>
              <ul className="list-group list-group-flush">
                {project.techStack.map((tech) => (
                  <li className="list-group-item">{tech}</li>
                ))}
              </ul>
              <div className="card-body">
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
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
