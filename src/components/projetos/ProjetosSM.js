import React from "react";
import carta from "../img/carta.png";
import calculadora from "../img/calculadora.png";
import santoaroma from "../img/santoaroma.png";
import breve from "../img/breve.png";

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
  return (
    <div className="relative flex flex-col justify-around h-full gap-1 w-full">
      <div className="bg-red-500 h-1/12 w-full rounded-md px-4 py-2 flex justify-center">
        <div className="text-4xl">Projetos</div>
      </div>
      <div className="bg-slate-100 h-full w-full rounded-md px-4 py-2 flex flex-col md:flex-row justify-evenly">
        {projetos.map((projeto, index) => (
          <div key={index} className="flex flex-col items-center w-full h-full">
            <div className="bg-cinza rounded-md w-[200px] h-[130px] border-4 hover:border-[#3aca07] border-[#c3ec21] hover:scale-105 transition duration-500 shadow-md my-2">
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
              className="text-md font-semibold text-limao bg-escuro rounded px-2 hover:underline"
            >
              {projeto.nome}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjetosSM;
