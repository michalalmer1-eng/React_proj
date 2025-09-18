import "../css/Footer.css"; // קובץ עיצוב נפרד
function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
      </div>
      <p>Made with ❤️</p>
    </footer>
  );
}

export default Footer;
