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
import paradoxia from "../img/paradoxia.png";
import cronicas from "../img/cronicas.png";
import gnoelfo from "../img/gnoelfo.png";
import Modalidade from "../modal/Modalidade";
import { useLanguage } from "../../context/LanguageContext";

const projetos = [
  {
    nome: "Calculadora de Hamburger",
    imagem: calculadora,
    link: "https://calculadorahamburger.netlify.app/",
    importancia: 3,
    descricao: {
      pt: "Não responsivo. Meu primeiro site completo e por isso resolvi deixar o código sem atualização para ter sempre a referência de como evolui no desenvolvimento de futuros projetos em vista desse.",
      en: "Not responsive. My first complete website. I intentionally kept the original code unchanged so it remains a reference point to see how my development skills evolved in later projects.",
      es: "No es responsivo. Mi primer sitio web completo. Decidí mantener el código sin actualizaciones para conservar una referencia clara de cómo evolucioné en el desarrollo de proyectos posteriores."
    }
  },
  {
    nome: "Carta para Rosiel",
    imagem: carta,
    link: "https://rosielcarta.netlify.app/",
    importancia: 3,
    descricao: {
      pt: "Não responsivo. 'Puzzle' criado para utilização em jogo de RPG com amigos utilizando ferramentas de javascript. 4 mensagens sendo uma a que está claramente em tela e outras 3 a serem descobertas pelos jogadores durante a partida",
      en: "Not responsive. A 'puzzle' created for an RPG game with friends using JavaScript. It contains 4 hidden messages—one immediately visible on screen and 3 others to be discovered by players during the session.",
      es: "No es responsivo. Un 'rompecabezas' creado para un juego de rol (RPG) con amigos utilizando JavaScript. Contiene 4 mensajes: uno claramente visible en pantalla y 3 adicionales que los jugadores deben descubrir."
    }
  },
  {
    nome: "Santo Aroma",
    imagem: santoaroma,
    link: "https://santoaroma.netlify.app/",
    importancia: 1,
    descricao: {
      pt: "Responsivo. Site institucional para a página Santo Aroma Bsb criado com conceitos simples de parallax",
      en: "Responsive. Institutional website for 'Santo Aroma Bsb', built with simple parallax concepts.",
      es: "Responsivo. Sitio web institucional para 'Santo Aroma Bsb', construido aplicando conceptos sencillos de parallax."
    }
  },
  {
    nome: "Parallax",
    imagem: parallax,
    link: "https://jmparallax.netlify.app/",
    importancia: 2,
    descricao: {
      pt: "Responsivo mas melhor aproveitado em telas maiores. Site feito com parallax em diversas técnicas para exemplificação e 'case' ",
      en: "Responsive, but best experienced on larger screens. A website demonstrating various parallax techniques as a use-case portfolio piece.",
      es: "Responsivo, aunque se disfruta mejor en pantallas grandes. Un sitio que muestra diversas técnicas de parallax como caso de estudio."
    }
  },
  {
    nome: "Dualidade Files",
    imagem: transition,
    link: "https://dualidadefiles.netlify.app/",
    importancia: 3,
    descricao: {
      pt: "Não Responsivo. Feito para criar uma animação para rpg utilizando recursos parallax",
      en: "Not responsive. Created specifically to provide an animation for an RPG game utilizing parallax resources.",
      es: "No es responsivo. Creado específicamente para proporcionar una animación en un juego de rol utilizando recursos de parallax."
    }
  },
  {
    nome: "Despedida",
    imagem: despedida,
    link: "https://leslliejean.netlify.app/",
    importancia: 1,
    descricao: {
      pt: "Responsivo. Desenvolvido para o evento de meu casamento e despedida",
      en: "Responsive. Developed for my wedding and farewell event celebration.",
      es: "Responsivo. Desarrollado para mi boda y evento de despedida."
    }
  },
  {
    nome: "HarpGladio",
    imagem: harpgladio,
    link: "https://harpgladio.netlify.app/",
    importancia: 1,
    descricao: {
      pt: "Responsivo. Páginas de um projeto de RPG que conduzo com amigos e que resume as histórias que contamos e participamos.",
      en: "Responsive. Web pages for an RPG project I run with friends, summarizing the stories we create and participate in.",
      es: "Responsivo. Páginas web para un proyecto de rol que dirijo con amigos, resumiendo las historias que creamos y en las que participamos."
    }
  },
  {
    nome: "Gerador de Tavernas",
    imagem: tavernas,
    link: "https://taverneiro.netlify.app/",
    importancia: 2,
    descricao: {
      pt: "Responsivo. Gerador de tavernas e taverneiros.",
      en: "Responsive. Generator for RPG taverns and tavern keepers.",
      es: "Responsivo. Generador de tabernas y taberneros para juegos de rol."
    }
  },
  {
    nome: "Editora Zume",
    imagem: zume,
    link: "https://core-site-builder-orcin.vercel.app/",
    importancia: 1,
    descricao: {
      pt: "Responsivo. Website institucional desenvolvido para uma editora focada em publicações acadêmicas e Open Access. A plataforma prioriza a excelência editorial, abrangendo desde a revisão técnica até a publicação e disseminação global de conhecimento científico.",
      en: "Responsive. Institutional website developed for a publisher focused on academic publications and Open Access. The platform prioritizes editorial excellence, from technical review to global publication and scientific knowledge dissemination.",
      es: "Responsivo. Sitio web institucional desarrollado para una editorial enfocada en publicaciones académicas y acceso abierto (Open Access). La plataforma prioriza la excelencia editorial, desde la revisión técnica hasta la difusión global del conocimiento científico."
    }
  },
  {
    nome: "Paradoxia Chronicles",
    imagem: paradoxia,
    link: "https://paradoxia-chronicles.vercel.app/",
    importancia: 1,
    descricao: {
      pt: "Totalmente responsivo. Hub para campanhas de RPG que integra jogadores e mestres. Desenvolvido com TypeScript e SQL (Supabase) no backend para gestão de personagens e mundo.",
      en: "Fully responsive. Hub for RPG campaigns integrating players and game masters. Developed with TypeScript and a SQL (Supabase) backend for character and world management.",
      es: "Totalmente responsivo. Centro para campañas de rol que integra a jugadores y directores de juego. Desarrollado con TypeScript y backend SQL (Supabase) para la gestión de personajes y mundos."
    }
  },
  {
    nome: "Crônicas",
    imagem: cronicas,
    link: "https://cronicasthiago.netlify.app/",
    importancia: 1,
    descricao: {
      pt: "Responsivo. Um site para um amigo de reunião e cronologia para suas aventuras de RPG.",
      en: "Responsive. A chronological registry and gathering website for a friend's RPG adventures.",
      es: "Responsivo. Un registro cronológico y sitio web de reunión para las aventuras de rol de un amigo."
    }
  },
  {
    nome: "Buteco do Gnoelfo",
    imagem: gnoelfo,
    link: "https://gnoelfo.netlify.app/",
    importancia: 2,
    descricao: {
      pt: "Responsivo. Interface para divulgação de projetos com elemento interativo de taverneiro. Desenvolvido exclusivamente em frontend.",
      en: "Responsive. Interface for project showcasing featuring an interactive tavern keeper element. Developed entirely in the frontend.",
      es: "Responsivo. Interfaz para la difusión de proyectos que incluye un elemento interactivo de tabernero. Desarrollado exclusivamente en frontend."
    }
  },
];

const Projetos = () => {
  const { language, uiText } = useLanguage();
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState({});
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
        <div className="text-2xl text-verdao mont-bold">{uiText.projects.title}</div>
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
             <p className="max-w-[400px] text-justify text-gray-700 my-4">
               {selectedDescription[language] || selectedDescription.pt}
             </p>
              <a
                href={selectedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-verde px-4 py-2 rounded hover:bg-limao transition-colors font-semibold"
              >
                {uiText.projects.visit}
              </a>
         </div>
      </Modalidade>
    </div>
  );
};

export default Projetos;
