import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-800">AGAMEMTEC SISTEMAS</h1>
        
        {/* Menu Hambúrguer para telas pequenas */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navegação */}
        <nav>
          <ul className={`flex gap-4 md:flex ${isMenuOpen ? 'flex-col' : 'hidden'} md:block`}>
            <li className="hover:text-blue-800">
              <a href="#services">Nossos Serviços</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#about">Sobre</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#tech">Tecnologias</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#project">Projetos</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#contact">Nos Contate</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
