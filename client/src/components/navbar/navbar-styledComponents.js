import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  color: #333;
  text-decoration: none; /* Remove default underline */

  &.active {
    background-color: #ddd;
    /* Styles for active links */
  }
`;

export { NavHeader, Logo, StyledNavLink };
