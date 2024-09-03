import React, { useState } from "react";
import carta from "../img/carta.png";
import calculadora from "../img/calculadora.png";
import santoaroma from "../img/santoaroma.png";
import breve from "../img/breve.png";
import CompartilharSM from "./CompartilharSM";
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

function ProjetosSM() {
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedLink, setSelectedLink] = useState("");

  const handleOpenModal = (descricao, link) => {
    setSelectedDescription(descricao);
    setSelectedLink(link);
    setOpen(true);
  };

  return (
    <div className="relative flex flex-col justify-around h-full gap-1 w-full roboto-light">
      <div className="bg-white h-1/12 w-full rounded-md px-4 py-2 flex justify-center">
        <div className="text-2xl text-verdao mont-bold">Projetos Jeanluiz</div>
      </div>
      <div className="bg-slate-100 h-full w-full rounded-md px-4 py-2 flex flex-col md:flex-row justify-evenly">
        {projetos.map((projeto, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full">
            <div className="bg-cinza  rounded-md border-4 hover:border-[#3aca07] border-[#c3ec21] hover:scale-105 transition duration-500 shadow-md my-2">
              <button
                onClick={() => handleOpenModal(projeto.descricao, projeto.link)}
                className="text-xl w-full justify-center items-center flex  font-semibold text-white bg-verde rounded-b  roboto-med"
              >
                {projeto.nome}
              </button>
              <img
                src={projeto.imagem}
                onClick={() => handleOpenModal(projeto.descricao, projeto.link)}
                alt={projeto.nome}
                className="w-full h-full object-cover mb-2 "
              />
            </div>

            <Modalidade open={open} onClose={() => setOpen(false)}>
              <p className="max-w-[400px] m-4 mt-4">{selectedDescription}</p>
              <a
                href={selectedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-verdao underline mt-2 block"
              >
                Visitar Projeto
              </a>
            </Modalidade>
          </div>
        ))}
      </div>
      <div className="p-4 h-full transition-all duration-300 flex flex-col justify-center items-center bg-escuro text-white w-full rounded text-limao">
        <div className="cursor-default  uppercase text-xl text-center mont-regular">
          Contatos
        </div>
        <div className="flex flex-nowrap w-full justify-around items-center">
          <div className="py-2">
            <a
              className="hover:bg-[#848c8c] rounded px-2 "
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5561981024948?text=Olá,%20vi%20seu%20portfólio%20e%20entrei%20em%20contato!"
            >
              Whats App
            </a>
          </div>
          <div className="py-2">
            <a
              className="hover:bg-[#848c8c] rounded px-2 "
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jeanluiz-ferreira-porto-monteiro-a19185105/"
            >
              Linked-In
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-0 left-0 flex justify-center bg-escuro text-white w-full rounded text-limao">
        <CompartilharSM />
      </div>
    </div>
  );
}

export default ProjetosSM;
