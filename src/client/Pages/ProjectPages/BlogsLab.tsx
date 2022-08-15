import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../../../Types";
import { BlogsLabDetails } from "../../../ProjectInfo";

const BlogsLab = (props: Types.BlogsLabProps) => {
  const nav = useNavigate();

  return (
    <div className="my-4">
      <h1 className="text-center">Blogs Lab</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-sm my-2"
          onClick={() => {
            nav(`/`);
          }}
        >
          Main page
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3>Overview</h3>
              <p>text here</p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Features</h3>
              <p>text here</p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3>Challenges</h3>
              <p>text here</p>
            </div>
            <hr></hr>

            <div className="card-body">
              {BlogsLabDetails.techStack.sort().map((tech) => (
                <span key={`tech-stack-item-${tech}`} className="mx-2 badge bg-light text-dark border border-1 border-dark">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsLab;
