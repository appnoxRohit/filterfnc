// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <div className="flexfixed top-0 w-full bg-white z-50 h-20  border-2 border-black">
        <ul className="flex flex-row">
          <li className="text-lg pl-3"><strong>Logo</strong></li>
          <div className="flex flex-row text-lg justify-end w-[95vw] gap-5 ">
          <li>
          <NavLink to="/">Register</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
          </div>
      </ul>
        </div>
      
    </nav>
  );
};

export default NavBar;