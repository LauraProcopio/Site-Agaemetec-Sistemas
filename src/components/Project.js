import React from "react";

const Project = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-800">
        Nossos <span className="text-gray-700">Projetos</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
        <div>
          <h3 className="text-xl font-bold text-blue-800">
            Sistema de Sorteio para o Loteamento Sant'Ana I
          </h3>
          <p className="mt-4 text-gray-600">
            A Agamemtec orgulhosamente apresenta seu inovador sistema de sorteio de lotes, desenvolvido em colaboração com a Prefeitura de Chapada dos Guimarães, como parte do programa "Meu Lar". O principal objetivo deste sistema é realizar o sorteio justo e transparente dos lotes no Loteamento Sant'Ana I.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-500">
            Saiba Mais
          </button>
        </div>
        <div className="w-full">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/MZERRiwDnTc"
            title="Sistema de Sorteio para o Loteamento Sant'Ana I"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Project;



