import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { GlobleContext } from "../context";

export default function Navbar() {
  const { searchParams, setSetParams,handleSubmit } = useContext(GlobleContext);
  

  return (
    <nav className="flex justify-between item-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          className="text-black hover:text-gray-700 duration-300"
          to={"/"}
        >
          Food Recipes
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={searchParams}
          onChange={(event) => setSetParams(event.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          type="text"
          placeholder="Enter items..."
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300 font-medium "
            to={"/"}
          >
            <Button color="error" variant="contained">
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-black hover:text-gray-700 duration-300 font-medium "
            to={"/favourits"}
          >
            <Button color="error" variant="contained">
              Favourits
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
