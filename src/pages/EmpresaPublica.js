import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // Importando o Footer

const sections = [
  {
    id: "gat",
    title: "GAT - Gestão da Administração Tributária",
    description:
      "O GAT objetiva suprir as necessidades do gerenciamento dos cadastros mobiliários, imobiliários e taxas diversas, bem como o acompanhamento dos tributos municipais, desde o seu lançamento até o recebimento, possibilitando que o gestor tenha uma visão globalizada sobre a situação tributária do município.",
    image: "/img/GAT.jpg",
  },
  {
    id: "habita",
    title: "Habita",
    description:
      "Projetada com foco na gestão plena em programas e projetos habitacionais, projeto de trabalho técnico social PTS, e programa e projetos em Regularização Fundiária, seguindo-se passo a passo todos os processos de acordo com as políticas nacionais e locais conforme a legislação. O sistema fornece informações gerenciais aos gestores para tomada de decisões rápidas e eficientes, tornando o processo rápido e transparente.",
    image: "/img/habita.jpg",
  },
  {
    id: "ipm",
    title: "IPM - Índice de Participação dos Municípios",
    description:
      "Possibilita o acompanhamento do índice de Participação do Município no ICMS estadual por meio de análise dos arquivos disponibilizados pela SEFAZ juntamente com os arquivos do SIMPLES NACIONAL, ficando à disposição do usuário relatórios analíticos e sintéticos, que apontam eventuais equívocos nos lançamentos, contribuindo assim para um trabalho totalmente assertivo e eficaz por parte do fiscal tributário.",
    image: "/img/ipm.jpg",
  },
  {
    id: "sgda",
    title: "SGDA",
    description:
      "Solução projetada para aumentar a receita dos municípios com a recuperação de ativos não pagos. O sistema utiliza o fluxo de tarefas parametrizáveis, para que seja apontada ao gestor qual o caminho mais eficaz para se obter sucesso no recebimento dos ativos atrasados.",
    image: "/img/SGDA.jpg",
  },
  {
    id: "cadin",
    title: "CADIN",
    description:
      "Tem como foco centralizar a gestão das pessoas físicas ou jurídicas que tenha débitos de qualquer natureza com o município e seus entes, facilitando a consulta dos mesmos pelos seus entes através de Web Services e ou portal CADIN.",
    image: "/img/CADIN.jpg",
  },
  {
    id: "protesto",
    title: "Protesto",
    description:
      "O protesto de Certidão de Dívida Ativa (CDA) garante ao ente público oportunidade de recuperar créditos sem custos, visto que os emolumentos e demais despesas são pagos pelo contribuinte inadimplente.",
    image: "/img/protesto.jpg",
  },
];

const EmpresaPublica = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Seção Inicial */}
      <div
        className="w-full h-[60vh] relative flex flex-col items-center justify-center text-center bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/img/empresapublica.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Empresa Pública
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl drop-shadow-md">
            Aqui estão os produtos e serviços voltados para empresas públicas.
          </p>
          <Link to="/">
            <button className="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-gray-200 transition">
              Voltar para Home
            </button>
          </Link>
        </div>
      </div>

      {/* Seções Dinâmicas */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 flex justify-center ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl">
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-3xl font-bold text-blue-800">
                    <span className="text-gray-900">Conheça</span> {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    {section.description}
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-[450px] h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-[450px] h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-3xl font-bold text-blue-800">
                    <span className="text-gray-900">Conheça</span> {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    {section.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      ))}
      <Footer />
    </div>
    
  );
};

export default EmpresaPublica;

