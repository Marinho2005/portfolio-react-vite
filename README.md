# Portfólio Básico — HTML/CSS + React

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

<p align="center">
  Repositório com duas versões do mesmo portfólio — <strong>HTML/CSS/JS puro</strong> e <strong>React + Vite + TypeScript</strong> —<br/>
  criado por <strong>Victor Marinho</strong> para apresentar habilidades, projetos e contato de forma minimalista e responsiva.
</p>

---

## ✨ Preview (versão React)

![Preview — Victor Marinho Portfólio](./screenshots/screenshot-hero.png)

---

## 📁 O que tem aqui

```
.
├── portfolio_html/        # versão original — HTML + CSS + JS + Bootstrap
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/foto.png
│
├── portfolio-react/       # versão moderna — React + Vite + TypeScript
│   ├── src/App.tsx        # todas as seções (hero, sobre, habilidades, projetos, contato)
│   ├── src/styles.css     # design system dark
│   ├── public/assets/     # assets copiados do projeto HTML
│   └── screenshots/       # prints (apenas hero no README)
│
└── screenshots/           # prints (README usa apenas screenshot-hero.png)
    ├── screenshot-hero.png  # ← usado no README
    ├── screenshot-desktop.png
    └── screenshot-mobile.png
```

## 🔄 Evolução

| Versão | Stack | Destaques |
|---|---|---|
| **portfolio_html** | HTML, CSS, JS, Bootstrap 5.3 | Estrutura simples, 3 seções (sobre/projetos/contato), hero com foto |
| **portfolio-react** | React 18, Vite 5, TS 5 | Header fixo com navegação ativa, reveal animado, menu mobile, cards com chips, design dark com grid + blur |

A versão React reaproveita o conteúdo original, mas refina o visual: paleta `black #050505 / white #f4f4f2`, tipografia `Fira Code + Inter`, e animações com `IntersectionObserver`.

## 🚀 Como rodar

### React (recomendado)

```bash
cd portfolio-react
npm install
npm run copy:assets   # copia assets do projeto HTML
npm run dev           # http://localhost:5173
```

Outros comandos:

```bash
npm run build         # gera dist/
npm run preview       # serve dist/ em http://localhost:4173
```

### Docker Compose com Caddy

Na raiz do repositório, execute:

```bash
docker compose up --build
```

Acesse <http://localhost:8080>. Para parar e remover o container, use `docker compose down`.

### Deploy em VPS (IP da VM · Caddy HTTP)

O container compila a versão React e serve os arquivos estáticos com Caddy. Para
usar o IP da VM, pare e desabilite o Nginx instalado no host para liberar a porta
80. No diretório do repositório na VPS:

```bash
PORT=80 docker compose up -d --build
```

Depois, acesse `http://IP_DA_VPS`. Este deploy serve apenas HTTP, sem tentar
redirecionar para HTTPS. Para atualizar manualmente, execute `git pull` e repita
o comando do Compose acima.

#### Deploy automático pelo GitHub Actions

O workflow [deploy-vps.yml](.github/workflows/deploy-vps.yml) faz deploy a cada
push na branch `main`. Na VPS, confirme que `portfolio-vm` pode escrever no
repositório e executar Docker Compose. Se necessário:

```bash
sudo chown -R portfolio-vm:portfolio-vm /var/www/portfolio
sudo usermod -aG docker portfolio-vm
```

Depois de adicionar o usuário ao grupo `docker`, encerre e reabra a sessão SSH.
Esse grupo concede privilégios equivalentes a root. A VPS também precisa ter
acesso Git configurado para executar `git pull` (por exemplo, uma deploy key se
o repositório for privado).

Em **Settings → Secrets and variables → Actions**, crie estes repository secrets:

- `VPS_HOST`: IP público da VM.
- `VPS_SSH_KEY`: chave privada SSH autorizada para o usuário `portfolio-vm`.
- `VPS_KNOWN_HOSTS`: chave de host SSH da VM, obtida e conferida por fingerprint.

Após o setup, cada push em `main` executa `git pull` em `/var/www/portfolio` e
reconstrói o container HTTP na porta 80. O workflow também pode ser disparado
manualmente pela aba **Actions** do GitHub.

### HTML puro

Abra direto no navegador — sem build:

```bash
# opção 1: abrir arquivo
open portfolio_html/index.html

# opção 2: servir com Vite/Python
npx serve portfolio_html
# ou
python3 -m http.server --directory portfolio_html 8000
```

## 🧩 Projetos em destaque

- **Lâmpada Inteligente** · `ESP32 · Mobile · IoT` — iluminação com controle por app
- **ChessDuel** · `Elixir · Vue.js · WebSocket` — xadrez online *(em desenvolvimento)*
- **Monitoramento Ambiental** · `ESP32 · Sensores · Dados` — sensores para ambientes controlados
- **PokeBattle** · `C · SDL2 · Filas · Pilhas · Listas` — jogo roguelike de batalha e captura de Pokémon para Linux e Windows

## 🛠️ Tecnologias

- **Front-end:** HTML, CSS, JavaScript, React, Vue.js, Next.js, Angular
- **Back-end:** Elixir, Ruby, PHP, SQL, APIs
- **Sistemas & IoT:** Linux, Git, ESP32, Sensores


## 👤 Autor

**Victor Marinho**

- GitHub: [@Marinho2005](https://github.com/Marinho2005)
- LinkedIn: [victor-marinho-8271962b9](https://www.linkedin.com/in/victor-marinho-8271962b9/)
- E-mail: [vimarinholima@gmail.com](mailto:vimarinholima@gmail.com)

---

<p align="center">
  <sub>© 2026 Victor Marinho — <a href="./portfolio-react/">Ver versão React</a> • <a href="./portfolio_html/">Ver versão HTML</a></sub>
</p>
