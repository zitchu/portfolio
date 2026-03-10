# Epic 01: Suporte Multilíngue e Navegação Mobile

## 🎯 Objetivo
Adicionar suporte a 3 idiomas (Português, Inglês e Espanhol) no site e melhorar a navegação e a experiência na versão mobile, reorganizando a estrutura de menus, sem quebrar ou alterar o design visual existente do portfólio.

## 🧠 Contexto
Atualmente, o portfólio está disponível apenas em Português e a navegação mobile possui elementos no footer. Para alcançar um público global, é essencial oferecer tradução dos textos e projetos. Além disso, a navegação em dispositivos móveis melhora com uma barra no topo, padrão em aplicações modernas. Este épico cobre a reestruturação dos textos, inserção de estado de idioma, seleção de linguagem e a adaptação do layout mobile.

## 📝 Escopo
- Implementar objeto centralizado de traduções (i18n) e estado em `localStorage`.
- Traduzir as descrições dos projetos mantendo os títulos originais intransponíveis.
- Traduzir todos os textos estáticos (Sidebars, Navbars, Títulos de Seções).
- Implementar o seletor de idiomas (PT | EN | ES) discreto e alinhado ao design na Sidebar desktop.
- Substituir a navegação do footer por uma Navbar no topo apenas no mobile.
- Ajustar CSS (breakpoints, typography, paddings) e URL do LinkedIn.

## 🔗 Dependências
- Design System e estilo visual atual (devem ser mantidos).
- `localStorage` para persistência do idioma.
