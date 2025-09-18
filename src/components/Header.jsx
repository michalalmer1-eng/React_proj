import "../css/Header.css"; // הקובץ שהבאת

function Header() {
  return (
    <header className="header">
      <h1>Mood Selector</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Stats</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
