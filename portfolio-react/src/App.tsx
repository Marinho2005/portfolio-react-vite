import { useEffect, useState } from 'react'
import { ProjectIcon } from './components/ProjectIcon'
import { Tags } from './components/Tags'

const skills = [
  { icon: '</>', title: 'Front-end', text: 'Interfaces responsivas, acessíveis e focadas na experiência do usuário.', tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Next.js', 'Angular'] },
  { icon: '{ }', title: 'Back-end', text: 'Aplicações, regras de negócio e integração com serviços e bancos de dados.', tags: ['Elixir', 'Ruby', 'PHP', 'SQL', 'APIs'] },
  { icon: '>_', title: 'Sistemas & IoT', text: 'Ambientes Linux, automação, protótipos conectados e sensores.', tags: ['Linux', 'Git', 'ESP32', 'Sensores'] },
]

const projects = [
  { number: '01', mark: 'bulb', type: 'IoT · Automação', title: 'Lâmpada Inteligente', text: 'Projeto de iluminação inteligente com controle por aplicativo.', tags: ['ESP32', 'Mobile', 'IoT'] },
  { number: '02', mark: 'knight', type: 'Web · Full stack', title: 'ChessDuel', text: 'Plataforma de xadrez online utilizando Elixir e Vue.js.', tags: ['Elixir', 'Vue.js', 'WebSocket'], status: 'Em desenvolvimento' },
  { number: '03', mark: 'camera', type: 'IoT · Monitoramento', title: 'Monitoramento Ambiental', text: 'Sistema que verifica condições de ambientes controlados com sensores e ESP32.', tags: ['ESP32', 'Sensores', 'Dados'] },
  { number: '04', mark: 'pokeball', type: 'Jogo · Multiplataforma', title: 'PokeBattle', text: 'Jogo de Pokémon com batalhas e capturas em pixel art.', tags: ['C', 'SDL2', 'Filas', 'Pilhas', 'Listas'] },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    }), { threshold: .12 })
    reveals.forEach(element => revealObserver.observe(element))

    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id)
    }), { rootMargin: '-35% 0px -55%' })
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section))
    return () => { revealObserver.disconnect(); sectionObserver.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio" className="logo" onClick={closeMenu}><span>&lt;</span>Victor<span>/&gt;</span></a>
          <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            {[['inicio', 'Início'], ['sobre', 'Sobre'], ['habilidades', 'Habilidades'], ['projetos', 'Projetos'], ['contato', 'Contato']].map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={closeMenu}>{label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content wrap">
            <div className="hero-text reveal">
              <p className="eyebrow"><span className="prompt">$</span> Olá, eu sou</p>
              <h1><span className="code-word">const</span> Victor<br /><span className="name-outline">Marinho</span><span className="cursor">_</span></h1>
              <p className="role">// Desenvolvedor de Software</p>
              <p className="description">Transformo ideias em experiências digitais funcionais, simples e bem construídas.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">Ver projetos <span>→</span></a>
                <a className="button button-secondary" href="#contato">Entrar em contato</a>
              </div>
              <div className="socials" aria-label="Redes sociais">
                <a href="https://github.com/Marinho2005" target="_blank" rel="noreferrer" aria-label="GitHub de Victor Marinho">GH</a><a href="https://www.linkedin.com/in/victor-marinho-8271962b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Victor Marinho">IN</a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="image-shell">
                <span className="corner corner-tl" /><span className="corner corner-tr" /><span className="corner corner-bl" /><span className="corner corner-br" />
                <div className="image-label">01 / PROFILE</div>
                <img src="/assets/foto-pb.png" alt="Victor Marinho" />
                <div className="status"><i /> disponível para projetos</div>
              </div>
              <div className="floating-tag tag-one"><strong>Front-end</strong><small>HTML · CSS · JavaScript</small></div>
              <div className="floating-tag tag-two"><strong>Back-end</strong><small>Elixir · APIs · Dados</small></div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section wrap reveal">
          <div className="section-heading"><span>01.</span><h2>&lt;Sobre mim /&gt;</h2><i /></div>
          <div className="about-grid">
            <div><p className="lead">Sou estudante e desenvolvedor interessado em tecnologia, desenvolvimento web e programação.</p><p>Gosto de entender problemas, experimentar soluções e transformar aprendizado em projetos reais — sempre buscando código mais claro e experiências melhores.</p></div>
            <div className="code-card">
              <div className="code-card-top"><span /><span /><span /><small>developer.js</small></div>
              <pre><code><b>const</b>{` developer = {\n  name: `}<em>'Victor Marinho'</em>{`,\n  focus: `}<em>'Software Development'</em>{`,\n  traits: [\n    `}<em>'curioso'</em>{`, `}<em>'dedicado'</em>{`, `}<em>'criativo'</em>{`\n  ],\n  learning: `}<b>true</b>{`\n};`}</code></pre>
            </div>
          </div>
        </section>

        <section id="habilidades" className="section section-muted"><div className="wrap reveal">
          <div className="section-heading"><span>02.</span><h2>&lt;Habilidades /&gt;</h2><i /></div>
          <div className="skills-grid">{skills.map(skill => <article className="skill-card" key={skill.title}><div className="skill-icon">{skill.icon}</div><h3>{skill.title}</h3><p>{skill.text}</p><Tags items={skill.tags} /></article>)}</div>
        </div></section>

        <section id="projetos" className="section wrap reveal">
          <div className="section-heading"><span>03.</span><h2>&lt;Projetos /&gt;</h2><i /></div>
          <div className="projects">{projects.map(project => <article className={`project ${project.status ? 'featured' : ''}`} key={project.title}>
            <div className="project-top"><span>{project.number}</span><span>↗</span></div><div className="project-mark"><ProjectIcon name={project.mark} /></div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.text}</p>
            {project.status && <div className="project-status"><i /> {project.status}</div>}<Tags items={project.tags} />
          </article>)}</div>
        </section>

        <section id="contato" className="section contact"><div className="wrap reveal">
          <p className="eyebrow"><span className="prompt">$</span> vamos conversar?</p><h2>Tem uma ideia?<br /><span>Vamos construí-la.</span></h2><p>Estou aberto a novos projetos, colaborações e boas conversas sobre tecnologia.</p><a className="button button-light" href="mailto:vimarinholima@gmail.com">vimarinholima@gmail.com <span>↗</span></a>
        </div></section>
      </main>

      <footer><div className="wrap"><a href="#inicio" className="logo"><span>&lt;</span>Victor<span>/&gt;</span></a><p>Projetado e desenvolvido por Victor Marinho © 2026</p><a href="#inicio" className="back-top">voltar ao topo ↑</a></div></footer>
    </>
  )
}
