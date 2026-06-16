import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  GraduationCap,
  Languages,
  Link,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";

const contactItems = [
  { icon: Phone, label: "+49 176 77816046", href: "tel:+4917677816046" },
  {
    icon: Mail,
    label: "vladyslavmasokha2006@gmail.com",
    href: "mailto:vladyslavmasokha2006@gmail.com",
  },
  {
    icon: Code2,
    label: "github.com/vladyslav-masokha",
    href: "https://github.com/vladyslav-masokha",
  },
  {
    icon: Link,
    label: "LinkedIn Profil",
    href: "https://www.linkedin.com/in/vladyslav-masokha-0a605a290",
  },
];

const technicalSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
];

const softSkills = [
  "Sicherer Umgang mit dem Computer",
  "Kommunikation",
  "Zeitmanagement",
  "Organisation",
  "Lernbereitschaft",
];

const languages = [
  ["Ukrainisch", "Muttersprache"],
  ["Russisch", "fließend"],
  ["Englisch", "A1"],
  ["Deutsch", "A1, Integrationskurs laufend"],
];

const jobs = [
  {
    title: "Specialist",
    company: 'Private Joint Stock Company "Kyivstar"',
    period: "April 2025 - September 2025",
    details: [
      "Kunden- und serviceorientierte Bearbeitung von Anfragen.",
      "Arbeit mit internen Systemen und strukturierte Dokumentation.",
    ],
  },
  {
    title: "Mitarbeiter im Restaurantbetrieb",
    company: "McDonald's Ukraine LTD",
    period: "August 2024 - März 2025",
    details: [
      "Unterstützung im täglichen Restaurantbetrieb.",
      "Serviceorientierte Zusammenarbeit im Team.",
    ],
  },
];

function Section({ icon: Icon, title, children }) {
  return (
    <section className="section" aria-labelledby={title.toLowerCase()}>
      <div className="section-title">
        <Icon aria-hidden="true" />
        <h2 id={title.toLowerCase()}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="identity">
          <div className="avatar" aria-hidden="true">
            VM
          </div>
          <p className="eyebrow">Lebenslauf</p>
          <h1>Vladyslav Masokha</h1>
          <p className="role">Trainee Frontend Developer</p>
        </div>

        <div className="contact-list" aria-label="Kontakt">
          {contactItems.map(({ icon: Icon, label, href }) => (
            <a className="contact-item" href={href} key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <Section icon={Code2} title="Fachliche Kenntnisse">
          <div className="skill-grid">
            {technicalSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Section>

        <Section icon={Sparkles} title="Soft Skills">
          <ul className="clean-list compact-list">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Section>

        <Section icon={Languages} title="Sprachen">
          <dl className="language-list">
            {languages.map(([language, level]) => (
              <div key={language}>
                <dt>{language}</dt>
                <dd>{level}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </aside>

      <div className="content">
        <section className="intro" aria-labelledby="profil">
          <div>
            <p className="eyebrow">Profil</p>
            <h2 id="profil">Motivierter Berufseinsteiger mit Projektpraxis</h2>
          </div>
          <p>
            Motivierter Berufseinsteiger mit rund drei Jahren Lern- und
            Projekterfahrung in der Webentwicklung. Praktische Kenntnisse in
            HTML, CSS, JavaScript, TypeScript und React durch eigene Projekte.
            Ziel ist der Einstieg als Trainee, um fachlich weiterzuwachsen und
            aktiv an nutzerfreundlichen digitalen Lösungen mitzuwirken.
          </p>
        </section>

        <Section icon={BriefcaseBusiness} title="Berufserfahrung">
          <div className="timeline">
            {jobs.map((job) => (
              <article className="timeline-item" key={`${job.title}-${job.company}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div>
                  <div className="item-header">
                    <div>
                      <h3>{job.title}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span>
                      <CalendarDays aria-hidden="true" />
                      {job.period}
                    </span>
                  </div>
                  <ul className="clean-list detail-list">
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section icon={GraduationCap} title="Studium">
          <article className="education">
            <div className="item-header">
              <div>
                <h3>Staatliche Universität für Informations- und Kommunikationstechnologien</h3>
                <p>Studium im Bereich Informationstechnologien</p>
              </div>
              <span>
                <CalendarDays aria-hidden="true" />
                2023 - heute
              </span>
            </div>
          </article>
        </Section>

        <Section icon={UserRound} title="Kurzprofil">
          <div className="summary-grid">
            <div>
              <strong>Fokus</strong>
              <span>Frontend, React, nutzerfreundliche Weboberflächen</span>
            </div>
            <div>
              <strong>Arbeitsweise</strong>
              <span>Lernbereit, organisiert und zuverlässig im Team</span>
            </div>
            <div>
              <strong>Standort</strong>
              <span>
                <MapPin aria-hidden="true" />
                Deutschland
              </span>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

export default App;
