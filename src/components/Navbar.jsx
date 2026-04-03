function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-dot" />
          Ceļš uz sporta nākotni
        </div>

        <div className="nav-links">
          <a href="#problem">Problēma</a>
          <a href="#project">Projekts</a>
          <a href="#team">Komanda</a>
          <a href="#contact">Kontakti</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
