import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header-container">
      <h2 className="header-logo">Consultoria ISP</h2>

      <nav className="header-nav">
        <Link to="/">Início</Link>
      </nav>
    </header>
  );
}
