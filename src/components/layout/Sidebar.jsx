import { Code2, Languages, Link, Mail, Phone, Sparkles } from "lucide-react";
import {
  contacts,
  languages,
  profile,
  softSkills,
  technicalSkills,
} from "../../data/cvData.js";
import { Section } from "../ui/Section.jsx";

const contactIcons = {
  github: Code2,
  link: Link,
  mail: Mail,
  phone: Phone,
};

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="identity">
        <div className="avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p className="eyebrow">{profile.label}</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
      </div>

      <div className="contact-list" aria-label="Kontakt">
        {contacts.map(({ type, label, href }) => {
          const Icon = contactIcons[type];

          return (
            <a className="contact-item" href={href} key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
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
          {languages.map(({ language, level }) => (
            <div key={language}>
              <dt>{language}</dt>
              <dd>{level}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </aside>
  );
}
