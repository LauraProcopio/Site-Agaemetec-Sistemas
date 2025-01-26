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
    
    // Enviar email usando EmailJS
    emailjs.send(
      'your_service_id', // Substitua com seu Service ID
      'your_template_id', // Substitua com seu Template ID
      formData,
      'your_user_id' // Substitua com seu User ID
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
    <footer id="contact" className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">AGAMEMTEC SISTEMAS</h3>
          <p className="mt-2 text-sm">
            A Agamemtec é uma empresa especializada no desenvolvimento de soluções tecnológicas. Fundada em Campo Grande/MS em 2003, nossa missão é criar software personalizado para atender às necessidades de nossos clientes de maneira fácil, eficaz e simplificada.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Menu</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#services" className="hover:underline">Nossos Serviços</a></li>
            <li><a href="#technologies" className="hover:underline">Tecnologias</a></li>
            <li><a href="#projects" className="hover:underline">Projetos</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Nos Contate</h3>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Nome" 
              className="w-full p-2 rounded bg-white text-black" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              className="w-full p-2 rounded bg-white text-black" 
            />
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Mensagem" 
              rows="4" 
              className="w-full p-2 rounded bg-white text-black" 
            />
            <button 
              type="submit" 
              className="w-full py-2 bg-gray-100 text-blue-800 rounded hover:bg-gray-200"
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

