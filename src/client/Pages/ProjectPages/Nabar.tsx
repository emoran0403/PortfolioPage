import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Types from "../../../../Types";
import { ProjectArray } from "../../../ProjectInfo";

const Navbar = (props: Types.NavbarProps) => {
  const loc = useLocation();
  const nav = useNavigate();
  const pageURLs = ProjectArray.map((proj) => ({ URL: proj.pageURL, title: proj.title }));

  return (
    <div className="d-flex mt-4 justify-content-center ">
      <div className="col-1 d-flex justify-content-center">
        <button
          className={`btn w-100 mx-1 btn-${loc.pathname != "/" ? "primary" : "warning"}`}
          onClick={() => {
            nav(`/`);
          }}
        >
          Home
        </button>
      </div>
      {pageURLs.map((link) => (
        <div className="col-1 d-flex justify-content-center align-items-center">
          <Link to={link.URL} className={`btn w-100 mx-1 btn-${loc.pathname != link.URL ? "primary" : "warning"}`}>
            {link.title}
          </Link>
        </div>
      ))}
      <div className="col-1 d-flex justify-content-center">
        <button
          className={`btn w-100 mx-1 btn-${loc.pathname != "/resume" ? "primary" : "warning"}`}
          onClick={() => {
            nav(`/resume`);
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
