// import { div } from "prelude-ls";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <link to="/" className="navbar-logo"></link>
//         </div>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu-active" : "nav-menu"}>
//           <li className="'nav-item">
//             <Link to="/" className="nav-link" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className="'nav-item">
//             <Link to="/Services" className="nav-link" onClick={closeMobileMenu}>
//               About Me
//             </Link>
//           </li>
//           <li className="'nav-item">
//             <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
//               Portfolio
//             </Link>
//           </li>
//           <li className="'nav-item">
//             <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//           <li className="'nav-item">
//             <Link to="/Products" className="nav-link" onClick={closeMobileMenu}>
//               Resume
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }
// export default Navbar;

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
