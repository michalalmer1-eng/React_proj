import "../css/Sidebar.css"; // קובץ עיצוב נפרד
function Sidebar({ onSelect }) {
  return (
    <aside className="sidebar">
      <button onClick={() => onSelect("home")}>🏠 Home</button>
      <button onClick={() => onSelect("stats")}>📊 Stats</button>
      <button onClick={() => onSelect("about")}>ℹ️ About</button>
    </aside>
  );
}

export default Sidebar;
