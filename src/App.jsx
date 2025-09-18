import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";
import Grandfather from "./components/Grandfather.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/Stats" element={<Grandfather />} />
            {/* כאן אפשר להוסיף עוד דפים */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
