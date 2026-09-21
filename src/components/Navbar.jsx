import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Certificates", "certificates"],
    ["Contact", "contact"],
  ];

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="glass-navbar">
      <div className="navbar-container">
        <button
          className="logo"
          onClick={() => navigate("home")}
        >
          P<span className="span1">T</span><span>N</span>
        </button>

        <nav className={open ? "nav-links active" : "nav-links"}>
          {links.map(([name, id]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
            >
              {name}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <a
            href="https://github.com/Tshewangtjp"
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub ↗
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}