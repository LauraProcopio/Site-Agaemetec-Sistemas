import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Análise de Sistema",
    description: "Análise de sistemas é a atividade que tem como finalidade a realização de estudos de processos a fim de encontrar o melhor caminho racional para que a informação possa ser processada. Os analistas de sistemas estudam os diversos sistemas existentes entre hardwares, softwares e o usuário final.",
    image: "/img/Analise-de-Sistema.jpg",
  },
  {
    title: "Suporte Técnico",
    description: "Suporte técnico é um serviço que presta assistência intelectual, tecnológica e material a um cliente ou grupo de clientes, com o fim de solucionar problemas técnicos, portanto relacionados a produtos tecnológicos tais como telefones celulares, televisões, aparelhos de som, computadores e software.",
    image: "/img/SuporteTecnico.jpg",
  },
  {
    title: "Desenvolvimento de Sistema",
    description: "É o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.",
    image: "/img/DesenvolvimentoSistema.jpg",
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-white">
    <h2 className="text-center text-3xl font-bold text-blue-800">Nossos Serviços</h2>
    <p className="text-center mt-2 text-gray-600">
      Combinamos com DevOps para trazer o melhor de tecnologia para projetos em todo o mundo.
    </p>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="shadow-lg rounded-lg overflow-hidden bg-white"
        >
          <img src={service.image} alt={service.title} className="w-full h-48 sm:h-64 md:h-72 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-blue-800">{service.title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;


