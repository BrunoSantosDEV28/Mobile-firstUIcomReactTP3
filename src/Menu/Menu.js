import React, { useState } from "react";
import "./styles.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`menu ${isOpen ? "open" : "closed"}`}>
      <div className="logo">Logo</div>
      <div className="toggle-button" onClick={toggleMenu}>
        {isOpen ? "▼" : "►"}
      </div>
      <ul className={`menu-items ${isOpen ? "visible" : "hidden"}`}>
        <li>Home</li>
        <li>Serviços</li>
        <li>Produtos</li>
        <li>Sobre nós</li>
        <li>Contatos</li>
      </ul>
    </nav>
  );
};

export default Menu;
