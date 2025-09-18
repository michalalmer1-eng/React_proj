import "../css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">🏠 Home</Link>
      <Link to="/Stats">📊 Stats</Link>
      <Link to="/about">ℹ️ About</Link>
    </aside>
  );
}

export default Sidebar;
