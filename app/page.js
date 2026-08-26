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
          <p>Professional Photo</p>
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
          <p className="muted">October 2024 – Present</p>

          <ul>
            <li>Food preparation and kitchen operations.</li>
            <li>Team collaboration in a fast-paced environment.</li>
            <li>Maintaining food quality and operational standards.</li>
            <li>Time management and organization.</li>
          </ul>
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
        <h2>Certifications & Training</h2>

        <div className="card">
          <ul>
            <li>AWS Fundamentals – Udemy</li>
            <li>SQL – Udemy</li>
            <li>Base24 Training</li>
            <li>IT Security Training</li>
            <li>Microcomputer Operator Certification</li>
          </ul>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section">
        <p className="tag">LANGUAGES</p>
        <h2>Languages</h2>

        <div className="skills">
          <span>Spanish — Native</span>
          <span>English — Professional Working Proficiency</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="tag">CONTACT</p>
        <h2>Let's Connect</h2>

        <p>
          I am open to opportunities in IT Support, Service Desk,
          IT Operations, Technical Support, Cloud Operations, and related
          technology roles.
        </p>

        <p>
          <strong>Location:</strong> Miramar, Florida
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:reguez.acosta@gmail.com">
            reguez.acosta@gmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/ronney-rodriguez-acosta-2233a2154"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my LinkedIn profile
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Ronney Rodríguez Acosta · IT Professional Portfolio
      </footer>
    </main>
  );
}
