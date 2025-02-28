import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'your_service_id',
      'your_template_id',
      formData,
      'your_user_id'
    )
    .then((response) => {
      console.log('Email enviado com sucesso!', response);
      alert('Mensagem enviada com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao enviar o e-mail', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    });
  };

  return (
    <footer id="contact" className="bg-blue-900 text-white py-10 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold">AGAMEMTEC SISTEMAS</h3>
          <p className="mt-4 text-sm leading-relaxed">
            A Agamemtec é uma empresa especializada no desenvolvimento de soluções tecnológicas. Fundada em Campo Grande/MS em 2003, nossa missão é criar software personalizado para atender às necessidades de nossos clientes de maneira fácil, eficaz e simplificada.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Menu</h3>
          <ul className="mt-4 space-y-3">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#services" className="hover:underline">Nossos Serviços</a></li>
            <li><a href="#technologies" className="hover:underline">Tecnologias</a></li>
            <li><a href="#projects" className="hover:underline">Projetos</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Nos Contate</h3>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Nome" 
              className="w-full p-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              className="w-full p-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Mensagem" 
              rows="4" 
              className="w-full p-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="submit" 
              className="w-full py-3 bg-gray-100 text-blue-800 rounded hover:bg-gray-200 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

