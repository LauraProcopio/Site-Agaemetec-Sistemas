import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Footer from "./components/Footer";
import EmpresaPublica from "./pages/EmpresaPublica";
import EmpresaPrivada from "./pages/EmpresaPrivada";
import Produtos from "./components/Produtos"; // Componente com os botões
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página inicial com todos os componentes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Produtos /> {/* Botões para acessar as páginas */}
              <About />
              <Tech />
              <Project />
              <Footer />
            </>
          }
        />
        <Route path="/empresa-publica" element={<EmpresaPublica />} />
        <Route path="/empresa-privada" element={<EmpresaPrivada />} />
      </Routes>
    </Router>
  );
}

export default App;
