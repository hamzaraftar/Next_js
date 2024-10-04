import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className="flex justify-between ">
      <h3 className="text-3xl font-medium uppercase">blog app</h3>
      <ul className="flex gap-x-10 ">
        <Link to={"/"}>
          <li>
            <Button variant="contained">Home</Button>
          </li>
        </Link>
        <Link to={"/add-blog"}>
          <li>
          <Button variant="contained">Add Blog</Button>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
