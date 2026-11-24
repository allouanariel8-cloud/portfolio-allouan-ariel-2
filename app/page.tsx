"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const firstName = "ALLOUAN";
const lastName = "ARIEL";

const projects = [
  {
    number: "01",
    category: "WEB DESIGN",
    title: "Digital experiences",
    description:
      "Des expériences web modernes, élégantes et pensées pour marquer les esprits.",
  },
  {
    number: "02",
    category: "WEB APPLICATIONS",
    title: "Useful applications",
    description:
      "Des applications conçues pour simplifier les tâches et résoudre des problèmes.",
  },
  {
    number: "03",
    category: "SYSTEMS & CRM",
    title: "Connected systems",
    description:
      "Des outils numériques pour organiser, gérer et améliorer les activités.",
  },
  {
    number: "04",
    category: "AI & AUTOMATION",
    title: "Intelligent workflows",
    description:
      "Explorer l'intelligence artificielle et l'automatisation pour gagner en efficacité.",
  },
];

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".intro-letter");

      gsap.set(".welcome-button", {
        opacity: 0,
        y: 35,
        scale: 0.85,
      });

      const intro = gsap.timeline({
        onComplete: () => setIntroFinished(true),
      });

      intro.fromTo(
        letters,
        {
          x: () => gsap.utils.random(-window.innerWidth * 0.85, window.innerWidth * 0.85),
          y: () => gsap.utils.random(-window.innerHeight * 0.8, window.innerHeight * 0.8),
          z: () => gsap.utils.random(-500, 500),
          rotationX: () => gsap.utils.random(-360, 360),
          rotationY: () => gsap.utils.random(-360, 360),
          rotationZ: () => gsap.utils.random(-180, 180),
          scale: () => gsap.utils.random(0.3, 1.8),
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          duration: 3.8,
          stagger: {
            each: 0.11,
            from: "random",
          },
          ease: "power3.inOut",
        }
      );

      intro.to(
        ".intro-letter",
        {
          textShadow: "0 0 30px rgba(55,255,160,0.9)",
          duration: 1.1,
          stagger: 0.06,
        },
        "-=0.8"
      );

      intro.to(
        ".welcome-button",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "+=0.7"
      );

      gsap.to(".ambient-orb.one", {
        x: 100,
        y: -70,
        scale: 1.25,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-orb.two", {
        x: -90,
        y: 80,
        scale: 1.3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-orb.three", {
        x: 60,
        y: 90,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!entered) return;

    const timer = window.setTimeout(() => {
      setShowPortrait(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [entered]);

  useEffect(() => {
    if (!entered) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          delay: 1.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".portrait-background",
        {
          opacity: 0,
          scale: 1.35,
          rotationY: -12,
        },
        {
          opacity: 0.42,
          scale: 1,
          rotationY: 0,
          duration: 3.5,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".section-reveal",
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-reveal",
            start: "top 88%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".project-row").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -70 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
            },
          }
        );
      });

      gsap.to(".portrait-background", {
        yPercent: 8,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".main-site",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(".floating-orbit", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, [entered, showPortrait]);

  const enterPortfolio = () => {
    setEntered(true);
  };

  return (
    <div ref={root} className="portfolio-root">
      <div className="ambient-background">
        <div className="ambient-orb one" />
        <div className="ambient-orb two" />
        <div className="ambient-orb three" />
        <div className="noise-layer" />
      </div>

      {!entered && (
        <section className="intro-screen">
          <div className="intro-top">
            <span>AA / DIGITAL PORTFOLIO</span>
            <span>CREATIVE EXPERIENCE — 2026</span>
          </div>

          <div className="intro-center">
            <div className="intro-kicker">A NEW DIGITAL EXPERIENCE</div>

            <div className="intro-name">
              <div className="intro-line">
                {firstName.split("").map((letter, index) => (
                  <span className="intro-letter" key={`first-${index}`}>
                    {letter}
                  </span>
                ))}
              </div>

              <div className="intro-line second-line">
                {lastName.split("").map((letter, index) => (
                  <span className="intro-letter" key={`last-${index}`}>
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            <p className="intro-caption">
              Chaque idée mérite de devenir une expérience.
            </p>

            <button
              className="welcome-button"
              onClick={enterPortfolio}
              disabled={!introFinished}
            >
              <span>BIENVENUE</span>
              <span className="button-arrow">↗️</span>
            </button>

            <div className="intro-bottom-note">
              <span>SCROLL TO EXPLORE</span>
              <span>DESIGNED TO BE DIFFERENT</span>
            </div>
          </div>
        </section>
      )}

      {entered && (
        <main className="main-site">
          <div className="portrait-scene">
            {showPortrait && (
              <img
                src="/photo.jpg"
                alt="Portrait de Allouan Ariel"
                className="portrait-background"
              />
            )}
            <div className="portrait-shade" />
            <div className="portrait-glow" />
          </div>

          <header className="site-header">
            <a className="brand" href="#home">
              AA<span>.</span>
            </a>

            <nav>
              <a href="#about">À propos</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#contact">Contact</a>
            </nav>

            <a className="header-contact" href="#contact">
              Parlons ensemble <span>↗️</span>
            </a>
          </header>

          <section className="hero-section" id="home">
            <div className="hero-content">
              <div className="hero-label">
                <span className="status-dot" />
                PORTFOLIO PERSONNEL — 2026
              </div>

              <h1>
                ALLouan
                <br />
                <span>ARIEL.</span>
              </h1>

              <div className="hero-description">
                <p>
                  Étudiant MIAGE · Développeur web en formation
                </p>
                <p>
                  Je transforme les idées en expériences numériques.
                </p>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  Explorer mon univers <span>↗️</span>
                </a>
                <a href="#contact" className="secondary-button">
                  Me contacter
                </a>
              </div>

              <div className="hero-signature">
                <span>ALLouan ARIEL</span>
                <span>BUILDING WHAT&apos;S NEXT.</span>
              </div>
            </div>

            <div className="hero-side-note">
              <span>01 / 04</span>
              <span>SCROLL TO DISCOVER</span>
            </div>

            <div className="hero-orbit floating-orbit">
              <span>CREATIVITY · CODE · INNOVATION ·</span>
            </div>
          </section>

          <section className="about-section section-reveal" id="about">
            <div className="section-index">01 — QUI SUIS-JE ?</div>

            <div className="about-layout">
              <div>
                <p className="eyebrow">BEHIND THE SCREEN</p>
                <h2>
                  Curieux
                  <br />
                  par nature.
                  <br />
                  <span>Créateur</span>
                  <br />
                  par ambition.
                </h2>
              </div>

              <div className="about-copy">
                <p className="large-copy">
                  Je suis Allouan Ariel, étudiant en MIAGE et passionné par
                  l'univers du numérique.
                </p>
                <p>
                  J'apprends à concevoir des interfaces, développer des
                  applications et imaginer des solutions qui rendent la
                  technologie plus utile et plus accessible.
                </p>
                <p>
                  Mon objectif : progresser, expérimenter et transformer
                  chaque nouvelle compétence en projet concret.
                </p>

                <div className="about-signature">
                  <span>ALLouan ARIEL</span>
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>
          </section>

          <section className="skills-section section-reveal" id="skills">
            <div className="section-index">02 — MON UNIVERS</div>

            <p className="eyebrow">WHAT I EXPLORE</p>
            <h2 className="section-heading">
              Des idées.
              <br />
              <span>Des possibilités.</span>
            </h2>

            <div className="skills-list">
              <div className="skill-item">
                <span>01</span>
                <div>
                  <h3>Développement web</h3>
                  <p>Interfaces, sites web et expériences numériques.</p>
                </div>
                <span className="skill-symbol">↗️</span>
              </div>

              <div className="skill-item">
                <span>02</span>
                <div>
                  <h3>Applications & systèmes</h3>
                  <p>Applications utiles, organisation et gestion.</p>
                </div>
                <span className="skill-symbol">↗️</span>
              </div>

              <div className="skill-item">
                <span>03</span>
                <div>
                  <h3>CRM & solutions digitales</h3>
                  <p>Outils numériques et systèmes connectés.</p>
                </div>
                <span className="skill-symbol">↗️</span>
              </div>

              <div className="skill-item">
                <span>04</span>
                <div>
                  <h3>IA & automatisation</h3>
                  <p>Découverte des outils intelligents et des workflows.</p>
                </div>
                <span className="skill-symbol">↗️</span>
              </div>
            </div>
          </section>

          <section className="projects-section section-reveal" id="projects">
            <div className="section-index">03 — SÉLECTION</div>

            <p className="eyebrow">SELECTED DIRECTIONS</p>
            <h2 className="section-heading">
              Ce que je
              <br />
              <span>construis.</span>
            </h2>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.number}>
                  <span className="project-number">{project.number}</span>

                  <div className="project-main">
                    <span className="project-category">
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <span className="project-arrow">↗️</span>
                </article>
              ))}
            </div>

            <p className="projects-note">
              Mon parcours est en construction. De nouvelles réalisations
              viendront enrichir cet espace.
            </p>
          </section>

          <section className="languages-section section-reveal">
            <div className="section-index">04 — LANGUES</div>

            <div className="language-content">
              <div>
                <p className="eyebrow">COMMUNICATION</p>
                <h2 className="section-heading">
                  Open to
                  <br />
                  <span>the world.</span>
                </h2>
              </div>

              <div className="language-list">
                <div>
                  <span>01</span>
                  <strong>Français</strong>
                  <small>Langue de communication</small>
                </div>
                <div>
                  <span>02</span>
                  <strong>Anglais</strong>
                  <small>En apprentissage</small>
                </div>
                <div>
                  <span>03</span>
                  <strong>Allemand</strong>
                  <small>En découverte</small>
                </div>
              </div>
            </div>
          </section>

             <section className="contact-section section-reveal" id="contact"> 
            <div className="section-index">05 — ET MAINTENANT ?</div>

            <p className="eyebrow">LET'S CREATE SOMETHING</p>
            <h2>
              Une idée ?
              <br />
              <span>Parlons-en.</span>
            </h2>

            <p className="contact-description">
              Une collaboration, une question ou un projet numérique ?
              Je serai ravi d'échanger avec vous.
            </p>
<form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const message = `NOUVEAU CONTACT - PORTFOLIO ALLOUAN ARIEL

Nom : ${data.get("name")}
Email : ${data.get("email")}
Sujet : ${data.get("subject")}

Message :
${data.get("message")}`;

    const url = `https://wa.me/2250576338023?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Votre nom complet"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Votre adresse e-mail"
    required
  />

  <select name="subject" required>
    <option value="">Choisir un sujet</option>
    <option value="Création de site web">Création de site web</option>
    <option value="Application mobile">Application mobile</option>
    <option value="Collaboration">Collaboration</option>
    <option value="Autre demande">Autre demande</option>
  </select>

  <textarea
    name="message"
    placeholder="Décrivez votre projet ou votre demande..."
    rows={5}
    required
  />

  <button type="submit">
    Envoyer sur WhatsApp ↗️
  </button>
</form>


            <a
              className="contact-button"
              href="https://wa.me/2250576338023"
              target="_blank"
              rel="noreferrer"
            >
              Me contacter sur WhatsApp <span>↗️</span>
            </a>

            <a
              className="email-link"
              href="mailto:allouanariel8@gmail.com"
            >
              allouanariel8@gmail.com
            </a>
          </section>

          <footer className="site-footer">
            <a className="brand footer-brand" href="#home">
              AA<span>.</span>
            </a>
            <p>ALLouan ARIEL — DIGITAL JOURNEY</p>
            <a href="#home">Retour en haut ↑</a>
          </footer>
        </main>
      )}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap");

        :root {
  --green: #00E5FF;
  --green-light: #8B5CF6;
  --dark: #080D18;
  --muted: rgba(230, 240, 255, 0.65);
  --purple: #8B5CF6;
  --cyan: #00E5FF;
}

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: var(--dark);
        }

        body {
          margin: 0;
          background: var(--dark);
          color: #f4fff8;
          font-family: "Manrope", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .portfolio-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 40%, #073b28 0%, transparent 48%),
            #030907;
        }

        .ambient-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 20%, rgba(0, 255, 145, 0.08), transparent 30%),
            radial-gradient(circle at 80% 75%, rgba(0, 255, 145, 0.07), transparent 35%);
        }

        .ambient-orb {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.22;
          background: #00e98a;
        }

        .ambient-orb.one {
          top: -180px;
          left: -150px;
        }

        .ambient-orb.two {
          right: -170px;
          bottom: -180px;
          background: #00a96b;
        }

        .ambient-orb.three {
          top: 42%;
          left: 43%;
          width: 250px;
          height: 250px;
          opacity: 0.12;
        }

        .noise-layer {
          position: absolute;
          inset: 0;
          opacity: 0.07;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .intro-screen {
          position: relative;
          z-index: 2;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 35px 6vw;
          perspective: 1200px;
        }

        .intro-top,
        .intro-bottom-note {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: rgba(225, 255, 239, 0.5);
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.18em;
        }

        .intro-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 65vh;
        }

        .intro-kicker,
        .eyebrow,
        .section-index,
        .hero-label,
        .project-category {
          font: 10px "DM Mono", monospace;
          letter-spacing: 0.22em;
          color: var(--green);
        }

        .intro-kicker {
          margin-bottom: 28px;
        }

        .intro-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          font-size: clamp(4rem, 13vw, 11rem);
          font-weight: 800;
          line-height: 0.88;
          letter-spacing: -0.09em;
          perspective: 1000px;
        }

        .intro-line {
          display: flex;
          justify-content: center;
          white-space: nowrap;
        }

        .intro-letter {
          display: inline-block;
          color: #f1fff7;
          will-change: transform, opacity;
          text-shadow: 0 0 0 transparent;
        }

        .second-line .intro-letter {
          color: var(--green-light);
        }

        .intro-caption {
          margin: 35px 0 28px;
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0.04em;
        }

        .welcome-button {
          display: inline-flex;
          align-items: center;
          gap: 35px;
          padding: 18px 23px;
          border: 1px solid rgba(100, 255, 175, 0.55);
          border-radius: 3px;
          background: rgba(61, 255, 155, 0.12);
          color: #dffff0;
          cursor: pointer;
          font: 11px "DM Mono", monospace;
          letter-spacing: 0.2em;
          box-shadow: 0 0 35px rgba(0, 255, 140, 0.12);
          transition: background 0.35s, box-shadow 0.35s, transform 0.35s;
        }

        .welcome-button:disabled {
          cursor: wait;
          opacity: 0.45;
        }

        .welcome-button:not(:disabled):hover {
          background: rgba(61, 255, 155, 0.25);
          box-shadow: 0 0 55px rgba(0, 255, 140, 0.35);
          transform: translateY(-4px);
        }

        .button-arrow {
          font-size: 18px;
        }

        .intro-bottom-note {
          align-items: center;
        }

        .main-site {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .portrait-scene {
          position: fixed;
          z-index: -2;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          perspective: 1200px;
        }

        .portrait-background {
          position: absolute;
          inset: -5%;
          width: 110%;
          height: 110%;
          object-fit: cover;
          object-position: center 28%;
          opacity: 0;
          filter: saturate(0.65) contrast(1.1);
          transform-origin: center;
          will-change: transform, opacity;
        }

        .portrait-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(2, 10, 7, 0.92), rgba(2, 10, 7, 0.58) 55%, rgba(2, 10, 7, 0.76)),
            linear-gradient(0deg, #030907 0%, transparent 65%);
        }

        .portrait-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 35%, rgba(0, 255, 145, 0.14), transparent 45%);
          mix-blend-mode: screen;
        }

        .site-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 28px 6vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(3, 9, 7, 0.2);
          backdrop-filter: blur(14px);
        }

        .brand {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.08em;
        }

        .brand span {
          color: var(--green);
        }

        .site-header nav {
          display: flex;
          gap: 32px;
          color: rgba(244, 255, 248, 0.7);
          font-size: 11px;
        }

        .site-header nav a,
        .site-footer a {
          transition: color 0.3s;
        }

        .site-header nav a:hover,
        .site-footer a:hover {
          color: var(--green);
        }

        .header-contact {
          padding: 12px 17px;
          border: 1px solid rgba(93, 255, 173, 0.45);
          color: var(--green-light);
          font-size: 11px;
        }

        .header-contact span {
          margin-left: 12px;
        }

        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: 150px 12vw 100px;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          opacity: 0;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: var(--green);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--green);
          animation: pulse 1.7s infinite;
        }

        .hero-section h1 {
          margin: 35px 0 28px;
          font-size: clamp(5rem, 12vw, 11rem);
          line-height: 0.82;
          letter-spacing: -0.105em;
          font-weight: 800;
        }

        .hero-section h1 span {
          color: var(--green);
        }

        .hero-description {
          color: rgba(240, 255, 246, 0.75);
          font-size: 14px;
          line-height: 1.9;
        }

        .hero-description p {
          margin: 0;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 35px;
        }

        .primary-button,
        .secondary-button,
        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          padding: 16px 20px;
          font-size: 11px;
          transition: 0.35s ease;
        }

        .primary-button,
        .contact-button {
          color: #042013;
          background: var(--green);
        }

        .primary-button:hover,
        .contact-button:hover {
          background: #c4ffe0;
          box-shadow: 0 0 35px rgba(93, 255, 173, 0.25);
          transform: translateY(-4px);
        }

        .secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: white;
        }

        .secondary-button:hover {
          border-color: var(--green);
          color: var(--green);
        }

        .hero-signature {
          display: flex;
          gap: 25px;
          margin-top: 75px;
          color: rgba(235, 255, 244, 0.55);
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.18em;
        }

        .hero-side-note {
          position: absolute;
          right: 6vw;
          bottom: 55px;
          display: flex;
          flex-direction: column;
          gap: 13px;
          color: rgba(255, 255, 255, 0.5);
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.16em;
          writing-mode: vertical-rl;
        }

        .hero-orbit {
          position: absolute;
          right: 11%;
          top: 36%;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(93, 255, 173, 0.25);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(177, 255, 212, 0.65);
          font: 8px "DM Mono", monospace;
          letter-spacing: 0.15em;
          box-shadow: 0 0 55px rgba(0, 255, 145, 0.08);
        }

        .section-reveal {
          position: relative;
          padding: 125px 12vw;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(180deg, rgba(3, 9, 7, 0.55), rgba(3, 9, 7, 0.88));
        }

        .section-index {
          margin-bottom: 70px;
          color: rgba(93, 255, 173, 0.7);
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 12vw;
        }

        .about-layout h2,
        .section-heading {
          margin: 25px 0 0;
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 0.98;
          letter-spacing: -0.08em;
        }

        .about-layout h2 span,
        .section-heading span {
          color: var(--green);
        }

        .about-copy {
          padding-top: 35px;
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
        }

        .about-copy p {
          margin-bottom: 25px;
        }

        .about-copy .large-copy {
          color: #f3fff8;
          font-size: 19px;
          line-height: 1.65;
        }

        .about-signature {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 40px;
          color: var(--green);
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.14em;
        }

        .skills-section {
          background: rgba(1, 12, 8, 0.78);
        }

        .skills-section .section-heading,
        .projects-section .section-heading {
          margin-bottom: 75px;
        }

        .skills-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .skill-item {
          display: grid;
          grid-template-columns: 60px 1fr 40px;
          gap: 20px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          transition: padding 0.4s, color 0.4s;
        }

        .skill-item:hover {
          padding-left: 18px;
          color: var(--green);
        }

        .skill-item > span:first-child,
        .skill-symbol {
          color: var(--green);
          font: 11px "DM Mono", monospace;
        }

        .skill-item h3 {
          margin: 0 0 8px;
          font-size: clamp(19px, 3vw, 28px);
          font-weight: 500;
        }

        .skill-item p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
        }

        .skill-symbol {
          font-size: 22px;
          text-align: right;
        }

        .project-list {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .project-row {
          display: grid;
          grid-template-columns: 60px 1fr 40px;
          gap: 20px;
          align-items: center;
          padding: 38px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: padding 0.4s, background 0.4s;
        }

        .project-row:hover {
          padding-left: 20px;
          background: rgba(93, 255, 173, 0.035);
        }

        .project-number {
          color: var(--green);
          font: 11px "DM Mono", monospace;
        }

        .project-category {
          font-size: 9px;
        }

        .project-main h3 {
          margin: 10px 0;
          font-size: clamp(25px, 4vw, 44px);
          font-weight: 500;
          letter-spacing: -0.05em;
        }

        .project-main p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .project-arrow {
          color: var(--green);
          font-size: 25px;
          transition: transform 0.3s;
        }

        .project-row:hover .project-arrow {
          transform: translate(5px, -5px);
        }

        .projects-note {
          margin-top: 35px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .languages-section {
          background: rgba(1, 12, 8, 0.78);
        }

        .language-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10vw;
        }

        .language-list {
          border-top: 1px solid rgba(255, 255, 255, 0.17);
        }

        .language-list > div {
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 5px 15px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.17);
        }

        .language-list span {
          grid-row: span 2;
          color: var(--green);
          font: 10px "DM Mono", monospace;
        }

        .language-list strong {
          font-size: 17px;
          font-weight: 500;
        }

        .language-list small {
          color: var(--muted);
          font-size: 10px;
        }

        .contact-section {
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          background:
            radial-gradient(ellipse at 70% 70%, rgba(0, 255, 145, 0.12), transparent 45%),
            rgba(3, 9, 7, 0.88);
        }

        .contact-section h2 {
          margin: 25px 0;
          font-size: clamp(4rem, 10vw, 9rem);
          line-height: 0.9;
          letter-spacing: -0.09em;
        }

        .contact-section h2 span {
          color: var(--green);
        }

        .contact-description {
          max-width: 480px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .email-link {
          margin-top: 22px;
          color: var(--green-light);
          font: 11px "DM Mono", monospace;
        }

        .site-footer {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 35px 6vw;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          background: #030907;
          color: var(--muted);
          font: 9px "DM Mono", monospace;
          letter-spacing: 0.12em;
        }

        .footer-brand {
          color: white;
          font-family: "Manrope", sans-serif;
          font-size: 25px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 15px var(--green);
          }
          50% {
            opacity: 0.45;
            box-shadow: 0 0 3px var(--green);
          }
        }

        @media (max-width: 760px) {
          .intro-screen {
            padding: 25px 6vw;
          }

          .intro-top,
          .intro-bottom-note {
            font-size: 7px;
            letter-spacing: 0.1em;
          }

          .intro-name {
            font-size: clamp(3.5rem, 16vw, 7rem);
          }

          .intro-caption {
            max-width: 280px;
            font-size: 12px;
            line-height: 1.8;
          }

          .site-header {
            padding: 20px 6vw;
          }

          .site-header nav {
            display: none;
          }

          .header-contact {
            padding: 10px 12px;
            font-size: 9px;
          }

          .hero-section {
            min-height: 100svh;
            padding: 145px 7vw 100px;
          }

          .hero-section h1 {
            font-size: clamp(4.5rem, 17vw, 7rem);
          }

          .hero-orbit {
            width: 105px;
            height: 105px;
            right: 5%;
            top: 18%;
            opacity: 0.5;
            font-size: 6px;
          }

          .hero-signature {
            flex-direction: column;
            gap: 8px;
            margin-top: 50px;
          }

          .hero-side-note {
            right: 5vw;
            bottom: 25px;
          }

          .section-reveal {
            padding: 85px 7vw;
          }

          .section-index {
            margin-bottom: 45px;
          }

          .about-layout,
          .language-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-layout h2,
          .section-heading {
            font-size: clamp(3.5rem, 14vw, 5rem);
          }

          .about-copy {
            padding-top: 5px;
          }

          .skill-item,
          .project-row {
            grid-template-columns: 35px 1fr 25px;
            gap: 10px;
          }

          .skill-item {
            padding: 24px 0;
          }

          .project-row {
            padding: 30px 0;
          }

          .project-main p {
            max-width: 280px;
          }

          .contact-section h2 {
            font-size: clamp(4rem, 17vw, 6rem);
          }

          .site-footer {
            flex-wrap: wrap;
            padding: 28px 7vw;
            font-size: 8px;
          }

          .portrait-background {
            object-position: 58% center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}