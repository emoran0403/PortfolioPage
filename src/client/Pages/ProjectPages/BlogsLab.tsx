import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../../../Types";

const BlogsLab = (props: Types.BlogsLabProps) => {
  const nav = useNavigate();

  return (
    <div>
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

      <div>
        <div>
          <h3>Overview</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Challenges</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Tech Stack</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Features</h3>
          <p>text here</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsLab;
