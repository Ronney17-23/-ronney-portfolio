import "./globals.css";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <strong>RONNEY</strong>

        <div>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="tag">PORTAFOLIO PROFESIONAL</p>

          <h1>
            Hola, soy <span>Ronney</span>.
          </h1>

          <h2>
            Construyendo mi futuro profesional en tecnología.
          </h2>

          <p className="intro">
            Bienvenido a mi portafolio. Aquí comparto mi trayectoria
            laboral, experiencia, habilidades, proyectos y mi evolución
            profesional hacia el mundo de la tecnología.
          </p>

          <div className="buttons">
            <a href="#sobre-mi" className="primary">
              Conoce mi historia
            </a>

            <a href="#experiencia" className="secondary">
              Ver experiencia
            </a>
          </div>
        </div>

        <div className="photo">
          <p>Tu foto profesional</p>
        </div>
      </section>

      <section id="sobre-mi" className="section">
        <p className="tag">MI HISTORIA</p>
        <h2>Sobre mí</h2>

        <p>
          Próximamente colocaré aquí mi autobiografía laboral,
          contando mi trayectoria profesional, las experiencias
          que me han formado y mis objetivos para el futuro.
        </p>
      </section>

      <section id="experiencia" className="section">
        <p className="tag">TRAYECTORIA</p>
        <h2>Experiencia laboral</h2>

        <div className="card">
          <h3>Busser</h3>
          <p className="muted">Experiencia actual</p>

          <p>
            Trabajo en equipo, organización del área de servicio,
            apoyo a las operaciones del restaurante y atención
            orientada a ofrecer una excelente experiencia al cliente.
          </p>
        </div>
      </section>

      <section id="habilidades" className="section">
        <p className="tag">HABILIDADES</p>
        <h2>Lo que aporto</h2>

        <div className="skills">
          <span>Trabajo en equipo</span>
          <span>Atención al cliente</span>
          <span>Organización</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <p className="tag">CONTACTO</p>
        <h2>Hablemos</h2>

        <p>
          Estoy abierto a nuevas oportunidades profesionales,
          proyectos y conexiones.
        </p>
      </section>

      <footer>
        © 2026 Ronney · Portafolio Profesional
      </footer>
    </main>
  );
}
