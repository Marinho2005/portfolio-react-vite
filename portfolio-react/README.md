# Victor Marinho — Portfólio (React)

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/CSS3-modern-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p align="center">
  Portfólio pessoal minimalista e responsivo — migrado de HTML/CSS/JS puro para <strong>React + Vite + TypeScript</strong>.<br/>
  Design dark, tipografia mono + sans, animações com IntersectionObserver e layout 100% responsivo.
</p>

---

## ✨ Preview

![Preview — Victor Marinho Portfólio](./screenshots/screenshot-hero.png)

> Captura do hero (`1280×800` @2x) via Playwright a partir do `vite preview`.

---

## 🚀 Tecnologias

| Camada | Ferramentas |
|---|---|
| **Core** | React 18, TypeScript 5, Vite 5 |
| **Estilo** | CSS puro (variáveis, grid, backdrop-blur), Google Fonts (Inter + Fira Code) |
| **UX** | IntersectionObserver (reveal + navegação ativa), scroll suave, menu mobile |
| **Build** | `tsc` + `vite build` — saída em `dist/` |

## 📂 Estrutura

```
portfolio-react/
├── public/
│   └── assets/foto.png        # foto de perfil (copiada do projeto HTML)
├── src/
│   ├── App.tsx                # seções: hero, sobre, habilidades, projetos, contato
│   ├── main.tsx               # bootstrap React
│   ├── styles.css             # design system (cores, grid, hero, cards)
│   └── project-icons.css      # ícones dos projetos
├── screenshots/               # prints (README usa apenas screenshot-hero.png)
│   ├── screenshot-hero.png      # ← usado no README
│   ├── screenshot-desktop.png
│   └── screenshot-mobile.png
├── index.html
├── vite.config.ts
└── tsconfig.json
```

## 🧩 Seções

- **Hero** — apresentação com foto, status `disponível para projetos`, tags flutuantes e CTAs
- **Sobre** — bio + card `developer.js` estilizado como código
- **Habilidades** — 3 cards (Front-end, Back-end, Sistemas & IoT) com chips
- **Projetos** — `Lâmpada Inteligente` (IoT), `ChessDuel` (Elixir + Vue.js · Em desenvolvimento), `Monitoramento Ambiental` (ESP32) e `PokeRogue` (C + SDL2 · jogo roguelike multiplataforma)
- **Contato** — CTA para `vimarinholima@gmail.com`
- **Header fixo** com navegação ativa (observa `section[id]`) e **menu hamburguer** no mobile

## ⚡ Como rodar

```bash
# 1. Entrar na pasta
cd portfolio-react

# 2. Instalar dependências
npm install

# 3. Copiar assets do projeto HTML original (gera public/assets/foto.png)
npm run copy:assets

# 4. Ambiente de desenvolvimento
npm run dev
# → http://localhost:5173

# 5. Build de produção
npm run build

# 6. Preview do build (usado para gerar os screenshots)
npm run preview
# → http://localhost:4173
```

> **Node requerido:** `v20+` (testado com `v20.19.0`)

## 🐳 Docker Compose

Na raiz do repositório, execute `docker compose up --build` e acesse <http://localhost:8080>. Para parar o container, execute `docker compose down`.

## 📜 Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe Vite em modo dev com HMR |
| `npm run build` | Roda `tsc` + `vite build` → `dist/` |
| `npm run preview` | Serve `dist/` localmente |
| `npm run copy:assets` | Copia `../portfolio_html/assets` → `public/assets` |

## 🎨 Design

- **Paleta:** `black #050505`, `panel #0c0c0c`, `white #f4f4f2`, `gray #a1a1a1`, `line #292929`
- **Fontes:** `Fira Code` (mono / código) + `Inter` (sans / texto)
- **Detalhes:** grid sutil no hero, brilho radial, cantos com `corner`, reveal com `IntersectionObserver`, header com `backdrop-filter: blur(16px)`

## 📸 Gerar screenshots novamente

```bash
npm install -D @playwright/test
npx playwright install chromium

# em um terminal
npm run preview -- --port 4175

# em outro terminal
node /tmp/screenshot.js
# gera screenshots/screenshot-hero.png (usado no README)
```

## 🔗 Links

- GitHub: [@Marinho2005](https://github.com/Marinho2005)
- LinkedIn: [victor-marinho-8271962b9](https://www.linkedin.com/in/victor-marinho-8271962b9/)
- E-mail: [vimarinholima@gmail.com](mailto:vimarinholima@gmail.com)

## 📄 Licença

Uso livre para estudo e portfólio. Se usar como base, mantenha os créditos.

---

<p align="center">
  <sub>Projetado e desenvolvido por <strong>Victor Marinho</strong> © 2026 — feito com React + Vite.</sub>
</p>
