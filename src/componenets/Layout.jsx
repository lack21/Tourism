import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/shared/logo.svg";
import hamburgerImage from "../assets/shared/icon-hamburger.svg";
import closeImage from "../assets/shared/icon-close.svg";
import { useState } from "react";

function Layout() {
  const [isLinksActive, setIsLinksActive] = useState(true);

  const ChangeLink = (e) => {
    document.querySelectorAll(".link").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  function ToggleLink() {
    setIsLinksActive(!isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Tourism">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <div className={`links ${isLinksActive ? "" : "active"}`}>
          <Link className="link active" to="/Tourism" onClick={ChangeLink}>
            00 HOME
          </Link>
          <Link className="link" to="destination" onClick={ChangeLink}>
            01 DESTINATION
          </Link>
          <Link className="link" to="crew" onClick={ChangeLink}>
            02 CREW
          </Link>
          <Link className="link" to="technology" onClick={ChangeLink}>
            03 TECHNOLOGY
          </Link>
        </div>
        <img
          src={isLinksActive ? hamburgerImage : closeImage}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLink}
        />
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
