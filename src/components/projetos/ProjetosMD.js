import React, { useState } from "react";
import carta from "../img/carta.png";
import calculadora from "../img/calculadora.png";
import santoaroma from "../img/santoaroma.png";
import breve from "../img/breve.png";
import Modalidade from "../modal/Modalidade";

const projetos = [
  {
    nome: "Calculadora de Hamburger",
    imagem: calculadora,
    link: "https://calculadorahamburger.netlify.app/",
    descricao:
      "Não responsivo. Meu primeiro site completo e por isso resolvi deixar o código sem atualização para ter sempre a referência de como evolui no desenvolvimento de futuros projetos em vista desse.",
  },
  {
    nome: "Carta para Rosiel",
    imagem: carta,
    link: "https://rosielcarta.netlify.app/",
    descricao:
      "Não responsivo. 'Puzzle' criado para utilização em jogo de RPG com amigos utilizando ferramentas de javascript. 4 mensagens sendo uma a que está claramente em tela e outras 3 a serem descobertas pelos jogadores durante a partida",
  },
  {
    nome: "Santo Aroma",
    imagem: santoaroma,
    link: "https://santoaroma.netlify.app/",
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
    descricao:
      "Não responsivo. 'Puzzle' criado para utilização em jogo de RPG com amigos utilizando ferramentas de javascript. 4 mensagens sendo uma a que está claramente em tela e outras 3 a serem descobertas pelos jogadores durante a partida",
  },
  {
    nome: "Em Breve",
    imagem: breve,
    link: "https://exemplo.com/projeto6",
    descricao: "sorte",
  },
  {
    nome: "Treino",
    imagem: breve,
    link: "https://exemplo.com/projeto5",
    descricao:
      "Não responsivo. 'Puzzle' criado para utilização em jogo de RPG com amigos utilizando ferramentas de javascript. 4 mensagens sendo uma a que está claramente em tela e outras 3 a serem descobertas pelos jogadores durante a partida",
  },
  {
    nome: "Em Breve",
    imagem: breve,
    link: "https://exemplo.com/projeto6",
    descricao: "sorte",
  },
];

function ProjetosMD() {
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleOpenModal = (descricao) => {
    setSelectedDescription(descricao);
    setOpen(true);
  };

  return (
    <div className="relative flex flex-col justify-start h-full gap-1 w-full roboto-light">
      <div className="h-full max-h-[50%] w-full rounded-md p-2 py-3 flex flex-wrap justify-evenly top-0">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="flex flex-col items-center basis-6 md:basis-4 xl:basis-3 h-full  rounded m-1"
          >
            <div className="px-3 p-2 flex flex-col items-center">
              <div className=" rounded-md w-[27vw] aspect-video border-4 hover:border-[#3aca07] border-[#c3ec21] hover:scale-105 transition duration-500 shadow-md my-2">
                <img
                  src={projeto.imagem}
                  onClick={() => window.open(projeto.link, "_blank")}
                  alt={projeto.nome}
                  className="w-full h-full object-cover overflow mb-2"
                />
              </div>

              <button
                onClick={() => handleOpenModal(projeto.descricao)}
                className="text-xl font-semibold text-white bg-verde rounded px-4 hover:underline"
              >
                {projeto.nome}
              </button>

              <Modalidade open={open} onClose={() => setOpen(false)}>
                <p className="max-w-[400px] m-4 mt-4">{selectedDescription}</p>
              </Modalidade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjetosMD;
