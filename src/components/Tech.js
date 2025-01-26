import React from "react";

const technologies = [
  { name: "JavaScript", image: "/img/javascript.png" },
  { name: "Python", image: "/img/python.png" },
  { name: "Oracle", image: "/img/oracle.png" },
  { name: "React", image: "/img/react.png" },
];

const Tech = () => (
  <section id="technologies" className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800">Principais Tecnologias</h2>
      <p className="text-center text-gray-600 mt-2">
        Conheça as tecnologias mais usadas em nossos projetos.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="h-24 w-24 object-contain"
            />
            <p className="mt-4 text-blue-800 font-medium">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tech;




