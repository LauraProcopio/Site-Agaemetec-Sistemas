import React from 'react';

const About = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto max-w-6xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-800">
          Conheça <span className="text-gray-700">nossa Empresa</span>
        </h2>
        <p className="mt-4 text-gray-600">
          A Agamemtec é uma empresa especializada no desenvolvimento de soluções tecnológicas. Fundada em Campo Grande/MS em 2003, nossa missão é criar software personalizado para atender às necessidades de nossos clientes de maneira fácil, eficaz e simplificada.
        </p>
      </div>
      <div className="w-full p-4 lg:p-0 flex justify-center">
        <img src="/img/logo_agaemetec.png" alt="Logo Agamemtec" className="w-full max-w-sm h-auto object-contain" />
      </div>
    </div>
  </section>
);

export default About;


