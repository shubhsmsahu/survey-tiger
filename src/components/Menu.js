import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="my-3">
      <NavLink to="/create">
        <button className="btn btn-danger m-1">Create Survey</button>
      </NavLink>
      <NavLink to="/published">
        <button className="btn btn-danger m-1">Take Survey</button>
      </NavLink>
    </div>
  );
};

export default Menu;
