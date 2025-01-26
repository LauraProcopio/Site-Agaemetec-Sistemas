import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section 
    className="relative h-screen bg-gray-100 bg-cover bg-center flex items-center justify-center" 
    style={{ backgroundImage: "url('/img/back.jpg')" }} // Substitua com o URL da imagem
  >
    {/* Sobreposição preta com transparência */}
    <div className="absolute inset-0 bg-black opacity-50"></div> 

    {/* Conteúdo do hero */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center relative z-10 px-6 sm:px-8 lg:px-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Seja muito bem-vindo!
      </h1> {/* Texto em branco */}
      <p className="text-base sm:text-lg md:text-xl mt-4 text-white">
        A Agamemtec destaca-se como uma empresa especializada no desenvolvimento de soluções tecnológicas.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-500">
        Conhecer Mais
      </button>
    </motion.div>
  </section>
);

export default Hero;


