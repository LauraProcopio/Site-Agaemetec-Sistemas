import React from "react";
import { Link } from "react-router-dom";

const EmpresaPrivada = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-800">Empresa Privada</h1>
      <p className="mt-4 text-gray-600 text-center max-w-2xl">
        Aqui estão os produtos e serviços voltados para empresas privadas.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-500">
          Voltar para Home
        </button>
      </Link>
    </div>
  );
};

export default EmpresaPrivada;

