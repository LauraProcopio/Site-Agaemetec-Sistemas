import React from "react";
import { Link } from "react-router-dom";

const produtos = [
  {
    nome: "Empresa Pública",
    descricao: "Instituições administradas pelo governo, focadas em serviços para a sociedade.",
    imagem: "/img/empresapublica.jpg",
    link: "/empresa-publica",
    cor: "bg-blue-800 hover:bg-blue-500",
  },
  {
    nome: "Empresa Privada",
    descricao: "Organizações que pertencem a indivíduos ou grupos privados, focadas no lucro.",
    imagem: "/img/empresaprivada.jpg",
    link: "/empresa-privada",
    cor: "bg-green-700 hover:bg-green-500",
  },
];

const Produtos = () => {
  return (
    <section id="produtos" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800">Produtos</h2>
        <p className="text-gray-600 mt-2">
          Conheça as diferenças entre empresas públicas e privadas.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {produtos.map((produto, index) => (
            <Link to={produto.link} key={index}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900">{produto.nome}</h3>
                  <p className="text-gray-600 mt-2">{produto.descricao}</p>
                  <button className={`mt-4 px-6 py-3 text-white rounded-full ${produto.cor}`}>
                    Saiba mais
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;


