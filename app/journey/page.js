import Link from "next/link";

export default function Journey() {
  const chapters = [
    {
      number: "01",
      period: "1996 — 2014",
      title: "My Roots",
      content: (
        <>
          <p>
            I was born on November 17, 1996, in Ciego de Ávila Province,
            Cuba, and grew up in the small town of Orlando González, in
            the municipality of Majagua. I come from a humble,
            hardworking, and close-knit family.
          </p>

          <p>
            My father worked as a poultry veterinarian, and my mother
            worked in business administration. From an early age, they
            taught me the values of honesty, discipline, responsibility,
            and perseverance. Those principles became the foundation of
            both my personal life and my professional career.
          </p>

          <p>
            I completed my elementary education at Máximo Gómez
            Elementary School and my secondary education at Orlando
            González School.
          </p>

          <p>
            After graduating from middle school, I enrolled at Camilo
            Cienfuegos Military School in Ciego de Ávila to begin my
            pre-university studies. During my second year, however, I
            realized that a military career was not aligned with my goals
            or the future I envisioned for myself.
          </p>

          <p>
            In November 2014, I made the difficult decision to leave that
            path and begin searching for a new direction.
          </p>

          <p className="journey-highlight">
            That was the first major decision of my life.
          </p>
        </>
      ),
    },

    {
      number: "02",
      period: "2014 — 2015",
      title: "Finding a New Path",
      content: (
        <>
          <p>
            Leaving military school created uncertainty, but it also
            opened new opportunities.
          </p>

          <p>
            Despite the challenges I faced in continuing my education
            through the traditional system, I refused to give up. Thanks
            to my mother&apos;s determination and support, I enrolled in
            an adult education program and successfully earned my high
            school diploma.
          </p>

          <p>
            During this period, I focused on learning as much as possible.
            I completed courses in Computer Systems and Culinary Arts
            while also spending time in an electronics repair workshop,
            where I learned the fundamentals of electronics and developed
            strong problem-solving skills.
          </p>

          <p className="journey-highlight">
            Those experiences taught me that continuous learning would
            become one of the defining characteristics of my life.
          </p>
        </>
      ),
    },

    {
      number: "03",
      period: "2015 — 2016",
      title: "My First Professional Experience",
      content: (
        <>
          <p>
            At the end of 2015, I received my first professional
            opportunity working at the Identification and Government
            Services Office in Majagua.
          </p>

          <p>
            My responsibilities included customer service and processing
            official documents such as national identification cards,
            driver&apos;s licenses, passports, and immigration-related
            certificates.
          </p>

          <p>
            During this experience, I developed valuable skills in
            customer service, teamwork, organization, attention to detail,
            and responsibility.
          </p>

          <p>
            Although I truly appreciated the opportunity and the
            exceptional colleagues I worked alongside, I had a clear
            long-term goal: to build my future abroad. Once I was able to
            move forward with my migration plans, I decided to continue
            pursuing new opportunities.
          </p>
        </>
      ),
    },

    {
      number: "04",
      period: "2016 — 2017",
      title: "Banking Experience",
      content: (
        <>
          <p>
            At the end of 2016, I joined Banco de Crédito y Comercio
            (BANDEC) as a bank teller.
          </p>

          <p>
            During this period, I received professional training in
            cybersecurity, banking operations, cash management, foreign
            currency exchange, deposits, wire transfers, and financial
            customer service.
          </p>

          <p>
            Working in banking strengthened my discipline, accuracy,
            accountability, and ability to work under strict operational
            procedures.
          </p>

          <p>
            In March 2017, I resigned from my position to pursue one of
            the biggest goals of my life: immigrating to Argentina.
          </p>

          <p className="journey-highlight">
            At just 19 years old, I packed my suitcase and started over
            in a completely unfamiliar country.
          </p>
        </>
      ),
    },

    {
      number: "05",
      period: "2017",
      title: "Starting Over in Argentina",
      content: (
        <>
          <p>
            Arriving in Argentina meant starting from zero.
          </p>

          <p>
            Like many immigrants, my first days were filled with
            uncertainty and adaptation. After a brief experience working
            in a restaurant, I found an opportunity at Tres Estrellas
            Bakery.
          </p>

          <p>
            Initially, the owner wanted to hire me as a sales
            representative.
          </p>

          <p>
            I remember telling him honestly that I had no sales experience
            and that I couldn&apos;t promise results I wasn&apos;t sure I
            could achieve. I explained that my background was in banking
            and customer service.
          </p>

          <p>A week later, he called me back.</p>

          <p>
            Instead of offering me the sales position, he hired me as a
            cashier.
          </p>

          <p className="journey-highlight">
            That experience reinforced one of the values that has guided
            my entire career: honesty always creates opportunities.
          </p>

          <p>
            I worked there for nearly a year, strengthening my customer
            service skills, responsibility, commitment, and
            professionalism.
          </p>

          <p>
            Although I enjoyed the job, I knew it would not provide the
            professional growth or long-term stability I was looking for,
            so I continued searching for new opportunities.
          </p>
        </>
      ),
    },

    {
      number: "06",
      period: "2018 — 2024",
      title: "Building My Career in Technology",
      featured: true,
      content: (
        <>
          <p>
            In March 2018, I received the opportunity that transformed my
            professional career.
          </p>

          <p>
            I joined Red Link S.A., one of Argentina&apos;s leading
            technology companies providing financial technology solutions
            to the country&apos;s banking system.
          </p>

          <p>
            I began working in the Operations Center, where I monitored
            critical systems, supervised operational indicators, handled
            incident escalation procedures, supported banking processes,
            and prepared operational reports.
          </p>

          <p>
            After approximately one year, I was promoted to the
            Information Integrity and Data Protection Department.
          </p>

          <p>
            My responsibilities included managing, classifying, and
            preserving critical data backups related to banking
            transactions, technology projects, and operational systems.
          </p>

          <p>
            During this period, I worked with Amazon Web Services (AWS)
            and participated in data protection and storage processes.
          </p>

          <div className="achievement">
            <span>KEY ACHIEVEMENT</span>

            <h3>Digital Inventory & Barcode Tracking System</h3>

            <p>
              One of my proudest accomplishments was designing and
              implementing a digital inventory and barcode tracking system
              that significantly improved the company&apos;s backup tape
              management process.
            </p>

            <p>
              The new system reduced search times, simplified inventory
              management, and lowered paper and printing costs.
            </p>
          </div>

          <p>
            Throughout my six years at Red Link, I continued expanding my
            technical knowledge by completing courses and certifications
            related to technology, infrastructure, cloud computing, and
            professional development.
          </p>

          <p>
            At the end of 2023, I made another life-changing decision.
          </p>

          <p>
            My parents were still living in Cuba, and I wanted to be
            closer to them so I could provide greater support. For that
            reason, I decided to begin a new chapter in the United States.
          </p>

          <p className="journey-highlight">
            I arrived in February 2024.
          </p>
        </>
      ),
    },

    {
      number: "07",
      period: "2024 — PRESENT",
      title: "A New Beginning in the United States",
      content: (
        <>
          <p>
            For the third time in my life, I had to start over.
          </p>

          <p>
            Between February and June 2024, I worked in residential
            construction, gaining hands-on experience in interior
            remodeling, painting, assembly work, and home repairs.
          </p>

          <p>
            In June 2024, I joined a Mexican restaurant, where I worked as
            both a butcher and grill cook. During that time, I learned
            meat preparation, professional cutting techniques, food safety
            standards, and grilling methods.
          </p>

          <p>
            Although I appreciated everything I learned, I decided to move
            on because I was looking for better long-term career
            opportunities and improved working conditions.
          </p>

          <p>
            In October 2024, I joined the AC Marriott Hotel as a hot and
            cold line cook. At the same time, I also worked part-time in
            the banquet department at Le Méridien Hotel.
          </p>

          <p>
            Those positions allowed me to strengthen my culinary skills
            while learning food preparation, inventory control, food
            rotation, banquet operations, event production, teamwork, and
            working efficiently under pressure.
          </p>

          <p>
            In February 2026, I accepted a new opportunity as a Busser at
            MILA Restaurant in Miami Beach, where I currently work.
          </p>

          <p>
            My responsibilities include supporting the dining room team by
            preparing service stations, organizing dining areas, assisting
            servers, delivering clean tableware, serving water, resetting
            tables, and ensuring an exceptional guest experience.
          </p>

          <p>
            Although I value everything I have learned in the hospitality
            industry, I know this is only one step in a much larger
            journey.
          </p>

          <p>
            While working full-time, I continue studying programming,
            artificial intelligence, cloud technologies, and software
            development.
          </p>

          <p className="journey-highlight">
            My long-term goal is to return to the technology industry,
            combining my technical knowledge with the resilience,
            adaptability, and leadership skills I have developed
            throughout my journey.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="journey-page">
      <nav className="nav">
        <Link href="/">
          <strong>RONNEY</strong>
        </Link>

        <div>
          <Link href="/">Home</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <section className="journey-hero">
        <p className="tag">MY PROFESSIONAL JOURNEY</p>

        <h1>
          From a Small Town in Cuba to Building a{" "}
          <span>Future Without Borders.</span>
        </h1>

        <p className="journey-intro">
          This is more than a timeline of jobs and studies. It is the
          story of the decisions, challenges, opportunities, and lessons
          that have shaped the professional I am today.
        </p>

        <div className="journey-summary">
          <div>
            <strong>3</strong>
            <span>Countries</span>
          </div>

          <div>
            <strong>5+</strong>
            <span>Years in IT</span>
          </div>

          <div>
            <strong>2018</strong>
            <span>Technology Career</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Continuous Learning</span>
          </div>
        </div>
      </section>

      <section className="journey-timeline">
        {chapters.map((chapter) => (
          <article
            className={`journey-chapter ${
              chapter.featured ? "featured-chapter" : ""
            }`}
            key={chapter.number}
          >
            <div className="chapter-marker">
              <span>{chapter.number}</span>
            </div>

            <div className="chapter-content">
              <p className="chapter-period">{chapter.period}</p>
              <h2>{chapter.title}</h2>
              {chapter.content}
            </div>
          </article>
        ))}
      </section>

      <section className="epilogue">
        <p className="tag">EPILOGUE</p>
        <h2>My Story Is Still Being Written.</h2>

        <div className="epilogue-text">
          <p>
            When I look back at my life, I don&apos;t simply see
            different jobs.
          </p>

          <p>I see challenges that became opportunities.</p>

          <p>
            I see three countries, countless lessons, and continuous
            personal growth.
          </p>

          <p>
            Every position I&apos;ve held has taught me something
            valuable. Every manager, coworker, and mentor has contributed
            to the professional I am today.
          </p>

          <p>
            What defines me is not the title I hold. It is my ability to
            adapt, learn quickly, work with integrity, and continuously
            improve.
          </p>

          <p>
            I firmly believe that success is not determined by where we
            begin, but by our willingness to keep learning, embrace
            change, and never stop moving forward.
          </p>

          <p className="final-quote">
            My story is still being written.
            <br />
            <span>And I truly believe that my best chapters are yet to come.</span>
          </p>
        </div>

        <div className="buttons journey-actions">
          <Link href="/" className="primary">
            Back to Portfolio
          </Link>

          <Link href="/#contact" className="secondary">
            Contact Me
          </Link>

          <a
            href="/Ronney_Rodriguez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            View Resume
          </a>
        </div>
      </section>

      <footer>
        © 2026 Ronney Rodríguez Acosta · Professional Journey
      </footer>
    </main>
  );
}
