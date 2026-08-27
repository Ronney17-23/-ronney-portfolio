import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <strong>RONNEY</strong>

        <div>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
          <a href="#journey">My Journey</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="tag">IT OPERATIONS · SERVICE DESK · TECH SUPPORT</p>

          <h1>
            Hi, I'm <span>Ronney Rodríguez Acosta</span>.
          </h1>

          <h2>
            IT Operations & Service Desk Professional
          </h2>

          <p className="intro">
            IT professional with 5+ years of experience supporting
            mission-critical banking systems, troubleshooting technical
            incidents, monitoring infrastructure, managing backups, and
            working with cloud technologies.
          </p>

          <p className="intro">
            I am currently building my professional career in the United
            States while continuing to strengthen my technical skills and
            develop projects focused on technology, automation, and process
            improvement.
          </p>

          <div className="buttons">
            <a href="#experience" className="primary">
              View My Experience
            </a>
              <a href="/journey" className="secondary">
               My Professional Journey
            </a>
            <a
              href="/Ronney_Rodriguez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
             View Resume
            </a>

            <a href="#contact" className="secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="photo">
          <img
           src="/ronney.jpg"
           alt="Ronney Rodríguez Acosta"
          />
        </div>
        </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="tag">ABOUT ME</p>
        <h2>My Professional Story</h2>

        <p>
          I am an IT Operations and Service Desk professional with more than
          five years of experience working in technology environments,
          particularly supporting critical banking infrastructure in
          Argentina.
        </p>

        <p>
          During my time at Red Link S.A., I worked with system monitoring,
          incident resolution, Linux servers, SQL, AWS services, Azure Backup,
          Control-M, backup and recovery operations, documentation, and
          production support.
        </p>

        <p>
          My professional experience has taught me how to work under pressure,
          analyze technical problems, collaborate with different teams, and
          find practical solutions that improve daily operations.
        </p>

        <p>
          After moving to the United States, I continued working in demanding
          customer-service and hospitality environments while pursuing my goal
          of returning to the technology industry and continuing my
          professional development in IT.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <p className="tag">PROFESSIONAL EXPERIENCE</p>
        <h2>My Experience</h2>

        <div className="card">
          <h3>Information Security & Operations Analyst</h3>
          <p className="muted">
            Red Link S.A. · Buenos Aires, Argentina
          </p>
          <p className="muted">May 2018 – February 2024</p>

          <ul>
            <li>
              Supported mission-critical banking infrastructure used by
              financial institutions across Argentina.
            </li>

            <li>
              Monitored critical banking systems to maintain high
              availability and operational stability.
            </li>

            <li>
              Investigated, analyzed, and resolved production incidents.
            </li>

            <li>
              Managed enterprise backup and recovery operations using
              Azure Backup.
            </li>

            <li>
              Supported Linux servers and AWS cloud services.
            </li>

            <li>
              Monitored scheduled jobs using Control-M.
            </li>

            <li>
              Executed SQL queries for data validation and troubleshooting.
            </li>

            <li>
              Managed backup media inventory and data integrity.
            </li>

            <li>
              Collaborated with infrastructure, security, and operations teams.
            </li>

            <li>
              Documented incidents, procedures, and operational processes.
            </li>

            <li>
              Participated in 24/7 operational support.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Busser</h3>
          <p className="muted">MILA Omakase · Miami, Florida</p>
          <p className="muted">February 2025 – Present</p>

          <ul>
            <li>
              Support servers in a high-volume luxury restaurant environment.
            </li>

            <li>
              Help provide an exceptional customer experience.
            </li>

            <li>
              Maintain dining room organization and operational efficiency.
            </li>

            <li>
              Work effectively under pressure in a fast-paced environment.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Cook</h3>
          <p className="muted">
            AC Marriott Fort Lauderdale Airport · Florida
          </p>
          <p className="muted">October 2024 – February 2026</p>

          <ul>
            <li>Food preparation and kitchen operations.</li>
            <li>Team collaboration in a fast-paced environment.</li>
            <li>Maintaining food quality and operational standards.</li>
            <li>Time management and organization.</li>
          </ul>
        </div>
      </section>
  
  {/* PROFESSIONAL GALLERY */}
