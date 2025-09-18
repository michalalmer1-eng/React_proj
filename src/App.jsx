import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="content">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
