import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegação com React Router

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-3">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12 flex justify-between items-center">
        
        {/* Link para a página inicial */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          AGAMEMTEC SISTEMAS
        </Link>
        
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
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4">
          <li className="hover:text-blue-800">
             <Link to="/">Home</Link> 
            </li>
            <li className="hover:text-blue-800">
              <a href='#services'>Nossos Serviços</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#about">Sobre</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#technologies">Tecnologias</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#projects">Projetos</a>
            </li>
            <li className="hover:text-blue-800">
              <a href="#produtos">Produtos</a>
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