<section className="section">
  <p className="tag">PROFESSIONAL GALLERY</p>
  <h2>Moments From My Career</h2>

  <p>
    A visual look at different stages of my professional journey across
    technology and hospitality.
  </p>

  <div className="professional-gallery">
    <a
      href="/Red-Link-Despedida-de-ano-2019.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-card"
    >
      <img
        src="/Red-Link-Despedida-de-ano-2019.jpeg"
        alt="Red Link professional team event in 2019"
      />

      <div className="gallery-info">
        <span>RED LINK · 2019</span>
        <h3>Team Celebration</h3>
        <p>
          One of the many moments shared with colleagues during my years
          working in financial technology operations at Red Link.
        </p>
      </div>
    </a>

    <a
      href="/Despues-Pandemia-Red-Link-sep-2021.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-card"
    >
      <img
        src="/Despues-Pandemia-Red-Link-sep-2021.jpeg"
        alt="Red Link team after the pandemic in 2021"
      />

      <div className="gallery-info">
        <span>RED LINK · 2021</span>
        <h3>Returning Together</h3>
        <p>
          A team moment after the pandemic period, representing
          collaboration, resilience, and continuity in a critical
          technology environment.
        </p>
      </div>
    </a>

    <a
      href="/Evento-Le-Meridien-Febrero-2025.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-card"
    >
      <img
        src="/Evento-Le-Meridien-Febrero-2025.jpeg"
        alt="Banquet event at Le Meridien in February 2025"
      />

      <div className="gallery-info">
        <span>LE MERIDIEN · 2025</span>
        <h3>Banquet Operations</h3>
        <p>
          Experience supporting banquet preparation and event operations
          in a fast-paced hospitality environment.
        </p>
      </div>
    </a>

    <a
      href="/Mariott-AC-Despedida-Febrero-2026.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-card"
    >
      <img
        src="/Mariott-AC-Despedida-Febrero-2026.jpeg"
        alt="AC Marriott team farewell in February 2026"
      />

      <div className="gallery-info">
        <span>AC MARRIOTT · 2026</span>
        <h3>Closing a Professional Chapter</h3>
        <p>
          A farewell moment with colleagues at AC Marriott Fort Lauderdale
          Airport after completing an important stage of my hospitality
          experience.
        </p>
      </div>
    </a>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="tag">TECHNICAL SKILLS</p>
        <h2>Technologies & Skills</h2>

        <div className="skills">
          <span>Technical Support</span>
          <span>Service Desk</span>
          <span>Incident Management</span>
          <span>Troubleshooting</span>
          <span>Windows</span>
          <span>Linux</span>
          <span>AWS</span>
          <span>Azure Backup</span>
          <span>SQL</span>
          <span>Control-M</span>
          <span>Backup & Recovery</span>
          <span>System Monitoring</span>
          <span>Documentation</span>
          <span>Process Improvement</span>
          <span>Customer Service</span>
          <span>Team Collaboration</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="tag">PROJECTS & ACHIEVEMENTS</p>
        <h2>Projects</h2>

        <div className="card">
          <h3>Digital Tape Inventory Management System</h3>

          <p>
            Designed and implemented an internal digital inventory system
            while working at Red Link S.A. to replace a manual paper-based
            tape management process.
          </p>

          <p>
            The application digitally replicated the physical tape library
            and allowed barcode scanning to quickly identify each tape's
            storage location.
          </p>

          <ul>
            <li>Reduced manual inventory work.</li>
            <li>Improved backup media tracking.</li>
            <li>Increased inventory accuracy.</li>
            <li>Reduced tape retrieval time.</li>
            <li>Eliminated paper-based location labels.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Personal Portfolio Website</h3>

          <p>
            Designed and developed this personal portfolio to showcase my
            professional experience, technical skills, projects, and career
            development in the technology industry.
          </p>

          <div className="skills">
            <span>GitHub</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
<section id="certifications" className="section">
  <p className="tag">PROFESSIONAL DEVELOPMENT</p>
  <h2>Certifications & Education</h2>

  <p>
    A selection of certifications and training that reflect my continuous
    professional development in technology, cybersecurity, programming,
    education, and other areas of learning.
  </p>

  <div className="certificate-grid">
    <a
      href="/Certificado-2015.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Certificado-2015.jpg"
        alt="Microcomputer Operator Certification"
      />
      <div>
        <span>2015</span>
        <h3>Microcomputer Operator</h3>
        <p>Joven Club de Computación y Electrónica</p>
      </div>
    </a>

    <a
      href="/Certificado-High-School-Cuba-2016.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Certificado-High-School-Cuba-2016.jpeg"
        alt="High School Diploma"
      />
      <div>
        <span>2016</span>
        <h3>High School Diploma</h3>
        <p>Adult Education · Cuba</p>
      </div>
    </a>

    <a
      href="/Certificado-2017.png"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Certificado-2017.png"
        alt="Information Technology Security Training"
      />
      <div>
        <span>2017</span>
        <h3>Information Technology Security</h3>
        <p>Banco de Crédito y Comercio</p>
      </div>
    </a>

    <a
      href="/Curso-Cocina-2014.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Curso-Cocina-2014.jpeg"
        alt="Culinary Arts Certification"
      />
      <div>
        <span>2014</span>
        <h3>Culinary Arts</h3>
        <p>Federación de Asociaciones Culinarias de Cuba</p>
      </div>
    </a>

    <a
      href="/Curso-Udemy-Agus-2022.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Curso-Udemy-Agus-2022.jpeg"
        alt="Programming Introduction Course"
      />
      <div>
        <span>2022</span>
        <h3>Introduction to Programming</h3>
        <p>Udemy</p>
      </div>
    </a>

    <a
      href="/Curso-Udemy-2022.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Curso-Udemy-2022.jpeg"
        alt="Linux Essentials Certification"
      />
      <div>
        <span>2022</span>
        <h3>Linux Essentials</h3>
        <p>Udemy</p>
      </div>
    </a>

    <a
      href="/Curso-oct-2022.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Curso-oct-2022.jpeg"
        alt="API and Web Service Introduction"
      />
      <div>
        <span>2022</span>
        <h3>API & Web Service Introduction</h3>
        <p>Udemy</p>
      </div>
    </a>

    <a
      href="/Curso-Nexus-jun-2026.jpeg"
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-card"
    >
      <img
        src="/Curso-Nexus-jun-2026.jpeg"
        alt="CyberSec First Responder Advanced"
      />
      <div>
        <span>2026</span>
        <h3>CyberSec First Responder Advanced</h3>
        <p>CertNexus · Coursera</p>
      </div>
    </a>
  </div>
</section>

      {/* FOOTER */}
      <footer>
        © 2026 Ronney Rodríguez Acosta · IT Professional Portfolio
      </footer>
    </main>
  );
}
