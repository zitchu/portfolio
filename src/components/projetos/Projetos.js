import React, { useState } from "react";
import carta from "../img/carta.png";
import calculadora from "../img/calculadora.png";
import santoaroma from "../img/santoaroma.png";
import transition from "../img/transition.png";
import despedida from "../img/despedida.png";
import harpgladio from "../img/zytverse.png";
import tavernas from "../img/tavernas.png";
import zume from "../img/zume.png";
import parallax from "../img/parallax.png";
import Modalidade from "../modal/Modalidade";

const projetos = [
  {
    nome: "Calculadora de Hamburger",
    imagem: calculadora,
    link: "https://calculadorahamburger.netlify.app/",
    importancia: 3,
    descricao:
      "Não responsivo. Meu primeiro site completo e por isso resolvi deixar o código sem atualização para ter sempre a referência de como evolui no desenvolvimento de futuros projetos em vista desse.",
  },
  {
    nome: "Carta para Rosiel",
    imagem: carta,
    link: "https://rosielcarta.netlify.app/",
    importancia: 3,
    descricao:
      "Não responsivo. 'Puzzle' criado para utilização em jogo de RPG com amigos utilizando ferramentas de javascript. 4 mensagens sendo uma a que está claramente em tela e outras 3 a serem descobertas pelos jogadores durante a partida",
  },
  {
    nome: "Santo Aroma",
    imagem: santoaroma,
    link: "https://santoaroma.netlify.app/",
    importancia: 1,
    descricao:
      "Responsivo. Site institucional para a página Santo Aroma Bsb criado com conceitos simples de parallax",
  },
  {
    nome: "Parallax",
    imagem: parallax,
    link: "https://jmparallax.netlify.app/",
    importancia: 1,
    descricao:
      "Responsivo mas melhor aproveitado em telas maiores. Site feito com parallax em diversas técnicas para exemplificação e 'case' ",
  },
  {
    nome: "Dualidade Files",
    imagem: transition,
    link: "https://dualidadefiles.netlify.app/",
    importancia: 3,
    descricao:
      "Não Responsivo. Feito para criar uma animação para rpg utilizando recursos parallax",
  },
  {
    nome: "Despedida",
    imagem: despedida,
    link: "https://leslliejean.netlify.app/",
    importancia: 1,
    descricao: "Responsivo. Desenvolvido para o evento de meu casamento e despedida",
  },
  {
    nome: "HarpGladio",
    imagem: harpgladio,
    link: "https://harpgladio.netlify.app/",
    importancia: 1,
    descricao:
      "Responsivo. Páginas de um projeto de RPG que conduzo com amigos e que resume as histórias que contamos e participamos.",
  },
  {
    nome: "Gerador de Tavernas",
    imagem: tavernas,
    link: "https://taverneiro.netlify.app/",
    importancia: 2,
    descricao: "Responsivo. Gerador de tavernas e taverneiros.",
  },
  {
    nome: "Editora Zume",
    imagem: zume,
    link: "https://zumeeditora.netlify.app/",
    importancia: 2,
    descricao:
      "Responsivo. Website institucional desenvolvido para uma editora focada em publicações acadêmicas e Open Access. A plataforma prioriza a excelência editorial, abrangendo desde a revisão técnica até a publicação e disseminação global de conhecimento científico.",
  },
];

const Projetos = () => {
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenModal = (projeto) => {
    setSelectedDescription(projeto.descricao);
    setSelectedLink(projeto.link);
    setSelectedTitle(projeto.nome);
    setOpen(true);
  };

  // Ordena os projetos por importância (1 > 2 > 3)
  const projetosOrdenados = [...projetos].sort(
    (a, b) => a.importancia - b.importancia
  );

  return (
    <div className="w-full h-full roboto-light overflow-y-auto">
      <div className="h-auto w-full rounded-md px-4 py-2 flex justify-center md:hidden">
        <div className="text-2xl text-verdao mont-bold">Projetos Jeanluiz</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        {projetosOrdenados.map((projeto, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-cinza rounded-md p-2 border-4 border-limao hover:border-verde hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <div className="w-full aspect-video overflow-hidden rounded-md mb-2 cursor-pointer" onClick={() => handleOpenModal(projeto)}>
               <img
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-full object-cover"
                />
            </div>
           
            <button
                onClick={() => handleOpenModal(projeto)}
                className="w-full text-xl font-semibold text-white bg-verde rounded py-2 px-4 hover:bg-opacity-90 transition-colors roboto-med"
              >
                {projeto.nome}
            </button>
          </div>
        ))}
      </div>

      <Modalidade open={open} onClose={() => setOpen(false)}>
         <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-verdao mb-2">{selectedTitle}</h2>
             <p className="max-w-[400px] text-justify text-gray-700 my-4">{selectedDescription}</p>
              <a
                href={selectedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-verde px-4 py-2 rounded hover:bg-limao transition-colors font-semibold"
              >
                Visitar Projeto
              </a>
         </div>
      </Modalidade>
    </div>
  );
};

export default Projetos;
