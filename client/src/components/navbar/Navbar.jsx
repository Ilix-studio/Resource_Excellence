// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHeader, Logo, StyledNavLink } from "./navbar-styledComponents";
import { AiOutlineAlignRight } from "react-icons/ai";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const handleMenuTogglar = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const navItems = [
    {
      path: "/",
      title: "Jobs",
    },
    {
      path: "/",
      title: "Jobs",
    },
    {
      path: "/",
      title: "Jobs",
    },
  ];

  return (
    <>
      <NavHeader>
        <nav>
          <Logo>
            <Link to="/"> Resource Excellence</Link>
          </Logo>
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path}>
                <StyledNavLink to={path}>{title}</StyledNavLink>
              </li>
            ))}
          </ul>
          <div>
            <Link to="/login">Login </Link>
            <Link to="/signup">Sign Up </Link>
          </div>
          <div>
            <button>
              <AiOutlineAlignRight />
            </button>
          </div>
        </nav>
      </NavHeader>
    </>
  );
};

export default Navbar;
