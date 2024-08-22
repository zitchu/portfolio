import React from "react";
import carta from "../img/carta.png";
import calculadora from "../img/calculadora.png";
import santoaroma from "../img/santoaroma.png";
import breve from "../img/breve.png";

const projetos = [
  {
    nome: "Calculadora de Hamburger",
    imagem: calculadora,
    link: "https://exemplo.com/projeto1",
    descricao:
      "Não responsivo. Meu primeiro site completo e por isso resolvi deixar o código sem atualização para ter sempre a referência de como evolui no desenvolvimento de futuros projetos em vista desse.",
  },
  {
    nome: "Santo Aroma",
    imagem: santoaroma,
    link: "https://exemplo.com/projeto2",
    descricao: "sorte",
  },
  {
    nome: "Carta para Rosiel",
    imagem: carta,
    link: "https://exemplo.com/projeto3",
    descricao: "sorte",
  },
  {
    nome: "Tarôt",
    imagem: breve,
    link: "https://exemplo.com/projeto4",
    descricao: "sorte",
  },
  {
    nome: "Treino",
    imagem: breve,
    link: "https://exemplo.com/projeto5",
    descricao: "sorte",
  },
  {
    nome: "Em Breve",
    imagem: breve,
    link: "https://exemplo.com/projeto6",
    descricao: "sorte",
  },
];

function Projetos() {
  return (
    <div className="relative flex flex-col justify-around h-full gap-1 w-full">
      <div className="bg-slate-100 h-1/12 w-full rounded-md px-4 py-2 flex justify-center">
        <div className="text-4xl">Projetos</div>
      </div>
      <div className="bg-slate-100 h-full w-full rounded-md px-4 py-2 flex flex-col md:flex-row justify-evenly">
        {projetos.slice(0, 3).map((projeto, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full">
            <div className="bg-cinza rounded-md w-[400px] h-[230px] border-4 hover:border-[#3aca07] border-[#c3ec21] hover:scale-105 transition duration-500 shadow-md my-2">
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="w-full h-full object-cover mb-2 "
              />
            </div>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-limao bg-escuro rounded px-4 hover:underline"
            >
              {projeto.nome}
            </a>
            <h2 className="text-escuro text-justify mt-2 p-2 rounded bg-slate-200 ">
              {projeto.descricao}
            </h2>
          </div>
        ))}
      </div>
      <div className="bg-slate-100 h-full w-full rounded-md px-4 py-2 flex flex-col md:flex-row justify-evenly">
        {projetos.slice(3, 6).map((projeto, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full">
            <div className="bg-cinza rounded-md w-[400px] h-[230px] border-4 hover:border-[#3aca07] border-[#c3ec21] hover:scale-105 transition duration-500 shadow-md my-2">
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="w-full h-full object-fill  mb-2"
              />
            </div>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-limao bg-escuro rounded px-4 hover:underline"
            >
              {projeto.nome}
            </a>
            <h2 className="text-escuro text-justify mt-2 p-2 rounded bg-slate-200 ">
              {projeto.descricao}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
